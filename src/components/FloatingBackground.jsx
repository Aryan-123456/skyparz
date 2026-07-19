import React, { useEffect, useRef } from 'react';

const ICONS = [
  'bi-instagram',
  'bi-twitter-x',
  'bi-linkedin',
  'bi-envelope',
  'bi-facebook',
  'bi-youtube',
  'bi-dribbble',
  'bi-whatsapp',
  'bi-slack',
  'bi-discord',
  'bi-github',
  'bi-google'
];

const COLORS = [
  'var(--color-accent-blue)',
  'var(--color-accent-purple)',
  'var(--color-accent-magenta)',
  'var(--color-accent-cyan)'
];

export default function FloatingBackground() {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const numCols = 6;
    const numRows = 5;
    const numParticles = numCols * numRows;
    const particles = [];
    const width = window.innerWidth;
    const height = window.innerHeight;
    const cellWidth = width / numCols;
    const cellHeight = height / numRows;

    // Initialize particles using a jittered grid for even spacing
    for (let i = 0; i < numParticles; i++) {
      const col = i % numCols;
      const row = Math.floor(i / numCols);

      const x = col * cellWidth + Math.random() * (cellWidth * 0.8) + (cellWidth * 0.1);
      const y = row * cellHeight + Math.random() * (cellHeight * 0.8) + (cellHeight * 0.1);

      particles.push({
        id: i,
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseVx: (Math.random() - 0.5) * 0.3,
        baseVy: (Math.random() - 0.5) * 0.3,
        size: Math.floor(Math.random() * 20) + 20, // 20px to 40px
        opacity: Math.random() * 0.12 + 0.14, // 0.14 to 0.26
        icon: ICONS[i % ICONS.length],
        color: COLORS[i % COLORS.length],
        scale: 1
      });
    }
    particlesRef.current = particles;

    // DOM Elements creation
    const container = containerRef.current;
    if (!container) return;

    // Clear existing
    container.innerHTML = '';

    const domElements = particles.map((p) => {
      const el = document.createElement('div');
      el.className = 'floating-bg-particle';
      el.style.position = 'absolute';
      el.style.pointerEvents = 'none';
      el.style.left = '0px';
      el.style.top = '0px';
      el.style.color = p.color;
      el.style.opacity = p.opacity;
      el.style.fontSize = `${p.size}px`;
      el.style.zIndex = '-1';
      el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) scale(1)`;
      el.style.willChange = 'transform';

      const iconEl = document.createElement('i');
      iconEl.className = `bi ${p.icon}`;
      el.appendChild(iconEl);
      container.appendChild(el);
      return el;
    });

    // Handle mouse move
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    let animationFrameId;
    const update = () => {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      const mouse = mouseRef.current;

      particles.forEach((p, idx) => {
        // Calculate distance to mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 180;

        if (dist < repelRadius) {
          // Calculate force pushing away
          const force = (repelRadius - dist) / repelRadius;
          const angle = Math.atan2(dy, dx);
          // Apply velocity push
          p.vx += Math.cos(angle) * force * 0.8;
          p.vy += Math.sin(angle) * force * 0.8;
          // Hover visual scale feedback
          p.scale = 1 + force * 0.35;
          domElements[idx].style.opacity = p.opacity * 2;
        } else {
          // Decay hover scale and opacity back to normal
          p.scale += (1 - p.scale) * 0.1;
          domElements[idx].style.opacity = p.opacity;
        }

        // Apply natural drag and restore base velocities
        p.vx += (p.baseVx - p.vx) * 0.05;
        p.vy += (p.baseVy - p.vy) * 0.05;

        // Limit maximum speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 3.5;
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        // Wander force addition
        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += (Math.random() - 0.5) * 0.02;

        // Position update
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < -50) p.x = currentWidth + 50;
        if (p.x > currentWidth + 50) p.x = -50;
        if (p.y < -50) p.y = currentHeight + 50;
        if (p.y > currentHeight + 50) p.y = -50;

        // Apply DOM updates using translate3d for GPU acceleration
        domElements[idx].style.transform = `translate3d(${p.x}px, ${p.y}px, 0) scale(${p.scale})`;
      });

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="floating-bg-container"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    />
  );
}

import React, { useState } from 'react';
import FloatingBackground from './components/FloatingBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Work from './pages/Work';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBlogSlug, setSelectedBlogSlug] = useState('how-to-grow-your-business-on-instagram-2026');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'work':
        return <Work setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <Blog setCurrentPage={setCurrentPage} setSelectedBlogSlug={setSelectedBlogSlug} />;
      case 'blog-detail':
        return (
          <BlogDetail
            slug={selectedBlogSlug}
            setCurrentPage={setCurrentPage}
            setSelectedBlogSlug={setSelectedBlogSlug}
          />
        );
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      case 'privacy':
        return <Privacy setCurrentPage={setCurrentPage} />;
      case 'terms':
        return <Terms setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      {/* Interactive Floating Live Background */}
      <FloatingBackground />

      {/* Navigation Header */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />


      {/* Active Page View */}
      <main className="main-content">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

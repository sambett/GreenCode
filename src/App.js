import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CodeEditor from './components/CodeEditor';
import Metrics from './components/Metrics';
import Tips from './components/Tips';
import Footer from './components/Footer';
import { GlobalStyles } from './styles/GlobalStyles';
import AboutPage from './pages/About';
import FeaturesPage from './pages/Features';
import LearnMorePage from './pages/LearnMore';
import TipsPage from './pages/Tips';
import ContactPage from './pages/Contact';
import DocumentationPage from './pages/Documentation';

function App() {
  return (
    <Router>
      <div className="app-container">
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/optimize" element={
            <>
              <CodeEditor />
              <Metrics />
              <Tips />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/docs" element={<DocumentationPage />} />
          <Route path="/tips" element={<TipsPage />} />
          <Route path="/tip-details" element={<TipsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* 404 catch-all route */}
          <Route path="*" element={
            <div style={{ padding: '50px 20px', textAlign: 'center' }}>
              <h1>404 - Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
              <Link to="/" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Return to Home</Link>
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
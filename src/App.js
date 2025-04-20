import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { GlobalStyles } from './styles/GlobalStyles';
import CodeEditor from './components/CodeEditor';
import Metrics from './components/Metrics';
import Tips from './components/Tips';
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
          <Route path="/" element={<Home />} />
          <Route path="/optimize" element={<OptimizePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/docs" element={<DocumentationPage />} />
          <Route path="/tips" element={<TipsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Home page component
const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};

// Optimization page component
const OptimizePage = () => {
  return (
    <>
      <CodeEditor />
      <Metrics />
      <Tips />
    </>
  );
};

// 404 page component
const NotFound = () => {
  return (
    <div style={{ padding: '50px 20px', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Return to Home</a>
    </div>
  );
};

export default App;
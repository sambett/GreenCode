import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImprovedHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Content for the two slides that will crossfade
  const slides = [
    {
      title: "Code Green, Save Earth",
      description: "GreenCode AI is an intelligent assistant that analyzes your code, identifies energy-intensive patterns, and suggests more sustainable alternatives - without sacrificing performance.",
      image: "primary"
    },
    {
      title: "Sustainable Code, Better Future",
      description: "Small changes in your code can have a big impact. Every optimization reduces carbon emissions and creates a more sustainable digital world.",
      image: "secondary"
    }
  ];
  
  // Automatically transition between slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(current => (current === 0 ? 1 : 0));
    }, 8000); // 8 seconds per slide
    
    return () => clearInterval(interval);
  }, []);
  
  // Animation variants
  const slideVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      transition: { duration: 2 }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 2 }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 2 }
    }
  };
  
  // Background animation
  const bgVariants = {
    primary: {
      backgroundImage: "linear-gradient(135deg, rgba(46, 204, 113, 0.15) 0%, rgba(249, 249, 249, 0.8) 100%)",
      transition: { duration: 3 }
    },
    secondary: {
      backgroundImage: "linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(249, 249, 249, 0.8) 100%)",
      transition: { duration: 3 }
    }
  };
  
  // SVG Elements for each slide
  const renderSVG = (type) => {
    if (type === "primary") {
      return (
        <svg width="500" height="350" viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
          {/* Monitor and Frame */}
          <motion.rect 
            width="380" height="250" x="60" y="30" rx="10" 
            fill="#2c3e50" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.rect 
            width="350" height="200" x="75" y="50" rx="5" 
            fill="#34495e"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />
          
          {/* Stand */}
          <motion.path
            d="M220 280 L280 280 L270 330 L230 330 Z"
            fill="#2c3e50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          />
          <motion.ellipse 
            cx="250" cy="330" rx="60" ry="10" 
            fill="#2c3e50" 
            opacity="0.5"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          />
          
          {/* Code Lines */}
          <motion.rect 
            custom={0}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            width="250" height="10" x="95" y="70" rx="2" 
            fill="#2ecc71" opacity="0.9" 
          />
          <motion.rect 
            custom={1}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            width="200" height="10" x="95" y="90" rx="2" 
            fill="#ecf0f1" opacity="0.5" 
          />
          <motion.rect 
            custom={2}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            width="230" height="10" x="95" y="110" rx="2" 
            fill="#ecf0f1" opacity="0.5" 
          />
          <motion.rect 
            custom={3}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            width="180" height="10" x="95" y="130" rx="2" 
            fill="#e74c3c" opacity="0.7" 
          />
          <motion.rect 
            custom={4}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.0, duration: 0.5 }}
            width="250" height="10" x="95" y="150" rx="2" 
            fill="#ecf0f1" opacity="0.5" 
          />
          <motion.rect 
            custom={5}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            width="150" height="10" x="95" y="170" rx="2" 
            fill="#2ecc71" opacity="0.9" 
          />
          <motion.rect 
            custom={6}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.4, duration: 0.5 }}
            width="200" height="10" x="95" y="190" rx="2" 
            fill="#ecf0f1" opacity="0.5" 
          />
          <motion.rect 
            custom={7}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.6, duration: 0.5 }}
            width="230" height="10" x="95" y="210" rx="2" 
            fill="#ecf0f1" opacity="0.5" 
          />
          
          {/* Green Energy Elements */}
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {/* Leaf */}
            <path d="M60 110 Q 90 70, 80 130 Q 50 90, 60 110" fill="#2ecc71" />
            <path d="M50 180 Q 80 140, 70 200 Q 40 160, 50 180" fill="#2ecc71" />
            
            {/* Green Energy Waves */}
            <path d="M370 130 C 380 80, 430 80, 440 130" stroke="#2ecc71" strokeWidth="3" fill="none" />
            <path d="M380 120 C 390 80, 420 80, 430 120" stroke="#2ecc71" strokeWidth="3" fill="none" />
            <path d="M390 110 C 400 80, 410 80, 420 110" stroke="#2ecc71" strokeWidth="3" fill="none" />
            
            {/* CO2 Reduction Symbol */}
            <motion.g
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              <circle cx="420" cy="200" r="30" fill="#f39c12" opacity="0.8" />
              <text x="420" y="207" fontSize="18" textAnchor="middle" fill="white">CO₂</text>
              <line x1="385" y1="200" x2="455" y2="200" stroke="#e74c3c" strokeWidth="3" />
            </motion.g>
          </motion.g>
        </svg>
      );
    } else {
      return (
        <svg width="500" height="350" viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
          {/* Earth and Environment Elements */}
          <motion.circle 
            cx="250" cy="175" r="120" 
            fill="#3498db" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Land Masses */}
          <motion.path 
            d="M180 100 Q210 90 230 110 Q260 120 280 100 Q330 90 350 140 Q330 170 350 200 Q320 230 280 220 Q240 245 200 225 Q170 240 150 220 Q135 200 160 170 Q140 140 180 100"
            fill="#2ecc71"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          
          <motion.path 
            d="M220 165 Q240 155 260 165 Q275 185 250 195 Q230 190 220 165"
            fill="#3498db"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
          
          {/* Orbiting Elements */}
          <motion.g
            animate={{ 
              rotate: 360,
              transition: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <motion.ellipse 
              cx="250" cy="175" rx="180" ry="60" 
              fill="none" 
              stroke="#ecf0f1"
              strokeWidth="1"
              opacity="0.3"
              strokeDasharray="5,5"
            />
            
            {/* Binary Code Satellite */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <rect x="400" y="155" width="40" height="20" rx="2" fill="#2c3e50" />
              <text x="405" y="168" fontSize="12" fill="#2ecc71">10110</text>
            </motion.g>
          </motion.g>
          
          {/* Energy Efficient Code Streams */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            {/* Path 1 */}
            <motion.path 
              d="M160 65 Q200 90 250 70 Q300 50 350 80"
              fill="none"
              stroke="#2ecc71"
              strokeWidth="2"
              strokeDasharray="3,3"
              animate={{ 
                y: [0, -5, 0],
                transition: { duration: 3, repeat: Infinity, repeatType: "reverse" }
              }}
            />
            
            {/* Path 2 */}
            <motion.path 
              d="M180 290 Q220 260 275 275 Q330 290 370 260"
              fill="none"
              stroke="#2ecc71"
              strokeWidth="2"
              strokeDasharray="3,3"
              animate={{ 
                y: [0, 5, 0],
                transition: { duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }
              }}
            />
            
            {/* Code Snippets */}
            <motion.rect 
              x="100" y="130" 
              width="30" height="10" 
              rx="2" 
              fill="#2ecc71" 
              opacity="0.9"
              animate={{ 
                x: [100, 450, 100],
                transition: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
            />
            
            <motion.rect 
              x="400" y="210" 
              width="30" height="10" 
              rx="2" 
              fill="#2ecc71" 
              opacity="0.9"
              animate={{ 
                x: [400, 50, 400],
                transition: { duration: 12, repeat: Infinity, ease: "linear" }
              }}
            />
          </motion.g>
          
          {/* "Green" Text */}
          <motion.text
            x="250" y="280" 
            textAnchor="middle" 
            fontSize="16" 
            fontWeight="bold"
            fill="#2c3e50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            Sustainable Code = Sustainable Planet
          </motion.text>
        </svg>
      );
    }
  };
  
  return (
    <motion.section 
      className="hero-section"
      animate={activeSlide === 0 ? "primary" : "secondary"}
      variants={bgVariants}
    >
      <div className="hero-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="slide-content"
          >
            <h1>{slides[activeSlide].title}</h1>
            <p>{slides[activeSlide].description}</p>
            <div className="hero-buttons">
              <motion.a href="/optimize" className="btn btn-pulse" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Try GreenCode AI
              </motion.a>
              <motion.a href="/docs" className="btn btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="hero-image">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="slide-image"
          >
            {renderSVG(slides[activeSlide].image)}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Pagination dots */}
      <div className="pagination">
        <motion.div 
          className={`dot ${activeSlide === 0 ? 'active' : ''}`}
          onClick={() => setActiveSlide(0)}
          animate={{ scale: activeSlide === 0 ? 1.2 : 1 }}
        />
        <motion.div 
          className={`dot ${activeSlide === 1 ? 'active' : ''}`}
          onClick={() => setActiveSlide(1)}
          animate={{ scale: activeSlide === 1 ? 1.2 : 1 }}
        />
      </div>
      
      <style jsx>{`
        .hero-section {
          display: flex;
          gap: 40px;
          align-items: center;
          margin: 20px 0 60px 0;
          border-radius: 12px;
          padding: 60px 40px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          min-height: 500px;
        }
        
        .hero-content {
          flex: 1;
          position: relative;
          z-index: 1;
          height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .slide-content {
          position: relative;
          width: 100%;
        }
        
        h1 {
          font-size: 54px;
          margin-bottom: 25px;
          color: #2c3e50;
          line-height: 1.2;
          font-weight: 800;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        p {
          font-size: 18px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 35px;
          max-width: 90%;
        }
        
        .hero-buttons {
          display: flex;
          gap: 15px;
        }
        
        .btn {
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }
        
        .btn-pulse {
          background-color: #2ecc71;
          color: white;
          box-shadow: 0 4px 6px rgba(46, 204, 113, 0.2);
          animation: pulse 2s infinite;
        }
        
        .btn-secondary {
          background-color: white;
          color: #2ecc71;
          border: 2px solid #2ecc71;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 4px 6px rgba(46, 204, 113, 0.2); }
          50% { transform: scale(1.05); box-shadow: 0 8px 15px rgba(46, 204, 113, 0.4); }
          100% { transform: scale(1); box-shadow: 0 4px 6px rgba(46, 204, 113, 0.2); }
        }
        
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
          min-height: 350px;
        }
        
        .slide-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .pagination {
          position: absolute;
          bottom: 20px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 10px;
          z-index: 2;
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(46, 204, 113, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .dot.active {
          background-color: #2ecc71;
        }
        
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            padding: 40px 20px;
          }
          
          .hero-content {
            height: auto;
            margin-bottom: 30px;
          }
          
          h1 {
            font-size: 36px;
            text-align: center;
          }
          
          p {
            font-size: 16px;
            text-align: center;
            max-width: 100%;
          }
          
          .hero-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .hero-image {
            width: 100%;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default ImprovedHero;
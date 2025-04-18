import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImprovedMetricsComponent = () => {
  const [originalScore, setOriginalScore] = useState(60);
  const [optimizedScore, setOptimizedScore] = useState(85);
  const [energySaved, setEnergySaved] = useState("2.8");
  const [co2Saved, setCo2Saved] = useState("1.5");
  const [improvement, setImprovement] = useState(25);
  const [energySavingPercent, setEnergySavingPercent] = useState(58); // Add state for energy saving percentage
  const [visible, setVisible] = useState(true);
  const [hoveredMetric, setHoveredMetric] = useState(null);
  
  // Listen for the custom event from CodeEditor
  useEffect(() => {
    const handleCodeOptimized = (event) => {
      const data = event.detail;
      
      if (data.green_score) {
        setOriginalScore(data.green_score.original);
        setOptimizedScore(data.green_score.optimized);
        setImprovement(data.green_score.improvement);
      }
      
      if (data.energy_saved) {
        setEnergySaved(data.energy_saved);
      }
      
      if (data.co2_saved) {
        setCo2Saved(data.co2_saved);
      }
      
      // Update energy saving percentage if available in the response
      if (data.optimization && data.optimization.savings && data.optimization.savings.energy) {
        // The savings are in the format "50%", so we need to parse out the number
        const savingsMatch = data.optimization.savings.energy.match(/^(\d+)%$/);
        if (savingsMatch && savingsMatch[1]) {
          setEnergySavingPercent(parseInt(savingsMatch[1], 10));
        }
      }
    };
    
    window.addEventListener('codeOptimized', handleCodeOptimized);
    
    return () => {
      window.removeEventListener('codeOptimized', handleCodeOptimized);
    };
  }, []);
  
  // Tooltip content for each metric
  const metricExplanations = {
    energy: "2.8 J energy saved ≈\nSaving 1 minute of computer idle time",
    co2: "1.5 g CO2 saved ≈\nReducing the carbon footprint of 5 minutes of internet browsing",
    original: "GreenScore™ measures code efficiency\non a scale of 0-100",
    optimized: "Higher score means more sustainable,\nenergy-efficient code"
  };
  
  // Define tooltip colors for each metric
  const tooltipColors = {
    energy: "rgba(46, 204, 113, 0.95)", // Green for energy
    co2: "rgba(231, 76, 60, 0.95)",     // Red for CO2
    original: "rgba(52, 152, 219, 0.95)", // Blue for original score
    optimized: "rgba(46, 204, 113, 0.95)" // Green for optimized score
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(46, 204, 113, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  // Improved GreenScore gauge chart component with cleaner visuals
  const GreenScoreChart = ({ score, isOriginal, animate = true }) => {
    return (
      <div className="gauge-container">
        <svg viewBox="0 0 200 100">
          {/* Background track */}
          <defs>
            <linearGradient id={isOriginal ? "blueGradient" : "greenGradient"} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={isOriginal ? "#3498db" : "#2ecc71"} stopOpacity="0.3" />
              <stop offset="100%" stopColor={isOriginal ? "#2980b9" : "#27ae60"} stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          <path 
            d="M20 90 A 80 80 0 0 1 180 90" 
            fill="none" 
            stroke="#eee" 
            strokeWidth="18" 
            strokeLinecap="round"
          />
          
          {/* Animated score path */}
          <motion.path
            d="M20 90 A 80 80 0 0 1 180 90"
            fill="none"
            stroke={`url(#${isOriginal ? "blueGradient" : "greenGradient"})`}
            strokeWidth="18"
            strokeLinecap="round"
            initial={{ strokeDasharray: animate ? "0 380" : `${score * 3.8} 380` }}
            animate={{ strokeDasharray: `${score * 3.8} 380` }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          />
          
          {/* Actual score path - solid path instead of animated leaf */}
          <motion.path
            d="M20 90 A 80 80 0 0 1 180 90"
            fill="none"
            stroke={isOriginal ? "#3498db" : "#2ecc71"}
            strokeWidth="18"
            strokeDasharray={`${score * 3.8} 380`}
            strokeDashoffset="0"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.3 }}
          />
          
          {/* Simple indicator at the end of the gauge instead of leaf */}
          <motion.circle
            cx={100 + (score/100 * 80)}
            cy="90"
            r="5"
            fill={isOriginal ? "#2980b9" : "#27ae60"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.5, type: "spring" }}
          />
        </svg>
        <motion.div 
          className="score-value"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          {score}/100
        </motion.div>
      </div>
    );
  };

  // Energy Icon Component
  const EnergyIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <motion.path 
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </svg>
  );

  // CO2 Icon Component
  const CO2Icon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <motion.path 
        d="M2 22c1.25-1.67 2.83-3 5-4 1.7-1 3.33-1 5-1 1.67 0 3.3 0 5 1 2.17 1 3.75 2.33 5 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.path 
        d="M12 2a8 8 0 0 1 8 8 12.34 12.34 0 0 1-.71 4.29"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <motion.path 
        d="M12 2a8 8 0 0 0-8 8c0 1.4.2 2.7.56 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      />
      <motion.path 
        d="M13.73 21a1.75 1.75 0 1 0-3.46 0"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
    </svg>
  );

  return (
    <div className="metrics-section">
      <h2 className="metrics-title">Sustainability Metrics</h2>
      
      <div className="metrics-grid">
        <motion.div 
          className="metric-card original"
          variants={cardVariants}
          custom={0}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          whileHover="hover"
        >
          <div className="metric-icon original">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <motion.path 
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.path 
                d="M14.83 9.17a4 4 0 1 1-4.83 4.83"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-title">Original GreenScore™</div>
            <div 
              className="metric-value-container"
              onMouseEnter={() => setHoveredMetric('original')}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              <GreenScoreChart score={originalScore} isOriginal={true} />
              {hoveredMetric === 'original' && (
                <div className="tooltip" style={{backgroundColor: tooltipColors.original}}>
                  <div className="tooltip-icon">📊</div>
                  {metricExplanations.original}
                </div>
              )}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="metric-card"
          variants={cardVariants}
          custom={1}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          whileHover="hover"
        >
          <div className="metric-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <motion.path 
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.path 
                d="M14.83 9.17a4 4 0 1 1-4.83 4.83"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-title">Optimized GreenScore™</div>
            <div 
              className="metric-value-container"
              onMouseEnter={() => setHoveredMetric('optimized')}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              <GreenScoreChart score={optimizedScore} isOriginal={false} />
              {hoveredMetric === 'optimized' && (
                <div className="tooltip" style={{backgroundColor: tooltipColors.optimized}}>
                  <div className="tooltip-icon">✨</div>
                  {metricExplanations.optimized}
                </div>
              )}
            </div>
            <div className="metric-change increase">
              <span className="icon">↑</span> {improvement} points improvement
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="metric-card"
          variants={cardVariants}
          custom={2}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          whileHover="hover"
        >
          <div className="metric-icon">
            <EnergyIcon />
          </div>
          <div className="metric-content">
            <div className="metric-title">Energy Saved</div>
            <div 
              className="metric-value-container"
              onMouseEnter={() => setHoveredMetric('energy')}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              <motion.div
                className="metric-value"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.8, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {energySaved} J
                {hoveredMetric === 'energy' && (
                  <div className="tooltip" style={{backgroundColor: tooltipColors.energy}}>
                    <div className="tooltip-icon">💡</div>
                    {metricExplanations.energy}
                  </div>
                )}
              </motion.div>
            </div>
            <div className="metric-change decrease">
              <span className="icon">↓</span> {energySavingPercent}% from original
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="metric-card"
          variants={cardVariants}
          custom={3}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          whileHover="hover"
        >
          <div className="metric-icon">
            <CO2Icon />
          </div>
          <div className="metric-content">
            <div className="metric-title">CO₂ Saved</div>
            <div 
              className="metric-value-container"
              onMouseEnter={() => setHoveredMetric('co2')}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              <motion.div
                className="metric-value"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.8, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {co2Saved} g
                {hoveredMetric === 'co2' && (
                  <div className="tooltip co2-tooltip" style={{backgroundColor: tooltipColors.co2}}>
                    <div className="tooltip-icon">🌱</div>
                    {metricExplanations.co2}
                  </div>
                )}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="metric-change neutral">
                This session
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .metrics-section {
          margin: 40px 0 60px;
          width: 100%;
        }
        
        .metrics-title {
          font-size: 28px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 25px;
          text-align: left;
          position: relative;
          padding-left: 15px;
        }
        
        .metrics-title:before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 28px;
          background: linear-gradient(to bottom, #2ecc71, #27ae60);
          border-radius: 4px;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-bottom: 20px;
        }
        
        .metric-card {
          background: linear-gradient(135deg, #ffffff 0%, #eaffef 100%);
          border-radius: 16px;
          padding: 25px;
          box-shadow: 0 10px 30px rgba(46, 204, 113, 0.15);
          position: relative;
          overflow: hidden;
          height: 100%;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .metric-card:before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(46, 204, 113, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
          top: -150px;
          right: -150px;
          border-radius: 50%;
          z-index: 0;
        }
        
        .metric-card:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(to right, #27ae60, #2ecc71);
          border-radius: 0 0 16px 16px;
        }
        
        .metric-card.original:after {
          background: linear-gradient(to right, #3498db, #2980b9);
        }
        
        .metric-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          color: #2ecc71;
          opacity: 0.8;
          font-size: 28px;
          z-index: 1;
        }
        
        .metric-icon.original {
          color: #3498db;
        }
        
        .metric-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          z-index: 1;
        }
        
        .metric-title {
          font-size: 18px;
          font-weight: 600;
          color: #555;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .metric-value-container {
          position: relative;
          margin-bottom: 15px;
        }
        
        .metric-value {
          font-size: 42px;
          font-weight: 800;
          color: #2c3e50;
          text-align: center;
          position: relative;
        }
        
        .gauge-container {
          position: relative;
          width: 170px;
          height: 85px;
          margin: 0 auto 25px;
        }
        
        .score-value {
          position: absolute;
          bottom: -5px;
          width: 100%;
          text-align: center;
          font-size: 32px;
          font-weight: 800;
          color: #2c3e50;
        }
        
        .tooltip {
          position: absolute;
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(46, 204, 113, 0.95);
          backdrop-filter: blur(8px);
          color: white;
          padding: 10px 16px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.2px;
          white-space: pre-line;
          z-index: 100;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          text-align: center;
          animation: fadeIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          min-width: 220px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          max-width: 240px;
        }
        
        /* Special positioning for CO2 tooltip to prevent cutoff */
        .metric-value-container:has([class*="co2"]) .tooltip,
        .metric-value-container:nth-child(2) .tooltip {
          bottom: auto;
          top: -75px;
        }
        
        /* Arrow pointing down for CO2 tooltip */
        .metric-value-container:has([class*="co2"]) .tooltip:after,
        .metric-value-container:nth-child(2) .tooltip:after {
          bottom: -16px;
          top: auto;
          border-color: rgba(231, 76, 60, 0.95) transparent transparent transparent;
        }
        
        .tooltip.original {
          background-color: rgba(52, 152, 219, 0.95);
        }
        
        .tooltip:after {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 50%;
          margin-left: -8px;
          border-width: 8px;
          border-style: solid;
          border-color: transparent transparent rgba(46, 204, 113, 0.95) transparent;
        }
        
        .tooltip.original:after {
          border-color: transparent transparent rgba(52, 152, 219, 0.95) transparent;
        }
        
        /* Energy tooltip */
        .metric-value-container:has(.metric-value:hover) .tooltip {
          background-color: rgba(46, 204, 113, 0.95);
        }
        
        /* CO2 tooltip */
        .metric-value-container:nth-child(2):hover .tooltip {
          background-color: rgba(231, 76, 60, 0.95);
        }
        
        .metric-value-container:nth-child(2):hover .tooltip:after {
          border-color: transparent transparent rgba(231, 76, 60, 0.95) transparent;
        }
        
        .metric-change {
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 12px;
          margin-top: 5px;
          font-weight: 500;
        }
        
        .metric-change.increase {
          color: #27ae60;
          background-color: rgba(46, 204, 113, 0.1);
        }
        
        .metric-change.decrease {
          color: #e74c3c;
          background-color: rgba(231, 76, 60, 0.1);
        }
        
        .metric-change.neutral {
          color: #7f8c8d;
          background-color: rgba(127, 140, 141, 0.1);
        }
        
        .icon {
          font-size: 18px;
        }
        
        .tooltip-icon {
          font-size: 18px;
          margin-bottom: 5px;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        
        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          
          .metric-title {
            font-size: 16px;
          }
          
          .metric-value {
            font-size: 36px;
          }
          
          .tooltip {
            min-width: 180px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default ImprovedMetricsComponent;
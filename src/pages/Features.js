import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const FeatureSection = styled(motion.section)`
  background-color: white;
  border-radius: var(--border-radius);
  margin-bottom: 40px;
  box-shadow: var(--card-shadow);
  overflow: hidden;
  position: relative;
`;

const FeatureHeader = styled.div`
  padding: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background-color: var(--primary-light);
  display: flex;
  align-items: center;
  gap: 20px;
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  box-shadow: 0 6px 12px rgba(46, 204, 113, 0.1);
  font-size: 24px;
`;

const FeatureTitle = styled.h2`
  margin: 0;
  font-size: 28px;
  color: var(--dark);
  font-weight: 700;
`;

const FeatureContent = styled.div`
  padding: 30px;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.8;
  color: #4a4a4a;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  margin: 0 0 20px 0;
  padding: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 15px;
  padding-left: 30px;
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    width: 18px;
    height: 18px;
    background-color: var(--primary-light);
    border-radius: 50%;
  }
  
  &:after {
    content: "✓";
    position: absolute;
    left: 4px;
    top: 3px;
    font-size: 12px;
    color: var(--primary);
    font-weight: 700;
  }
`;

const Bold = styled.strong`
  font-weight: 600;
`;

const ComingSoonBadge = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: var(--primary);
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FeaturesPage = () => {
  return (
    <FeaturesContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ 
          fontSize: '42px', 
          marginBottom: '40px', 
          textAlign: 'center',
          color: 'var(--dark)',
          fontWeight: '800'
        }}
      >
        Features
      </motion.h1>
      
      <FeatureSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FeatureHeader>
          <FeatureIcon>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
              <line x1="16" y1="8" x2="2" y2="22"></line>
              <line x1="17.5" y1="15" x2="9" y2="15"></line>
            </svg>
          </FeatureIcon>
          <FeatureTitle>AI-Powered Code Optimization</FeatureTitle>
        </FeatureHeader>
        <FeatureContent>
          <Paragraph>
            Greencode AI analyzes your code and suggests optimizations that reduce energy consumption without sacrificing functionality. Our system is powered by <Bold>StarCoder</Bold>, a state-of-the-art open-source code model with 15.5 billion parameters and an 8,000-token context window.
          </Paragraph>
          <Paragraph>
            <Bold>Key capabilities:</Bold>
          </Paragraph>
          <FeatureList>
            <FeatureItem>Identifies energy-intensive code patterns and algorithms</FeatureItem>
            <FeatureItem>Suggests more efficient alternatives based on best practices</FeatureItem>
            <FeatureItem>Preserves functionality while reducing computational overhead</FeatureItem>
            <FeatureItem>Handles over 80 programming languages (with best support for Python, JavaScript, Java, and C/C++)</FeatureItem>
            <FeatureItem>Generates complete, ready-to-use optimized code</FeatureItem>
          </FeatureList>
          <Paragraph>
            Unlike black-box AI tools, Greencode's suggestions are transparent and educational, helping you understand <em>why</em> certain patterns are more efficient.
          </Paragraph>
        </FeatureContent>
      </FeatureSection>
      
      <FeatureSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <FeatureHeader>
          <FeatureIcon>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20V10"></path>
              <path d="M18 20V4"></path>
              <path d="M6 20v-4"></path>
            </svg>
          </FeatureIcon>
          <FeatureTitle>Sustainability Metrics</FeatureTitle>
        </FeatureHeader>
        <FeatureContent>
          <Paragraph>
            See the real environmental impact of your code optimizations with built-in sustainability metrics:
          </Paragraph>
          <FeatureList>
            <FeatureItem><Bold>Energy savings</Bold> in joules per execution</FeatureItem>
            <FeatureItem><Bold>CO₂ emissions reduced</Bold> in grams</FeatureItem>
            <FeatureItem><Bold>GreenScore™</Bold> rating system for quick assessment</FeatureItem>
            <FeatureItem><Bold>Comparison view</Bold> between original and optimized code</FeatureItem>
            <FeatureItem><Bold>Optimization variants</Bold> showing trade-offs between speed and energy efficiency</FeatureItem>
          </FeatureList>
          <Paragraph>
            These metrics help quantify the benefits of your optimizations and provide tangible evidence of environmental impact reduction.
          </Paragraph>
        </FeatureContent>
      </FeatureSection>
      
      <FeatureSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <FeatureHeader>
          <FeatureIcon>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </FeatureIcon>
          <FeatureTitle>Trust & Transparency</FeatureTitle>
        </FeatureHeader>
        <FeatureContent>
          <Paragraph>
            We believe in transparent AI that developers can trust:
          </Paragraph>
          <FeatureList>
            <FeatureItem><Bold>Open-source foundation</Bold>: Built on StarCoder, with fully documented training data and processes</FeatureItem>
            <FeatureItem><Bold>Explainable suggestions</Bold>: Clear explanations of why certain patterns are more efficient</FeatureItem>
            <FeatureItem><Bold>Attribution capabilities</Bold>: Trace model outputs back to their training sources</FeatureItem>
            <FeatureItem><Bold>Ethical license</Bold>: Aligns with responsible AI principles under the BigCode OpenRAIL-M license</FeatureItem>
            <FeatureItem><Bold>Privacy-first</Bold>: Can be self-hosted to keep sensitive code in your environment</FeatureItem>
            <FeatureItem><Bold>No black boxes</Bold>: Complete visibility into how our AI works</FeatureItem>
          </FeatureList>
        </FeatureContent>
      </FeatureSection>
      
      <FeatureSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <FeatureHeader>
          <FeatureIcon>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </FeatureIcon>
          <FeatureTitle>Educational Resources</FeatureTitle>
        </FeatureHeader>
        <FeatureContent>
          <Paragraph>
            Greencode AI doesn't just optimize your code—it helps you become a more sustainable developer:
          </Paragraph>
          <FeatureList>
            <FeatureItem><Bold>Sustainable coding tips</Bold> integrated into the interface</FeatureItem>
            <FeatureItem><Bold>Pattern explanations</Bold> that teach you why certain approaches are more efficient</FeatureItem>
            <FeatureItem><Bold>Best practice suggestions</Bold> based on green software engineering principles</FeatureItem>
            <FeatureItem><Bold>Links to research papers</Bold> and technical documentation</FeatureItem>
            <FeatureItem><Bold>Performance vs. sustainability trade-off analyses</Bold></FeatureItem>
          </FeatureList>
        </FeatureContent>
      </FeatureSection>
      
      <FeatureSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <FeatureHeader>
          <FeatureIcon>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="17 1 21 5 17 9"></polyline>
              <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
              <polyline points="7 23 3 19 7 15"></polyline>
              <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
            </svg>
          </FeatureIcon>
          <FeatureTitle>Fast vs. Green Optimization</FeatureTitle>
        </FeatureHeader>
        <FeatureContent>
          <Paragraph>
            Understand the trade-offs between optimization goals with our dual-variant system:
          </Paragraph>
          <FeatureList>
            <FeatureItem><Bold>Speed-optimized version</Bold>: Prioritizes execution time while still improving energy usage</FeatureItem>
            <FeatureItem><Bold>Energy-optimized version</Bold>: Maximizes energy efficiency, potentially with modest performance trade-offs</FeatureItem>
            <FeatureItem><Bold>Side-by-side comparison</Bold>: View both versions and choose based on your priority</FeatureItem>
            <FeatureItem><Bold>Detailed metrics</Bold>: See exact measurements for each variant</FeatureItem>
            <FeatureItem><Bold>Recommendation engine</Bold>: Get suggestions on which variant is best for your specific use case</FeatureItem>
          </FeatureList>
        </FeatureContent>
      </FeatureSection>
      
      <FeatureSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <FeatureHeader>
          <FeatureIcon>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </FeatureIcon>
          <FeatureTitle>Efficiency Patterns Library</FeatureTitle>
        </FeatureHeader>
        <FeatureContent>
          <Paragraph>
            Benefit from a growing library of recognized efficiency patterns:
          </Paragraph>
          <FeatureList>
            <FeatureItem><Bold>Algorithmic optimizations</Bold>: Lower computational complexity alternatives</FeatureItem>
            <FeatureItem><Bold>Memory usage improvements</Bold>: Reduced allocation and garbage collection</FeatureItem>
            <FeatureItem><Bold>I/O and networking efficiency</Bold>: Minimized data transfer and storage</FeatureItem>
            <FeatureItem><Bold>Concurrency optimizations</Bold>: Better utilization of multi-core processors</FeatureItem>
            <FeatureItem><Bold>Language-specific patterns</Bold>: Optimizations tailored to each programming language</FeatureItem>
          </FeatureList>
        </FeatureContent>
      </FeatureSection>
      
      <FeatureSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <ComingSoonBadge>Coming Soon</ComingSoonBadge>
        <FeatureHeader>
          <FeatureIcon>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 16 12 12 8 16"></polyline>
              <line x1="12" y1="12" x2="12" y2="21"></line>
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
              <polyline points="16 16 12 12 8 16"></polyline>
            </svg>
          </FeatureIcon>
          <FeatureTitle>Coming Soon</FeatureTitle>
        </FeatureHeader>
        <FeatureContent>
          <Paragraph>
            We're constantly working to expand Greencode AI's capabilities:
          </Paragraph>
          <FeatureList>
            <FeatureItem><Bold>IDE plugins</Bold> for VS Code, JetBrains IDEs, and more</FeatureItem>
            <FeatureItem><Bold>CI/CD integration</Bold> for automated sustainability checks</FeatureItem>
            <FeatureItem><Bold>Team collaboration features</Bold> for organization-wide sustainability goals</FeatureItem>
            <FeatureItem><Bold>Project-level analysis</Bold> to identify hotspots across codebases</FeatureItem>
            <FeatureItem><Bold>Infrastructure recommendations</Bold> for deployment optimization</FeatureItem>
            <FeatureItem><Bold>Carbon intensity awareness</Bold> to time computations with greener energy availability</FeatureItem>
          </FeatureList>
          
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <a href="/optimize" className="btn" style={{ textDecoration: 'none' }}>Try Greencode AI Now</a>
            <a href="/about" className="btn btn-secondary" style={{ textDecoration: 'none', marginLeft: '15px' }}>Learn More About Our Approach</a>
          </div>
        </FeatureContent>
      </FeatureSection>
    </FeaturesContainer>
  );
};

export default FeaturesPage;
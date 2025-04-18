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
            Greencode AI analyzes your code and suggests optimizations that reduce energy consumption without sacrificing functionality. Our system is powered by <Bold><a href="https://huggingface.co/bigcode/starcoder" target="_blank" rel="noopener noreferrer">StarCoder</a></Bold>, a state-of-the-art open-source code model with 15.5 billion parameters and an 8,000-token context window, capable of understanding and generating code in over 80 programming languages.
          </Paragraph>
          <Paragraph>
            <Bold>Key capabilities:</Bold>
          </Paragraph>
          <FeatureList>
            <FeatureItem>Identifies energy-intensive code patterns and algorithms using both AI and pattern analysis</FeatureItem>
            <FeatureItem>Suggests more efficient alternatives based on green software engineering principles</FeatureItem>
            <FeatureItem>Preserves functionality while reducing computational overhead and energy usage</FeatureItem>
            <FeatureItem>Handles multiple programming languages (with best support for Python, JavaScript, Java, and C/C++)</FeatureItem>
            <FeatureItem>Generates complete, ready-to-use optimized code with explanations of improvements</FeatureItem>
          </FeatureList>
          <Paragraph>
            Unlike black-box AI tools, Greencode's suggestions are transparent and educational, helping you understand <em>why</em> certain patterns are more efficient and teaching you to write more sustainable code from the start.
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
            See the real environmental impact of your code optimizations with detailed sustainability metrics and visualizations based on advanced pattern detection and complexity analysis:
          </Paragraph>
          <FeatureList>
            <FeatureItem><Bold>Energy savings</Bold> in joules per execution with intuitive visual comparisons</FeatureItem>
            <FeatureItem><Bold>CO₂ emissions reduced</Bold> in grams, helping you understand your climate impact</FeatureItem>
            <FeatureItem><Bold>GreenScore™</Bold> rating system for quick assessment of code sustainability</FeatureItem>
            <FeatureItem><Bold>Side-by-side comparison</Bold> between original and optimized code with highlighted improvements</FeatureItem>
            <FeatureItem><Bold>Detailed optimization breakdowns</Bold> showing specific efficiency gains in your code</FeatureItem>
          </FeatureList>
          <Paragraph>
            Our metrics use a combination of pattern-based heuristics, AST (Abstract Syntax Tree) analysis, and algorithmic complexity evaluation to estimate energy consumption without requiring specialized hardware measurements. This makes energy awareness accessible to all developers in their daily workflow.
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
            We believe in transparent AI that developers can trust, with full openness about how our system works:
          </Paragraph>
          <FeatureList>
            <FeatureItem><Bold>Open-source foundation</Bold>: Built on <a href="https://huggingface.co/bigcode/starcoder" target="_blank" rel="noopener noreferrer">StarCoder</a>, a fully transparent model with documented training data</FeatureItem>
            <FeatureItem><Bold>Explainable suggestions</Bold>: Clear explanations of why certain patterns are more efficient</FeatureItem>
            <FeatureItem><Bold>Research-backed advice</Bold>: Recommendations grounded in green software engineering principles</FeatureItem>
            <FeatureItem><Bold>Ethical license</Bold>: Aligns with responsible AI principles under the BigCode OpenRAIL-M license</FeatureItem>
            <FeatureItem><Bold>Privacy-focused approach</Bold>: Can be deployed locally to keep sensitive code in your environment</FeatureItem>
            <FeatureItem><Bold>No black boxes</Bold>: Complete visibility into the optimization process and suggestions</FeatureItem>
          </FeatureList>
          <Paragraph>
            By using open-source models instead of closed proprietary systems, we ensure that our tool's behavior is transparent, auditable, and ethically aligned with the needs of the developer community.
          </Paragraph>
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
            Greencode AI doesn't just optimize your code—it helps you become a more sustainable developer with educational resources and insights:
          </Paragraph>
          <FeatureList>
            <FeatureItem><Bold>Sustainable coding tips</Bold> integrated into the interface for continuous learning</FeatureItem>
            <FeatureItem><Bold>Pattern explanations</Bold> that teach you why certain approaches are more energy-efficient</FeatureItem>
            <FeatureItem><Bold>Best practice suggestions</Bold> based on <a href="https://greensoftware.foundation/" target="_blank" rel="noopener noreferrer">Green Software Foundation</a> principles</FeatureItem>
            <FeatureItem><Bold>Links to research papers</Bold> including the <a href="https://arxiv.org/abs/1907.10597" target="_blank" rel="noopener noreferrer">Green AI paper</a> and related resources</FeatureItem>
            <FeatureItem><Bold>Practical optimization techniques</Bold> you can apply to future projects</FeatureItem>
          </FeatureList>
          <Paragraph>
            Our goal is not just to fix your code now, but to teach you how to write more sustainable software from the beginning. With every optimization, you'll learn principles you can apply across all your development work.
          </Paragraph>
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
            Understand the trade-offs between optimization goals with our intelligent multi-variant optimization system:
          </Paragraph>
          <FeatureList>
            <FeatureItem><Bold>Speed-optimized version</Bold>: Prioritizes execution time while still improving energy usage</FeatureItem>
            <FeatureItem><Bold>Energy-optimized version</Bold>: Maximizes energy efficiency, potentially with modest performance trade-offs</FeatureItem>
            <FeatureItem><Bold>Side-by-side comparison</Bold>: View both versions in our detailed comparison UI</FeatureItem>
            <FeatureItem><Bold>Trade-off analysis</Bold>: Clear explanations of the performance vs. sustainability balance</FeatureItem>
            <FeatureItem><Bold>Recommendation engine</Bold>: AI-powered suggestions on which variant best suits your specific use case</FeatureItem>
          </FeatureList>
          <Paragraph>
            This feature helps developers make informed decisions about which optimizations to apply based on their project's specific requirements and sustainability goals. You don't have to choose between performance and sustainability blindly.
          </Paragraph>
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
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
          </FeatureIcon>
          <FeatureTitle>Multi-Layered Analysis Engine</FeatureTitle>
        </FeatureHeader>
        <FeatureContent>
          <Paragraph>
            GreenCode AI uses a comprehensive, multi-layered approach to analyze and optimize code:
          </Paragraph>
          <FeatureList>
            <FeatureItem><Bold>Pattern detection</Bold>: Identifies common inefficient patterns in code such as nested loops, manual summation, and redundant calculations</FeatureItem>
            <FeatureItem><Bold>Algorithmic complexity</Bold>: Evaluates O(n) time and space complexity to understand computational intensity</FeatureItem>
            <FeatureItem><Bold>Heuristic estimation</Bold>: Uses research-based heuristics to quantify energy usage without direct measurement</FeatureItem>
            <FeatureItem><Bold>AST parsing</Bold>: Examines code structure at the syntax tree level for deeper optimization opportunities</FeatureItem>
            <FeatureItem><Bold>AI optimization</Bold>: Uses StarCoder to intelligently apply green software engineering principles</FeatureItem>
          </FeatureList>
          <Paragraph>
            This layered approach ensures reliable optimization suggestions even when the AI model encounters unfamiliar code patterns. Our fallback mechanisms ensure you always get helpful sustainability insights.
          </Paragraph>
        </FeatureContent>
      </FeatureSection>
      
      <FeatureSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <FeatureHeader>
          <FeatureIcon>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="6" x2="6.01" y2="6"></line>
              <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
          </FeatureIcon>
          <FeatureTitle>CodeCarbon Integration</FeatureTitle>
        </FeatureHeader>
        <FeatureContent>
          <Paragraph>
            GreenCode AI leverages the powerful CodeCarbon tracking library to provide accurate emissions measurement for your applications:
          </Paragraph>
          <FeatureList>
            <FeatureItem><Bold>Real-time emissions tracking</Bold>: Monitor CO₂ emissions during code execution with precision</FeatureItem>
            <FeatureItem><Bold>Hardware-aware measurements</Bold>: Account for CPU, GPU, RAM, and other hardware components</FeatureItem>
            <FeatureItem><Bold>Location-based calculations</Bold>: Factor in regional energy grid carbon intensity</FeatureItem>
            <FeatureItem><Bold>Detailed reporting</Bold>: Generate comprehensive reports on energy usage and carbon footprint</FeatureItem>
            <FeatureItem><Bold>Seamless integration</Bold>: Minimal codebase changes needed to implement tracking</FeatureItem>
          </FeatureList>
          <Paragraph>
            By integrating with CodeCarbon, we provide scientifically-backed metrics that give you confidence in your sustainability improvements. The library was developed by researchers from Mila, BCG GAMMA, Haverford College, and Comet.ml to help ML practitioners and software developers measure the carbon footprint of their code.
          </Paragraph>
        </FeatureContent>
      </FeatureSection>
      
      <FeatureSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <FeatureHeader>
          <FeatureIcon>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </FeatureIcon>
          <FeatureTitle>Aligned with Green Software Principles</FeatureTitle>
        </FeatureHeader>
        <FeatureContent>
          <Paragraph>
            GreenCode AI implements the eight principles of Green Software Engineering established by the <a href="https://greensoftware.foundation/" target="_blank" rel="noopener noreferrer">Green Software Foundation</a>:
          </Paragraph>
          <FeatureList>
            <FeatureItem><Bold>Carbon Efficiency</Bold>: Doing the same work with less carbon-intensive operations</FeatureItem>
            <FeatureItem><Bold>Energy Efficiency</Bold>: Using the least amount of energy to perform a function</FeatureItem>
            <FeatureItem><Bold>Carbon Awareness</Bold>: Considering the carbon intensity of energy sources</FeatureItem>
            <FeatureItem><Bold>Energy Proportionality</Bold>: Maximizing the useful work done per unit of energy</FeatureItem>
            <FeatureItem><Bold>Network Efficiency</Bold>: Reducing data movement to minimize energy consumption</FeatureItem>
            <FeatureItem><Bold>Measurement & Optimization</Bold>: Continuous monitoring and improvement of carbon footprint</FeatureItem>
          </FeatureList>
          <Paragraph>
            By embodying these principles, GreenCode AI helps translate academic sustainability research into practical, everyday actions for developers. Our suggestions are grounded in peer-reviewed research and industry best practices.
          </Paragraph>
        </FeatureContent>
      </FeatureSection>
      
      <FeatureSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
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
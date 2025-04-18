import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DocsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 28px;
  margin-bottom: 20px;
  margin-top: 40px;
  color: var(--dark);
  font-weight: 700;
  position: relative;
  padding-left: 15px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 28px;
    background: linear-gradient(to bottom, var(--primary), var(--primary-dark));
    border-radius: 4px;
  }
`;

const SubsectionTitle = styled(motion.h3)`
  font-size: 22px;
  margin-bottom: 16px;
  margin-top: 30px;
  color: var(--dark);
  font-weight: 600;
`;

const Paragraph = styled(motion.p)`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.8;
  color: #4a4a4a;
`;

const CodeBlock = styled.pre`
  background-color: #1e293b;
  color: #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  margin-bottom: 24px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
`;

const InlineCode = styled.code`
  background-color: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: var(--primary-dark);
`;

const Note = styled.div`
  background-color: #eafaf1;
  border-left: 4px solid var(--primary);
  padding: 15px 20px;
  margin-bottom: 24px;
  border-radius: 0 8px 8px 0;
  
  strong {
    color: var(--primary-dark);
  }
`;

const Warning = styled.div`
  background-color: #fff5e6;
  border-left: 4px solid #f39c12;
  padding: 15px 20px;
  margin-bottom: 24px;
  border-radius: 0 8px 8px 0;
  
  strong {
    color: #e67e22;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-bottom: 24px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }
  
  th {
    background-color: #f9f9f9;
    font-weight: 600;
    color: var(--dark);
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Bold = styled.strong`
  font-weight: 600;
`;

const TOCContainer = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
`;

const TOCTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
  color: var(--dark);
`;

const TOCList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const TOCItem = styled.li`
  margin-bottom: 8px;
  
  a {
    text-decoration: none;
    color: var(--primary);
    font-weight: 500;
    
    &:hover {
      color: var(--primary-dark);
      text-decoration: underline;
    }
  }
  
  ul {
    list-style-type: none;
    margin: 8px 0 0 20px;
    padding: 0;
    
    li {
      margin-bottom: 6px;
      
      a {
        font-weight: 400;
      }
    }
  }
`;

const DocFooter = styled.div`
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
  text-align: center;
`;

const DocFooterText = styled.p`
  font-size: 14px;
  color: #666;
`;

const DocumentationPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <DocsContainer>
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
        Documentation
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TOCContainer>
          <TOCTitle>Table of Contents</TOCTitle>
          <TOCList>
            <TOCItem><a href="#introduction">1. Introduction</a></TOCItem>
            <TOCItem>
              <a href="#getting-started">2. Getting Started</a>
              <ul>
                <li><a href="#prerequisites">2.1 Prerequisites</a></li>
                <li><a href="#installation">2.2 Installation</a></li>
                <li><a href="#quick-start">2.3 Quick Start</a></li>
              </ul>
            </TOCItem>
            <TOCItem>
              <a href="#core-concepts">3. Core Concepts</a>
              <ul>
                <li><a href="#green-software">3.1 Green Software Engineering</a></li>
                <li><a href="#starcoder-model">3.2 StarCoder Model</a></li>
                <li><a href="#carbon-metrics">3.3 Carbon and Energy Metrics</a></li>
              </ul>
            </TOCItem>
            <TOCItem>
              <a href="#using-greencode">4. Using Greencode AI</a>
              <ul>
                <li><a href="#code-optimization">4.1 Code Optimization</a></li>
                <li><a href="#analysis-reports">4.2 Analysis Reports</a></li>
                <li><a href="#variants">4.3 Fast vs. Green Variants</a></li>
              </ul>
            </TOCItem>
            <TOCItem>
              <a href="#best-practices">5. Sustainable Coding Best Practices</a>
            </TOCItem>
            <TOCItem>
              <a href="#advanced-usage">6. Advanced Usage</a>
              <ul>
                <li><a href="#self-hosting">6.1 Self-Hosting</a></li>
                <li><a href="#api-reference">6.2 API Reference</a></li>
              </ul>
            </TOCItem>
            <TOCItem><a href="#troubleshooting">7. Troubleshooting</a></TOCItem>
            <TOCItem><a href="#contribute">8. How to Contribute</a></TOCItem>
            <TOCItem><a href="#resources">9. Additional Resources</a></TOCItem>
          </TOCList>
        </TOCContainer>
        
        <SectionTitle id="introduction" variants={itemVariants}>1. Introduction</SectionTitle>
        <Paragraph variants={itemVariants}>
          Greencode AI is an intelligent tool designed to help developers write more energy-efficient and sustainable code. By leveraging the power of the StarCoder AI model, Greencode analyzes your code for energy-intensive patterns and suggests optimizations that reduce computational overhead and carbon emissions.
        </Paragraph>
        <Paragraph variants={itemVariants}>
          According to research from <a href="https://arxiv.org/abs/1907.10597" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Schwartz et al. (2019)</a>, the computations required for deep learning have been doubling every few months, with a single large AI model potentially emitting as much as 284 tonnes of CO₂ during training—approximately five times the lifetime emissions of an average car. Beyond training, the efficiency of the code these models help generate multiplies this impact across billions of devices globally.
        </Paragraph>
        <Paragraph variants={itemVariants}>
          Greencode AI aims to break this cycle by helping developers write cleaner, more efficient code from the start, reducing the environmental footprint of software at its source.
        </Paragraph>
        
        <SectionTitle id="getting-started" variants={itemVariants}>2. Getting Started</SectionTitle>
        
        <SubsectionTitle id="prerequisites" variants={itemVariants}>2.1 Prerequisites</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          To use Greencode AI, you'll need:
        </Paragraph>
        <ul style={{ marginBottom: '24px', marginLeft: '20px' }}>
          <li>Node.js (v14 or higher)</li>
          <li>Python 3.8+ (for backend components)</li>
          <li>Git</li>
        </ul>
        <Note>
          <strong>Note:</strong> While the web interface can run on any modern browser, the full functionality with local optimization requires Python and associated dependencies.
        </Note>
        
        <SubsectionTitle id="installation" variants={itemVariants}>2.2 Installation</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          You can install Greencode AI in two ways:
        </Paragraph>
        
        <Bold>Option 1: Using our hosted version</Bold>
        <Paragraph variants={itemVariants}>
          Simply visit <a href="https://greencode-ai.vercel.app" style={{ color: 'var(--primary)', textDecoration: 'none' }}>https://greencode-ai.vercel.app</a> to use the web interface with no installation required.
        </Paragraph>
        
        <Bold>Option 2: Local installation</Bold>
        <CodeBlock>
{`# Clone the repository
git clone https://github.com/yourusername/greencode-ai.git
cd greencode-ai

# Install dependencies
npm install

# Start the frontend
npm start

# In a separate terminal, start the backend
python start_greencode.py`}
        </CodeBlock>
        
        <SubsectionTitle id="quick-start" variants={itemVariants}>2.3 Quick Start</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Once you have Greencode AI running:
        </Paragraph>
        <ol style={{ marginBottom: '24px', marginLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}>Navigate to the main page</li>
          <li style={{ marginBottom: '10px' }}>Enter your code in the editor or upload a file</li>
          <li style={{ marginBottom: '10px' }}>Click "Optimize Code"</li>
          <li style={{ marginBottom: '10px' }}>Review the optimized code and sustainability metrics</li>
          <li style={{ marginBottom: '10px' }}>Compare fast and green variants</li>
          <li style={{ marginBottom: '10px' }}>Apply the optimization of your choice</li>
        </ol>
        
        <SectionTitle id="core-concepts" variants={itemVariants}>3. Core Concepts</SectionTitle>
        
        <SubsectionTitle id="green-software" variants={itemVariants}>3.1 Green Software Engineering</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Green Software Engineering is an emerging discipline focused on designing, building, and running applications to minimize environmental impact. The <a href="https://greensoftware.foundation" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Green Software Foundation</a> defines eight principles:
        </Paragraph>
        <ol style={{ marginBottom: '24px', marginLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}><Bold>Carbon Efficiency:</Bold> Emitting the least carbon possible</li>
          <li style={{ marginBottom: '10px' }}><Bold>Energy Efficiency:</Bold> Using the least energy possible</li>
          <li style={{ marginBottom: '10px' }}><Bold>Carbon Intensity:</Bold> Using energy with the lowest carbon emissions</li>
          <li style={{ marginBottom: '10px' }}><Bold>Embodied Carbon:</Bold> Building on hardware that lasts longer</li>
          <li style={{ marginBottom: '10px' }}><Bold>Energy Proportionality:</Bold> Maximizing hardware utilization</li>
          <li style={{ marginBottom: '10px' }}><Bold>Network Efficiency:</Bold> Reducing data movement</li>
          <li style={{ marginBottom: '10px' }}><Bold>Demand Shaping:</Bold> Aligning workloads with energy availability</li>
          <li style={{ marginBottom: '10px' }}><Bold>Measurement & Optimization:</Bold> Improving based on data</li>
        </ol>
        <Paragraph variants={itemVariants}>
          Greencode AI incorporates these principles in its analysis and recommendations, helping you create software that adheres to these sustainable practices.
        </Paragraph>
        
        <SubsectionTitle id="starcoder-model" variants={itemVariants}>3.2 StarCoder Model</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Greencode AI is powered by StarCoder, a state-of-the-art open-source Large Language Model (LLM) specializing in code. Developed by the <a href="https://huggingface.co/bigcode" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>BigCode open science initiative</a> (a collaboration between Hugging Face and ServiceNow), StarCoder offers several advantages:
        </Paragraph>
        <ul style={{ marginBottom: '24px', marginLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}><Bold>15.5 billion parameters</Bold> with an 8,000-token context window</li>
          <li style={{ marginBottom: '10px' }}><Bold>Supports 80+ programming languages</Bold></li>
          <li style={{ marginBottom: '10px' }}><Bold>Trained on 1 trillion tokens</Bold> of permissively-licensed code</li>
          <li style={{ marginBottom: '10px' }}><Bold>Uses multi-query attention</Bold> for faster inference</li>
          <li style={{ marginBottom: '10px' }}><Bold>Fill-in-the-middle capabilities</Bold> for intelligent code insertion</li>
          <li style={{ marginBottom: '10px' }}><Bold>Competitive performance</Bold> with closed-source models</li>
        </ul>
        <Paragraph variants={itemVariants}>
          StarCoder was trained with a focus on ethics and transparency, with PII filtered from the training data and a robust attribution tool available. It's released under the BigCode OpenRAIL-M license, which allows broad use while promoting responsible AI behavior.
        </Paragraph>
        <Paragraph variants={itemVariants}>
          While many AI coding assistants use closed-source models, Greencode's use of <a href="https://huggingface.co/bigcode/starcoder" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>StarCoder</a> provides full transparency about the model's training data, capabilities, and limitations, building trust with developers.
        </Paragraph>
        
        <SubsectionTitle id="carbon-metrics" variants={itemVariants}>3.3 Carbon and Energy Metrics</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Greencode AI uses several metrics to quantify the environmental impact of your code:
        </Paragraph>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Description</th>
                <th>Measurement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Bold>Energy Saved</Bold></td>
                <td>Reduction in energy consumption between original and optimized code</td>
                <td>Joules (J)</td>
              </tr>
              <tr>
                <td><Bold>CO₂ Saved</Bold></td>
                <td>Reduction in carbon emissions</td>
                <td>Grams (g)</td>
              </tr>
              <tr>
                <td><Bold>GreenScore™</Bold></td>
                <td>A composite rating of code sustainability</td>
                <td>0-100 scale</td>
              </tr>
              <tr>
                <td><Bold>Improvement</Bold></td>
                <td>Percentage improvement in efficiency</td>
                <td>%</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
        <Paragraph variants={itemVariants}>
          These metrics are based on the <a href="https://github.com/Green-Software-Foundation/software_carbon_intensity" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Software Carbon Intensity (SCI)</a> specification from the Green Software Foundation, which provides a methodology for calculating the carbon impact of software.
        </Paragraph>
        
        <SectionTitle id="using-greencode" variants={itemVariants}>4. Using Greencode AI</SectionTitle>
        
        <SubsectionTitle id="code-optimization" variants={itemVariants}>4.1 Code Optimization</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          To optimize your code with Greencode AI:
        </Paragraph>
        <ol style={{ marginBottom: '24px', marginLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}>Paste your code into the editor or upload a file</li>
          <li style={{ marginBottom: '10px' }}>Select your optimization context (Energy Efficiency, Memory Efficiency, Performance, or Readability)</li>
          <li style={{ marginBottom: '10px' }}>Toggle advanced analysis on or off (recommended: on)</li>
          <li style={{ marginBottom: '10px' }}>Click "Optimize Code"</li>
          <li style={{ marginBottom: '10px' }}>Wait for the analysis to complete</li>
        </ol>
        <Paragraph variants={itemVariants}>
          Greencode AI will analyze your code, identify inefficient patterns, and generate an optimized version that maintains the same functionality while reducing energy consumption.
        </Paragraph>
        
        <SubsectionTitle id="analysis-reports" variants={itemVariants}>4.2 Analysis Reports</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          After optimization, Greencode AI provides a detailed analysis report that includes:
        </Paragraph>
        <ul style={{ marginBottom: '24px', marginLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}><Bold>Inefficient patterns</Bold> detected in your code</li>
          <li style={{ marginBottom: '10px' }}><Bold>Improvements made</Bold> in the optimized version</li>
          <li style={{ marginBottom: '10px' }}><Bold>Energy and carbon metrics</Bold> showing the environmental impact</li>
          <li style={{ marginBottom: '10px' }}><Bold>GreenScore™ ratings</Bold> for both original and optimized code</li>
          <li style={{ marginBottom: '10px' }}><Bold>Explanations</Bold> of why certain optimizations were made</li>
        </ul>
        <Paragraph variants={itemVariants}>
          These reports help you understand not just what was optimized, but why, promoting better sustainable coding practices in your future work.
        </Paragraph>
        
        <SubsectionTitle id="variants" variants={itemVariants}>4.3 Fast vs. Green Variants</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Greencode AI offers two optimization variants:
        </Paragraph>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>Variant</th>
                <th>Optimizes For</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Bold>Speed-Optimized</Bold></td>
                <td>Maximum execution speed while still improving energy usage</td>
                <td>Performance-critical applications, real-time systems</td>
              </tr>
              <tr>
                <td><Bold>Energy-Optimized</Bold></td>
                <td>Maximum energy efficiency, potentially with modest performance trade-offs</td>
                <td>Background processes, cloud services, battery-powered applications</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
        <Paragraph variants={itemVariants}>
          You can compare these variants side-by-side and choose the one that best fits your needs, balancing performance and sustainability based on your specific use case.
        </Paragraph>
        
        <SectionTitle id="best-practices" variants={itemVariants}>5. Sustainable Coding Best Practices</SectionTitle>
        <Paragraph variants={itemVariants}>
          Beyond using Greencode AI, here are some general best practices for sustainable coding:
        </Paragraph>
        <ol style={{ marginBottom: '24px', marginLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}><Bold>Choose efficient algorithms and data structures:</Bold> Lower complexity means less computation and energy use</li>
          <li style={{ marginBottom: '10px' }}><Bold>Avoid unnecessary computation:</Bold> Don't calculate values you don't need</li>
          <li style={{ marginBottom: '10px' }}><Bold>Optimize I/O operations:</Bold> Batch reads and writes when possible</li>
          <li style={{ marginBottom: '10px' }}><Bold>Use language-specific optimizations:</Bold> Leverage built-in functions and libraries that are often more efficient</li>
          <li style={{ marginBottom: '10px' }}><Bold>Minimize network usage:</Bold> Reduce data transfer and compression when appropriate</li>
          <li style={{ marginBottom: '10px' }}><Bold>Profile and monitor:</Bold> Use energy profiling tools to identify hotspots</li>
          <li style={{ marginBottom: '10px' }}><Bold>Consider hardware efficiency:</Bold> Deploy on energy-efficient infrastructure</li>
        </ol>
        <Note>
          <strong>Efficiency Tip:</strong> Small optimization gains, when multiplied across millions of devices or billions of executions, can result in significant energy savings and carbon reduction.
        </Note>
        
        <SectionTitle id="advanced-usage" variants={itemVariants}>6. Advanced Usage</SectionTitle>
        
        <SubsectionTitle id="self-hosting" variants={itemVariants}>6.1 Self-Hosting</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          For organizations that need to keep their code private or want more control over the optimization process, Greencode AI can be self-hosted. This requires:
        </Paragraph>
        <ul style={{ marginBottom: '24px', marginLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}>A server with at least 16GB RAM (32GB recommended)</li>
          <li style={{ marginBottom: '10px' }}>GPU acceleration (optional but recommended for faster processing)</li>
          <li style={{ marginBottom: '10px' }}>Python 3.8+ with required dependencies</li>
          <li style={{ marginBottom: '10px' }}>Node.js environment for the frontend</li>
        </ul>
        <Paragraph variants={itemVariants}>
          Detailed self-hosting instructions are available in the GitHub repository README.
        </Paragraph>
        
        <SubsectionTitle id="api-reference" variants={itemVariants}>6.2 API Reference</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Greencode AI provides a RESTful API for integration with your own tools and workflows. The main endpoints are:
        </Paragraph>
        <CodeBlock>
{`# Get server health status
GET /health

# Analyze and optimize code
POST /analyze
{
  "code": "your_code_here",
  "context": "energy_efficiency", // Optional: "memory_efficiency", "performance", "readability"
  "advanced": true,               // Optional: Enable advanced analysis
  "variants": true                // Optional: Generate fast/green variants
}`}
        </CodeBlock>
        <Paragraph variants={itemVariants}>
          Full API documentation is available in the GitHub repository.
        </Paragraph>
        
        <SectionTitle id="troubleshooting" variants={itemVariants}>7. Troubleshooting</SectionTitle>
        <Paragraph variants={itemVariants}>
          Common issues and their solutions:
        </Paragraph>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>Issue</th>
                <th>Possible Cause</th>
                <th>Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"Failed to connect to backend"</td>
                <td>Backend server not running</td>
                <td>Ensure you've started the backend with <InlineCode>python start_greencode.py</InlineCode></td>
              </tr>
              <tr>
                <td>"Analysis timeout"</td>
                <td>Complex code or slow connection</td>
                <td>Try with a smaller code snippet or check your internet connection</td>
              </tr>
              <tr>
                <td>"No optimizations found"</td>
                <td>Code already optimal or unsupported language</td>
                <td>Try different code or check if the language is supported</td>
              </tr>
              <tr>
                <td>Missing model files</td>
                <td>StarCoder model not downloaded</td>
                <td>The app should download automatically on first use, or run setup_model.py</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
        <Paragraph variants={itemVariants}>
          For more detailed troubleshooting, check the console logs or contact support.
        </Paragraph>
        
        <SectionTitle id="contribute" variants={itemVariants}>8. How to Contribute</SectionTitle>
        <Paragraph variants={itemVariants}>
          We welcome contributions to Greencode AI! Here's how you can help:
        </Paragraph>
        <ul style={{ marginBottom: '24px', marginLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}><Bold>Report bugs:</Bold> Open issues on GitHub for any bugs you encounter</li>
          <li style={{ marginBottom: '10px' }}><Bold>Suggest features:</Bold> Share ideas for new features or improvements</li>
          <li style={{ marginBottom: '10px' }}><Bold>Submit pull requests:</Bold> Fix bugs or implement new features yourself</li>
          <li style={{ marginBottom: '10px' }}><Bold>Improve documentation:</Bold> Help us make our docs more comprehensive</li>
          <li style={{ marginBottom: '10px' }}><Bold>Share knowledge:</Bold> Contribute to our efficiency patterns library</li>
        </ul>
        <Paragraph variants={itemVariants}>
          Please read our contribution guidelines in the GitHub repository before getting started.
        </Paragraph>
        
        <SectionTitle id="resources" variants={itemVariants}>9. Additional Resources</SectionTitle>
        <Paragraph variants={itemVariants}>
          Learn more about sustainable software development:
        </Paragraph>
        <ul style={{ marginBottom: '24px', marginLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}><a href="https://greensoftware.foundation" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Green Software Foundation</a> - Organization dedicated to creating a more sustainable future with software</li>
          <li style={{ marginBottom: '10px' }}><a href="https://arxiv.org/abs/1907.10597" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Green AI (Schwartz et al., 2019)</a> - Research paper on making AI more environmentally friendly</li>
          <li style={{ marginBottom: '10px' }}><a href="https://github.com/Green-Software-Foundation/software_carbon_intensity" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Software Carbon Intensity Specification</a> - Framework for measuring software carbon emissions</li>
          <li style={{ marginBottom: '10px' }}><a href="https://huggingface.co/bigcode/starcoder" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>StarCoder Technical Report</a> - Details on the AI model powering Greencode</li>
          <li style={{ marginBottom: '10px' }}><a href="https://huggingface.co/bigcode" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>BigCode Project</a> - The open science initiative behind StarCoder</li>
        </ul>
        
        <DocFooter>
          <DocFooterText>
            This documentation is continuously updated. Last update: April 2025.
          </DocFooterText>
        </DocFooter>
      </motion.div>
    </DocsContainer>
  );
};

export default DocumentationPage;
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DocsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 32px;
  margin-top: 60px;
  margin-bottom: 24px;
  color: var(--dark);
  font-weight: 700;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 12px;
  scroll-margin-top: 100px;
`;

const SubsectionTitle = styled(motion.h3)`
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 20px;
  color: var(--dark);
  font-weight: 600;
  scroll-margin-top: 100px;
`;

const Paragraph = styled(motion.p)`
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 24px;
  color: #444;
`;

const CodeBlock = styled.pre`
  background-color: #f8f9fa;
  border-left: 4px solid var(--primary);
  padding: 16px;
  margin: 20px 0;
  border-radius: 4px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
`;

const InlineCode = styled.code`
  background-color: #f1f1f1;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
`;

const Note = styled.div`
  background-color: #e1f5fe;
  border-left: 4px solid #03a9f4;
  padding: 16px;
  margin: 20px 0;
  border-radius: 4px;
`;

const Warning = styled.div`
  background-color: #fff8e1;
  border-left: 4px solid #ffc107;
  padding: 16px;
  margin: 20px 0;
  border-radius: 4px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin: 30px 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px;
    border: 1px solid #e0e0e0;
    text-align: left;
  }
  
  th {
    background-color: #f5f5f5;
    font-weight: 600;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Bold = styled.strong`
  font-weight: 600;
`;

const TOCContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px 30px;
  margin: 30px 0;
`;

const TOCTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 16px;
  color: var(--dark);
  font-weight: 600;
`;

const TOCList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const TOCItem = styled.li`
  margin-bottom: 10px;
  
  a {
    color: var(--dark);
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const DocFooter = styled.div`
  margin-top: 80px;
  padding-top: 20px;
  border-top: 1px solid #eee;
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
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <DocsContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ fontSize: '42px', marginBottom: '40px', textAlign: 'center', color: 'var(--dark)', fontWeight: '800' }}
      >
        Documentation
      </motion.h1>

      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <TOCContainer>
          <TOCTitle>Table of Contents</TOCTitle>
          <TOCList>
            <TOCItem><a href="#introduction">1. Introduction & Mission</a></TOCItem>
            <TOCItem><a href="#getting-started">2. Getting Started</a></TOCItem>
            <TOCItem><a href="#core-concepts">3. Core Concepts</a></TOCItem>
            <TOCItem><a href="#using-greencode">4. Using GreenCode AI</a></TOCItem>
            <TOCItem><a href="#best-practices">5. Sustainable Coding Best Practices</a></TOCItem>
            <TOCItem><a href="#technology">6. Technology</a></TOCItem>
            <TOCItem><a href="#advanced-usage">7. Advanced Usage</a></TOCItem>
            <TOCItem><a href="#troubleshooting">8. Troubleshooting</a></TOCItem>
            <TOCItem><a href="#contribute">9. How to Contribute</a></TOCItem>
            <TOCItem><a href="#resources">10. Additional Resources</a></TOCItem>
          </TOCList>
        </TOCContainer>

        <SectionTitle id="introduction" variants={itemVariants}>1. Introduction & Mission</SectionTitle>
        <Paragraph variants={itemVariants}>
          <strong>"Write Code That Saves the Planet, One Line at a Time."</strong>
        </Paragraph>
        <Paragraph variants={itemVariants}>
          GreenCode AI is an innovative tool that uses AI to <Bold>eliminate the causes of carbon-heavy software development rather than just offset the consequences</Bold>. Modern software development and AI come with an often overlooked cost: energy consumption and carbon emissions. Training a single large AI model can emit enormous CO₂ – one study found it can reach <Bold>284 tonnes of CO₂</Bold>, about five times the lifetime emissions of an average car.
        </Paragraph>
        <Paragraph variants={itemVariants}>
          Instead of waiting to address emissions after software is deployed, GreenCode proactively guides developers during coding to prevent inefficient, power-hungry code. The goal is to weave sustainability into the software development lifecycle – making energy optimization and carbon awareness a natural part of coding. By catching wasteful patterns early and suggesting greener alternatives, GreenCode AI empowers developers to create software that delivers the same value with a smaller carbon footprint.
        </Paragraph>
        <Paragraph variants={itemVariants}>
          We aim to <Bold>shift "Green IT" left</Bold> into the development phase. This focus on awareness and prevention sets GreenCode apart from other tools that might only highlight issues post-deployment. We believe that by tackling inefficiency at its source (the code), we can drive significant reductions in energy use and help software live up to its potential.
        </Paragraph>

        <SectionTitle id="getting-started" variants={itemVariants}>2. Getting Started</SectionTitle>
        <SubsectionTitle variants={itemVariants}>2.1 Prerequisites</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          You'll need:
        </Paragraph>
        <ul>
          <li>Node.js 14+ (for frontend)</li>
          <li>Python 3.8+ (for backend)</li>
          <li>Git</li>
          <li>16GB RAM recommended for optimal performance</li>
        </ul>

        <SubsectionTitle variants={itemVariants}>2.2 Installation</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          <strong>Option 1: Hosted</strong> — Use at <a href="https://greencode-ai.vercel.app">greencode-ai.vercel.app</a><br />
          <strong>Option 2: Local</strong>
        </Paragraph>
        <CodeBlock>{`
# Clone the repository
git clone https://github.com/sambett/greencode-ai.git
cd greencode-ai

# Install frontend dependencies & start
npm install
npm start

# In another terminal, start the backend
cd backend
pip install -r requirements.txt
python run_simple.py
        `}</CodeBlock>

        <Note>
          <p><strong>Note:</strong> The backend will automatically use cached models if available, or download them on first use. Model files are large (~4.5GB) and not included in the repository.</p>
        </Note>

        <SubsectionTitle variants={itemVariants}>2.3 Quick Start</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          1. Navigate to the code editor page
          2. Paste your Python code into the editor
          3. Select your optimization focus (Energy Efficiency, Memory Efficiency, Performance, or Readability)
          4. Click "Optimize Code"
          5. Review the optimized version and sustainability metrics
          6. If variants are shown, compare "Fast" vs "Green" approaches
          7. Copy the optimized code
        </Paragraph>

        <SectionTitle id="core-concepts" variants={itemVariants}>3. Core Concepts</SectionTitle>
        <SubsectionTitle variants={itemVariants}>3.1 Green Software Engineering</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Green Software Engineering is a discipline at the intersection of climate science, software, hardware, electricity markets, and carbon awareness. It follows eight key principles defined by the <a href="https://greensoftware.foundation">Green Software Foundation</a>:
        </Paragraph>
        <ol>
          <li><Bold>Carbon Efficiency:</Bold> Emitting less carbon per unit of work</li>
          <li><Bold>Energy Efficiency:</Bold> Using less energy for the same tasks</li>
          <li><Bold>Carbon Intensity:</Bold> Using energy sources with lower carbon emissions</li>
          <li><Bold>Hardware Efficiency:</Bold> Accounting for embodied carbon in hardware</li>
          <li><Bold>Energy Proportionality:</Bold> Maximizing hardware utilization rates</li>
          <li><Bold>Network Efficiency:</Bold> Reducing data movement and network traffic</li>
          <li><Bold>Demand Shaping:</Bold> Aligning computing with times/locations of clean energy</li>
          <li><Bold>Measurement & Optimization:</Bold> Focusing on continuous improvement</li>
        </ol>
        <Paragraph variants={itemVariants}>
          GreenCode AI implements these principles by scanning your code for inefficiencies and suggesting more sustainable alternatives.
        </Paragraph>

        <SubsectionTitle variants={itemVariants}>3.2 GreenScore™ Metrics</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          GreenCode uses several metrics to quantify sustainability improvements:
        </Paragraph>
        <TableContainer>
          <Table>
            <thead>
              <tr><th>Metric</th><th>Description</th><th>Unit</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Energy Saved</td>
                <td>Estimated energy reduction from the original code</td>
                <td>Joules (J)</td>
              </tr>
              <tr>
                <td>CO₂ Saved</td>
                <td>Estimated carbon emission reduction</td>
                <td>grams CO₂ (g)</td>
              </tr>
              <tr>
                <td>GreenScore™</td>
                <td>A 0-100 sustainability index based on code patterns and complexity</td>
                <td>0–100</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
        <Paragraph variants={itemVariants}>
          These metrics are calculated based on code complexity analysis, energy measurements, and established patterns of efficiency.
        </Paragraph>

        <SectionTitle id="using-greencode" variants={itemVariants}>4. Using GreenCode AI</SectionTitle>
        <SubsectionTitle variants={itemVariants}>4.1 Optimization Workflow</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          The typical workflow for optimizing code with GreenCode AI:
        </Paragraph>
        <ol>
          <li>Input your code in the editor</li>
          <li>Choose your optimization context:
            <ul>
              <li><Bold>Energy Efficiency:</Bold> Minimize power consumption</li>
              <li><Bold>Memory Efficiency:</Bold> Reduce memory usage</li>
              <li><Bold>Performance:</Bold> Maximize execution speed</li>
              <li><Bold>Readability:</Bold> Improve code clarity while maintaining efficiency</li>
            </ul>
          </li>
          <li>Enable advanced analysis for deeper insights (recommended)</li>
          <li>Click "Optimize Code" and wait for results</li>
          <li>Review the optimized code and sustainability metrics</li>
          <li>Examine the detailed comparison between "Fast" and "Green" variants if available</li>
          <li>Copy the preferred version for your project</li>
        </ol>

        <SubsectionTitle variants={itemVariants}>4.2 Speed vs. Sustainability</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          GreenCode AI provides two optimization variants:
        </Paragraph>
        <ul>
          <li><Bold>Fast Version:</Bold> Prioritizes execution speed and performance</li>
          <li><Bold>Green Version:</Bold> Prioritizes energy efficiency and sustainability</li>
        </ul>
        <Paragraph variants={itemVariants}>
          The detailed comparison shows trade-offs between these approaches. For example, the Fast Version might use more memory to achieve better speed, while the Green Version might use more CPU-efficient patterns that save energy at a slight performance cost.
        </Paragraph>
        <Paragraph variants={itemVariants}>
          Choose the variant that best aligns with your project's priorities. For background tasks or batch processing, the Green Version is often ideal. For real-time or user-facing operations, the Fast Version might be preferable.
        </Paragraph>

        <SectionTitle id="best-practices" variants={itemVariants}>5. Sustainable Coding Best Practices</SectionTitle>
        <Paragraph variants={itemVariants}>
          GreenCode AI promotes several best practices for sustainable development:
        </Paragraph>
        
        <SubsectionTitle variants={itemVariants}>5.1 Choose Efficient Algorithms and Data Structures</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          An algorithm with lower time complexity (e.g., O(n) vs. O(n²)) performs fewer operations, which means less CPU time and energy consumption. 
        </Paragraph>
        <ul>
          <li>Use list comprehensions instead of loops when appropriate</li>
          <li>Choose efficient sorting algorithms (e.g., TimSort in Python)</li>
          <li>Select appropriate data structures (hash maps for lookup operations)</li>
        </ul>

        <SubsectionTitle variants={itemVariants}>5.2 Avoid Unnecessary Computation</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Eliminate redundant work in your code:
        </Paragraph>
        <ul>
          <li>Cache results instead of recalculating values</li>
          <li>Use built-in functions (e.g., <InlineCode>sum()</InlineCode>, <InlineCode>map()</InlineCode>, <InlineCode>filter()</InlineCode>)</li>
          <li>Avoid busy-wait loops</li>
          <li>Release resources (memory, file handles) when no longer needed</li>
        </ul>

        <SubsectionTitle variants={itemVariants}>5.3 Optimize Data and Network Usage</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Reduce data movement to significantly cut energy use:
        </Paragraph>
        <ul>
          <li>Batch I/O operations</li>
          <li>Compress data before sending over networks</li>
          <li>Filter data early in pipelines</li>
          <li>Use pagination for large datasets</li>
          <li>Cache frequently accessed data</li>
        </ul>

        <SubsectionTitle variants={itemVariants}>5.4 Leverage Efficient Infrastructure</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Consider where and how your code runs:
        </Paragraph>
        <ul>
          <li>Choose cloud regions with higher renewable energy usage</li>
          <li>Match compute resources to workload requirements</li>
          <li>Enable auto-scaling to reduce idle resources</li>
          <li>Use specialized hardware (GPU, TPU) for appropriate workloads</li>
        </ul>

        <SubsectionTitle variants={itemVariants}>5.5 Measure and Monitor</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Track energy usage to guide optimization efforts:
        </Paragraph>
        <ul>
          <li>Use tools like CodeCarbon to measure emissions</li>
          <li>Profile code to identify energy hotspots</li>
          <li>Set energy efficiency goals for your project</li>
          <li>Continuously monitor and improve</li>
        </ul>

        <SectionTitle id="technology" variants={itemVariants}>6. Technology</SectionTitle>
        <SubsectionTitle variants={itemVariants}>6.1 StarCoder AI Model</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          GreenCode AI is powered by <Bold>StarCoder</Bold>, a state-of-the-art open-source Large Language Model (LLM) specialized in coding tasks. Key features include:
        </Paragraph>
        <ul>
          <li>15.5 billion parameter transformer model</li>
          <li>8,000-token context window</li>
          <li>Support for over 80 programming languages</li>
          <li>Fill-in-the-middle capabilities for intelligent code insertions</li>
          <li>Multi-query attention for fast inference</li>
          <li>Trained on 1 trillion tokens from permissively licensed code</li>
          <li>Released under the BigCode OpenRAIL-M license</li>
        </ul>
        <Paragraph variants={itemVariants}>
          StarCoder was developed by the BigCode open science initiative, co-stewarded by organizations like Hugging Face and ServiceNow research. It was chosen for GreenCode AI because of its performance (matching or outperforming similar closed-source models), transparency, and ethical training process.
        </Paragraph>

        <SubsectionTitle variants={itemVariants}>6.2 Backend Architecture</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          The GreenCode AI backend consists of several components:
        </Paragraph>
        <ul>
          <li><Bold>Flask API:</Bold> Handles code analysis requests</li>
          <li><Bold>Code Analyzer:</Bold> Performs static analysis to detect inefficient patterns</li>
          <li><Bold>Algorithm Analyzer:</Bold> Determines time and space complexity</li>
          <li><Bold>AI Optimizer:</Bold> Integrates with StarCoder for code improvements</li>
          <li><Bold>Emissions Estimator:</Bold> Calculates energy and CO₂ metrics</li>
          <li><Bold>Variants Generator:</Bold> Creates Fast and Green optimization options</li>
        </ul>

        <SubsectionTitle variants={itemVariants}>6.3 Frontend Features</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          The React-based frontend provides:
        </Paragraph>
        <ul>
          <li>Interactive code editor with syntax highlighting</li>
          <li>Real-time optimization context selection</li>
          <li>Dynamic visualization of sustainability metrics</li>
          <li>Side-by-side comparison of original and optimized code</li>
          <li>Detailed view of Fast vs. Green variants</li>
          <li>Educational resources on sustainable coding practices</li>
        </ul>

        <SectionTitle id="advanced-usage" variants={itemVariants}>7. Advanced Usage</SectionTitle>
        <SubsectionTitle variants={itemVariants}>7.1 Self-hosting Options</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          GreenCode AI can be self-hosted in several configurations:
        </Paragraph>
        <ul>
          <li><Bold>Basic Setup:</Bold> Local instance with model downloading</li>
          <li><Bold>Pre-cached Setup:</Bold> Local instance with models pre-downloaded</li>
          <li><Bold>Lighter Model:</Bold> Using CodeGen 350M model for faster results on limited hardware</li>
        </ul>

        <SubsectionTitle variants={itemVariants}>7.2 API Usage</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          The GreenCode API can be accessed directly:
        </Paragraph>
        <CodeBlock>{`
# Endpoint: /analyze
# Method: POST
# Request Body:
{
  "code": "def calculate_values(data):\\n    result = []\\n    for item in data:\\n        if item > 0:\\n            result.append(item * 2)\\n    total = 0\\n    for r in result:\\n        total += r\\n    return result, total",
  "context": "energy_efficiency",
  "advanced": true,
  "variants": true
}
# Response:
{
  "original_code": "...",
  "optimized_code": "...",
  "analysis": { ... },
  "energy_saved": "2.8",
  "co2_saved": "1.5",
  "green_score": {
    "original": 60,
    "optimized": 85,
    "improvement": 25
  },
  "variants": {
    "fast_version": { ... },
    "green_version": { ... }
  }
}
        `}</CodeBlock>

        <SubsectionTitle variants={itemVariants}>7.3 CI/CD Integration</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          GreenCode AI can be integrated into your CI/CD pipeline:
        </Paragraph>
        <ul>
          <li>Run as a pre-commit hook to flag inefficient code</li>
          <li>Add as a GitHub Action for pull request scanning</li>
          <li>Set up automatic code reviews for sustainability</li>
        </ul>

        <SectionTitle id="troubleshooting" variants={itemVariants}>8. Troubleshooting</SectionTitle>
        <SubsectionTitle variants={itemVariants}>8.1 Common Issues</SubsectionTitle>
        
        <Warning>
          <strong>Model Loading Errors</strong>
          <p>If you encounter errors related to model loading:</p>
          <ul>
            <li>Ensure you have at least 16GB RAM</li>
            <li>Check that you have sufficient disk space (~5GB)</li>
            <li>Run <InlineCode>python backend/test_cached_model.py</InlineCode> to verify the model setup</li>
          </ul>
        </Warning>
        
        <Warning>
          <strong>Request Timeout</strong>
          <p>For timeout errors during code analysis:</p>
          <ul>
            <li>Try optimizing smaller code segments</li>
            <li>Increase the timeout setting in <InlineCode>config.js</InlineCode></li>
            <li>Consider using a faster model variant</li>
          </ul>
        </Warning>
        
        <SubsectionTitle variants={itemVariants}>8.2 Performance Optimization</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          To improve performance on resource-constrained machines:
        </Paragraph>
        <ul>
          <li>Edit <InlineCode>backend/config.py</InlineCode> to use a smaller model variant</li>
          <li>Set <InlineCode>USE_CACHED_MODEL=True</InlineCode> in your environment</li>
          <li>Reduce <InlineCode>max_length</InlineCode> parameters in model settings</li>
        </ul>

        <SectionTitle id="contribute" variants={itemVariants}>9. How to Contribute</SectionTitle>
        <Paragraph variants={itemVariants}>
          GreenCode AI is open-source and welcomes contributions:
        </Paragraph>
        <ul>
          <li>Star the repository to show support</li>
          <li>Open issues for bugs or feature requests</li>
          <li>Submit pull requests with improvements</li>
          <li>Share efficiency patterns that could be incorporated</li>
          <li>Help with documentation and examples</li>
          <li>Spread awareness about sustainable software development</li>
        </ul>
        <Paragraph variants={itemVariants}>
          See the CONTRIBUTING.md file in the repository for guidelines.
        </Paragraph>

        <SectionTitle id="resources" variants={itemVariants}>10. Additional Resources</SectionTitle>
        <SubsectionTitle variants={itemVariants}>10.1 Research & Papers</SubsectionTitle>
        <ul>
          <li><a href="https://arxiv.org/abs/1907.10597">Green AI (Schwartz et al., 2019)</a></li>
          <li><a href="https://arxiv.org/abs/2104.10350">Carbon Emissions and Large Neural Network Training (Patterson et al., 2021)</a></li>
          <li><a href="https://arxiv.org/abs/2305.06161">StarCoder: May the Source Be With You! (Li et al., 2023)</a></li>
        </ul>

        <SubsectionTitle variants={itemVariants}>10.2 Tools & References</SubsectionTitle>
        <ul>
          <li><a href="https://huggingface.co/bigcode/starcoder">StarCoder Model (Hugging Face)</a></li>
          <li><a href="https://greensoftware.foundation">Green Software Foundation</a></li>
          <li><a href="https://principles.green">Principles of Green Software Engineering</a></li>
          <li><a href="https://mlco2.github.io/codecarbon/">CodeCarbon Emissions Tracker</a></li>
          <li><a href="https://github.com/Green-Software-Foundation/software_carbon_intensity">Software Carbon Intensity Specification</a></li>
        </ul>

        <SubsectionTitle variants={itemVariants}>10.3 Community</SubsectionTitle>
        <ul>
          <li><a href="https://github.com/sambett/greencode-ai/discussions">GreenCode AI Discussions</a></li>
          <li><a href="https://discord.gg/greensoftware">Green Software Foundation Discord</a></li>
          <li><a href="https://huggingface.co/spaces/bigcode/bigcode-playground">BigCode Playground</a></li>
        </ul>

        <DocFooter>
          <DocFooterText>Made with ❤️ and environmental responsibility. Last updated: April 2025.</DocFooterText>
        </DocFooter>
      </motion.div>
    </DocsContainer>
  );
};

export default DocumentationPage;

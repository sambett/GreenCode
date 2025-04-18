import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 32px;
  margin-bottom: 24px;
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
    height: 32px;
    background: linear-gradient(to bottom, var(--primary), var(--primary-dark));
    border-radius: 4px;
  }
`;

const Paragraph = styled(motion.p)`
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 1.8;
  color: #4a4a4a;
`;

const Highlight = styled.span`
  font-weight: 600;
  color: var(--primary-dark);
`;

const Bold = styled.strong`
  font-weight: 600;
`;

const SectionContainer = styled(motion.div)`
  margin-bottom: 60px;
`;

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
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
    <AboutContainer>
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
        About Greencode AI
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionContainer variants={itemVariants}>
          <SectionTitle>Our Mission – Coding with a Climate Conscience</SectionTitle>
          <Paragraph>
            The carbon footprint of software is growing — and AI is part of the problem. Large language models (LLMs), while powerful, are often trained and run at great energy cost. The computations required for deep learning have been <Bold>doubling every few months</Bold>, leading to an estimated <Bold>300,000× increase in compute from 2012 to 2018</Bold>, with a <em>"surprisingly large carbon footprint"</em> (<a href="https://arxiv.org/abs/1907.10597" target="_blank" rel="noopener noreferrer">Green AI Paper</a>). Training a single large AI model can emit enormous CO₂ – as much as <Bold>284 tonnes</Bold> – about <em>five times the lifetime emissions of an average car</em>.
          </Paragraph>
          <Paragraph>
            Greencode AI is here to flip the script: we use AI to fight <Bold>the environmental impact of AI itself</Bold>. Our tool empowers developers to write code that's not just functional or fast — but <Highlight>energy-efficient, low-emission, and climate-conscious</Highlight>.
          </Paragraph>
        </SectionContainer>

        <SectionContainer variants={itemVariants}>
          <SectionTitle>The Problem We're Solving</SectionTitle>
          <Paragraph>
            Code-generation tools powered by AI models may seem helpful, but behind every suggestion lies computation that emits CO₂. As AI increasingly helps developers write code, we face a potential environmental crisis: AI tools generating inefficient, power-hungry code at unprecedented scale. This creates a dangerous multiplier effect:
          </Paragraph>
          <ol style={{ marginBottom: '24px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>Training AI models consumes massive energy</li>
            <li style={{ marginBottom: '10px' }}>These models then generate code that itself wastes energy</li>
            <li style={{ marginBottom: '10px' }}>This code runs on billions of devices globally</li>
            <li style={{ marginBottom: '10px' }}>The cycle repeats, with each iteration increasing emissions</li>
          </ol>
          <Paragraph>
            Built on top of <a href="https://huggingface.co/bigcode/starcoder" target="_blank" rel="noopener noreferrer">StarCoder</a>, a transparent 15B parameter model trained by the BigCode project, Greencode analyzes your code and offers <Highlight>sustainability-aware optimizations</Highlight>. Rather than waiting to address emissions after software is deployed (or relying on carbon offsets), Greencode <Highlight>proactively guides developers during coding</Highlight> to prevent inefficient patterns.
          </Paragraph>
          <Paragraph>
            We're not just fixing inefficient code — we're preventing it. We're not just optimizing for runtime — we're optimizing for <Bold>the planet</Bold>.
          </Paragraph>
        </SectionContainer>

        <SectionContainer variants={itemVariants}>
          <SectionTitle>What Makes Us Different</SectionTitle>
          <Paragraph>
            Greencode AI is <Bold>reimagining what AI-assisted development can be</Bold>. Unlike generic code generators that focus solely on convenience or speed, every suggestion from our AI is evaluated through the lens of "does this make the software greener or more efficient?" This focus on sustainability is <Bold>unprecedented among code assistants</Bold>.
          </Paragraph>
          <Paragraph>
            Key differentiators:
          </Paragraph>
          <ul style={{ marginBottom: '24px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}><Bold>Mission-driven innovation</Bold>: We optimize for sustainability, not just productivity</li>
            <li style={{ marginBottom: '10px' }}><Bold>Heuristic-based energy estimation</Bold>: We use pattern detection and complexity analysis to quantify energy usage</li>
            <li style={{ marginBottom: '10px' }}><Bold>Built on trust and transparency</Bold>: Our use of StarCoder provides complete visibility into how our AI works</li>
            <li style={{ marginBottom: '10px' }}><Bold>Holistic sustainability approach</Bold>: We address both AI's carbon footprint and the efficiency of the code it helps create</li>
            <li style={{ marginBottom: '10px' }}><Bold>Developer education</Bold>: We teach sustainable coding practices, not just quick fixes</li>
            <li style={{ marginBottom: '10px' }}><Bold>Open and ethical</Bold>: We're built on responsible AI principles and open-source foundations</li>
          </ul>
          <Paragraph>
            By tackling inefficiency at its source (the code itself), we can drive significant reductions in energy use and help software live up to its potential of cutting 10× more CO₂ than it emits (the so-called "greening by IT" effect).
          </Paragraph>
        </SectionContainer>

        <SectionContainer variants={itemVariants}>
          <SectionTitle>Powered by StarCoder – Open-Source AI for Code Efficiency</SectionTitle>
          <Paragraph>
            At Greencode AI's core is <Highlight>StarCoder</Highlight>, a state-of-the-art open-source Large Language Model specialized in coding tasks. StarCoder is a <em>15.5 billion parameter</em> transformer model with an 8,000-token context window, capable of understanding and generating code in over <Bold>80 programming languages</Bold>.
          </Paragraph>
          <Paragraph>
            StarCoder was developed by the <Bold>BigCode open science initiative</Bold> as a collaboration between Hugging Face and ServiceNow. It uses a decoder-only Transformer architecture with advanced features like <em>multi-query attention</em> for fast inference and <Bold>fill-in-the-middle</Bold> capabilities, allowing it to intelligently insert code into existing context.
          </Paragraph>
          <Paragraph>
            Why we chose StarCoder:
          </Paragraph>
          <ul style={{ marginBottom: '24px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}><Bold>Open-source and transparent</Bold>: Full documentation of training data and processes</li>
            <li style={{ marginBottom: '10px' }}><Bold>Ethical development</Bold>: PII and sensitive data filtered during training</li>
            <li style={{ marginBottom: '10px' }}><Bold>Responsible license</Bold>: Released under the BigCode OpenRAIL-M license</li>
            <li style={{ marginBottom: '10px' }}><Bold>Top-tier performance</Bold>: Outperforms all other open-source code models</li>
            <li style={{ marginBottom: '10px' }}><Bold>Energy-efficient</Bold>: Smaller carbon footprint (~17 tonnes CO₂) than many closed models (GPT-3: ~552 tonnes CO₂)</li>
          </ul>
        </SectionContainer>

        <SectionContainer variants={itemVariants}>
          <SectionTitle>Sustainable Metrics and Measurement</SectionTitle>
          <Paragraph>
            GreenCode AI incorporates sophisticated energy estimation through a combination of:
          </Paragraph>
          <ul style={{ marginBottom: '24px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}><Bold>Pattern detection</Bold>: Identifying inefficient code patterns like nested loops, inefficient string concatenation, and manual list building</li>
            <li style={{ marginBottom: '10px' }}><Bold>Algorithm complexity analysis</Bold>: Evaluating time and space complexity (O(n), O(n²), etc.) to estimate computational intensity</li>
            <li style={{ marginBottom: '10px' }}><Bold>AST-based analysis</Bold>: Using Abstract Syntax Tree parsing to understand code structure and identify optimization opportunities</li>
            <li style={{ marginBottom: '10px' }}><Bold>Energy heuristics</Bold>: Applying research-backed multipliers based on language features and optimization types</li>
          </ul>
          <Paragraph>
            This multi-faceted approach allows us to provide meaningful sustainability metrics without requiring actual hardware measurements, making the tool accessible and practical for everyday development while still providing valuable sustainability guidance.
          </Paragraph>
        </SectionContainer>

        <SectionContainer variants={itemVariants}>
          <SectionTitle>CodeCarbon Integration</SectionTitle>
          <Paragraph>
            GreenCode AI leverages <Bold>CodeCarbon</Bold>, an advanced emissions tracking library, to provide scientifically-backed measurements of your code's carbon footprint. CodeCarbon was developed by researchers from Mila, BCG GAMMA, Haverford College, and Comet.ml to help quantify and reduce the environmental impact of computing.
          </Paragraph>
          <Paragraph>
            Key benefits of our CodeCarbon integration:
          </Paragraph>
          <ul style={{ marginBottom: '24px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}><Bold>Precise emissions calculation</Bold>: Measures energy usage and converts to CO₂ equivalent based on your region's energy grid</li>
            <li style={{ marginBottom: '10px' }}><Bold>Hardware-aware tracking</Bold>: Accounts for CPU, GPU, RAM usage to provide comprehensive metrics</li>
            <li style={{ marginBottom: '10px' }}><Bold>Low overhead implementation</Bold>: Minimal performance impact while providing valuable sustainability data</li>
            <li style={{ marginBottom: '10px' }}><Bold>Location-based assessment</Bold>: Recognizes that the same code run in different regions has different carbon impacts</li>
            <li style={{ marginBottom: '10px' }}><Bold>Visualization capabilities</Bold>: Presents clear, actionable information about your code's environmental impact</li>
          </ul>
          <Paragraph>
            This integration enables GreenCode AI to move beyond theoretical estimates to provide concrete, measurable improvements in your code's sustainability footprint.
          </Paragraph>
        </SectionContainer>

        <SectionContainer variants={itemVariants}>
          <SectionTitle>Learn More About Green AI</SectionTitle>
          <Paragraph>
            To dive deeper into the principles and research behind our work, explore these valuable resources:
          </Paragraph>
          <ul style={{ marginBottom: '24px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}><a href="https://arxiv.org/abs/1907.10597" target="_blank" rel="noopener noreferrer">Green AI Paper – Schwartz et al. (2019)</a></li>
            <li style={{ marginBottom: '10px' }}><a href="https://greensoftware.foundation" target="_blank" rel="noopener noreferrer">Green Software Foundation</a></li>
            <li style={{ marginBottom: '10px' }}><a href="https://github.com/Green-Software-Foundation/software_carbon_intensity" target="_blank" rel="noopener noreferrer">Software Carbon Intensity Spec (SCI)</a></li>
            <li style={{ marginBottom: '10px' }}><a href="https://codecarbon.io/" target="_blank" rel="noopener noreferrer">CodeCarbon Project</a></li>
          </ul>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
            <a href="https://github.com/sambett/greencode-ai" className="btn" style={{ textDecoration: 'none' }}>GitHub Repository</a>
            <a href="/docs" className="btn" style={{ textDecoration: 'none' }}>Documentation</a>
            <a href="/optimize" className="btn" style={{ textDecoration: 'none' }}>Try Greencode AI</a>
            <a href="/contact" className="btn btn-secondary" style={{ textDecoration: 'none' }}>Contact Us</a>
          </div>
        </SectionContainer>
      </motion.div>
    </AboutContainer>
  );
};

export default AboutPage;
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
            Modern software development and AI come with an often overlooked cost: energy consumption and carbon emissions. The computations required for deep learning have been <Bold>doubling every few months</Bold>, leading to an estimated <Bold>300,000× increase in compute from 2012 to 2018</Bold>, with a <em>"surprisingly large carbon footprint"</em>. Training a single large AI model can emit enormous CO₂ – as much as <Bold>284 tonnes</Bold> – about <em>five times the lifetime emissions of an average car</em>.
          </Paragraph>
          <Paragraph>
            Greencode AI's mission is to <Highlight>reduce this AI-generated environmental waste</Highlight> by helping developers write cleaner, energy-efficient code and making them aware of the carbon impact of their design choices.
          </Paragraph>
        </SectionContainer>

        <SectionContainer variants={itemVariants}>
          <SectionTitle>The Problem We're Solving</SectionTitle>
          <Paragraph>
            Software runs on electricity, and inefficient code wastes energy. As AI increasingly helps developers write code, we face a potential environmental crisis: AI tools generating inefficient, power-hungry code at unprecedented scale. This creates a dangerous multiplier effect:
          </Paragraph>
          <ol style={{ marginBottom: '24px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>Training AI models consumes massive energy</li>
            <li style={{ marginBottom: '10px' }}>These models then generate code that itself wastes energy</li>
            <li style={{ marginBottom: '10px' }}>This code runs on billions of devices globally</li>
            <li style={{ marginBottom: '10px' }}>The cycle repeats, with each iteration increasing emissions</li>
          </ol>
          <Paragraph>
            Rather than waiting to address emissions after software is deployed (or relying on carbon offsets), Greencode <Highlight>proactively guides developers during coding</Highlight> to prevent inefficient patterns. By catching wasteful code early and suggesting greener alternatives, we help create software that delivers the same value with a fraction of the carbon footprint.
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
            <li style={{ marginBottom: '10px' }}><Bold>Built on trust and transparency</Bold>: Our use of StarCoder provides complete visibility into how our AI works</li>
            <li style={{ marginBottom: '10px' }}><Bold>Holistic sustainability approach</Bold>: We address both AI's carbon footprint and the efficiency of the code it helps create</li>
            <li style={{ marginBottom: '10px' }}><Bold>Developer education</Bold>: We teach sustainable coding practices, not just quick fixes</li>
            <li style={{ marginBottom: '10px' }}><Bold>Open and ethical</Bold>: We're built on responsible AI principles and open-source foundations</li>
          </ul>
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
            <li style={{ marginBottom: '10px' }}><Bold>Energy-efficient</Bold>: Smaller carbon footprint than many closed models</li>
          </ul>
        </SectionContainer>

        <SectionContainer variants={itemVariants}>
          <SectionTitle>Our Vision for the Future</SectionTitle>
          <Paragraph>
            Greencode AI's vision extends beyond suggesting code snippets. We're building a comprehensive <Bold>"green development assistant"</Bold> that integrates with various stages of the development cycle. Our roadmap includes:
          </Paragraph>
          <ol style={{ marginBottom: '24px', marginLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}><Bold>IDE plugins</Bold> for popular environments (VS Code, JetBrains)</li>
            <li style={{ marginBottom: '10px' }}><Bold>CI/CD integration</Bold> for automated sustainability checks</li>
            <li style={{ marginBottom: '10px' }}><Bold>Energy score badges</Bold> for repositories and packages</li>
            <li style={{ marginBottom: '10px' }}><Bold>Real-time green code linting</Bold> during development</li>
            <li style={{ marginBottom: '10px' }}><Bold>Educational resources</Bold> for sustainable software engineering</li>
          </ol>
          <Paragraph>
            Together, we can prove that software innovation and sustainability can not only coexist but together drive the next era of tech – one where <em>every keystroke counts towards a greener future</em>.
          </Paragraph>
        </SectionContainer>

        <SectionContainer variants={itemVariants}>
          <SectionTitle>Learn More & Join Us</SectionTitle>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
            <a href="https://github.com/yourusername/greencode-ai" className="btn" style={{ textDecoration: 'none' }}>GitHub Repository</a>
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
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DocsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

// Styles (same as your original — kept intact)
const SectionTitle = styled(motion.h2)`...`;
const SubsectionTitle = styled(motion.h3)`...`;
const Paragraph = styled(motion.p)`...`;
const CodeBlock = styled.pre`...`;
const InlineCode = styled.code`...`;
const Note = styled.div`...`;
const Warning = styled.div`...`;
const TableContainer = styled.div`...`;
const Table = styled.table`...`;
const Bold = styled.strong`...`;
const TOCContainer = styled.div`...`;
const TOCTitle = styled.h4`...`;
const TOCList = styled.ul`...`;
const TOCItem = styled.li`...`;
const DocFooter = styled.div`...`;
const DocFooterText = styled.p`...`;

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
            <TOCItem><a href="#introduction">1. Introduction</a></TOCItem>
            <TOCItem><a href="#getting-started">2. Getting Started</a></TOCItem>
            <TOCItem><a href="#core-concepts">3. Core Concepts</a></TOCItem>
            <TOCItem><a href="#using-greencode">4. Using Greencode AI</a></TOCItem>
            <TOCItem><a href="#best-practices">5. Sustainable Coding Best Practices</a></TOCItem>
            <TOCItem><a href="#advanced-usage">6. Advanced Usage</a></TOCItem>
            <TOCItem><a href="#troubleshooting">7. Troubleshooting</a></TOCItem>
            <TOCItem><a href="#contribute">8. How to Contribute</a></TOCItem>
            <TOCItem><a href="#resources">9. Additional Resources</a></TOCItem>
          </TOCList>
        </TOCContainer>

        <SectionTitle id="introduction" variants={itemVariants}>1. Introduction</SectionTitle>
        <Paragraph variants={itemVariants}>
          <strong>“Write Code That Saves the Planet, One Line at a Time.”</strong><br />
          Greencode AI is a tool that uses open-source AI to reduce software’s carbon footprint. Powered by StarCoder and based on Green AI principles, it flags inefficiencies in your code and offers eco-friendly suggestions.
        </Paragraph>
        <Paragraph variants={itemVariants}>
          We help developers write sustainable, performant code by preventing inefficiencies — not just cleaning up after them.
        </Paragraph>

        <SectionTitle id="getting-started" variants={itemVariants}>2. Getting Started</SectionTitle>
        <SubsectionTitle variants={itemVariants}>2.1 Prerequisites</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          You'll need Node.js 14+, Python 3.8+, and Git.
        </Paragraph>

        <SubsectionTitle variants={itemVariants}>2.2 Installation</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          <strong>Option 1: Hosted</strong> — Use at <a href="https://greencode-ai.vercel.app">greencode-ai.vercel.app</a><br />
          <strong>Option 2: Local</strong>
        </Paragraph>
        <CodeBlock>{`
git clone https://github.com/sambett/greencode-ai.git
cd greencode-ai
npm install && npm start
# In another terminal
python backend/start_greencode.py
        `}</CodeBlock>

        <SubsectionTitle variants={itemVariants}>2.3 Quick Start</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Paste your code, click “Optimize”, review suggestions, and choose the best variant (Fast or Green).
        </Paragraph>

        <SectionTitle id="core-concepts" variants={itemVariants}>3. Core Concepts</SectionTitle>
        <SubsectionTitle variants={itemVariants}>3.1 Green Software</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Based on <a href="https://greensoftware.foundation">Green Software Foundation</a> and <a href="https://arxiv.org/abs/1907.10597">Green AI</a>. Includes carbon efficiency, energy efficiency, and network/resource optimization.
        </Paragraph>

        <SubsectionTitle variants={itemVariants}>3.2 StarCoder</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          [StarCoder](https://huggingface.co/bigcode/starcoder) is a 15.5B open-source code model trained ethically by Hugging Face + ServiceNow. Supports 80+ languages, fill-in-the-middle, multi-query attention.
        </Paragraph>

        <SubsectionTitle variants={itemVariants}>3.3 Metrics</SubsectionTitle>
        <TableContainer>
          <Table>
            <thead>
              <tr><th>Metric</th><th>Description</th><th>Unit</th></tr>
            </thead>
            <tbody>
              <tr><td>Energy Saved</td><td>Reduction from original</td><td>Joules</td></tr>
              <tr><td>CO₂ Saved</td><td>Emission reduction</td><td>g CO₂</td></tr>
              <tr><td>GreenScore™</td><td>Sustainability index</td><td>0–100</td></tr>
            </tbody>
          </Table>
        </TableContainer>

        <SectionTitle id="using-greencode" variants={itemVariants}>4. Using Greencode AI</SectionTitle>
        <SubsectionTitle variants={itemVariants}>4.1 Optimization Workflow</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          1. Input code → 2. AI scans for inefficiencies → 3. Outputs variants → 4. View savings → 5. Apply or iterate.
        </Paragraph>

        <SubsectionTitle variants={itemVariants}>4.2 Speed vs. Sustainability</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Greencode offers Fast and Green variants. You choose what to prioritize — and we explain the trade-offs.
        </Paragraph>

        <SectionTitle id="best-practices" variants={itemVariants}>5. Sustainable Coding Best Practices</SectionTitle>
        <ul>
          <li>Use built-in functions (e.g. <InlineCode>sum()</InlineCode> over manual loops)</li>
          <li>Batch I/O and network ops</li>
          <li>Deploy on green energy infrastructure</li>
          <li>Profile energy with tools like CodeCarbon</li>
        </ul>

        <SectionTitle id="advanced-usage" variants={itemVariants}>6. Advanced Usage</SectionTitle>
        <SubsectionTitle variants={itemVariants}>6.1 Self-hosting</SubsectionTitle>
        <Paragraph variants={itemVariants}>
          Instructions are available in the GitHub repo. You’ll need 16–32GB RAM and Python 3.8+.
        </Paragraph>

        <SubsectionTitle variants={itemVariants}>6.2 API Usage</SubsectionTitle>
        <CodeBlock>{`
POST /analyze
{
  "code": "your_code_here",
  "context": "energy_efficiency",
  "variants": true
}
        `}</CodeBlock>

        <SectionTitle id="troubleshooting" variants={itemVariants}>7. Troubleshooting</SectionTitle>
        <Paragraph variants={itemVariants}>Common issues and solutions are documented in the GitHub Issues tab.</Paragraph>

        <SectionTitle id="contribute" variants={itemVariants}>8. Contribute</SectionTitle>
        <Paragraph variants={itemVariants}>
          Star us, open issues, submit PRs — we’re open-source and community-driven!
        </Paragraph>

        <SectionTitle id="resources" variants={itemVariants}>9. Resources</SectionTitle>
        <ul>
          <li><a href="https://huggingface.co/bigcode/starcoder">StarCoder Model</a></li>
          <li><a href="https://greensoftware.foundation">Green Software Foundation</a></li>
          <li><a href="https://arxiv.org/abs/1907.10597">Green AI Paper</a></li>
          <li><a href="https://mlco2.github.io/codecarbon/">CodeCarbon Tracker</a></li>
          <li><a href="https://github.com/Green-Software-Foundation/software_carbon_intensity">SCI Spec</a></li>
        </ul>

        <DocFooter>
          <DocFooterText>Made with ❤️ and responsibility. Last updated: April 2025.</DocFooterText>
        </DocFooter>
      </motion.div>
    </DocsContainer>
  );
};

export default DocumentationPage;

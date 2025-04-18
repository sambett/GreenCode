import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LearnMoreContainer = styled.div`
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

const SubsectionTitle = styled(motion.h3)`
  font-size: 24px;
  margin-bottom: 16px;
  margin-top: 30px;
  color: var(--dark);
  font-weight: 600;
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

const ResourceCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--hover-shadow);
  }
`;

const ResourceLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const ResourceTitle = styled.h4`
  font-size: 20px;
  color: var(--primary-dark);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ResourceDescription = styled.p`
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const ResourceMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #888;
`;

const ResourceTags = styled.div`
  display: flex;
  gap: 8px;
`;

const ResourceTag = styled.span`
  background-color: var(--primary-light);
  color: var(--primary-dark);
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 12px;
`;

const Quote = styled.blockquote`
  font-style: italic;
  border-left: 4px solid var(--primary-light);
  padding: 15px 20px;
  margin: 25px 0;
  background-color: #f9f9f9;
  border-radius: 0 8px 8px 0;
`;

const Figure = styled.figure`
  margin: 30px 0;
  text-align: center;
`;

const FigureImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const FigureCaption = styled.figcaption`
  margin-top: 10px;
  font-size: 14px;
  color: #666;
  font-style: italic;
`;

const List = styled.ul`
  margin-bottom: 24px;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.6;
`;

const LearnMorePage = () => {
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
    <LearnMoreContainer>
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
        Learn More About Green AI & Sustainable Coding
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionContainer variants={itemVariants}>
          <SectionTitle>The Environmental Impact of AI & Software</SectionTitle>
          <Paragraph>
            The rapid advancement of artificial intelligence comes with a considerable and often overlooked environmental cost. According to research from the <a href="https://arxiv.org/abs/1907.10597" target="_blank" rel="noopener noreferrer">Green AI paper</a> by Schwartz et al. (2019), the computations required for deep learning research have been <Bold>doubling every few months</Bold>, leading to an estimated <Bold>300,000× increase in compute from 2012 to 2018</Bold>.
          </Paragraph>
          <Paragraph>
            Training a single large AI model can emit as much as <Highlight>284 tonnes of CO₂</Highlight> — approximately five times the lifetime emissions of an average car. For perspective, OpenAI's GPT-3 training is estimated to have consumed around 1,287 MWh of electricity, resulting in about 552 tonnes of CO₂.
          </Paragraph>
          <Quote>
            "The relentless pursuit of state-of-the-art results and ever-larger models has created a technology that, while impressive in its capabilities, may be unnecessarily costly to the environment." — Schwartz et al., Green AI (2019)
          </Quote>
          <Paragraph>
            Beyond the training phase, consider that these models are then deployed to generate code that itself may be inefficient, creating a dangerous multiplier effect:
          </Paragraph>
          <List>
            <ListItem>AI models consume enormous energy during training</ListItem>
            <ListItem>These models generate code that may be unnecessarily resource-intensive</ListItem>
            <ListItem>This inefficient code runs on billions of devices worldwide</ListItem>
            <ListItem>At scale, even small inefficiencies translate to significant energy waste</ListItem>
          </List>
          <Paragraph>
            The environmental impact extends beyond carbon emissions. Data centers supporting AI services require substantial water for cooling systems and contribute to electronic waste through hardware replacement cycles. The total environmental footprint of the digital sector is estimated to exceed 2% of global emissions — on par with the aviation industry — and is growing rapidly.
          </Paragraph>
        </SectionContainer>

        <SectionContainer variants={itemVariants}>
          <SectionTitle>StarCoder: Transparent, Open-Source AI for Code</SectionTitle>
          <Paragraph>
            At the heart of Greencode AI is <a href="https://huggingface.co/bigcode/starcoder" target="_blank" rel="noopener noreferrer">StarCoder</a>, an open-source Large Language Model (LLM) specifically designed for code understanding and generation. Unlike many closed-source alternatives, StarCoder was developed with transparency and ethics as core principles.
          </Paragraph>
          <SubsectionTitle>What Makes StarCoder Special?</SubsectionTitle>
          <List>
            <ListItem><Bold>Size and Capability</Bold>: With 15.5 billion parameters and an 8,000-token context window, StarCoder can understand and generate code across 80+ programming languages</ListItem>
            <ListItem><Bold>Training Data Transparency</Bold>: Trained on 1 trillion tokens from permissively licensed code with proper attribution</ListItem>
            <ListItem><Bold>Ethical Approach</Bold>: Filtered out sensitive information and personally identifiable data during training</ListItem>
            <ListItem><Bold>Responsible License</Bold>: Released under the BigCode OpenRAIL-M license, which promotes ethical AI use</ListItem>
            <ListItem><Bold>Community Governance</Bold>: Developed by the BigCode initiative with 600+ community members</ListItem>
            <ListItem><Bold>Environmental Consideration</Bold>: Training footprint of ~17 tonnes CO₂, far less than comparable closed models</ListItem>
          </List>
          <Paragraph>
            StarCoder's performance is competitive with similar commercial models. According to its technical report, <Bold>"StarCoderBase outperforms every prior open-code model for multi-language coding and matches or outperforms the OpenAI code-cushman-001 model."</Bold> This means we can achieve excellent code optimization without relying on black-box proprietary systems.
          </Paragraph>
          <SubsectionTitle>Why Choose an Open Model?</SubsectionTitle>
          <Paragraph>
            Using an open-source model like StarCoder for Greencode AI brings significant advantages:
          </Paragraph>
          <List>
            <ListItem><Bold>Transparency</Bold>: You can see exactly how it was trained and what data influenced its suggestions</ListItem>
            <ListItem><Bold>Trust</Bold>: No black-box decision making — every suggestion can be traced and explained</ListItem>
            <ListItem><Bold>Community Improvement</Bold>: The model benefits from a diverse community of contributors</ListItem>
            <ListItem><Bold>Sustainability Tracking</Bold>: Environmental impact is openly documented, unlike most closed models</ListItem>
            <ListItem><Bold>Adaptation Potential</Bold>: The model can be fine-tuned specifically for energy-efficient code patterns</ListItem>
          </List>
          <Paragraph>
            This transparency aligns perfectly with our mission to help developers write more sustainable code. You shouldn't have to trust a black box to make your code greener — you should understand why and how optimizations work.
          </Paragraph>
        </SectionContainer>

        <SectionContainer variants={itemVariants}>
          <SectionTitle>Green Software Engineering Principles</SectionTitle>
          <Paragraph>
            Greencode AI's approach is grounded in the principles of Green Software Engineering, a discipline focused on designing, building, and running applications in ways that reduce energy consumption and carbon emissions. The <a href="https://greensoftware.foundation/" target="_blank" rel="noopener noreferrer">Green Software Foundation</a> has established eight core principles that guide sustainable software development:
          </Paragraph>
          
          <SubsectionTitle>1. Carbon Efficiency</SubsectionTitle>
          <Paragraph>
            Carbon efficiency involves emitting the least amount of carbon possible for each unit of work. This means optimizing code to perform the same functions with fewer computational resources, which directly translates to reduced energy consumption and lower emissions.
          </Paragraph>
          <Paragraph>
            <Bold>Example</Bold>: Replacing a bubble sort algorithm (O(n²)) with a more efficient merge sort (O(n log n)) can significantly reduce computation time and energy for large datasets.
          </Paragraph>
          
          <SubsectionTitle>2. Energy Efficiency</SubsectionTitle>
          <Paragraph>
            Energy efficiency focuses on using the least amount of energy to perform a task. In software terms, this means writing code that minimizes CPU, memory, storage, and network usage while still delivering the required functionality.
          </Paragraph>
          <Paragraph>
            <Bold>Example</Bold>: Using list comprehensions in Python instead of traditional loops can reduce energy consumption by up to 20%, as they're optimized internally by the interpreter.
          </Paragraph>
          
          <SubsectionTitle>3. Carbon Awareness</SubsectionTitle>
          <Paragraph>
            Carbon awareness involves considering the carbon intensity of energy sources when running software. The same code running in different locations or at different times can have vastly different carbon impacts based on the energy mix powering the data center.
          </Paragraph>
          <Paragraph>
            <Bold>Example</Bold>: Scheduling non-time-sensitive batch processing jobs to run during periods of higher renewable energy availability can reduce their carbon footprint without code changes.
          </Paragraph>
          
          <SubsectionTitle>4. Hardware Efficiency</SubsectionTitle>
          <Paragraph>
            Hardware efficiency means building applications that work well on hardware that lasts longer and uses less materials. This principle considers the embodied carbon in devices and aims to reduce the need for frequent hardware replacements.
          </Paragraph>
          <Paragraph>
            <Bold>Example</Bold>: Optimizing an application to run efficiently on older hardware can extend the useful life of devices, reducing electronic waste and the carbon cost of manufacturing new equipment.
          </Paragraph>
          
          <SubsectionTitle>5. Energy Proportionality</SubsectionTitle>
          <Paragraph>
            Energy proportionality aims to ensure that the energy consumed by a system is proportional to the work being done. Ideal systems use nearly zero energy when idle and gradually increase energy consumption as utilization increases.
          </Paragraph>
          <Paragraph>
            <Bold>Example</Bold>: Implementing proper sleep modes for background services instead of using busy-wait loops can significantly reduce energy consumption during periods of low activity.
          </Paragraph>
          
          <SubsectionTitle>Additional Resources</SubsectionTitle>
          <ResourceCard whileHover={{ y: -5 }}>
            <ResourceLink href="https://greensoftware.foundation/" target="_blank" rel="noopener noreferrer">
              <ResourceTitle>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                Green Software Foundation
              </ResourceTitle>
              <ResourceDescription>
                A non-profit dedicated to creating a trusted ecosystem of people, standards, tooling, and best practices for green software development.
              </ResourceDescription>
              <ResourceMeta>
                <span>Official organization website</span>
                <ResourceTags>
                  <ResourceTag>Standards</ResourceTag>
                  <ResourceTag>Community</ResourceTag>
                </ResourceTags>
              </ResourceMeta>
            </ResourceLink>
          </ResourceCard>
          
          <ResourceCard whileHover={{ y: -5 }}>
            <ResourceLink href="https://arxiv.org/abs/1907.10597" target="_blank" rel="noopener noreferrer">
              <ResourceTitle>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                Green AI Paper – Schwartz et al. (2019)
              </ResourceTitle>
              <ResourceDescription>
                This seminal paper coined the term "Green AI" and argues for a shift toward more energy-efficient artificial intelligence research and applications.
              </ResourceDescription>
              <ResourceMeta>
                <span>Academic research paper</span>
                <ResourceTags>
                  <ResourceTag>Research</ResourceTag>
                  <ResourceTag>AI</ResourceTag>
                </ResourceTags>
              </ResourceMeta>
            </ResourceLink>
          </ResourceCard>
          
          <ResourceCard whileHover={{ y: -5 }}>
            <ResourceLink href="https://github.com/Green-Software-Foundation/software_carbon_intensity" target="_blank" rel="noopener noreferrer">
              <ResourceTitle>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Software Carbon Intensity Specification (SCI)
              </ResourceTitle>
              <ResourceDescription>
                The SCI provides a methodology for calculating the carbon impact of software applications, allowing developers to measure and improve their sustainability.
              </ResourceDescription>
              <ResourceMeta>
                <span>GitHub repository</span>
                <ResourceTags>
                  <ResourceTag>Specification</ResourceTag>
                  <ResourceTag>Metrics</ResourceTag>
                </ResourceTags>
              </ResourceMeta>
            </ResourceLink>
          </ResourceCard>
          
          <ResourceCard whileHover={{ y: -5 }}>
            <ResourceLink href="https://huggingface.co/bigcode/starcoder" target="_blank" rel="noopener noreferrer">
              <ResourceTitle>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2">
                  <path d="M8.36 5.08c-1.03-.43-2.18-.69-3.36-.69v0c-1.18 0-2.33.26-3.36.69"></path>
                  <path d="M8.36 5.08A4.77 4.77 0 0 0 10 9a4.77 4.77 0 0 1 1.64 3.92c0 1.15.42 2.3 1.12 3.08"></path>
                  <path d="M1.64 5.08A4.77 4.77 0 0 1 0 9a4.77 4.77 0 0 0-1.64 3.92c0 1.15-.42 2.3-1.12 3.08"></path>
                  <path d="M12.76 16H11.24"></path>
                  <path d="M22.38 17.88V4.12a2 2 0 0 0-2.74-1.84L11.18 7.4c-.45.22-.82.65-.82 1.16v7c0 .51.37.94.82 1.16l8.46 5.12a2 2 0 0 0 2.74-1.84"></path>
                </svg>
                StarCoder Model
              </ResourceTitle>
              <ResourceDescription>
                StarCoder is the open-source Large Language Model that powers Greencode AI's code optimization suggestions.
              </ResourceDescription>
              <ResourceMeta>
                <span>Hugging Face model page</span>
                <ResourceTags>
                  <ResourceTag>AI Model</ResourceTag>
                  <ResourceTag>Open Source</ResourceTag>
                </ResourceTags>
              </ResourceMeta>
            </ResourceLink>
          </ResourceCard>
          
          <ResourceCard whileHover={{ y: -5 }}>
            <ResourceLink href="https://mlco2.github.io/codecarbon/" target="_blank" rel="noopener noreferrer">
              <ResourceTitle>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                CodeCarbon Project
              </ResourceTitle>
              <ResourceDescription>
                CodeCarbon is an emissions tracking tool that estimates the carbon footprint of computing, helping developers understand and reduce their code's environmental impact.
              </ResourceDescription>
              <ResourceMeta>
                <span>Open-source tool</span>
                <ResourceTags>
                  <ResourceTag>Measurement</ResourceTag>
                  <ResourceTag>Tracking</ResourceTag>
                </ResourceTags>
              </ResourceMeta>
            </ResourceLink>
          </ResourceCard>
        </SectionContainer>

        <SectionContainer variants={itemVariants}>
          <SectionTitle>The Future of Sustainable AI & Development</SectionTitle>
          <Paragraph>
            The intersection of artificial intelligence and environmental sustainability represents both a challenge and an opportunity. As AI becomes increasingly integrated into the software development lifecycle, we have a responsibility to ensure this technology operates efficiently and with minimal environmental harm.
          </Paragraph>
          <Paragraph>
            Looking ahead, several emerging trends will shape the future of sustainable AI and development:
          </Paragraph>
          <List>
            <ListItem><Bold>Energy-Aware AI Models</Bold>: Future AI architectures will likely incorporate energy consumption as an explicit optimization target during training</ListItem>
            <ListItem><Bold>Specialized Efficient Hardware</Bold>: Purpose-built chips optimized for specific AI tasks will continue to improve the FLOPS/watt ratio</ListItem>
            <ListItem><Bold>Embedded Sustainability Metrics</Bold>: Development environments will integrate real-time carbon and energy feedback directly into the coding workflow</ListItem>
            <ListItem><Bold>Regulatory Frameworks</Bold>: Emerging policies may require software companies to report carbon emissions and meet efficiency standards</ListItem>
            <ListItem><Bold>Green AI Certifications</Bold>: Third-party certification programs for environmentally responsible AI development and deployment will gain prominence</ListItem>
          </List>
          <Paragraph>
            Greencode AI is aligned with these future directions. Our roadmap includes features like IDE plugins for real-time optimization suggestions, GitHub Actions for automated sustainability checks in CI/CD pipelines, and team collaboration tools to set and track organization-wide sustainability goals.
          </Paragraph>
          <Quote>
            "The most sustainable line of code is the one you don't write." This principle, echoing the famous architecture maxim about unbuilt buildings, reminds us that optimization begins with simplicity and necessity.
          </Quote>
          <Paragraph>
            By making sustainable coding accessible and integrated into everyday development workflows, we aim to create a future where energy efficiency is a standard consideration in software engineering, just as performance and security are today.
          </Paragraph>
          <Paragraph>
            Join us in this mission by trying Greencode AI, contributing to our open-source project, or simply spreading awareness about sustainable coding practices within your organization.
          </Paragraph>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
            <a href="/optimize" className="btn" style={{ textDecoration: 'none' }}>Try Greencode AI</a>
            <a href="https://github.com/sambett/greencode-ai" className="btn btn-secondary" style={{ textDecoration: 'none' }}>View on GitHub</a>
          </div>
        </SectionContainer>
      </motion.div>
    </LearnMoreContainer>
  );
};

export default LearnMorePage;
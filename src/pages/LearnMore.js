import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LearnMoreContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px 80px;
`;

const PageTitle = styled(motion.h1)`
  font-size: 42px;
  font-weight: 800;
  color: var(--dark);
  text-align: center;
  margin-bottom: 20px;
`;

const PageDescription = styled(motion.p)`
  font-size: 18px;
  text-align: center;
  color: #555;
  max-width: 800px;
  margin: 0 auto 60px;
  line-height: 1.6;
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

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const ResourceCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--hover-shadow);
  }
`;

const ResourceImage = styled.div`
  height: 160px;
  overflow: hidden;
  position: relative;
  background-color: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 40px;
`;

const ResourceContent = styled.div`
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ResourceTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 15px;
`;

const ResourceDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
  flex-grow: 1;
`;

const ResourceLink = styled.a`
  display: inline-block;
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }
`;

const FAQ = styled.div`
  margin-top: 40px;
`;

const FAQItem = styled(motion.div)`
  margin-bottom: 20px;
  border-radius: var(--border-radius);
  background-color: white;
  box-shadow: var(--card-shadow);
  overflow: hidden;
`;

const FAQQuestion = styled.div`
  padding: 20px 25px;
  font-weight: 600;
  font-size: 18px;
  color: var(--dark);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    background-color: rgba(46, 204, 113, 0.05);
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 25px;
  overflow: hidden;
  
  p {
    padding-bottom: 20px;
    line-height: 1.7;
  }
`;

const ResearchSection = styled.div`
  margin-top: 60px;
`;

const Paper = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 25px;
  box-shadow: var(--card-shadow);
  margin-bottom: 30px;
  
  &:hover {
    box-shadow: var(--hover-shadow);
    transform: translateY(-3px);
  }
`;

const PaperTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 10px;
`;

const PaperAuthors = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
`;

const PaperAbstract = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`;

const PaperLink = styled.a`
  display: inline-block;
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }
`;

const CommunitySection = styled.div`
  margin-top: 60px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius-sm);
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  margin-top: 20px;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(46, 204, 113, 0.2);
  }
`;

const LearnMorePage = () => {
  const [activeQuestion, setActiveQuestion] = React.useState(null);
  
  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };
  
  const resources = [
    {
      icon: "📚",
      title: "Green Software Foundation",
      description: "An organization dedicated to creating a trusted ecosystem of people, standards, tooling, and best practices for building green software.",
      link: "https://greensoftware.foundation/",
    },
    {
      icon: "🌱",
      title: "Principles of Green Software Engineering",
      description: "A core set of competencies needed to define, build, and run sustainable software applications.",
      link: "https://learn.greensoftware.foundation/",
    },
    {
      icon: "📏",
      title: "Software Carbon Intensity Specification",
      description: "A methodology for calculating the carbon emissions of software systems to help reduce their environmental impact.",
      link: "https://github.com/Green-Software-Foundation/sci",
    },
    {
      icon: "🔍",
      title: "CodeCarbon",
      description: "A Python package that estimates and tracks carbon emissions from computing, enabling developers to measure their carbon footprint.",
      link: "https://codecarbon.io/",
    },
    {
      icon: "💻",
      title: "Green Coding Berlin",
      description: "Research project focused on measuring and reducing the energy consumption of software and websites.",
      link: "https://www.green-coding.berlin/",
    },
    {
      icon: "📊",
      title: "Sustainable Web Design",
      description: "Guidelines and best practices for creating websites with a minimal carbon footprint.",
      link: "https://sustainablewebdesign.org/",
    }
  ];
  
  const faqs = [
    {
      question: "What does 'green code' actually mean?",
      answer: "Green code refers to software that is designed and implemented to consume as little energy as possible while still delivering the required functionality. This includes optimizing algorithms, reducing computational complexity, minimizing network and storage operations, and generally being resource-efficient. The goal is to reduce the carbon footprint associated with running the software."
    },
    {
      question: "How significant is the environmental impact of software?",
      answer: "The environmental impact of software is substantial and growing. Information and Communication Technology (ICT) accounts for approximately 2-3% of global carbon emissions, roughly equivalent to the aviation industry. Within this, software efficiency directly influences energy consumption in data centers, user devices, and network infrastructure. By some estimates, inefficient software design can increase energy use by 10-90% for the same functionality."
    },
    {
      question: "What programming languages are the most energy-efficient?",
      answer: "Research has shown that compiled languages like C, C++, and Rust are generally more energy-efficient than interpreted languages like Python or JavaScript. However, the efficiency also depends greatly on how the code is written and the specific use case. For example, a well-optimized Python application using efficient libraries might consume less energy than a poorly written C++ program. At GreenCode AI, we focus on improving code efficiency regardless of language."
    },
    {
      question: "Can AI models themselves be sustainable?",
      answer: "AI models, especially large ones like StarCoder, do have a significant carbon footprint during training. However, this is a one-time cost that can be amortized across all users of the model. By helping developers write more efficient code, these models can potentially offset their training emissions many times over. At GreenCode AI, we use efficient fine-tuning approaches and choose models with a reasonable parameter count to balance capability and efficiency."
    },
    {
      question: "How do I measure the carbon footprint of my code?",
      answer: "There are several tools available for measuring the carbon footprint of your code. CodeCarbon is a Python package that can track emissions during code execution. The Green Software Foundation's Software Carbon Intensity (SCI) specification provides a methodology for calculating emissions. Cloud providers also offer sustainability calculators for services. GreenCode AI incorporates these tools to provide emissions estimates for your code."
    },
    {
      question: "Does green code mean sacrificing performance or features?",
      answer: "Not at all! In fact, green code often aligns perfectly with high-performance code since both aim to use computational resources efficiently. By reducing unnecessary operations, optimizing algorithms, and avoiding waste, you can create software that is both faster and more energy-efficient. GreenCode AI specifically looks for optimizations that maintain or improve functionality while reducing energy consumption."
    }
  ];
  
  const papers = [
    {
      title: "Energy Efficiency Across Programming Languages: How Do Energy, Time, and Memory Relate?",
      authors: "Rui Pereira, Marco Couto, Francisco Ribeiro, Rui Rua, Jácome Cunha, João Paulo Fernandes, and João Saraiva",
      abstract: "This paper presents a study of the runtime, memory usage, and energy consumption of twenty-seven well-known programming languages. The results show that compiled languages tend to be more energy-efficient than interpreted ones, but with significant variance within each group.",
      link: "https://greenlab.di.uminho.pt/wp-content/uploads/2017/10/sleFinal.pdf"
    },
    {
      title: "Green AI",
      authors: "Roy Schwartz, Jesse Dodge, Noah A. Smith, and Oren Etzioni",
      abstract: "The paper argues for making efficiency a more central focus of AI research, alongside accuracy. The authors propose reporting the 'Red AI' metric (compute budget) alongside traditional performance metrics, and highlight the environmental and inclusivity benefits of prioritizing efficient models.",
      link: "https://arxiv.org/abs/1907.10597"
    },
    {
      title: "Carbon Emissions and Large Neural Network Training",
      authors: "David Patterson, Joseph Gonzalez, Quoc Le, Chen Liang, Lluis-Miquel Munguia, Daniel Rothchild, David So, Maud Texier, and Jeff Dean",
      abstract: "This paper provides a methodology for measuring the carbon emissions of training large neural networks. It demonstrates that thoughtful choices in model architecture, hardware, and data center location can reduce training emissions by up to 100-1000x.",
      link: "https://arxiv.org/abs/2104.10350"
    }
  ];
  
  return (
    <LearnMoreContainer>
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Learn More
      </PageTitle>
      
      <PageDescription
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Explore resources, research, and tools to deepen your understanding of sustainable software development and the environmental impact of code.
      </PageDescription>
      
      <SectionTitle
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Green Software Resources
      </SectionTitle>
      
      <ResourcesGrid>
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <ResourceImage>
              {resource.icon}
            </ResourceImage>
            <ResourceContent>
              <ResourceTitle>{resource.title}</ResourceTitle>
              <ResourceDescription>{resource.description}</ResourceDescription>
              <ResourceLink href={resource.link} target="_blank" rel="noopener noreferrer">
                Visit Resource →
              </ResourceLink>
            </ResourceContent>
          </ResourceCard>
        ))}
      </ResourcesGrid>
      
      <ResearchSection>
        <SectionTitle
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Research Papers
        </SectionTitle>
        
        {papers.map((paper, index) => (
          <Paper
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <PaperTitle>{paper.title}</PaperTitle>
            <PaperAuthors>{paper.authors}</PaperAuthors>
            <PaperAbstract>{paper.abstract}</PaperAbstract>
            <PaperLink href={paper.link} target="_blank" rel="noopener noreferrer">
              Read Paper →
            </PaperLink>
          </Paper>
        ))}
      </ResearchSection>
      
      <FAQ>
        <SectionTitle
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </SectionTitle>
        
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <FAQQuestion onClick={() => toggleQuestion(index)}>
              {faq.question}
              <span>{activeQuestion === index ? '−' : '+'}</span>
            </FAQQuestion>
            
            <FAQAnswer
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: activeQuestion === index ? 'auto' : 0,
                opacity: activeQuestion === index ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <p>{faq.answer}</p>
            </FAQAnswer>
          </FAQItem>
        ))}
      </FAQ>
      
      <CommunitySection>
        <SectionTitle
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join the Conversation
        </SectionTitle>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: '20px', lineHeight: '1.6' }}
        >
          The field of green software engineering is growing rapidly. Connect with other developers, researchers, and organizations working on sustainable software solutions. Share your experiences, ask questions, and contribute to building a greener future for technology.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}
        >
          <Button href="https://github.com/sambett/greencode-ai" target="_blank" rel="noopener noreferrer">
            Contribute on GitHub
          </Button>
          <Button href="/contact" style={{ background: 'white', color: 'var(--primary)', border: '2px solid var(--primary)' }}>
            Contact Our Team
          </Button>
        </motion.div>
      </CommunitySection>
    </LearnMoreContainer>
  );
};

export default LearnMorePage;
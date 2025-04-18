import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TipsSection = styled(motion.section)`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 30px;
  margin: 40px 0;
  box-shadow: var(--card-shadow);
`;

const TipsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  
  h2 {
    font-size: 24px;
    color: var(--dark);
    margin: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TipCard = styled(motion.div)`
  background-color: #f9f9f9;
  border-radius: var(--border-radius-sm);
  padding: 25px;
  border-left: 4px solid var(--primary);
  position: relative;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: 0 10px 20px rgba(46, 204, 113, 0.1);
    background-color: #f5f9f7;
  }
`;

const TipHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const TipIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--primary-light);
  border-radius: 50%;
  margin-right: 12px;
  color: var(--primary);
`;

const TipTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: var(--dark);
`;

const TipBody = styled.p`
  color: #555;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 10px;
`;

const TipFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  font-size: 14px;
  color: var(--primary-dark);
  
  .more-link {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-dark);
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover {
      color: var(--primary);
      text-decoration: underline;
    }
  }
`;

const EfficiencyTag = styled.span`
  background-color: var(--primary-light);
  color: var(--primary-dark);
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 12px;
  font-weight: 500;
`;

const tipVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const tipData = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    title: "List Comprehensions > Loops",
    body: "Python's list comprehensions are not only more readable but also up to 20% more energy-efficient than traditional for loops.",
    efficiency: "+20%",
    color: "#2ecc71"
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    title: "Minimize I/O Operations",
    body: "Batch your I/O operations whenever possible. Reading and writing in larger chunks can reduce energy consumption by up to 30%.",
    efficiency: "+30%",
    color: "#e74c3c"
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v8" />
        <path d="m4.93 10.93 1.41 1.41" />
        <path d="M2 18h2" />
        <path d="M20 18h2" />
        <path d="m19.07 10.93-1.41 1.41" />
        <path d="M22 22H2" />
        <path d="m8 22 4-10 4 10" />
      </svg>
    ),
    title: "Use Built-in Functions",
    body: "Optimized built-in functions like map(), filter(), and reduce() are more energy-efficient than custom implementations and make your code more maintainable.",
    efficiency: "+15%",
    color: "#3498db"
  }
];

function Tips() {
  return (
    <TipsSection
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <TipsHeader>
        <h2>Sustainable Coding Tips</h2>
        <motion.a 
          href="/tips"
          className="btn btn-secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Tips
        </motion.a>
      </TipsHeader>
      
      <TipsGrid>
        {tipData.map((tip, index) => (
          <TipCard
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={tipVariants}
            whileHover={{ y: -8, boxShadow: "0 12px 20px rgba(46, 204, 113, 0.15)" }}
          >
            <TipHeader>
              <TipIcon>
                {tip.icon}
              </TipIcon>
              <TipTitle>{tip.title}</TipTitle>
            </TipHeader>
            <TipBody>{tip.body}</TipBody>
            <TipFooter>
              <EfficiencyTag>Efficiency: {tip.efficiency}</EfficiencyTag>
              <a href="/tip-details" className="more-link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </TipFooter>
          </TipCard>
        ))}
      </TipsGrid>
    </TipsSection>
  );
}

export default Tips;
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  margin-top: 60px;
  padding: 25px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #666;
  font-size: 14px;
  position: relative;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const FooterText = styled.p`
  margin: 0;
  font-weight: 400;
  letter-spacing: 0.3px;
`;

const LeafIcon = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  margin: 0 5px;
  color: var(--primary);
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          © 2025 GreenCode AI <LeafIcon
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17c0-3 2-5 8-5s8 2 8 5a3 3 0 0 1-3 3c-2.8 0-5-1.8-5-4" />
              <path d="M16 10c0 2.8-4 5-4-1-1 0-4 1-4 3-1 .5-2 1-2 2" />
              <path d="M12 19c-2 0-4.5-1-8-5 2 0 3 .5 4 2 2 0 3 1 4 3Z" />
            </svg>
          </LeafIcon> | Write sustainable code for a sustainable future
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const HeaderStyled = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  position: relative;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: bold;
  font-size: 24px;
  color: var(--primary-dark);
  text-decoration: none;
  cursor: pointer;
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--primary);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 8px rgba(46, 204, 113, 0.3);
`;

const Nav = styled.nav`
  display: flex;
  gap: 25px;
  
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    padding: 20px;
    z-index: 100;
    gap: 15px;
  }
`;

const NavItem = styled(motion.a)`
  text-decoration: none;
  color: var(--dark);
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--primary);
    &:after {
      width: 100%;
    }
  }
  
  &.active {
    color: var(--primary);
    font-weight: 600;
    
    &:after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--primary);
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <HeaderStyled 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <LogoIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17c0-3 2-5 8-5s8 2 8 5a3 3 0 0 1-3 3c-2.8 0-5-1.8-5-4" />
              <path d="M16 10c0 2.8-4 5-4-1-1 0-4 1-4 3-1 .5-2 1-2 2" />
              <path d="M12 19c-2 0-4.5-1-8-5 2 0 3 .5 4 2 2 0 3 1 4 3Z" />
            </svg>
          </LogoIcon>
          <span>GreenCode AI</span>
        </Logo>
      </Link>
      
      <MobileMenuButton onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </MobileMenuButton>
      
      <Nav $isOpen={isMenuOpen}>
        <NavItem 
          href="/" 
          className={isActive('/')} 
          as={motion.a} 
          whileHover={{ y: -2 }}
        >
          Home
        </NavItem>
        <NavItem 
          href="/features" 
          className={isActive('/features')} 
          as={motion.a} 
          whileHover={{ y: -2 }}
        >
          Features
        </NavItem>
        <NavItem 
          href="/docs" 
          className={isActive('/docs')} 
          as={motion.a} 
          whileHover={{ y: -2 }}
        >
          Docs
        </NavItem>
        <NavItem 
          href="/about" 
          className={isActive('/about')} 
          as={motion.a} 
          whileHover={{ y: -2 }}
        >
          About
        </NavItem>
        <NavItem 
          href="/contact" 
          className={isActive('/contact')} 
          as={motion.a} 
          whileHover={{ y: -2 }}
        >
          Contact
        </NavItem>
      </Nav>
    </HeaderStyled>
  );
}

export default Header;
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContactContainer = styled.div`
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

const ContactCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: var(--card-shadow);
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  &.full-width {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--dark);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e1e1e1;
  border-radius: var(--border-radius);
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e1e1e1;
  border-radius: var(--border-radius);
  font-size: 16px;
  min-height: 150px;
  transition: border-color 0.3s;
  resize: vertical;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;

const ContactInfo = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const InfoCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 24px;
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: var(--primary);
  font-size: 24px;
`;

const InfoTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--dark);
  font-weight: 600;
`;

const InfoText = styled.p`
  margin-bottom: 15px;
  color: #4a4a4a;
`;

const ContactLink = styled.a`
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: var(--primary-dark);
  }
`;

const Bold = styled.strong`
  font-weight: 600;
`;

const CommunitySection = styled(motion.div)`
  margin-top: 60px;
`;

const ContributionCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const ContributionCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 25px;
  box-shadow: var(--card-shadow);
`;

const ContributionTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: var(--dark);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const List = styled.ul`
  margin-left: 20px;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.6;
`;

const TeamSection = styled(motion.div)`
  margin-top: 60px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  margin-top: 30px;
`;

const TeamMemberCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 25px;
  box-shadow: var(--card-shadow);
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--hover-shadow);
  }
`;

const MemberAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  overflow: hidden;
  
  svg {
    width: 50px;
    height: 50px;
    color: var(--primary);
  }
`;

const MemberName = styled.h4`
  font-size: 18px;
  margin-bottom: 5px;
  color: var(--dark);
  font-weight: 600;
`;

const MemberRole = styled.p`
  color: var(--primary);
  font-weight: 500;
  margin-bottom: 10px;
`;

const MemberBio = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const SocialLink = styled.a`
  color: #666;
  
  &:hover {
    color: var(--primary);
  }
`;

const ContactPage = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const infoCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.3 }
    }
  };
  
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
  
  const teamMembers = [
    {
      name: "Selma Bettaieb",
      role: "Founder & Lead Developer",
      bio: "Software engineer passionate about sustainable technology and applying AI for climate solutions.",
      avatar: (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      socials: {
        github: "https://github.com/sambett",
        linkedin: "https://www.linkedin.com/in/sambett/"
      }
    },



  ];
  
  return (
    <ContactContainer>
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
        Contact Us
      </motion.h1>
      
      <Paragraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{ textAlign: 'center', fontSize: '18px', maxWidth: '700px', margin: '0 auto 40px' }}
      >
        We're building a global community of climate-conscious developers and sustainable AI advocates. Let's connect and create a greener tech future together.
      </Paragraph>
      
      <ContactCard
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </SectionTitle>
        
        <ContactForm>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Your name" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Your email address" />
          </FormGroup>
          
          <FormGroup className="full-width">
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" placeholder="What's this about?" />
          </FormGroup>
          
          <FormGroup className="full-width">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Tell us more about your inquiry, feedback, or interest in collaboration" />
          </FormGroup>
          
          <FormGroup className="full-width" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </FormGroup>
        </ContactForm>
      </ContactCard>
      
      <ContactInfo>
        <InfoCard
          variants={infoCardVariants}
          initial="hidden"
          animate="visible"
        >
          <IconWrapper>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </IconWrapper>
          <InfoTitle>Email Us</InfoTitle>
          <InfoText>Have questions or feedback? Reach out directly to our team.</InfoText>
          <ContactLink href="mailto:greencode.ai.team@gmail.com">greencode.ai.team@gmail.com</ContactLink>
        </InfoCard>
        
        <InfoCard
          variants={infoCardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <IconWrapper>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </IconWrapper>
          <InfoTitle>GitHub</InfoTitle>
          <InfoText>Access our codebase, report issues, or contribute to the project.</InfoText>
          <ContactLink href="https://github.com/sambett/greencode-ai" target="_blank" rel="noopener noreferrer">github.com/sambett/greencode-ai</ContactLink>
        </InfoCard>
        
        <InfoCard
          variants={infoCardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <IconWrapper>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </IconWrapper>
          <InfoTitle>Social Media</InfoTitle>
          <InfoText>Follow us for updates, tips, and green coding insights.</InfoText>
          <div style={{ display: 'flex', gap: '10px' }}>
            <ContactLink href="https://twitter.com/GreenCodeAI" target="_blank" rel="noopener noreferrer">Twitter</ContactLink>
            <ContactLink href="https://www.linkedin.com/company/greencode-ai" target="_blank" rel="noopener noreferrer">LinkedIn</ContactLink>
          </div>
        </InfoCard>
      </ContactInfo>
      
      <TeamSection
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle>Meet Our Team</SectionTitle>
        <Paragraph>
          GreenCode AI is led by a diverse team of experts in AI, environmental science, software engineering, and sustainable design. Together, we're working to make computing greener and more energy-efficient.
        </Paragraph>
        
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 * index }}
            >
              <MemberAvatar>
                {member.avatar}
              </MemberAvatar>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
              <MemberBio>{member.bio}</MemberBio>
              <SocialLinks>
                <SocialLink href={member.socials.github} target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </SocialLink>
                <SocialLink href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </SocialLink>
              </SocialLinks>
            </TeamMemberCard>
          ))}
        </TeamGrid>
      </TeamSection>
      
      <CommunitySection
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle>Join Our Community</SectionTitle>
        <Paragraph>
          Greencode AI thrives on community collaboration. There are many ways to get involved, contribute, and help shape the future of sustainable coding.
        </Paragraph>
        
        <ContributionCards>
          <ContributionCard
            variants={formVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <ContributionTitle>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Contribute to the Project
            </ContributionTitle>
            <List>
              <ListItem>Submit code improvements or new green patterns</ListItem>
              <ListItem>Help expand language support</ListItem>
              <ListItem>Improve documentation</ListItem>
              <ListItem>Report bugs or suggest features</ListItem>
            </List>
            <ContactLink href="https://github.com/sambett/greencode-ai/contribute" target="_blank" rel="noopener noreferrer">View Contribution Guidelines →</ContactLink>
          </ContributionCard>
          
          <ContributionCard
            variants={formVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <ContributionTitle>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Partnership Opportunities
            </ContributionTitle>
            <List>
              <ListItem>Academic institutions teaching green software</ListItem>
              <ListItem>Companies looking to reduce code footprint</ListItem>
              <ListItem>Research collaborations on energy efficiency</ListItem>
              <ListItem>Educational initiatives and workshops</ListItem>
            </List>
            <ContactLink href="mailto:greencode.ai.team@gmail.com?subject=Partnership%20Inquiry">Contact for Partnerships →</ContactLink>
          </ContributionCard>
          
          <ContributionCard
            variants={formVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <ContributionTitle>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Spread the Word
            </ContributionTitle>
            <List>
              <ListItem>Share your experience with Greencode AI</ListItem>
              <ListItem>Give a talk about green software practices</ListItem>
              <ListItem>Write articles or blog posts about sustainability</ListItem>
              <ListItem>Advocate for green coding in your organization</ListItem>
            </List>
            <ContactLink href="/learn-more">Access Advocacy Resources →</ContactLink>
          </ContributionCard>
        </ContributionCards>
      </CommunitySection>
    </ContactContainer>
  );
};

export default ContactPage;
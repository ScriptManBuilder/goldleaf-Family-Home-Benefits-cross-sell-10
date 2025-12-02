import React, { useState } from 'react';
import {
  ContactContainer,
  ContactContent,
  ContactGrid,
  ContactForm,
  ContactInfo,
  ContactTitle,
  ContactDescription,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  InfoCard,
  InfoTitle,
  InfoDescription,
  InfoLink
} from '../styles/ContactSection.styles';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      title: 'Complete Coverage',
      description: 'Access full protection for property systems, household healthcare, security safeguards, and professional legal support - unified in one plan.'
    },
    {
      title: 'Tailored Solutions',
      description: 'Partner with expert advisors who comprehend your situation and deliver customized answers for your household requirements.'
    },
    {
      title: 'Immediate Benefits',
      description: 'Begin saving right away with discounts up to 45% on property services plus exclusive deals on daily household costs.'
    }
  ];

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <ContactTitle>Launch Your Protection Plan Today</ContactTitle>
        <ContactDescription>
          Connect with us to discover premium home and family advantages and begin securing what's most important to you.
        </ContactDescription>
        
        <ContactGrid>
          <ContactForm onSubmit={handleSubmit}>
            <h3>Get In Touch</h3>
            {showSuccess && (
              <div style={{ 
                padding: '1rem', 
                backgroundColor: '#10b981', 
                color: 'white', 
                borderRadius: '8px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                ✓ Your message was sent! Expect a response shortly.
              </div>
            )}
            <p>Complete the information below to explore premium household advantages.</p>
            
            {/* Hidden field with your Web3Forms access key */}
            <input type="hidden" name="access_key" value={process.env.REACT_APP_WEB3FORMS_KEY} />
            
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormInput 
                type="text" 
                name="name"
                placeholder="Your name" 
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput 
                type="email" 
                name="email"
                placeholder="your.email@company.com" 
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea 
                name="message"
                placeholder="Share your household requirements and which advantages appeal to you most..." 
                rows={5}
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
          
          <ContactInfo>
            {features.map((feature, index) => (
              <InfoCard key={index}>
                <InfoTitle>{feature.title}</InfoTitle>
                <InfoDescription>{feature.description}</InfoDescription>
              </InfoCard>
            ))}
            
            <InfoCard style={{ marginTop: '2rem' }}>
              <InfoDescription>
                Or reach us directly at <span style={{ fontWeight: 600, userSelect: 'none', pointerEvents: 'none' }}>{process.env.REACT_APP_EMAIL_SUPPORT}</span>
                <br />
                <br />
                or call {' '}
                <InfoLink href={`tel:${process.env.REACT_APP_PHONE_NUMBER?.replace(/\s+/g, '')}`}>
                  {process.env.REACT_APP_PHONE_DISPLAY}
                </InfoLink>
              </InfoDescription>
            </InfoCard>
          </ContactInfo>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;
import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Tagline,
  HeroTitle,
  Highlight,
  HeroDescription,
  CTAButtonGroup,
  CTAButtonPrimary,
  CTAButtonSecondary
} from '../styles/HeroSection.styles';

const HeroSection: React.FC = () => {
  const appSubdomain = process.env.REACT_APP_APP_SUBDOMAIN || 'app.nivorixbenefits.com';

  const handleLaunchApp = () => {
    // Temporarily disabled - demo site under construction
    window.open(`https://${appSubdomain}`, '_blank');
  };

  const handleScheduleCall = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Tagline>Premium Home & Family Protection</Tagline>
        <HeroTitle>
          Safeguard What Matters Most.
          <Highlight>Exceptional Value. Total Peace of Mind.</Highlight>
        </HeroTitle>
        <HeroDescription>
          Experience comprehensive protection with premium benefits designed for modern families. 
          Access expert home services, healthcare solutions, round-the-clock support, and exclusive member rewards 
          that deliver thousands in annual savings with unmatched convenience.
        </HeroDescription>
        <CTAButtonGroup>
          <CTAButtonPrimary onClick={handleLaunchApp}>
            View Your Benefits →
          </CTAButtonPrimary>
          <CTAButtonSecondary onClick={handleScheduleCall}>
            Get in touch
          </CTAButtonSecondary>
        </CTAButtonGroup>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;

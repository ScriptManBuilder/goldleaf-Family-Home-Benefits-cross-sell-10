import React from 'react';
import {
  StatsContainer,
  StatsContent,
  StatsSectionTitle,
  StatsSectionDescription,
  StatsGrid,
  StatCard,
  StatTitle,
  StatDescription,
  StatValue
} from '../styles/StatsSection.styles';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Annual Member Savings',
      description: 'Households reduce spending by thousands each year through property services, protection programs, and daily lifestyle advantages',
      value: '$2,800',
      background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)'
    },
    {
      title: 'Property Service Savings',
      description: 'Members receive preferential pricing on home maintenance, repairs, and coverage with rates well below standard market costs',
      value: '45%',
      background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
    },
    {
      title: 'Satisfaction Rating',
      description: 'Members consistently rate their membership experience as outstanding, delivering reliable 5-star satisfaction scores',
      value: '97%',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
    },
    {
      title: 'Available Services',
      description: 'Complete access to property protection, healthcare programs, security monitoring, and premium perks across the country',
      value: '500+',
      background: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>Secure Your Home, Maximize Savings</StatsSectionTitle>
        <StatsSectionDescription>
          Discover how our premium household advantages program provides exceptional returns and absolute security.
        </StatsSectionDescription>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} $background={stat.background}>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;

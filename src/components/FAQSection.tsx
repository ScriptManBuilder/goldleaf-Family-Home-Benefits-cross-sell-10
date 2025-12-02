import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What advantages are included in my membership?',
      answer: 'Your membership provides home protection covering appliances and major systems, complete healthcare access with telehealth and prescription savings, round-the-clock emergency support, identity theft safeguards, professional legal advice, and premium shopping discounts nationwide.'
    },
    {
      question: 'How quickly can I begin using services?',
      answer: 'Registration gives you immediate portal access. Simply explore available services, choose what suits your needs, and start using benefits right away. All discounts and coverage apply automatically when utilizing our partner network.'
    },
    {
      question: 'Do any benefits have waiting periods?',
      answer: 'Nearly all advantages activate upon enrollment. Home protection may require a brief 30-day period for existing issues. Every benefit and condition is transparently documented in your membership terms with zero hidden clauses.'
    },
    {
      question: 'Are benefits available to all household members?',
      answer: 'Absolutely! Every advantage covers your complete household. Healthcare services, property protection, and security monitoring extend to all residents. Shopping privileges are available to each family member registered on your membership.'
    },
    {
      question: 'Which property repairs qualify for coverage?',
      answer: 'Protection includes essential appliances (refrigerators, washing machines, dryers), heating and cooling systems, plumbing infrastructure, electrical components, and additional items. Emergency situations receive immediate priority service with zero dispatch fees for covered repairs.'
    },
    {
      question: 'What savings should I expect annually?',
      answer: 'Members commonly save $2,000-$4,000 each year through repair coverage, medication discounts, retail advantages, and lifestyle perks. One major appliance fix alone can save $500-$1,500, while prescription benefits frequently offset the entire membership investment.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Common Questions Answered</FAQTitle>
        <FAQDescription>
          Find answers about our premium home & family protection membership
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;

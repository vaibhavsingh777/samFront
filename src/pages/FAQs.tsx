import FAQItem from '../components/FAQItem';
import { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our contact page and we will schedule a consultation to discuss your needs.'
    },
    {
      question: 'What makes your designs unique?',
      answer: 'Our designs combine cutting-edge trends with timeless principles, ensuring your website stands out while remaining functional and user-friendly.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity, but most standard websites are completed within 4-6 weeks from project kickoff.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer various maintenance and support packages to keep your website running smoothly after launch.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page faqs-page">
      <div className="page-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions</p>
      </div>
      <div className="faqs-container">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={activeIndex === index}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
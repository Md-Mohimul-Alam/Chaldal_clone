import React from 'react';
import './Down.css';

const FAQItem = ({ question, answer, isOpen, toggleFAQ }) => {
  return (
    <div className={`faq-item faq-border-large-screen ${isOpen ? 'selected-faq-item' : ''}`} onClick={toggleFAQ}>
      <div className="query-container">
        <div className="query2"><span>{question}</span></div>
        <div className="arrow-container">
          <i className={isOpen ? 'minus-sign' : 'plus-sign'}></i>
        </div>
      </div>
      <div className="answer-container" style={{ display: isOpen ? 'block' : 'none' }}>
        {answer}
      </div>
    </div>
  );
};

export default FAQItem;

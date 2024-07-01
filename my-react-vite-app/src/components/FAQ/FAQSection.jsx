import React, { useState } from 'react';
import FAQItem from './FAQItem';
import './Down.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Q. How much do deliveries cost?',
      answer: (
        <span>Answer :  The delivery fee across the country is in the table below:
          <pre>
            <table>
              <thead>
                <tr>
                  <th>City</th>
                  <th>Orders below 400</th>
                  <th>Orders above 400</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dhaka</td>
                  <td>49</td>
                  <td>39</td>
                </tr>
                <tr>
                  <td>Chattogram</td>
                  <td>29</td>
                  <td>19</td>
                </tr>
                <tr>
                  <td>Jashore</td>
                  <td>29</td>
                  <td>19</td>
                </tr>
              </tbody>
            </table>
          </pre>
        </span>
      )
    },
    {
      question: 'Q. What are your delivery hours?',
      answer: 'Answer :  We deliver from 7.30 am to 11 pm every day. You can choose from available slots to find something that is convenient for you.'
    },
    {
      question: 'Q. What is your policy on refunds?',
      answer: (
        <span>
          We offer a refund or return policy of seven (7) days on most unopened or unspoilt packaged products.
          <ol className="answer-pointers">
            <li>For perishable products such as milk, fruits, and fresh vegetables, we have a 1 (one) day return policy.</li>
            <li>Diaper items must be returned for refunds before 10% or 3 pieces (whichever comes first) have been used.</li>
            <li>Certain products; Face Mask, Disposable Vinyl Gloves, Alcohol Pads, and Covid Testing Kits are not acceptable for refund or return either opened or unopened.</li>
          </ol>
        </span>
      )
    },
    {
      question: 'Q. What about the prices?',
      answer: 'Answer :  Our prices are our own but we try our best to offer them to you at or below market prices. Our prices are the same as the local market and we are working hard to get them even lower! If you feel that any product is priced unfairly, please let us know.'
    },
    {
      question: 'Q. Do you serve my area?',
      answer: 'Answer :  We are currently serving in three big cities of Bangladesh including Dhaka, Chattogram, Jashore.'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="commonQuestions" className="landingPage2">
      <div className="faqTop">
        <div>
          <h2>Common Questions</h2>
        </div>
        <div className="faq-items">
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleFAQ={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="faq-subText">Have further questions?</div>
    </section>
  );
};

export default FAQSection;

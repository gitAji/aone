
'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import './FAQ.css';



const FAQPage = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer('');

    try {
      const response = await fetch('/api/faq-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      const aiAnswer = data.reply || data.error || 'Sorry, something went wrong.';

      setAnswer(aiAnswer);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setAnswer('Sorry, something went wrong.');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="faq-page-container">
      <div className="faq-header">
        <h1 className="faq-title">AI-Powered FAQ</h1>
        <p className="faq-subtitle">Ask me anything about our services, pricing, or company.</p>
      </div>

      <form onSubmit={handleSubmit} className="faq-form">
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Ask your question..."
          className="faq-input"
          disabled={isLoading}
        />
        <button type="submit" className="faq-submit-btn" disabled={isLoading}>
          {isLoading ? 'Thinking...' : 'Ask'}
        </button>
      </form>

      {answer && (
        <div className="faq-answer-container">
          <p className="faq-answer">{answer}</p>
        </div>
      )}
    </div>
    </>
  );
};

export default FAQPage;

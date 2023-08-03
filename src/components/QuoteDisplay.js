import React from 'react';

const QuoteDisplay = ({ quote, author }) => {
  return (
    <blockquote>
      <p>{quote}</p>
      <cite>{author}</cite>
    </blockquote>
  );
};

export default QuoteDisplay;
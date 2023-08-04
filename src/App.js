import React, { useState } from 'react';
import './App.css';
import QuoteDisplay from './components/QuoteDisplay';
import Button from './components/Button';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuote(data[randomIndex].text);
      setAuthor(data[randomIndex].author || 'Unknown Author');
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const createQuote = async () => {
 
 };
 
 const updateQuote = async () => {

 };
 
 const deleteQuote = async () => {

 };


    <div className="App">
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        <QuoteDisplay quote={quote} author={author} />
        <Button text="Get Random Quote" onClick={fetchRandomQuote} />
        <Button text="Create New Quote" onClick={createQuote} />
        <Button text="Update Quote" onClick={updateQuote} />
        <Button text="Delete Quote" onClick={deleteQuote} />
      </header>
    </div>
 
}

export default App;

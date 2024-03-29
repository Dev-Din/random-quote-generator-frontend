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
   try {
     const newQuote = {
       quote: "Your quote text here",
       author: "Author's name here",
     };
     const response = await fetch('/quotes', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(newQuote),
     });
     const data = await response.json();
     // Update the state with the new quote received from the server
     setQuote(data.quote);
     setAuthor(data.author);
   } catch (error) {
     console.error('Error creating quote:', error);
   }
 };
 
 const updateQuote = async () => {
   try {
     const updatedQuote = {
       quote: "Updated quote text here",
     };
     const quoteId = 1; 
     const response = await fetch(`/quotes/${quoteId}`, {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(updatedQuote),
     });
     const data = await response.json();
     setQuote(data.quote);
   } catch (error) {
     console.error('Error updating quote:', error);
   }
 };
 
 const deleteQuote = async () => {
   try {
     const quoteId = 1; // Replace with the actual ID of the quote to be deleted
     const response = await fetch(`/quotes/${quoteId}`, {
       method: 'DELETE',
     });
     await response.json();
     setQuote('');
     setAuthor('');
   } catch (error) {
     console.error('Error deleting quote:', error);
   }
 };

  return (
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
  );
}

export default App;

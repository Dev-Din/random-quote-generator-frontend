import React, { useState } from 'react';
import './App.css';
import QuoteDisplay from './components/QuoteDisplay';
import Button from './components/Button';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');


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

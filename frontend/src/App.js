import "./App.css";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

function App() {
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
      setIsLoading(true);
      const fetchQuote = async () => {
      const res = await fetch(process.env.REACT_APP_API_URL);
      const data = await res.json();
      setQuote(data.quote);
      setIsLoading(false);
    };
    fetchQuote();
  }, []);

  const handleNewQuote = async () => {
    setIsLoading(true);
    const res = await fetch(process.env.REACT_APP_API_URL);
    const data = await res.json();
    setQuote(data.quote);
    setIsLoading(false);
  };
  return (
    <div className="App">
      <header>
        <div className="logo">Quotify</div>
      </header>
      <main>
       {isLoading ?  (<div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>) : parse(quote)}
        <button className="button" onClick={handleNewQuote}>
          New Quote ?
        </button>
      </main>
    </div>
  );
}

export default App;

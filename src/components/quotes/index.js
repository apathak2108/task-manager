import React, { useState, useEffect } from "react";
import "./Quotes.css";

function Quotes() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const { text, author } = data[randomIndex];
        const cleanAuthor = author.split(',')[0];
        setQuote({ text, author: cleanAuthor });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      {
        <blockquote>
          <p>“{quote.text}”</p>
          <p id="author-name"> ~ {quote.author}</p>
        </blockquote>
      }
    </div>
  );
}

export default Quotes;

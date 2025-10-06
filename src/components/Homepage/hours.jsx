import React, { useState, useEffect } from "react";

const Hours = () => {
  const [highlightIndex, setHighlightIndex] = useState(0);
  
  // Array of words to cycle through
  const words = ['ideas', 'captions', 'calendars', 'posts', 'all'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % words.length);
    }, 1000); // Change every 1 second
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-25 max-w-4xl text-left min-h-screen flex flex-col justify-center relative -mt-16 -mb-16">
      {/* Header text */}
      <p className="font-normal text-3xl leading-relaxed text-slate-500 font-vend">
        Stop wasting hours.
      </p>
      
      {/* Main content */}
      <div className="space-y-1">
        <div className="font-bold text-8xl leading-tight tracking-wide font-vend">
          <span className={highlightIndex === 0 ? "text-black/60" : "text-slate-300"}>
            Ideas.
          </span>{" "}
          <span className={highlightIndex === 1 ? "text-black/60" : "text-slate-300"}>
            Captions.
          </span>
        </div>
        
        <div className="font-bold text-8xl leading-tight tracking-wide flex flex-wrap font-vend">
          <span className={highlightIndex === 2 ? "text-black/60 mr-4" : "text-slate-300 mr-4"}>
            Calendars.
          </span>
          <span className={highlightIndex === 3 ? "text-black/60" : "text-slate-300"}>
            Posts.
          </span>
        </div>
        
        <div className="font-bold text-8xl leading-tight tracking-wide whitespace-nowrap font-vend">
          <span className={highlightIndex === 4 ? "text-black/60" : "text-slate-300"}>
            All done in minutes.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hours;
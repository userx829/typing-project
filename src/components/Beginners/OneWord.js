import React, { useState, useEffect, useRef, useContext } from "react";
import "../Global.css";
import TypingContext from "../TypingContext";
import Sidebar from "../Sidebar";
import TypingArea from "../TypingArea";


const OneWord = () => {
  const words = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  ];

  const {
    userInput, timeLimit, timeLeft, wrongWordsCount, accuracy,
    typingSpeed, generateRandomWords, handleInputChange,
    handleTimeLimitChange, compareInputToWords,
  } = useContext(TypingContext);

  useEffect(() => {
    generateRandomWords(words);
  }, []);

  const beginnerLinks = [
    { path: "/one/word", label: "1 letter" },
    { path: "/two/word/practice", label: "2 letter" },
    { path: "/three/word/practice", label: "3 letter" },
    { path: "/four/word/practice", label: "4 letter" },
  ];

  return (
    <div className="flex">
      <Sidebar title="Beginner's Practice" links={beginnerLinks} />
      <TypingArea
        compareInputToWords={compareInputToWords}
        words={words}
        userInput={userInput}
        handleInputChange={handleInputChange}
        timeLeft={timeLeft}
        timeLimit={timeLimit}
        handleTimeLimitChange={handleTimeLimitChange}
        generateRandomWords={generateRandomWords}
        typingSpeed={typingSpeed}
        wrongWordsCount={wrongWordsCount}
        accuracy={accuracy}
      />
    </div>
  );
};

export default OneWord;


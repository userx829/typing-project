import React, { useState, useEffect, useRef, useContext } from "react";
import "../Global.css";
import TypingContext from "../TypingContext";
import Sidebar from "../Sidebar";
import TypingArea from "../TypingArea";

const SixWord = () => {
    const words = [
        "active",
        "advice",
        "beyond",
        "bright",
        "bubble",
        "burden",
        "camera",
        "candle",
        "castle",
        "chance",
        "charge",
        "choice",
        "circle",
        "climax",
        "collar",
        "danger",
        "decide",
        "demand",
        "desire",
        "empire",
        "escape",
        "expert",
        "famous",
        "farmer",
        "female",
        "friend",
        "future",
        "garden",
        "golden",
        "hunter",
        "jungle",
        "leader",
        "legend",
        "market",
        "matter",
        "memory",
        "mental",
        "nation",
        "native",
        "nature",
        "office",
        "palace",
        "person",
        "planet",
        "policy",
        "profit",
        "ribbon",
        "rocket",
        "school",
        "season",
        "secure",
        "settle",
        "shadow",
        "silver",
        "simple",
        "single",
        "stable",
        "stitch",
        "stream",
        "temple",
        "theory",
        "ticket",
        "unique",
        "vision",
        "volume",
        "winner",
        "wisdom",
        "wonder",
        "worker",
    ];
    

  const {
    userInput,
    timeLimit,
    timeLeft,
    isRunning,
    wrongWordsCount,
    accuracy,
    typingSpeed,
    isFinished,
    generateRandomWords,
    handleInputChange,
    handleTimeLimitChange,
    compareInputToWords,
  } = useContext(TypingContext);

  useEffect(() => {
    generateRandomWords(words); // Initialize words on component mount
  }, []);

  const intermediateLinks = [
    { path: "/five/letter/practice", label: "5 letter" },
    { path: "/six/letter/practice", label: "6 letter" },
    { path: "/seven/letter/practice", label: "7 letter" },
   ];

  return (
    <div className="flex w-full">
      <Sidebar title="Intermediate Section" links={intermediateLinks} />
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

export default SixWord;

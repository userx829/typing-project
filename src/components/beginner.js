import React, { useContext, useEffect } from "react";
import TypingArea from "./TypingArea";
import TypingContext from "./TypingContext";
import Sidebar from "./Sidebar";

const Beginner = () => {
  const words = [
    "an", "as", "by", "do", "go", "he", "in", "it", "me", "my", "no", "on", "or", "so", "to", "up", "us", "we", 
    "bat", "cat", "dog", "fan", "hat", "jam", "kit", "lip", "man", "net", "pan", "rat", "sun", "tap", "van", "win", 
    "able", "bake", "calm", "dive", "fast", "give", "hope", "jump", "keep", "look", "move", "name", "open", "play", "quit", "rest", "ship", "trip", "wave", "year"
];


  const {
    userInput,
    timeLimit,
    timeLeft,
    wrongWordsCount,
    accuracy,
    typingSpeed,
    generateRandomWords,
    handleInputChange,
    handleTimeLimitChange,
    compareInputToWords,
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

export default Beginner;

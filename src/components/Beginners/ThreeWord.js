import React, { useContext, useEffect } from "react";
import TypingContext from "../TypingContext";
import Sidebar from "../Sidebar";
import TypingArea from "../TypingArea";

const ThreeWord = () => {
    const words = [
        "ace", "act", "age", "air", "and", "ant", "any", "ape", "are", "arm", "art", 
        "ash", "ask", "bag", "bat", "bed", "bee", "big", "bit", "bow", "box", "boy", 
        "bun", "bus", "cat", "cap", "car", "cow", "cut", "day", "dig", "dog", "dot", 
        "dry", "ear", "eat", "egg", "elf", "end", "fan", "fat", "fig", "fit", "fix", 
        "fly", "fog", "fox", "fun", "gap", "gas", "hat", "hen", "hop", "hot", "hug", 
        "ice", "ink", "jam", "jet", "joy", "key", "kit", "lap", "leg", "lid", "lip", 
        "log", "mad", "man", "map", "mix", "mud", "net", "nut", "odd", "owl", "pad", 
        "pen", "pet", "pie", "pig", "pit", "pop", "pot", "rat", "red", "rib", "rob", 
        "rod", "row", "run", "sad", "sat", "say", "set", "sip", "sit", "sun", "tap", 
        "tax", "tip", "toe", "top", "toy", "van", "vet", "wag", "war", "wax", "wet", 
        "win", "wig", "yes", "zip"
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
export default ThreeWord;

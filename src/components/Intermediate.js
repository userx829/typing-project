import React, { useContext, useEffect } from "react";
import TypingContext from "./TypingContext";
import Sidebar from "./Sidebar";
import TypingArea from "./TypingArea";
const Intermediate = () => {
  const words = [
    "able",
    "acids",
    "army",
    "baby",
    "back",
    "ball",
    "band",
    "bank",
    "base",
    "beast",
    "beach",
    "begin",
    "blown",
    "block",
    "bring",
    "break",
    "build",
    "burly",
    "bylaw",
    "candy",
    "cause",
    "clean",
    "climb",
    "cloud",
    "craft",
    "crisp",
    "cross",
    "crush",
    "dance",
    "demon",
    "doing",
    "doubt",
    "drain",
    "drink",
    "earth",
    "eject",
    "enter",
    "equal",
    "fetch",
    "fight",
    "flash",
    "focus",
    "found",
    "force",
    "glove",
    "grape",
    "grind",
    "guide",
    "house",
    "inbox",
    "jumpy",
    "knack",
    "knock",
    "learn",
    "lemon",
    "lucky",
    "lunch",
    "magic",
    "march",
    "mixes",
    "model",
    "money",
    "naked",
    "neat",
    "pasta",
    "pearl",
    "plant",
    "power",
    "price",
    "quick",
    "ready",
    "reply",
    "scale",
    "shake",
    "sight",
    "skate",
    "slyly",
    "smile",
    "sneak",
    "solve",
    "space",
    "sugar",
    "treat",
    "trust",
    "visit",
    "vivid",
    "waste",
    "water",
    "while",
    "worry",
    "wrote",
    "yearn",
    "yield",
    "borrow",
    "cherry",
    "danger",
    "elegant",
    "fright",
    "glance",
    "jacket",
    "lounge",
    "moment",
    "notion",
    "orange",
    "pencil",
    "purple",
    "silent",
    "tunnel",
    "victor",
    "wizard",
    "yonder",
    "zombie",
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
    // Add more links as needed
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

export default Intermediate;

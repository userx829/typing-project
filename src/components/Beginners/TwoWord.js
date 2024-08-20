import React, { useContext, useEffect } from "react";
import TypingContext from "../TypingContext";
import Sidebar from "../Sidebar";
import TypingArea from "../TypingArea";

const TwoWord = () => {
  const words = [
    "am",
    "an",
    "as",
    "at",
    "be",
    "by",
    "do",
    "go",
    "he",
    "if",
    "in",
    "is",
    "it",
    "me",
    "my",
    "no",
    "of",
    "on",
    "or",
    "so",
    "to",
    "up",
    "us",
    "we",
    "ad",
    "ah",
    "al",
    "aw",
    "ax",
    "ba",
    "bi",
    "bo",
    "da",
    "eh",
    "em",
    "en",
    "et",
    "ex",
    "ha",
    "hi",
    "ho",
    "id",
    "is",
    "ma",
    "mu",
    "oh",
    "pa",
    "re",
    "si",
    "ti",
    "uh",
    "um",
    "un",
    "ya",
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
export default TwoWord;

import React, { useState, useEffect, useRef, useContext } from "react";
import "../Global.css";
import TypingContext from "../TypingContext";
import Sidebar from "../Sidebar";
import TypingArea from "../TypingArea";

const SevenWord = () => {
  const words = [
    "absence",
    "account",
    "airport",
    "ancient",
    "anxiety",
    "balance",
    "believe",
    "brother",
    "cabinet",
    "capture",
    "careful",
    "chapter",
    "charity",
    "climate",
    "comfort",
    "company",
    "connect",
    "control",
    "country",
    "creator",
    "crystal",
    "culture",
    "current",
    "dealing",
    "decency",
    "declare",
    "default",
    "deliver",
    "despite",
    "digital",
    "discuss",
    "disease",
    "dismiss",
    "display",
    "diverse",
    "drawing",
    "eastern",
    "edition",
    "educate",
    "elderly",
    "element",
    "embrace",
    "emotion",
    "exhibit",
    "explain",
    "failure",
    "fiction",
    "freedom",
    "further",
    "gallery",
    "genuine",
    "gesture",
    "healthy",
    "history",
    "imagine",
    "journey",
    "justice",
    "kitchen",
    "landing",
    "laptop",
    "library",
    "machine",
    "manager",
    "meeting",
    "mention",
    "message",
    "miracle",
    "mission",
    "musical",
    "natural",
    "network",
    "nominee",
    "opinion",
    "passion",
    "patient",
    "picture",
    "popular",
    "predict",
    "proceed",
    "process",
    "profile",
    "promise",
    "protect",
    "purpose",
    "reality",
    "rebuild",
    "recycle",
    "reflect",
    "reform",
    "refresh",
    "respect",
    "restore",
    "revenue",
    "routine",
    "science",
    "seeking",
    "service",
    "society",
    "speaker",
    "station",
    "student",
    "suggest",
    "support",
    "teacher",
    "traffic",
    "trouble",
    "uniform",
    "upgrade",
    "utility",
    "victory",
    "village",
    "welfare",
    "whisper",
    "writing",
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

export default SevenWord;

import React, { createContext, useState, useEffect, useRef } from "react";

const TypingContext = createContext();

export const TypingProvider = ({ children }) => {
  const [currentWords, setCurrentWords] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [timeLimit, setTimeLimit] = useState(1); // Default to 1 minute
  const [timeLeft, setTimeLeft] = useState(60); // Default to 60 seconds
  const [isRunning, setIsRunning] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [wrongWordsCount, setWrongWordsCount] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const wordsPerLine = 2;

  const timerRef = useRef(null);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const generateRandomWords = (words) => {
    let generatedWords = [];

    while (generatedWords.length < wordsPerLine * 2) { // Ensure at least a couple of lines of words
      generatedWords = [...generatedWords, ...shuffleArray([...words])];
    }

    setCurrentWords(generatedWords);
    setUserInput("");
    setTimeLeft(timeLimit * 60);
    setIsRunning(false);
    setTypingSpeed(0);
    setStartIndex(0);
    setIsFinished(false); // Reset the finished state
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            setIsFinished(true);
            calculateTypingSpeed();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsFinished(true); // Mark the session as finished when the timer runs out
      calculateTypingSpeed(); // Calculate typing speed immediately when time runs out
    }
  }, [timeLeft]);

  const handleInputChange = (e) => {
    if (!isRunning) {
      setIsRunning(true);
    }
    const input = e.target.value.replace(/\s+/g, " ");
    setUserInput(input);

    const inputWords = input.trim().split(" ");
    if (inputWords.length > 2 * wordsPerLine) {
      setStartIndex(inputWords.length - 2 * wordsPerLine);
    }
  };

  const handleTimeLimitChange = (e) => {
    const selectedTime = parseInt(e.target.value);
    setTimeLimit(selectedTime);
    setTimeLeft(selectedTime * 60);
  };

  const calculateTypingSpeed = () => {
    const inputWords = userInput
      .trim()
      .split(" ")
      .filter((word) => word !== "");
    const totalCharactersTyped = userInput.replace(/\s+/g, "").length;

    const correctWordsCount = inputWords.filter(
      (word, index) => word === currentWords[index % currentWords.length]
    ).length;

    const errorCount = inputWords.length - correctWordsCount;

    // Update wrong words count
    setWrongWordsCount(errorCount);

    // Calculate accuracy
    const accuracyPercentage = inputWords.length
      ? Math.round((correctWordsCount / inputWords.length) * 100)
      : 100;
    setAccuracy(accuracyPercentage);

    if (correctWordsCount === 0) {
      setTypingSpeed(0);
      return;
    }

    const averageWordLength = totalCharactersTyped / inputWords.length;
    const adjustedCharactersTyped = totalCharactersTyped - errorCount;
    const minutesElapsed = (timeLimit * 60 - timeLeft) / 60;

    const wpm =
      minutesElapsed > 0
        ? Math.round(
            adjustedCharactersTyped / averageWordLength / minutesElapsed
          )
        : 0;

    setTypingSpeed(wpm);
  };

  const compareInputToWords = () => {
    const inputWords = userInput.trim().split(" ");
    const displayedWords = [];

    for (let i = startIndex; i < startIndex + 3 * wordsPerLine; i++) {
      const wordIndex = i % currentWords.length;
      const userWord = inputWords[i];
      const targetWord = currentWords[wordIndex];

      if (!userWord) {
        displayedWords.push(
          <span key={i} className="text-black">
            {targetWord}{" "}
          </span>
        );
      } else if (userWord === targetWord) {
        displayedWords.push(
          <span key={i} className="text-green-500">
            {targetWord}{" "}
          </span>
        );
      } else {
        displayedWords.push(
          <span key={i  } className="text-red-500 rounded">
            {targetWord}{" "}
          </span>
        );
      }
    }

    return displayedWords;
  };

  return (
    <TypingContext.Provider
      value={{
        currentWords,
        userInput,
        timeLimit,
        timeLeft,
        isRunning,
        typingSpeed,
        wrongWordsCount,
        accuracy,
        isFinished,
        generateRandomWords,
        handleInputChange,
        handleTimeLimitChange,
        calculateTypingSpeed,
        compareInputToWords,
      }}
    >
      {children}
    </TypingContext.Provider>
  );
};

export default TypingContext;

import React, { useContext, useState, useEffect } from "react";
import "./Global.css";
import TypingContext from "./TypingContext";

const Home = () => {
  const words = [
    "cat",
    "dog",
    "sun",
    "hat",
    "cup",
    "pen",
    "bag",
    "rain",
    "star",
    "apple",
    "quick",
    "brick",
    "jump",
    "space",
    "river",
    "forest",
    "laptop",
    "crane",
    "bridge",
    "smile",
    "craft",
    "climb",
    "house",
    "puzzle",
    "cookie",
    "tiger",
    "crown",
    "beach",
    "drive",
    "cloud",
    "track",
    "lucky",
    "mountain",
    "garden",
    "whisper",
    "rabbit",
    "yellow",
    "shadow",
    "thunder",
    "banana",
    "parrot",
    "jungle",
    "silver",
    "crystal",
    "pyramid",
    "basket",
    "window",
    "shadow",
    "blanket",
    "adventure",
    "capture",
    "glimmer",
    "sunshine",
    "purple",
    "twilight",
    "butterfly",
    "diamond",
    "airplane",
    "musical",
    "rainbow",
    "whistle",
    "unicorn",
    "kangaroo",
    "firefly",
    "elephant",
    "octopus",
    "keyboard",
    "telephone",
    "giraffe",
    "monkey",
    "penguin",
    "dolphin",
    "avocado",
    "crocodile",
    "pineapple",
    "bicycle",
    "fountain",
    "whistle",
    "umbrella",
    "backpack",
    "treasure",
    "snowflake",
    "balloon",
    "waterfall",
    "telescope",
    "pancake",
    "boulder",
    "guitar",
    "computer",
    "popcorn",
    "skyscraper",
    "sunflower",
    "chocolate",
    "carousel",
    "tangerine",
    "notebook",
    "carousel",
  ];

  const [isVisible, setIsVisible] = useState(true);
  const [practiceLevel, setPracticeLevel] = useState("");

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

  useEffect(() => {
    if (typingSpeed > 0) {
      if (typingSpeed <= 20) {
        setPracticeLevel("Beginner");
      } else if (typingSpeed <= 40) {
        setPracticeLevel("Intermediate");
      } else {
        setPracticeLevel("Advanced");
      }
    }
  }, [typingSpeed]);

  const handleInput = (e) => {
    if (isVisible) {
      setIsVisible(false); // Dismiss alert on typing start
    }
    handleInputChange(e); // Call the existing input change handler
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
        <div
          className="  border border-black-400   px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline font-semibold">
            Take a quick typing test!
          </span>
          <p className="mt-2">
            Based on the test result, we will tell you which typing practice you
            should choose.
          </p>
          <span
            className="absolute top-3 bottom-0 right-0 px-4 py-3 cursor-pointer"
            onClick={handleClose}
          >
            <abbr title="Dismiss">
              {" "}
              <i class="fa-solid fa-x fa-beat fa-lg"></i>
            </abbr>
          </span>
        </div>
      )}

      <div>
        <div className="container flex flex-col items-center justify-center">
          <div className="flex flex-col text-center w-full my-4">
            <h1 className="sm:text-3xl mx-auto my-2 text-2xl font-medium title-font ">
              Test Your Typing Skills
            </h1>
          </div>

          <section className="h-full w-full  text-gray-600 body-font">
            <div className="container flex justify-center">
              <div
                className="container w-2/3 bg-white rounded border border-gray-300
               focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 outline-none text-gray-700 py-1 px-3 
                    leading-6 transition-colors duration-200 ease-in-out overflow-hidden typing-area"
              >
                <h1 className={`text-2xl tracking-wide no-select`}>
                  {compareInputToWords(words)}
                </h1>
              </div>
            </div>
          </section>
          <div className="relative flex justify-center w-full">
            <textarea
              id="message"
              name="message"
              className="my-5 w-2/3 bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2
                   focus:ring-red-200 h-10 outline-none text-gray-700 py-1 px-3 resize-none leading-6 
                   transition-colors duration-200 ease-in-out text-2xl font-sans"
              value={userInput}
              onChange={handleInput} // Use handleInput here
              readOnly={timeLeft === 0} // Disable input when timeLeft is 0
            />
          </div>
          <div className="flex items-center">
            <div className="bg-red-500 flex justify-center items-center  mx-1 h-13 w-32 py-2 rounded text-center">
              <span>
                Select Time :{" "}
                <i className="fa-solid fa-arrow-right  text-sm  "></i>{" "}
              </span>
            </div>
            <div className="relative">
              <select
                className="rounded border h-13 w-24 text-white bg-red-500 cursor-pointer hover:bg-red-600 appearance-none py-2 px-8 focus:outline-none  mx-1 text-base pl-3 pr-10"
                onChange={handleTimeLimitChange}
                value={timeLimit}
              >
                <option value={1}>1 min</option>
                <option value={3}>3 min</option>
                <option value={5}>5 min</option>
              </select>

              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
            <div className="bg-red-500  flex justify-center items-center  mx-1 h-13 w-32 py-2 rounded text-center">
              <h1>
                {" "}
                Time Left :{" "}
                <i className="fa-solid fa-arrow-right text-sm  "></i>
              </h1>
            </div>
            <div className="bg-red-500  text-white h-13 w-32 mx-1 py-2 rounded text-center">
              <span>{timeLeft} Sec</span>
            </div>

            <button
              className="flex  mx-1 bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 
            rounded "
              onClick={() => generateRandomWords(words)} // Call function to regenerate words
            >
              Regenerate Text
            </button>
          </div>

          {/* Typing Speed Analysis Section */}
          <div className="text-center flex justify-center my-2">
            <section className="text-gray-600 body-font">
              <div className="h-64 my-4">
                <div
                  className={`bg-gray-100 p-6 rounded-lg ${
                    timeLeft !== 0 ? "hidden" : ""
                  }`}
                >
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2 border-b-2 border-black">
                    Your Typing Speed Analysis
                  </h2>

                  <p>Typing Speed: {typingSpeed} WPM</p>
                  <p>
                    Words Typed:{" "}
                    {userInput.trim() === ""
                      ? 0
                      : userInput.trim().split(" ").length}
                  </p>
                  <h2>Wrong Words: {wrongWordsCount}</h2>
                  <h2>Accuracy: {accuracy}%</h2>
                  <p>
                    Characters Typed: {userInput.replace(/\s+/g, "").length}
                  </p>
                  <h2 className="mt-4 text-xl font-semibold">
                    Recommended Practice Level: {practiceLevel}
                  </h2>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

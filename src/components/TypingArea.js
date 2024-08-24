import React from "react";
import backgroundImage from "./night2.png";

const TypingArea = ({
  compareInputToWords,
  words,
  userInput,
  handleInputChange,
  timeLeft,
  timeLimit,
  handleTimeLimitChange,
  generateRandomWords,
  typingSpeed,
  wrongWordsCount,
  accuracy,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="container flex flex-col items-center justify-center "
    >
      <div className="flex flex-col text-center w-full my-4">
        <h1 className="text-dark sm:text-3xl mx-auto my-2 text-2xl font-medium title-font ">
          Test Your Typing Skills
        </h1>
      </div>

      <section className="h-full w-full  body-font">
        <div className="container flex justify-center">
          <div
            className="container w-2/3 bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2
               focus:ring-red-200 h-32 outline-none text-gray-700 py-1 px-3 
               leading-6 transition-colors duration-200 ease-in-out overflow-hidden typing-area"
          >
            <h1 className="text-2xl tracking-wide no-select">
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
          onChange={(e) => handleInputChange(e, words)}
          readOnly={timeLeft === 0} // Disable input when timeLeft is 0
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full mt-4">
        <div
          className="bg-red-500 flex justify-center items-center h-12 w-1/2 md:w-32
         py-2 rounded text-center mx-1"
        >
          <span>
            Select Time: <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
        <div className="relative w-1/2 md:w-auto mx-1">
          <select
            className="rounded border h-12 w-full md:w-24 text-white bg-red-500 cursor-pointer
             hover:bg-red-600 appearance-none py-2 px-4 focus:outline-none text-base pl-3 pr-10"
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
        <div
          className="bg-red-500 flex justify-center items-center
         h-12 w-1/2 md:w-32 py-2 rounded text-center mx-1 "
        >
          <h1>
            Time Left: <i className="fa-solid fa-arrow-right"></i>
          </h1>
        </div>
        <div
          className="bg-red-500 text-white h-12 w-1/2 md:w-32 md:my-3
         py-2 rounded text-center mx-1"
        >
          <span>{timeLeft} Sec</span>
        </div>
        <button
          className="flex w-1/2 md:w-auto md:my-auto mx-1 bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded"
          onClick={() => generateRandomWords(words)} // Call function to regenerate words
        >
          Regenerate Text
        </button>
      </div>

      <div className="text-center flex justify-center my-2">
        <section className="text-gray-600 body-font">
          <div className="h-64 my-4">
            <div
              className={`bg-slate-300 p-6 rounded-lg ${
                timeLeft !== 0 ? "hidden" : ""
              }`}
            >
              <h1
                className={`text-lg text-gray-900 font-medium title-font ${
                  typingSpeed >= 40
                    ? "text-green-600 bg-green-200 border-green-400"
                    : "text-white bg-red-600 border-red-400"
                } mb-2 border-b-2 border-black`}
              >
                {typingSpeed}WPM
              </h1>
              <hr />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 border-b-2 border-black">
                Your Typing Speed Analysis
              </h2>

              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Metric
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap">
                      Typing Speed
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {typingSpeed} WPM
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap">Words Typed</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {userInput.trim() === ""
                        ? 0
                        : userInput.trim().split(" ").length}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap">Wrong Words</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {wrongWordsCount}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap">Accuracy</td>
                    <td className="px-4 py-4 whitespace-nowrap">{accuracy}%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap">
                      Characters Typed
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {userInput.replace(/\s+/g, "").length}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TypingArea;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/Home";
import { TypingProvider } from "./components/TypingContext";
import TwoWord from "./components/Beginners/TwoWord";
import Sidebar from "./components/Sidebar";
import ThreeWord from "./components/Beginners/ThreeWord";
import FourWord from "./components/Beginners/FourWord";
import Beginner from "./components/beginner";
import OneWord from "./components/Beginners/OneWord";
import Intermediate from "./components/Intermediate";
import Advance from "./components/Advance";
import FiveWord from "./components/Intermediate/FiveWord";
import SixWord from "./components/Intermediate/SixWord";
import SevenWord from "./components/Intermediate/SevenWord";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <TypingProvider>
        <Router>
          <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />

          <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900
           dark:text-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/beginner" element={<Beginner />} />
              <Route path="/intermediate" element={<Intermediate />} />
              <Route path="/advance" element={<Advance />} />
              <Route path="/one/word" element={<OneWord />} />
              <Route path="/two/word/practice" element={<TwoWord />} />
              <Route path="/three/word/practice" element={<ThreeWord />} />
              <Route path="/four/word/practice" element={<FourWord />} />
              <Route path="/five/letter/practice" element={<FiveWord />} />
              <Route path="/six/letter/practice" element={<SixWord />} />
              <Route path="/seven/letter/practice" element={<SevenWord />} />
            </Routes>
          </div>
        </Router>
      </TypingProvider>
    </div>
  );
}

export default App;

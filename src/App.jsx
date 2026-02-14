import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import bgImage from "./assets/c.png";
import Ettayi from "./components/Ettayi"; // Import the AI component
import CoffeeLoveCard from "./components/card"; // Import the Card component
// ================= Landing Page Component =================
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-pink-900"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 backdrop-brightness-75"></div>

      {/* Falling Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute text-black opacity-70 animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 25 + 15}px`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <div className="relative z-20 text-center px-6">
        <h1
          className="text-7xl md:text-8xl mb-8 tracking-wide drop-shadow-[0_0_10px_rgba(255,105,180,0.9)]"
          style={{ fontFamily: "Lobster, cursive" }}
        >
          <span className="text-yellow-400 font-extrabold drop-shadow-[0_0_10px_rgba(255,215,0,1)]">
            ഏയ്...Ettayiiii Coffee
          </span>
        </h1>

        <p className="text-3xl text-black font-bold mb-10 drop-shadow-[0_0_15px_rgba(255,192,203,0.9)]">
          Not just a website it is a Movement 😏❤️
        </p>

        {/* Three Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Navigates to Ettayi AI */}
          <button
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full shadow-2xl transition transform hover:scale-110"
            onClick={() => navigate("/ettayi")}
          >
            ettayi ai💌
          </button>

          {/* Placeholder buttons */}
          <button
            className="bg-pink-400 text-black hover:bg-pink-500 px-8 py-4 rounded-full shadow-2xl transition transform hover:scale-110 font-semibold"
            onClick={() =>  navigate("/card")}
          >
            mark your feelings
          </button>

          <button
            className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-full shadow-2xl transition transform hover:scale-110"
            onClick={() => alert("Roast Zone coming soon! 🔥")}
          >
            Roast Zone 🔥
          </button>
        </div>
      </div>

      {/* Animations CSS */}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-10vh); opacity: 1; }
            100% { transform: translateY(110vh); opacity: 0; }
          }
          .animate-fall { animation: fall linear infinite; }
        `}
      </style>
    </div>
  );
};

// ================= App with Router =================
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ettayi" element={<Ettayi />} />
         <Route path="/card" element={<CoffeeLoveCard/>} />
      </Routes>
    </Router>
  );
};

export default App;

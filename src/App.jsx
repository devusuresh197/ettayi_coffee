import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import bgImage from "./assets/c.png";

// ================= Ettayi AI Component =================
const EttayiAI = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("soft");
  const [response, setResponse] = useState("");

  const analyzeChat = () => {
    setResponse(`Analyzing in "${mode}" mode: ${text}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-pink-50">
      <h1 className="text-4xl font-bold mb-6">💘 Ettayi AI Decoder</h1>

      <textarea
        rows={6}
        placeholder="Paste your chat here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-4 rounded-md w-full max-w-xl mb-4"
      />

      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        className="border p-2 rounded-md mb-4"
      >
        <option value="soft">Soft</option>
        <option value="savage">Savage</option>
        <option value="detective">Detective</option>
        <option value="emotional">Emotional Intelligence Mode</option>
      </select>

      <button
        onClick={analyzeChat}
        className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700"
      >
        Analyze
      </button>

      {response && (
        <div className="mt-6 w-full max-w-xl p-4 bg-white rounded-md shadow-md">
          {response}
        </div>
      )}
    </div>
  );
};

// ================= Landing Page Component =================
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Layers */}
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

      {/* Optional Character */}
      <img
        src="https://cdn.pixabay.com/photo/2016/03/31/19/56/man-1294647_960_720.png"
        alt="Old Man Drinking Coffee"
        className="absolute bottom-0 left-0 w-96 opacity-20 z-10"
      />

      {/* Main Content */}
      <div className="relative z-20 text-center px-6">
        <h1
          className="text-7xl md:text-8xl mb-8 tracking-wide drop-shadow-[0_0_10px_rgba(255,105,180,0.9)]"
          style={{ fontFamily: "Lobster, cursive" }}
        >
          <span className="text-yellow-400 font-extrabold drop-shadow-[0_0_10px_rgba(255,215,0,1)]">
            ഏയ്...Ettayiiii Coffee
          </span>
        </h1>

        <div className="flex justify-center mb-8 relative">
          <div className="relative">
            <span className="text-8xl drop-shadow-2xl">☕</span>
            <span className="absolute left-6 -top-6 text-white text-3xl animate-steam">~</span>
            <span className="absolute left-10 -top-8 text-white text-3xl animate-steam delay-200">~</span>
            <span className="absolute left-14 -top-6 text-white text-3xl animate-steam delay-400">~</span>
          </div>
        </div>

        <p className="text-3xl text-black font-bold mb-10 drop-shadow-[0_0_15px_rgba(255,192,203,0.9)]">
          Not just a website it is a Movement 😏❤️
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Love Stories navigates to Ettayi AI */}
          <button
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full shadow-2xl transition transform hover:scale-110"
            onClick={() => navigate("/ettayi-ai")}
          >
            Love Stories 💌
          </button>

          <button className="bg-pink-400 text-black hover:bg-pink-500 px-8 py-4 rounded-full shadow-2xl transition transform hover:scale-110 font-semibold">
            Coffee Match ☕
          </button>

          <button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-full shadow-2xl transition transform hover:scale-110">
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

          @keyframes steam {
            0% { transform: translateY(0px); opacity: 0.8; }
            100% { transform: translateY(-25px); opacity: 0; }
          }
          .animate-steam { animation: steam 2s infinite ease-in-out; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
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
        <Route path="/ettayi-ai" element={<EttayiAI />} />
      </Routes>
    </Router>
  );
};

export default App;

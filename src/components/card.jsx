// CoffeeMatch.jsx
import React, { useState, useEffect, useRef } from "react";
import domtoimage from "dom-to-image-more";


const CoffeeMatch = () => {
  const [showProposal, setShowProposal] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [userMessage, setUserMessage] = useState("");
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  // Download the love book as PDF
 const downloadCardImage = async () => {
    const card = document.getElementById("pdf-content");
    if (!card) return;

    try {
      const blob = await domtoimage.toBlob(card, { quality: 1, bgcolor: "#fff" });
      const link = document.createElement("a");
      link.download = "Coffee_Love_Book.png";
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (err) {
      console.error("Error downloading image:", err);
    }
  };

  /* 💍 Proposal Screen */
  if (showProposal) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-400 via-pink-500 to-red-500 text-white relative overflow-hidden">
        <audio
          ref={audioRef}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
          autoPlay
          loop
        />
        <h1 className="text-5xl font-bold mb-8 text-center animate-pulse">
          Will You Open This Love Book With Me? 💍
        </h1>
        <button
          onClick={() => setShowProposal(false)}
          className="bg-white text-pink-600 px-10 py-4 rounded-full text-2xl font-bold hover:scale-110 transition"
        >
          YES ❤️
        </button>
      </div>
    );
  }

  /* 💕 Love Book Screen */
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-200 via-pink-300 to-red-300 p-10 relative overflow-hidden">

      {/* 🌹 Falling Rose Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute text-2xl animate-petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            🌹
          </span>
        ))}
      </div>

      {/* 🕯 Candles */}
      <div className="candle left-10 bottom-10">🕯</div>
      <div className="candle right-10 bottom-10">🕯</div>

      <h1 className="text-4xl font-bold mb-6">
        ☕ Coffee Match Love Book
      </h1>

      <div className="perspective">
        <div
          id="pdf-content"
          className={`relative w-[900px] h-[520px] transition-transform duration-700 transform-style ${
            isOpen ? "rotate-y-180" : ""
          }`}
        >
          {/* COVER */}
          <div
            className="absolute w-full h-full bg-gradient-to-br from-red-700 to-pink-600 text-white flex items-center justify-center text-4xl font-bold rounded-lg shadow-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            💌 Our Coffee Love Story
          </div>

          {/* INSIDE */}
          <div className="absolute w-full h-full rounded-lg shadow-2xl flex rotate-y-180 backface-hidden">

            {/* LEFT PAGE */}
            <div
              className="w-1/2 flex flex-col items-center justify-center border-r-2 p-6 text-white"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-black bg-opacity-50 p-4 rounded-xl">
                <input
                  type="file"
                  onChange={(e) =>
                    setImage(URL.createObjectURL(e.target.files[0]))
                  }
                />
                {image && (
                  <img
                    src={image}
                    alt="uploaded"
                    className="mt-4 w-60 h-72 object-cover rounded-lg shadow-lg"
                  />
                )}
              </div>
            </div>

            {/* RIGHT PAGE */}
            <div
              className="w-1/2 p-8 flex flex-col items-center justify-center text-center text-white"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1494774157365-9e04c6720e47')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-black bg-opacity-50 p-6 rounded-xl w-full">
                <textarea
                  placeholder="Write your feelings here... 💖"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  className="w-full h-40 p-4 rounded-md text-red-700 italic font-bold"
                />
                <p className="mt-4 text-xl">
                  {userMessage || "Your love words will appear here... 💕"}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-pink-500 text-white px-6 py-2 rounded"
        >
          {isOpen ? "Close Book" : "Open Book"}
        </button>

        <button
          onClick={downloadCardImage}
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          Download PDF 📄
        </button>
      </div>

      <style>{`
        .perspective { perspective: 2000px; }
        .transform-style { transform-style: preserve-3d; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .backface-hidden { backface-visibility: hidden; }

        @keyframes petalFall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .animate-petal { animation: petalFall linear infinite; }

        .candle {
          position: absolute;
          font-size: 50px;
          animation: flicker 2s infinite alternate;
        }
        @keyframes flicker {
          0% { filter: drop-shadow(0 0 5px orange); }
          100% { filter: drop-shadow(0 0 20px yellow); }
        }
      `}</style>
    </div>
  );
};

export default CoffeeMatch;

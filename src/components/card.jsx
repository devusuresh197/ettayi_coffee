// CoffeeMatch.jsx
import React, { useState, useEffect, useRef } from "react";
import domtoimage from "dom-to-image-more";

const CoffeeMatch = () => {
  const [showProposal, setShowProposal] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [userMessage, setUserMessage] = useState("");

  // ✅ Only 2 memory boxes
  const [memoryImages, setMemoryImages] = useState([null, null]);
  const [memoryDates, setMemoryDates] = useState(["", ""]);

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  const downloadCardImage = async () => {
    const card = document.getElementById("pdf-content");
    if (!card) return;

    try {
      const blob = await domtoimage.toBlob(card, {
        quality: 1,
        bgcolor: "#fff",
      });

      const link = document.createElement("a");
      link.download = "Coffee_Love_Book.png";
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (err) {
      console.error("Error downloading image:", err);
    }
  };

  /* 💍 PROPOSAL PAGE */
  if (showProposal) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-pink-700 relative overflow-hidden">
        <audio
          ref={audioRef}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
          autoPlay
          loop
        />

        <img
          src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
          alt="cute"
          className="w-48 h-48 rounded-xl shadow-lg mb-6"
        />

        <h1 className="text-5xl font-bold text-center mb-6 italic">
          Fine baby, will you be my Valentine? 💖
        </h1>

        <div className="flex gap-6">
          <button
            onClick={() => setShowProposal(false)}
            className="bg-pink-500 text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg hover:scale-110 transition"
          >
            Absolutely 💕
          </button>

          <button className="border-2 border-pink-500 px-8 py-3 rounded-full text-xl">
            Ummm... 🤭
          </button>
        </div>
      </div>
    );
  }

  /* 💕 LOVE BOOK PAGE */
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-400">
      
      {/* 🌸 Falling Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute text-2xl animate-petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 6 + 6}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            💗
          </span>
        ))}
      </div>

      <h1 className="text-4xl font-bold mb-6 text-pink-700">
        💌 Our Love Story Book
      </h1>

      <div className="perspective">
        <div
          id="pdf-content"
          className={`relative w-[900px] h-[520px] transition-transform duration-700 transform-style ${
            isOpen ? "rotate-y-180" : ""
          }`}
        >
          {/* BOOK COVER */}
          <div
            className="absolute w-full h-full bg-gradient-to-br from-pink-400 via-rose-500 to-red-500 text-white flex items-center justify-center text-4xl font-bold rounded-lg shadow-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            💕 Our Forever Love 💕
          </div>

          {/* INSIDE BOOK */}
          <div className="absolute w-full h-full rounded-lg shadow-2xl flex rotate-y-180 backface-hidden">
            
            {/* LEFT PAGE */}
            <div
              className="w-1/2 flex flex-col items-center justify-center border-r-2 border-pink-400 p-6 text-pink-800"
              style={{
                background:
                  "linear-gradient(to bottom right, #ffe6f0, #ffcce0)",
              }}
            >
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

            {/* RIGHT PAGE */}
            <div
              className="w-1/2 p-6 flex flex-col items-center bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf')",
              }}
            >
              <div className="absolute inset-0 bg-white/60 rounded-lg"></div>

              {/* TEXTAREA */}
              <textarea
                placeholder="Write your feelings here... 💖"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="relative w-full h-40 p-4 rounded-md text-pink-700 italic font-bold border border-pink-300 bg-white/80 backdrop-blur-sm mb-4"
              />

              {/* ✅ TWO MEMORY BOXES SIDE BY SIDE */}
              <div className="relative w-full flex justify-center gap-6">

                {[0, 1].map((index) => (
                  <div key={index} className="flex flex-col items-center">

                    <input
                      type="file"
                      className="mb-2 text-sm"
                      onChange={(e) => {
                        const newImages = [...memoryImages];
                        newImages[index] = URL.createObjectURL(e.target.files[0]);
                        setMemoryImages(newImages);
                      }}
                    />

                    {memoryImages[index] && (
                      <img
                        src={memoryImages[index]}
                        alt="memory"
                        className="w-28 h-28 object-cover rounded-md shadow-md"
                      />
                    )}

                    <input
                      type="text"
                      placeholder="Special date 💕"
                      value={memoryDates[index]}
                      onChange={(e) => {
                        const newDates = [...memoryDates];
                        newDates[index] = e.target.value;
                        setMemoryDates(newDates);
                      }}
                      className="mt-2 text-sm p-1 rounded border border-pink-300 bg-white/80 text-center w-28"
                    />
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
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
          Download Image 📄
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
      `}</style>
    </div>
  );
};

export default CoffeeMatch;
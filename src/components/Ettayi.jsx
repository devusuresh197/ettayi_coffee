import React from "react";

const Ettayi = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-rose-200 via-pink-300 to-red-300">
      <h1 className="text-4xl font-bold mb-6">💘 Red Flag / Green Flag Checker</h1>

      <p className="mb-4 text-center text-lg">
        check your ettayi red flags or green flags
      </p>

      <button
        onClick={() =>
          window.open("https://huggingface.co/spaces/devu-197/redflag_vs_greenflag", "_blank")
        }
        className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition transform hover:scale-105"
      >
        Check Red Flag / Green Flag
      </button>
    </div>
  );
};

export default Ettayi;

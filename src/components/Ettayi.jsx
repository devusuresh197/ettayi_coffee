import React, { useState } from "react";

const Ettayi = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("soft");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // Call backend API to query Gemini
  const analyzeChat = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://localhost:3001/api/ettayi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, mode }),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setResponse(data.reply || "No response from AI");
    } catch (err) {
      console.error(err);
      setResponse("Error connecting to AI");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-rose-200 via-pink-300 to-red-300">
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
        disabled={loading}
        className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition transform hover:scale-105"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {response && (
        <div className="mt-6 w-full max-w-xl p-4 bg-white rounded-md shadow-md">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Ettayi;

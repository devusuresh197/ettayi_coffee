// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/ettayi", async (req, res) => {
  const { text, mode } = req.body;

  if (!text?.trim()) {
    return res.status(400).json({ reply: "Please provide text to analyze" });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
contents: `Read this chat and give a **playful, witty 1–2 sentence summary** of the hidden meaning. 
Use emojis. Output exactly like a text message: short, funny, and direct. 
Do NOT explain or describe anything else. Only 1–2 sentences.

Chat:
"${text}"

Mode: "${mode}"`,
      temperature: 0.7,
      maxOutputTokens: 80, // reduce to force shorter answers
    });

    const reply = response.text?.trim() || "No reply from AI";

    // Optional: cut after 2 sentences manually as a safeguard
    const sentences = reply.split(/(?<=[.!?])\s+/);
    const shortReply = sentences.slice(0, 2).join(" ");

    res.json({ reply: shortReply });
  } catch (err) {
    console.error("Gemini API error:", err);
    res.status(500).json({ reply: "Error connecting to Gemini AI" });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));

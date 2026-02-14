./screenshot/WhatsApp Image 2026-02-14 at 9.11.15 AM.jpeg
# Ettayoi Coffee ☕💌

Welcome to **Ettayoi Coffee**, a playful, romantic, and interactive website designed to combine **AI, creativity, and mini-games** into one delightful experience! ❤️✨

Whether you want to analyze your chat vibes, create beautiful love cards, or play a funny mini-game, **Ettayoi Coffee** has something for everyone.  

---

## 🌟 Overview

**Ettayoi Coffee** is divided into **three main streams**, each offering a unique experience:

1. **toxic ano** – Detect green flags or red flags in your conversations.  
2. **love card** – Make personalized, beautiful cards with your photos and messages.  
3. **steal my heart** – Catch falling hearts in a fun, interactive game.  

The site is playful, humorous, and romantic — perfect for couples, friends, or just anyone looking for a fun online activity.

---

## 🔹 Features

### 1️⃣ Green Flag / Red Flag Chat Analyzer
- Uses a **Machine Learning model** (SVM-based or hosted on Hugging Face) to analyze chat conversations.
- Predicts whether a conversation shows a **Green Flag** (healthy, positive vibes) or a **Red Flag** (potentially concerning or funny problematic vibes).  
- Multiple **analysis modes**:
  - **Soft** – gentle interpretation.
  - **Savage** – witty, bold commentary.
  - **Detective** – investigative style, looks for hidden cues.
  - **Emotional Intelligence** – analyzes emotional undertones.  
- Provides a **concise, funny 1–2 sentence interpretation** of the chat, often with emojis for extra fun.

*Example output:*  
> “Trying to guilt-trip you into coffee 😏 – Bold move, but you see right through it!”  

---

### 2️⃣ Coffee Love Card Generator
- A **digital love book** where users can:
  - Upload their personal photos.  
  - Write love messages, notes, or thoughts.  
  - View a beautifully styled card with animations and romantic design.  
- Features include:
  - **Falling rose petals** animation.  
  - **Candles and soft glow effects**.  
  - **Interactive card flip** to open the inside of the card.  
- **Downloadable PDF** functionality:
  - Save your love card as a high-quality PDF.
  - Perfect for sharing digitally or printing.

*Use case:* Surprise your loved one with a **custom digital love book**.

---

### 3️⃣ Heart Collector Mini-Game 🎮
- A **fun and addictive mini-game** where hearts fall from the top of the screen.  
- **Player moves a basket or catcher** to collect hearts.  
- Features:
  - Smooth movement via mouse or touch — no arrow buttons needed.  
  - Score tracking to measure success.  
  - Animated falling hearts and a playful background.  
- Adds humor and interactive engagement to your website, keeping users entertained.

---

## 🎨 User Experience & Design
- **Interactive and responsive design** optimized for desktop and mobile devices.  
- **Gradient backgrounds** for a modern, romantic look.  
- **Animations**:
  - Falling hearts and petals.
  - Candle flickers.
  - Smooth card flipping.  
- **Audio playback** for a soft, romantic atmosphere.  
- **Playful fonts** and color palettes to match the fun, love-focused theme.

---
Team Name: IRIS
Team Members: Devu Suresh
              Archana V
## 🛠 Technology Stack

- **Frontend**: React, TailwindCSS  
- **Backend**: Node.js + Express (optional, for AI API calls)  
- **Machine Learning / AI**: 
  - Hugging Face-hosted SVM model (Green Flag / Red Flag chat analysis).  
  - Alternative: local SVM model trained on Kaggle chat dataset.  
- **PDF Generation**: `html2canvas` + `jsPDF`  
- **Animations**: CSS and React state-driven interactions.  
- **Deployment Options**: Netlify, Vercel, or Hugging Face Spaces for ML integration.

---

## 📁 Project Structure

```bash
ettayoi-coffee/
│
├─ src/
│ ├─ components/
│ │ ├─ Ettayi.jsx # Chat Analyzer UI
│ │ ├─ CoffeeMatch.jsx # Love Card Generator
│ │ └─ HeartCollector.jsx # Heart Collector Game
│ ├─ assets/ # Images & background assets
│ └─ App.jsx # Main Router and Landing Page
│
├─ server/ # Backend API for ML model (optional)
│ ├─ server.js
│ └─ .env # API keys for Hugging Face or Gemini
│
├─ public/ # Static files
├─ package.json
└─ README.md

---

## 🚀 How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/ettayoi-coffee.git
cd ettayoi-coffee
Ettayoi Coffee - Run Instructions
---------------------------------

1. Install dependencies:

   npm install

2. Start the frontend:

   npm run dev

4. Open in your browser:

   http://localhost:3000
5. screenshot
   ./screenshot/Screenshot 2026-02-14 085710.png
   ./screenshot/Screenshot 2026-02-14 085743.png
   ./screenshot/Screenshot 2026-02-14 085855.png
   ./screenshot/Screenshot 2026-02-14 085928.png
6. live demo link
   https://drive.google.com/file/d/12BRbfQ3bG2xyCD1R9p0Ad_0pUqe1RgpF/view?usp=sharing

```
💡 Future Improvements

- Enhanced ML analysis for more nuanced chat interpretation.
- AI-generated love card suggestions based on the user’s input.
- Leaderboard for Heart Collector mini-game.
- Seasonal themes (Valentine’s, Christmas, Halloween).
- Social sharing options for love cards.
- Multiple languages support for global audience.

🎉 About the Website

Ettayoi Coffee is not just a website — it’s a playful, romantic movement.
It blends AI, creativity, and humor to create a unique experience where users can:

- Laugh at funny chat interpretations.
- Create and download personalized love cards.
- Play interactive mini-games that keep users engaged.

It’s a platform for fun, love, and creativity all in one place! ☕💖



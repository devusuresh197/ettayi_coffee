import React, { useState, useEffect, useRef } from "react";

const HeartCollector = () => {
  const [playerX, setPlayerX] = useState(50); // in %
  const [hearts, setHearts] = useState([]);
  const [score, setScore] = useState(0);
  const gameRef = useRef(null);

  // Spawn hearts
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        { x: Math.random() * 90, y: 0, id: Date.now() },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Move hearts
  useEffect(() => {
    const moveHearts = setInterval(() => {
      setHearts((prev) =>
        prev
          .map((h) => ({ ...h, y: h.y + 2 })) // fall speed
          .filter((h) => {
            if (h.y >= 90 && Math.abs(h.x - playerX) < 5) {
              setScore((s) => s + 1);
              return false;
            }
            return h.y <= 100;
          })
      );
    }, 50);
    return () => clearInterval(moveHearts);
  }, [playerX]);

  // Move player with mouse
  const handleMouseMove = (e) => {
    const rect = gameRef.current.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    setPlayerX(Math.min(95, Math.max(0, xPercent)));
  };

  // Move player with touch
  const handleTouchMove = (e) => {
    const rect = gameRef.current.getBoundingClientRect();
    const xPercent = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setPlayerX(Math.min(95, Math.max(0, xPercent)));
  };

  return (
    <div
      ref={gameRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        border: "2px solid pink",
        overflow: "hidden",
        background: "linear-gradient(to top, #ffe6f0, #fff)",
        borderRadius: "15px",
      }}
    >
      <h2 style={{ textAlign: "center", margin: "10px 0", fontFamily: "cursive" }}>
        ❤️ Score: {score} ❤️
      </h2>

      {/* Hearts */}
      {hearts.map((h) => (
        <div
          key={h.id}
          style={{
            position: "absolute",
            left: `${h.x}%`,
            top: `${h.y}%`,
            fontSize: "2.5rem",
            transform: `rotate(${Math.sin(h.y) * 30}deg)`,
            transition: "top 0.05s linear",
          }}
        >
          ❤️
        </div>
      ))}

      {/* Player basket */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: `${playerX}%`,
          width: "60px",
          height: "60px",
          background: "url('https://i.ibb.co/Wv6G8Zb/basket.png') no-repeat center/contain",
          transition: "left 0.05s",
        }}
      />
    </div>
  );
};

export default HeartCollector;

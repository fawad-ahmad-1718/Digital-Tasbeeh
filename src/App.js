import { useState } from "react";

export default function Tasbeeh() {

  // useState(0) — count variable banao jo 0 se start ho
  // setCount — yahi ek raasta hai count badlane ka, directly count = count+1 nahi likhte
  const [count, setCount] = useState(0);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#030712",
      gap: "3rem"
    }}>

      {/* Yeh {count} ek live binding hai — jab bhi setCount() call hota hai,
          React automatically yahan ka number update kar deta hai.
          Tum ne koi getElementById nahi kiya, koi innerHTML nahi likha. */}
      <h1 style={{
        fontSize: "20vw",
        fontWeight: "bold",
        color: "white",
        lineHeight: 1,
        margin: 0
      }}>
        {count}
      </h1>

      <div style={{ display: "flex", gap: "1.5rem" }}>

        {/* Count button: setCount ko nayi value dete hain — count + 1 */}
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "16px 48px",
            fontSize: "22px",
            fontWeight: "600",
            borderRadius: "16px",
            border: "none",
            backgroundColor: "#22c55e",
            color: "white",
            cursor: "pointer"
          }}
        >
          Count
        </button>

        {/* Reset button: setCount ko 0 dete hain — bas itna hi */}
        <button
          onClick={() => setCount(0)}
          style={{
            padding: "16px 48px",
            fontSize: "22px",
            fontWeight: "600",
            borderRadius: "16px",
            border: "none",
            backgroundColor: "#ef4444",
            color: "white",
            cursor: "pointer"
          }}
        >
          Reset
        </button>

      </div>
    </div>
  );
}
import { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");
  return (
    <>
      <Face3 mood={mood} />
      <div
        className={
          mood === "Happy"
            ? "happy"
            : mood === "Normal"
            ? "normal"
            : mood === "Sad"
            ? "sad"
            : null
        }
      >
        기분: {mood}
      </div>
      <button
        onClick={() => {
          setMood("Happy");
        }}
      >
        Happy
      </button>
      <button
        onClick={() => {
          setMood("Normal");
        }}
      >
        Normal
      </button>
      <button
        onClick={() => {
          setMood("Sad");
        }}
      >
        Sad
      </button>
    </>
  );
}

function Face(props) {
  const { mood } = props;
  if (mood === "Happy") {
    return <div>😀</div>;
  } else if (mood === "Normal") {
    return <p>😶</p>;
  } else if (mood === "Sad") {
    return <span>😭</span>;
  } else {
    return;
  }
}

function Face2(props) {
  const { mood } = props;
  return (
    <>
      {mood === "Happy" ? (
        <div>😀</div>
      ) : mood === "Normal" ? (
        <p>😶</p>
      ) : (
        <span>😭</span>
      )}
    </>
  );
}

function Face3(props) {
  const { mood } = props;
  return (
    <>
      {mood === "Happy" && <div>😀</div>}
      {mood === "Normal" && <div>😶</div>}
      {mood === "Sad" && <div>😭</div>}
    </>
  );
}

export default App;

// 😀😶😭

import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😇": "smiling face with Halo",
  "😳": "disbelief",
  "🤪": "Zany face",
  "🤩": "star stuck",
  "🤥": "lying face",
  "😑": "annoyance",
  "😧": "Anguished",
  "😋": "savouring food",
  "🏕️": "campimng",
  "🥡": "takeout box"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Please enter emoji");

  function emojiInputHandler(e) {
    var userInput = e.target.value;

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("we don't have this emoji in our database");
    }
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <nav>
        <h1>Emoji Interpreter !!</h1>
      </nav>
      <main>
        <input onChange={emojiInputHandler} />

        <h2> {meaning} </h2>

        <h3> emojis we know </h3>

        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </main>
    </div>
  );
}

import React, { useState } from "react";
import "./styles.css";

var inputStyles = {
  padding: "1rem",
  width: "80%",
  border: "2px solid",
  borderRadius: "11px",
  fontSize: "larger",
  textAlign: "center"
};

var emojiDict = {
  "🦊": "Fox",
  "🦄": "Unicorn",
  "🐼": "Panda",
  "🐟": "Fish",
  "🐞": "Lady Beetle",
  "🦉": "Owl",
  "🐇": "Rabbit",
  "🐶": "Dog",
  "🦁": "Lion",
  "🦢": "Swan"
};

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function inputEventHandler(event) {
    var inputEmoji = event.target.value;

    if (inputEmoji in emojiDict) {
      setEmojiMeaning(emojiDict[inputEmoji]);
    } else {
      setEmojiMeaning("Sorry, this emoji is not in the database.");
    }
  }

  return (
    <div className="App">
      <h1>Animals Emoji</h1>
      <input
        placeholder="Enter some animal emoji"
        style={inputStyles}
        onChange={inputEventHandler}
      />
      <div className="showMeaning">{emojiMeaning}</div>
    </div>
  );
}

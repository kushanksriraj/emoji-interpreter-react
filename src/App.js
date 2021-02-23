import React, { useState } from "react";
import "./styles.css";

const inputStyles = {
  marginTop: "1rem",
  padding: "1rem",
  width: "80%",
  border: "2px solid",
  borderRadius: "11px",
  fontSize: "larger",
  textAlign: "center"
};

const spanStyles = {
  padding: "0 2rem",
  cursor: "pointer"
};

const emojiDict = {
  "🦊": "Fox",
  "🦄": "Unicorn",
  "🐼": "Panda",
  "🐟": "Fish",
  "🐱": "Cat",
  "🐞": "Lady Beetle",
  "🦉": "Owl",
  "🐇": "Rabbit",
  "🐶": "Dog",
  "🦁": "Lion"
};

// get list of emojis from the dict
const emojiList = Object.keys(emojiDict);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  const inputEventHandler = (event) => {
    const inputEmoji = event.target.value;

    // if text is cleared, reset the emojiMeaning to empty string
    if (inputEmoji === "") {
      setEmojiMeaning("");
    } else {
      if (inputEmoji in emojiDict) {
        setEmojiMeaning(emojiDict[inputEmoji]);
      } else {
        setEmojiMeaning("Sorry, this emoji is not in the database.");
      }
    }
  };

  const emojiClickHandler = (item) => {
    const emojiClicked = item;
    const meaning = emojiDict[emojiClicked];
    setEmojiMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>Animals Emoji</h1>

      <input
        placeholder="Enter some animal emoji"
        style={inputStyles}
        onChange={inputEventHandler}
      />

      <div className="showMeaning">{emojiMeaning}</div>

      <div className="emojiContainer">
        {emojiList.map((item) => {
          return (
            <span
              key={item}
              style={spanStyles}
              onClick={() => emojiClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

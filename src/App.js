import React, { useState } from "react";
import "./styles.css";

var inputStyles = {
  marginTop: "1rem",
  padding: "1rem",
  width: "80%",
  border: "2px solid",
  borderRadius: "11px",
  fontSize: "larger",
  textAlign: "center"
};

var spanStyle = {
  margin: "auto",
  padding: "1rem",
  fontSize: "3rem",
  cursor : "pointer"
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

// get list of emojis from the dict
var emojiList = Object.keys(emojiDict);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function inputEventHandler(event) {
    var inputEmoji = event.target.value;

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
  }

  function emojiClickHandler(item) {
    var emojiClicked = item;
    var meaning = emojiDict[emojiClicked];
    setEmojiMeaning(meaning);
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

      {emojiList.map((item) => {
        return (
          <span
            key={item}
            style={spanStyle}
            onClick={() => emojiClickHandler(item)}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}

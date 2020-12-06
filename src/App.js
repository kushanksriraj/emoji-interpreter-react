import React, { useState } from "react";
import "./styles.css";

var inputStyles = {
  marginTop : "1rem",
  padding: "1rem",
  width: "80%",
  border: "2px solid",
  borderRadius: "11px",
  fontSize: "larger",
  textAlign: "center"
};


var spanStyle = {
  margin: "auto",
  padding : "1rem",
  fontSize : "3rem"
}


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

var emojiList = Object.keys(emojiDict);

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

      {
         emojiList.map(item => {
           return <span key={item}
           style={spanStyle}> {item} </span>
         })
      }

    </div>
  );
}

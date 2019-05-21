import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { array } from "prop-types";

const App: React.FC = () => {
  const SNIPPETS = [
    "We came into a broken world. And we're the cleanup crew",
    "I love sleep; it's my favorite.",
    "Where do programmers like to hangout? The Foo Bar"
  ];

  const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null };
  const [snippet, setSnippet] = useState("");
  const [userText, setUserText] = useState("");
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  const updateUserText = (event: React.FormEvent<HTMLInputElement>) => {
    setUserText(event.currentTarget.value);
    console.log("current userText", userText);
  };

  const chooseSnippet = (snippetIndex: number) => () => {
    console.log("setSnippet", snippetIndex);
    setSnippet(SNIPPETS[snippetIndex]);
  };

  return (
    <div>
      <h2>Track your pace</h2>
      <hr />
      <h3>Snippet</h3>
      {snippet}
      <input value={userText} onChange={updateUserText} />
      <hr />
      {SNIPPETS.map((SNIPPET, index) => (
        <button onClick={chooseSnippet(index)} key={index}>
          {SNIPPET.substring(0, 10)}...
        </button>
      ))}
    </div>
  );
};

export default App;

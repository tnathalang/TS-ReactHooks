import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const [userText, setUserText] = useState("");

  const updateUserText = (event: React.FormEvent<HTMLInputElement>) => {
    setUserText(event.currentTarget.value);
    console.log("current userText", userText);
  };

  return (
    <div>
      <h2>Track your pace</h2>
      <input value={userText} onChange={updateUserText} />
    </div>
  );
};

export default App;

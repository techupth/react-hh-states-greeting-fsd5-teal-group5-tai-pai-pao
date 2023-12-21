import "./App.css";
import { useState } from "react";

function App() {
  const [greetMessage, setGreetMessage] = useState("Greeting Message");

  const setText = (text) => {
    setGreetMessage(text);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetMessage}</div>
      <div className="buttons">
        <button onClick={() => setText("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => setText("Hi!")}>Hi!</button>
        <button onClick={() => setText("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;

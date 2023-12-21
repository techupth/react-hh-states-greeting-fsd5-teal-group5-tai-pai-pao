import "./App.css";
import {useState} from "react";

function App() {
  const [greeting,setGreeting] = useState("Greeting Message");
  const gg = ["สวัสดี!", "Hi!", "你好!"];

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        {
          gg.map((item)=>{
            return (<button onClick = {()=>{
              setGreeting(item)
            }}>{item}</button>)
          })
        }

      </div>
    </div>
  );
}

export default App;

/*
import "./App.css";
import {useState} from "react";

function App() {
  const [greeting,setGreeting] = useState("Greeting Message");
  const gTH = "สวัสดี!";
  const gEN = "Hi!";
  const gCN = "你好!";
  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick = {()=>{
          setGreeting(gTH);
        }}>{gTH}</button>

        <button onClick={()=>{
          setGreeting(gEN)
        }}>{gEN}</button>
        
        <button onClick={()=>{
          setGreeting(gCN)
        }}>{gCN}</button>
      </div>
    </div>
  );
}

export default App;

*/

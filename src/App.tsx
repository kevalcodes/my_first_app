import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit() {
    setSubmittedName(name);
    setName("");
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
       <h1>Hi, I am Keval❤️</h1>
      <h1>My First React App 🚀</h1>

      <p>Enter your name:</p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />

      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>

      {submittedName && (
        <p>
          Hello, <strong>{submittedName}</strong>! 👋
        </p>
      )}
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("Sudeep");
  return (
    <>
      <h1 className="bg-red-600"> Hello</h1>
      <Header username={username} />
      <Main username={username} setname={setUsername} />
    </>
  );
}

export default App;

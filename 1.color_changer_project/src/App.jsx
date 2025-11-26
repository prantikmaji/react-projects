import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ColorChanger from "./ColorChanger";

function App() {

  return (
    <>
      <div className="flex bg-amber-50 rounded-2xl">
        <ColorChanger color="green" />
        <ColorChanger color="white" />
        <ColorChanger color="purple" />
        <ColorChanger color="blue" />
        <ColorChanger color="purple" />
        <ColorChanger color="orange" />
        <ColorChanger color="pink" />
        <ColorChanger color="red" />
        <ColorChanger color="black" />
      </div>
    </>
  );
}

export default App;

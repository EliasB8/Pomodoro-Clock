import React from "react";
import "./styles.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
}

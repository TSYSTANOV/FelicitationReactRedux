import "./App.css";
import React from "react";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Card } from "./Components/Card/Card";
import { TextContext } from "./context/TextContext";
import { ImageContext } from "./context/imageContext";
function App() {
  return (
    <ImageContext>
      <TextContext>
        <Header />
        <Card />
        <Footer />
      </TextContext>
    </ImageContext>
  );
}

export default App;

import "./App.css";
import React from "react";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Card } from "./Components/Card/Card";
import { TextContext } from "./context/TextContext";
import { ImageContext } from "./context/imageContext";
import { HolidayContext } from "./context/holidayContext";
function App() {
  return (
    <HolidayContext>
      <ImageContext>
        <TextContext>
          <Header />
          <Card />
          <Footer />
        </TextContext>
      </ImageContext>
    </HolidayContext>
  );
}

export default App;

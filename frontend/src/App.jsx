import React from "react";
import RegisterPage from "./pages/RegisterPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ImageSliderPage from "./pages/ImageSliderPage";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/slide" element={<ImageSliderPage />} />
      </Routes>
    </div>
  );
}

export default App;

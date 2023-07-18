import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Star from "./components/star";

const App = () => {
  return (
    <div className="homePage">
      <Star />
      <div className="content">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default App;

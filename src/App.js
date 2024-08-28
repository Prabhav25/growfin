import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Customertext from "./components/Customertext/Customertext";
import Services from "./components/Services/Services";
import Companies from "./components/Companies/Companies";
import Perfection from "./components/Perfection/Perfection";
import Transform from "./components/Transform/Transform";
import Capture from "./components/Capture/Capture";
import Seamless from "./components/Seamless/Seamless";
import Integration from "./components/Integration/Integration";
import Embrace from "./components/Embrace/Embrace";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Customertext />
      <Services />
      <Companies />
      <Perfection />
      <Transform />
      <Capture />
      <Seamless />
      <Integration />
      <Embrace />
      <Footer />
    </div>
  );
}

export default App;

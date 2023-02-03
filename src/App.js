import React from "react";
import Header from "./components/Header";
import MainNav from "./components/MainNav";
import Home from "./components/pages/Home";
import Statistics from "./components/pages/Statistics";
import AnalysisCharts from "./components/pages/AnalysisCharts";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis-charts" element={<AnalysisCharts />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import MainNav from "./components/MainNav";
import Home from "./components/pages/Home";
import Statistics from "./components/pages/Statistics";
import AnalysisCharts from "./components/pages/AnalysisCharts";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  //  pobieranie danych z bazy
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch();
  //     //tutaj link do bazy danych, mi cos nie dzialal
  //     const data = await res.json();
  //     console.log(data); //wyswietlenie otrzymanych danych z bazy danych
  //   };
  //   fetchData();
  // }, []);

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

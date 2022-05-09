import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Quizz from "@pages/Quizz";
import WasteDataSheet from "../pages/WasteDataSheet";
import DataSheetContext from "../contexts/DataSheetContext";
import Home from "../pages/Home";
import QuizHome from "../pages/QuizHome";
import Research from "../pages/Research";
import ContactForm from "./ContactForm";

export default function Body() {
  const [waste, setWaste] = useState([]);
  const getWaste = () => {
    axios
      .get(
        "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_jeter-dechet-nantes-metropole&q=&rows=116"
      )
      .then((response) => response.data)
      .then((data) => {
        setWaste(data.records);
      });
  };
  useEffect(() => {
    getWaste();
  }, []);
  const foo = useMemo(() => ({ waste }), [waste]);
  return (
    <div>
      <DataSheetContext.Provider value={foo}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="QuizHome" element={<QuizHome />} />
          <Route path="Quizz" element={<Quizz />} />
          <Route path="Research" element={<Research />} />
          <Route path="ContactForm" element={<ContactForm />} />
          <Route path="WasteDataSheet/:id" element={<WasteDataSheet />} />
        </Routes>
      </DataSheetContext.Provider>
    </div>
  );
}

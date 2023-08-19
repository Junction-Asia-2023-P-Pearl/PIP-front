import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import PatientLayout from "./pages/patient/PatientLayout";
import { useState } from "react";
import Detail from "./pages/patient/Detail";
import Diag from "./pages/patient/Diag";
import Patient from "./pages/patient/Patient";

export default function App() {
  const [, setPage] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/patient/:patientId"
          element={<PatientLayout setPage={setPage} />}
        >
          <Route index element={<Patient />} />
          <Route path="detail" element={<Detail />} />
          <Route path="diag" element={<Diag />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import PatientLayout from "./pages/patient/PatientLayout";
import Detail from "./pages/patient/Detail";
import Diag from "./pages/patient/Diag";
import Patient from "./pages/patient/Patient";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminPatient from "./pages/admin/AdminPatient";
import DetailInfo from "./pages/patient/DetailInfo";
import DiagInfo from "./pages/patient/DiagInfo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/patient/:patientId" element={<AdminPatient />} />
        <Route path="/patient/:patientId" element={<PatientLayout />}>
          <Route path="info" element={<Patient />} />
          <Route path="detail" element={<Detail />} />
          <Route path="detail/:detailId" element={<DetailInfo />} />
          <Route path="diag" element={<Diag />} />
          <Route path="diag/:diagId" element={<DiagInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

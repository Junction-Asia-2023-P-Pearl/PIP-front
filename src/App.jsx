import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import PatientLayout from "./pages/patient/PatientLayout";
import Detail from "./pages/patient/Detail";
import Diag from "./pages/patient/Diag";
import Patient from "./pages/patient/Patient";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminPatient from "./pages/admin/AdminPatient";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/patient/:patientId" element={<AdminPatient />} />
        <Route path="/patient/:patientId" element={<PatientLayout />}>
          <Route index element={<Patient />} />
          <Route path="detail" element={<Detail />} />
          <Route path="diag" element={<Diag />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

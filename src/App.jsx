import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { DisantrefactPage } from "./pages/DisantrefactPage";
import { CutmylipsPage } from "./pages/CutmylipsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/disantrefact" element={<DisantrefactPage />} />
        <Route path="/cutmylips" element={<CutmylipsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

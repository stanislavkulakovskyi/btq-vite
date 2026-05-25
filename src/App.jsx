import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { DisantrefactPage } from "./pages/DisantrefactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/disantrefact" element={<DisantrefactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdsList from "./pages/AdsList";
import AdPage from "./pages/AdPage";
import AddAdPage from "./pages/AddAdPage";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import RulesPage from "./pages/RulesPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adslist" element={<AdsList />} />
        <Route path="/ads/:id" element={<AdPage />} />
        <Route path="/add" element={<AddAdPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

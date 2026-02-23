import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdsList from "./pages/AdsList";
import AdPage from "./pages/AdPage";
import AddAdPage from "./pages/AddAdPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adslist" element={<AdsList />} />
        <Route path="/ads/:id" element={<AdPage />} />
        <Route path="/add" element={<AddAdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

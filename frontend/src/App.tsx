import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdPage from "./pages/AdPage";
import AddAdPage from "./pages/AddAdPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ads/:id" element={<AdPage />} />
        <Route path="/add" element={<AddAdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

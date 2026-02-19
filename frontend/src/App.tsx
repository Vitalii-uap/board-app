import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdsList from "./pages/AdsList";
import AdPage from "./pages/AdPage";
import AddAdPage from "./pages/AddAdPage";
import Navigation from "./components/Navigation";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.page}>
        <Navigation />
        <div className={styles.wrapper}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/adslist" element={<AdsList />} />
            <Route path="/ads/:id" element={<AdPage />} />
            <Route path="/add" element={<AddAdPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

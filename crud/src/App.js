import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Ajouter from "./components/Ajouter";
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ajouter" element={<Ajouter />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

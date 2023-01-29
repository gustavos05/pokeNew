import "./index.css";
import {HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import PokemonDetail from "./Pages/PokemonDetail";
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/:name" element={<PokemonDetail/>} />
          <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

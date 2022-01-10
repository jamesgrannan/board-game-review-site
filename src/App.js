import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Games from "./components/Games";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("jessjelly");
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/games" element={<Games user={user} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

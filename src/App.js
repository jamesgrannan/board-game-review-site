import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Games from "./components/Games";
import Review from "./components/Review";
import Username from "./components/Username";
import UserList from "./components/UserList";
import { useContext, useState } from "react";
import { userContext } from "./contexts/user";
import IndividualGame from "./components/IndividualGame";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [user, setUser] = useState("jessjelly");
  return (
    <userContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/games" element={<Games />} />
            <Route path="/review" element={<Review />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:username" element={<Username />} />
            <Route path="/reviews/:review_id" element={<IndividualGame />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;

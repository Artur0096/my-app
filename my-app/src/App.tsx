import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Posts from "./components/Posts";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Posts />} />
      </Routes>
    </Router>
  );
};

export default App;

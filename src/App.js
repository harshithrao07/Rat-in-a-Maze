import React from "react";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";

export default function App() {
  const [size, setSize] = React.useState(localStorage.getItem("size"))

  function getSize(ans) {
    localStorage.setItem("size", ans)
    setSize(ans)
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home getSize={getSize} />} />
        <Route path="/main" element={<NavBar />}>
          <Route index element={<Main size={size} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
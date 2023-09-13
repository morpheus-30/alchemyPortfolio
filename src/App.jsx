import React, { useEffect, useState } from "react"
import { BrowserRouter, Link, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Term from "./components/Terminal/Terminal"
import Loader from "./components/Loader"
// import ChromeDinoGame from 'react-chr/ome-dino';


const App = () => {
  return (
    <BrowserRouter getUserConfirmation={() => {
      /* Empty callback to block the default browser prompt */
    }} basename="/alchemy/">

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/terminal" element={<div className="container flex flex-col items-center justify-center w-screen h-screen"><Term/></div>} />
        <Route path="/loader" element={<div><Loader/></div>} />
      </Routes>
    </BrowserRouter>


  )
}
export default App

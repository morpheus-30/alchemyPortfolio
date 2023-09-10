import React, { useEffect, useState } from "react"
import { BrowserRouter, Link, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Term from "./components/Terminal/Terminal"

const App = () => {
  return (
    <BrowserRouter getUserConfirmation={() => {
      /* Empty callback to block the default browser prompt */
    }} >

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/terminal" element={<div className="container flex flex-col items-center justify-center w-screen h-screen"><Term/></div>} />
      </Routes>
    </BrowserRouter>

  )
}
export default App

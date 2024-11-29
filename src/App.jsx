import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.jsx';
import Admin from './components/Admin.jsx';
import Home from  './components/Home.jsx';
import Login from './components/Login.jsx';
import Admin_his from './components/Admin_his.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="login" element={<Login />} />
          <Route path="admin-activity" element={<Admin_his />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

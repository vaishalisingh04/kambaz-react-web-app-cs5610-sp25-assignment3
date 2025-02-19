import React from 'react';
//import './App.css';
import Labs from "./Labs";
import Kambaz from "./Kambaz";
import { HashRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
        <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
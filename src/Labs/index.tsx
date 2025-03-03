import { Navigate, Route, Routes } from "react-router";
import { HashRouter, Link } from "react-router-dom";
import Lab1 from "./Lab1";
import TOC from "./TOC";
import Lab3 from "./Lab3";
import Lab2 from "./Lab2";

export default function Labs() {
  return (
    <HashRouter>
      <div id="wd-labs">
        <h1>Vaishali Singh</h1>
        <h1>Labs</h1>
        {/* Table of Contents */}
        <TOC />

        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/Lab1">Lab 1</Link>
            </li>
            <li>
              <Link to="/Lab2">Lab 2</Link>
            </li>
            <li>
              <Link to="/Lab3">Lab 3</Link>
            </li>
          </ul>
        </nav>

        {/* Routes Configuration */}
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="Lab3" />} />
          {/* Individual Labs */}
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3" element={<Lab3 />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

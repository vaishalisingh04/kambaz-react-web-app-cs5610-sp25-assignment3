import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Lab1 from "./Lab1";
import TOC from "./TOC";
import Lab3 from "./Lab3";
import Lab2 from "./Lab2";
import PathParameters from "./PathParameters";

export default function Labs() {
  return (
    <HashRouter>
      <div id="wd-labs">
        <h1>Vaishali Singh</h1>
        <h1>Labs</h1>
        <TOC />
        <Routes>
          {/* Default route redirects to Lab3 */}
          <Route path="/" element={<Navigate to="Lab3" />} />

          {/* Individual lab routes */}
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3" element={<Lab3 />} />

          {/* Dynamic routing for Path Parameters */}
          <Route path="PathParameters/*" element={<PathParameters />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

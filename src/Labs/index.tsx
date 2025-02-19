import { Navigate, Route, Routes } from "react-router";
import Lab1 from "./Lab1";
import TOC from "./TOC";
import Lab3 from "./Lab3";
import Lab2 from "./Lab2";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Vaishali Singh</h1>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab3" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>

    </div>
);}

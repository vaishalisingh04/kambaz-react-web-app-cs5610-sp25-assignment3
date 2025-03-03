import { Routes, Route, Link, useParams } from "react-router-dom";

function AddNumbers() {
  // Extract path parameters
  let { a, b } = useParams();

  // Calculate sum
  const sum = Number(a) + Number(b);

  return (
    <div>
      <h2>Add Path Parameters</h2>
      <p>{a} + {b} = {sum}</p>
    </div>
  );
}

export default function PathParameters() {
  return (
    <div>
      <h1>Path Parameters</h1>
      {/* Links with dynamic parameters */}
      <Link to="/add/1/2">1 + 2</Link>
      <br />
      <Link to="/add/3/4">3 + 4</Link>

      {/* Define routes */}
      <Routes>
        <Route path="/add/:a/:b" element={<AddNumbers />} />
      </Routes>
    </div>
  );
}

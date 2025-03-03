import { Routes, Route, Link, useParams } from "react-router-dom";

function AddNumbers() {
  let { a, b } = useParams();
  const sum = parseInt(a) + parseInt(b);

  return (
    <div>
      <h2>Add Path Parameters</h2>
      <p>
        {a} + {b} = {sum}
      </p>
    </div>
  );
}

export default function PathParameters() {
  return (
    <div id="wd-path-parameters">
      <h2>Path Parameters</h2>
      <Link to="/Labs/Lab3/add/1/2">1 + 2</Link> <br />
      <Link to="/Labs/Lab3/add/3/4">3 + 4</Link>
      <Routes>
        <Route path="add/:a/:b" element={<AddNumbers />} />
      </Routes>
    </div>
  );
}

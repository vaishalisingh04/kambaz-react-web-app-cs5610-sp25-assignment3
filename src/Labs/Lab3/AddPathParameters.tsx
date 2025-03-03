import { useParams } from "react-router-dom";

export default function AddPathParameters() {
  // Extract parameters a and b
  const { a, b } = useParams();

  // Parse parameters safely as integers
  const sum = parseInt(a || "0", 10) + parseInt(b || "0", 10);

  return (
    <div id="wd-add">
      <h4>Add Path Parameters</h4>
      
      {/* Display the calculation */}
      {a} + {b} = {sum}
    </div>
  );
}

import { useParams } from "react-router-dom";

export default function AddPathParameters() {
  let { a, b } = useParams();
  
  // Check if a and b are defined before parsing them
  const sum = parseInt(a || '0') + parseInt(b || '0');

  return (
    <div>{sum}</div>
  );
}

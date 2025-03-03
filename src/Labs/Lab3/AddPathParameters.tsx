import { useParams } from "react-router-dom";

export default function AddPathParameters() {
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

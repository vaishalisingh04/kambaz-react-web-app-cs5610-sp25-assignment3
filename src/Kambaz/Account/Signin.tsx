import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Signin</h1>
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />
      <Link
        id="wd-signin-btn"
        to="/Kambaz/Dashboard"
        className="btn btn-primary w-100"
      >
        Signin{" "}
      </Link>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
        Signup
      </Link>
    </div>
  );
}

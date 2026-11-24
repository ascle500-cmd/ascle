import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="container-x py-24 text-center">
      <p className="text-7xl font-extrabold text-brand-600 font-display">404</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
        Page not found
      </h1>
      <p className="text-slate-500 mt-2">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn-primary mt-6">
        Back to Home
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";
import "../assets/styles/auth-layout.css";
import "../assets/styles/page-not-found.css";
import errorImage from "../assets/images/404-error.svg";

const PageNotFound: React.FC = () => {
  return (
    <div className="auth-layout">
      <div className="container">
        <main className="page-not-found">
          <img
            className="page-not-found__image"
            src={errorImage}
            alt="404 error illustration"
          />

          <section className="page-not-found__content">
            <p className="page-not-found__eyebrow">404 Error</p>
            <h1>Lost in space</h1>
            <p className="page-not-found__copy">
              The page you are looking for does not exist or has been moved.
            </p>

            <Link to="/" className="page-not-found__button">
              Back to home
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PageNotFound;

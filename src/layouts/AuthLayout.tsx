import { Outlet } from "react-router-dom";
import "../assets/styles/auth-layout.css";

const AuthLayout: React.FC = () => {
  return (
    <div className="auth-layout">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;

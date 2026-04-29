import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {

  return (
    <div className="container">
        <Outlet />
    </div>
  )
}

export default AuthLayout

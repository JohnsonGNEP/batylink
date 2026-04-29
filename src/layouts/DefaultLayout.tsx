import { Outlet } from "react-router-dom";
import "../assets/styles/default-layout.css";

const DefaultLayout: React.FC = () => {
  return (
    <div className="default-layout">
      <div className="container">
        {/*  TODO: Place header component here */}

        <Outlet />

        {/* TODO: Place footer component here */}
      </div>
    </div>
  );
};

export default DefaultLayout;

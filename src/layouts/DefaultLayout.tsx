import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <div className="container">
     {/*  TODO: Place header component here */}

      <Outlet />
      
      {/* TODO: Place footer component here */}
    </div>
  );
};

export default DefaultLayout;

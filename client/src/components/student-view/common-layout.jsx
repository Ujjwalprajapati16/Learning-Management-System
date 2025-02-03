import { Outlet } from "react-router-dom";

function StudentViewCommonLayout() {
  return (
    <div>
      <h1>Student Home Page</h1>
      <Outlet />
    </div>
  );
}

export default StudentViewCommonLayout;

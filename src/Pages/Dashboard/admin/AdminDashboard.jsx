// const AdminDashboard = () => {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//       <p>Welcome, admin! Here you can manage the platform.</p>
//     </div>
//   );
// };

// export default AdminDashboard;


import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome, Admin!</h1>
      <p className="mb-6">Manage users, tuitions, and platform analytics.</p>

      <Outlet />
    </div>
  );
};

export default AdminDashboard;

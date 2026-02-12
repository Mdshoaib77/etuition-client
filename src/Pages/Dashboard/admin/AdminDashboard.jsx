import { Outlet, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Welcome, Admin 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Manage users, tuitions, and platform analytics
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition text-sm md:text-base"
          >
            ⬅ Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition text-sm md:text-base"
          >
            🏠 Home
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;

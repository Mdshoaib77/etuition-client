import { Outlet, useNavigate } from "react-router-dom";

const TutorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Welcome, Tutor 📚
          </h1>
          <p className="text-gray-600 mt-1 text-sm md:text-base">
            Check your applications, ongoing tuitions, and revenue
          </p>
        </div>

        {/* Mobile Only Home Button */}
        <button
          onClick={() => navigate("/")}
          className="md:hidden px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition text-sm"
        >
          🏠 Home
        </button>
      </div>

      {/* Dashboard Content */}
      <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default TutorDashboard;

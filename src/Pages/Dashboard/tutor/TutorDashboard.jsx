// const TutorDashboard = () => {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold">Tutor Dashboard</h1>
//       <p>Welcome, tutor! Here you can view your applications.</p>
//     </div>
//   );
// };

// export default TutorDashboard;



import { Outlet } from "react-router-dom";

const TutorDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome, Tutor!</h1>
      <p className="mb-6">Check your applications, ongoing tuitions, and revenue.</p>

      <Outlet />
    </div>
  );
};

export default TutorDashboard;

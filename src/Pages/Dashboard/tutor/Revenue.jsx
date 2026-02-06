// import React from 'react'

// const Revenue = () => {
//   return (
//     <div>
//       <h1>Alhamdulliah</h1>
//     </div>
//   )
// }

// export default Revenue



// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';

// const Revenue = () => {
//     const { user } = useContext(AuthContext);
//     const [history, setHistory] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             setLoading(true);
//             fetch(`http://localhost:5000/tutor-revenue/${user?.email}`, {
//                 method: 'GET',
//                 credentials: "include"
//             })
//             .then(res => res.json())
//             .then(data => {
//                 setHistory(Array.isArray(data) ? data : []);
//                 setLoading(false);
//             })
//             .catch(() => setLoading(false));
//         }
//     }, [user?.email]);

//     // Calculation for Total Earnings
//     const totalRevenue = history.reduce((sum, item) => sum + parseFloat(item.salary || 0), 0);

//     if (loading) return <div className="p-8 text-center font-bold">Loading Revenue Data...</div>;

//     return (
//         <div className="p-8">
//             <h2 className="text-2xl font-bold mb-6 italic text-emerald-700">Alhamdulliah, My Earnings</h2>

//             {/* --- Revenue Stats --- */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-lg">
//                     <p className="text-lg opacity-80">Total Revenue</p>
//                     <h3 className="text-4xl font-bold">${totalRevenue}</h3>
//                 </div>
//                 <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
//                     <p className="text-lg opacity-80">Total Completed Lessons</p>
//                     <h3 className="text-4xl font-bold">{history.length}</h3>
//                 </div>
//             </div>

//             {/* --- Transactions Table --- */}
//             <div className="bg-white rounded-lg shadow-xl overflow-hidden">
//                 <div className="p-4 bg-gray-100 border-b">
//                     <h3 className="font-bold text-gray-700 uppercase tracking-wider">Transaction History</h3>
//                 </div>
                
//                 {history.length === 0 ? (
//                     <p className="p-8 text-center text-gray-500">No earnings recorded yet.</p>
//                 ) : (
//                     <div className="overflow-x-auto">
//                         <table className="table w-full">
//                             <thead className="bg-gray-50">
//                                 <tr>
//                                     <th>#</th>
//                                     <th>Student Email</th>
//                                     <th>Transaction ID</th>
//                                     <th>Amount</th>
//                                     <th>Date</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {history.map((h, index) => (
//                                     <tr key={h._id} className="hover:bg-emerald-50 transition-colors">
//                                         <td>{index + 1}</td>
//                                         <td>{h.studentEmail}</td>
//                                         <td className="font-mono text-xs text-blue-600">{h.transactionId}</td>
//                                         <td className="font-bold text-emerald-600">${h.salary}</td>
//                                         <td>{new Date(h.date).toLocaleDateString()}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Revenue;


import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { FaWallet, FaChalkboardTeacher, FaHistory } from 'react-icons/fa';

const Revenue = () => {
    const { user } = useContext(AuthContext);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            // আমরা পেমেন্ট কালেকশন থেকে টিউটরের ডাটা নিয়ে আসছি
            fetch(`http://localhost:5000/tutor-revenue/${user?.email}`, {
                method: 'GET',
                credentials: "include"
            })
            .then(res => res.json())
            .then(data => {
                // ডাটাবেজ থেকে আসা ডাটা অ্যারে কিনা নিশ্চিত করা
                setHistory(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Revenue fetch error:", err);
                setLoading(false);
            });
        }
    }, [user?.email]);

    // মোট আয়ের হিসাব
    const totalRevenue = history.reduce((sum, item) => sum + parseFloat(item.salary || 0), 0);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <span className="loading loading-bars loading-lg text-emerald-600"></span>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                    <h2 className="text-3xl font-extrabold text-emerald-800">Revenue Dashboard</h2>
                    <p className="text-gray-500 italic">Alhamdulliah, keep track of your hard-earned money.</p>
                </div>
                <div className="badge badge-emerald p-4 gap-2 font-bold text-emerald-700 bg-emerald-100 border-none">
                    Verified Tutor
                </div>
            </div>

            {/* --- Stats Cards --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-8 rounded-3xl shadow-2xl transition-transform hover:scale-[1.02]">
                    <FaWallet className="absolute right-[-10px] bottom-[-10px] text-9xl opacity-10" />
                    <p className="text-lg font-medium opacity-90 uppercase tracking-widest">Total Earnings</p>
                    <h3 className="text-5xl font-black mt-2">${totalRevenue.toLocaleString()}</h3>
                </div>

                <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-3xl shadow-2xl transition-transform hover:scale-[1.02]">
                    <FaChalkboardTeacher className="absolute right-[-10px] bottom-[-10px] text-9xl opacity-10" />
                    <p className="text-lg font-medium opacity-90 uppercase tracking-widest">Successful Bookings</p>
                    <h3 className="text-5xl font-black mt-2">{history.length}</h3>
                </div>
            </div>

            {/* --- Transactions Table --- */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 bg-gray-50 border-b flex items-center gap-3">
                    <FaHistory className="text-emerald-600" />
                    <h3 className="font-bold text-gray-800 text-xl">Payment History</h3>
                </div>
                
                {history.length === 0 ? (
                    <div className="flex flex-col items-center py-20">
                        <div className="text-6xl mb-4">💰</div>
                        <p className="text-xl text-gray-400 font-medium">No revenue recorded yet.</p>
                        <p className="text-sm text-gray-300">Start applying for tuitions to earn!</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr className="text-gray-600 border-b">
                                    <th className="bg-gray-50">#</th>
                                    <th className="bg-gray-50">Student Details</th>
                                    <th className="bg-gray-50">Transaction ID</th>
                                    <th className="bg-gray-50">Amount</th>
                                    <th className="bg-gray-50">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.map((h, index) => (
                                    <tr key={h._id} className="hover:bg-emerald-50/50 transition-colors">
                                        <td className="font-bold text-gray-400">{index + 1}</td>
                                        <td>
                                            <div className="font-medium text-gray-700">{h.studentEmail}</div>
                                            <div className="text-xs text-emerald-600">Success</div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost font-mono text-xs py-3 px-4">
                                                {h.transactionId}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="text-lg font-bold text-emerald-600">${h.salary}</div>
                                        </td>
                                        <td className="text-gray-500">
                                            {new Date(h.date).toLocaleDateString('en-GB', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Revenue;
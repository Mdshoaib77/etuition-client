// import React from 'react'

// const Revenue = () => {
//   return (
//     <div>
//       <h1>Alhamdulliah</h1>
//     </div>
//   )
// }

// export default Revenue



import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const Revenue = () => {
    const { user } = useContext(AuthContext);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            fetch(`http://localhost:5000/tutor-revenue/${user?.email}`, {
                method: 'GET',
                credentials: "include"
            })
            .then(res => res.json())
            .then(data => {
                setHistory(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
        }
    }, [user?.email]);

    // Calculation for Total Earnings
    const totalRevenue = history.reduce((sum, item) => sum + parseFloat(item.salary || 0), 0);

    if (loading) return <div className="p-8 text-center font-bold">Loading Revenue Data...</div>;

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 italic text-emerald-700">Alhamdulliah, My Earnings</h2>

            {/* --- Revenue Stats --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-lg">
                    <p className="text-lg opacity-80">Total Revenue</p>
                    <h3 className="text-4xl font-bold">${totalRevenue}</h3>
                </div>
                <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                    <p className="text-lg opacity-80">Total Completed Lessons</p>
                    <h3 className="text-4xl font-bold">{history.length}</h3>
                </div>
            </div>

            {/* --- Transactions Table --- */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-4 bg-gray-100 border-b">
                    <h3 className="font-bold text-gray-700 uppercase tracking-wider">Transaction History</h3>
                </div>
                
                {history.length === 0 ? (
                    <p className="p-8 text-center text-gray-500">No earnings recorded yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th>#</th>
                                    <th>Student Email</th>
                                    <th>Transaction ID</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.map((h, index) => (
                                    <tr key={h._id} className="hover:bg-emerald-50 transition-colors">
                                        <td>{index + 1}</td>
                                        <td>{h.studentEmail}</td>
                                        <td className="font-mono text-xs text-blue-600">{h.transactionId}</td>
                                        <td className="font-bold text-emerald-600">${h.salary}</td>
                                        <td>{new Date(h.date).toLocaleDateString()}</td>
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
// // import React from 'react'

// // const OngoingTuitions = () => {
// //   return (
// //     <div>
// //       <h1>Alhamdulliah</h1>
// //     </div>
// //   )
// // }

// // export default OngoingTuitions


// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';

// const OngoingTuitions = () => {
//     const { user } = useContext(AuthContext);
//     const [tuitions, setTuitions] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             fetch(`http://localhost:5000/ongoing-tuitions/${user?.email}`, {
//                 method: 'GET',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 // Jodi cookie use koren credentials: "include" thakbe
//             })
//             .then(res => res.json())
//             .then(data => {
//                 setTuitions(data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error(err);
//                 setLoading(false);
//             });
//         }
//     }, [user?.email]);

//     if (loading) return <div className="p-10 text-center font-bold">Loading...</div>;

//     return (
//         <div className="p-8">
//             <h2 className="text-3xl font-bold mb-8 italic text-emerald-700 border-b-2 border-emerald-100 pb-2">
//                 Ongoing Tuitions (Alhamdulliah)
//             </h2>

//             {tuitions.length === 0 ? (
//                 <div className="bg-emerald-50 p-10 text-center rounded-xl border-2 border-dashed border-emerald-200">
//                     <p className="text-emerald-600 italic text-lg">No ongoing tuitions found. Complete a payment to start!</p>
//                 </div>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {tuitions.map((t) => (
//                         <div key={t._id} className="card bg-white shadow-xl border-t-4 border-emerald-500 hover:scale-105 transition-transform">
//                             <div className="card-body p-6">
//                                 <div className="flex justify-between items-start">
//                                     <h3 className="text-xl font-bold text-gray-800">{t.tuitionTitle}</h3>
//                                     <span className="badge badge-success text-white font-bold">ACTIVE</span>
//                                 </div>
                                
//                                 <div className="mt-4 space-y-2">
//                                     <p className="text-sm font-semibold text-gray-500">
//                                         {user?.email === t.studentEmail ? "Tutor Email:" : "Student Email:"}
//                                     </p>
//                                     <p className="bg-gray-100 p-2 rounded text-emerald-700 font-medium">
//                                         {user?.email === t.studentEmail ? t.tutorEmail : t.studentEmail}
//                                     </p>
                                    
//                                     <div className="flex justify-between items-center pt-4">
//                                         <div>
//                                             <p className="text-xs text-gray-400">Monthly Salary</p>
//                                             <p className="text-lg font-bold text-emerald-600">${t.salary}</p>
//                                         </div>
//                                         <button className="btn btn-sm btn-outline btn-success">
//                                             Contact Now
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default OngoingTuitions;


import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const OngoingTuitions = () => {
    const { user } = useContext(AuthContext);
    // 🔥 Fix 1: Initial state always ekti empty array [] hobe
    const [tuitions, setTuitions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/ongoing-tuitions/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // 🔥 Fix 2: Backend theke data array na ashle empty array set kora
                if (Array.isArray(data)) {
                    setTuitions(data);
                } else {
                    console.error("Data is not an array:", data);
                    setTuitions([]); 
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Fetch error:", err);
                setTuitions([]); 
                setLoading(false);
            });
        }
    }, [user?.email]);

    if (loading) return <div className="p-10 text-center font-bold">Loading...</div>;

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-8 italic text-emerald-700 border-b-2 border-emerald-100 pb-2">
                Ongoing Tuitions (Alhamdulliah)
            </h2>

            {/* 🔥 Fix 3: Condition check jate map crash na kore */}
            {(!tuitions || tuitions.length === 0) ? (
                <div className="bg-emerald-50 p-10 text-center rounded-xl border-2 border-dashed border-emerald-200">
                    <p className="text-emerald-600 italic text-lg">No ongoing tuitions found.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tuitions.map((t) => (
                        <div key={t._id} className="card bg-white shadow-xl border-t-4 border-emerald-500 hover:scale-105 transition-transform">
                            <div className="card-body p-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-gray-800">{t.tuitionTitle || "Tuition Title"}</h3>
                                    <span className="badge badge-success text-white font-bold">ACTIVE</span>
                                </div>
                                
                                <div className="mt-4 space-y-2">
                                    <p className="text-sm font-semibold text-gray-500">
                                        {user?.email === t.studentEmail ? "Tutor Email:" : "Student Email:"}
                                    </p>
                                    <p className="bg-gray-100 p-2 rounded text-emerald-700 font-medium">
                                        {user?.email === t.studentEmail ? t.tutorEmail : t.studentEmail}
                                    </p>
                                    
                                    <div className="flex justify-between items-center pt-4">
                                        <div>
                                            <p className="text-xs text-gray-400">Monthly Salary</p>
                                            <p className="text-lg font-bold text-emerald-600">${t.salary}</p>
                                        </div>
                                        <button className="btn btn-sm btn-outline btn-success">
                                            Contact Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OngoingTuitions;
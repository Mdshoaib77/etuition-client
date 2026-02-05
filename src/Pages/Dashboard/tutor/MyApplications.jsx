// // // // src/Pages/Dashboard/tutor/MyApplications.jsx

// // // import React from "react";

// // // const MyApplications = () => {
// // //   return (
// // //     <div className="p-8">
// // //       <h1 className="text-3xl font-bold">My Applications</h1>
// // //       <p>Dashboard/MyApplications page</p>
// // //     </div>
// // //   );
// // // };

// // // export default MyApplications; // ✅ Make sure default export is here


// // import React, { useEffect, useState, useContext } from 'react';
// // import { AuthContext } from '../../../context/AuthProvider';

// // const MyApplications = () => {
// //     const { user } = useContext(AuthContext);
// //     const [myApps, setMyApps] = useState([]);

// //     useEffect(() => {
// //         if(user?.email){
// //             fetch(`http://localhost:5000/tutor/my-applications/${user?.email}`)
// //                 .then(res => res.json())
// //                 .then(data => setMyApps(data));
// //         }
// //     }, [user]);

// //     return (
// //         <div className="p-8">
// //             <h2 className="text-2xl font-bold mb-6">My Tuition Applications</h2>
// //             <div className="grid gap-4">
// //                 {myApps.length === 0 ? <p>No applications found.</p> : 
// //                     myApps.map(app => (
// //                         <div key={app._id} className="p-5 bg-white shadow rounded-xl flex justify-between items-center border-l-4 border-emerald-500">
// //                             <div>
// //                                 <h3 className="font-bold text-lg">{app.tuitionTitle}</h3>
// //                                 <p className="text-sm text-gray-500 font-medium">Applied on: {new Date(app.appliedAt).toLocaleDateString()}</p>
// //                             </div>
// //                             <div className="text-right">
// //                                 <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${
// //                                     app.status === 'Accepted' ? 'bg-green-100 text-green-700' : 
// //                                     app.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
// //                                 }`}>
// //                                     {app.status}
// //                                 </span>
// //                             </div>
// //                         </div>
// //                     ))
// //                 }
// //             </div>
// //         </div>
// //     );
// // };

// // export default MyApplications;

// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';
// import { Clock, CheckCircle, XCircle, BookOpen } from 'lucide-react';

// const MyApplications = () => {
//     const { user } = useContext(AuthContext);
//     // 🔥 Initial state khori faka array [] diye
//     const [myApps, setMyApps] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             setLoading(true);
//             fetch(`http://localhost:5000/tutor/my-applications/${user?.email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     // 🔥 Check kora hocche data asholei Array kina
//                     if (Array.isArray(data)) {
//                         setMyApps(data);
//                     } else {
//                         setMyApps([]); // Array na hole faka kore dibo jate crash na kore
//                     }
//                     setLoading(false);
//                 })
//                 .catch(err => {
//                     console.error("Fetch error:", err);
//                     setMyApps([]);
//                     setLoading(false);
//                 });
//         }
//     }, [user?.email]);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-[400px]">
//                 <span className="loading loading-spinner loading-lg text-emerald-600"></span>
//             </div>
//         );
//     }

//     return (
//         <div className="p-8">
//             <div className="mb-8">
//                 <h2 className="text-3xl font-bold text-gray-800">My Applications</h2>
//                 <p className="text-gray-500 mt-2">Track the status of your tuition applications here.</p>
//             </div>

//             {/* 🔥 Safety Check: myApps array-te data ache kina */}
//             {(!myApps || myApps.length === 0) ? (
//                 <div className="bg-white p-12 text-center rounded-2xl shadow-sm border border-dashed border-gray-300">
//                     <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
//                     <p className="text-gray-500 text-lg italic">You haven't applied to any tuitions yet.</p>
//                 </div>
//             ) : (
//                 <div className="grid gap-6">
//                     {/* 🔥 Optional Chaining (?.) used for extra safety */}
//                     {myApps?.map(app => (
//                         <div key={app._id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col md:flex-row items-center p-6 gap-6">
//                             <div className="bg-emerald-50 p-4 rounded-xl text-emerald-600">
//                                 <BookOpen size={24} />
//                             </div>

//                             <div className="flex-grow">
//                                 <h3 className="text-xl font-bold text-gray-800">{app.tuitionTitle || "Untitled Tuition"}</h3>
//                                 <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 font-medium">
//                                     <span className="flex items-center gap-1">
//                                         <Clock size={16} /> {new Date(app.appliedAt).toLocaleDateString()}
//                                     </span>
//                                     <span className="text-gray-300">|</span>
//                                     <span>ID: {app.tuitionId?.slice(-6).toUpperCase()}</span>
//                                 </div>
//                             </div>

//                             <div className="text-right flex flex-col items-end gap-2">
//                                 <span className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
//                                     app.status === 'Accepted' ? 'bg-green-100 text-green-700' : 
//                                     app.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
//                                 }`}>
//                                     {app.status === 'Accepted' && <CheckCircle size={14} />}
//                                     {app.status === 'Rejected' && <XCircle size={14} />}
//                                     {app.status === 'pending' && <Clock size={14} />}
//                                     {app.status}
//                                 </span>
//                                 <p className="text-[10px] text-gray-400 font-bold uppercase">Current Status</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MyApplications;

import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyApplications = () => {
    const { user } = useContext(AuthContext);
    const [myApps, setMyApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            fetch(`http://localhost:5000/tutor/my-applications/${user?.email}`, {
                method: 'GET',
                credentials: "include" // 🔥 Crucial for Cookie
            })
            .then(res => res.json())
            .then(data => {
                setMyApps(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
        }
    }, [user?.email]);

    if (loading) return <div className="p-8">Loading...</div>;

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 italic">My Applications</h2>
            <div className="grid gap-4">
                {myApps.length === 0 ? <p>No applications yet.</p> : 
                    myApps.map(app => (
                        <div key={app._id} className="p-5 bg-white shadow-md rounded-xl flex justify-between border-l-4 border-emerald-500">
                            <div>
                                <h3 className="font-bold">{app.tuitionTitle}</h3>
                                <p className="text-xs text-gray-400">Applied: {new Date(app.appliedAt).toLocaleDateString()}</p>
                            </div>
                            <span className={`badge font-bold ${app.status === 'Accepted' ? 'badge-success' : app.status === 'Rejected' ? 'badge-error' : 'badge-warning'}`}>
                                {app.status}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyApplications;
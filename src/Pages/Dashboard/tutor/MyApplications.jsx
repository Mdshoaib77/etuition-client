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

// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';

// const MyApplications = () => {
//     const { user } = useContext(AuthContext);
//     const [myApps, setMyApps] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             setLoading(true);
//             fetch(`http://localhost:5000/tutor/my-applications/${user?.email}`, {
//                 method: 'GET',
//                 credentials: "include" // 🔥 Crucial for Cookie
//             })
//             .then(res => res.json())
//             .then(data => {
//                 setMyApps(Array.isArray(data) ? data : []);
//                 setLoading(false);
//             })
//             .catch(() => setLoading(false));
//         }
//     }, [user?.email]);

//     if (loading) return <div className="p-8">Loading...</div>;

//     return (
//         <div className="p-8">
//             <h2 className="text-2xl font-bold mb-6 italic">My Applications</h2>
//             <div className="grid gap-4">
//                 {myApps.length === 0 ? <p>No applications yet.</p> : 
//                     myApps.map(app => (
//                         <div key={app._id} className="p-5 bg-white shadow-md rounded-xl flex justify-between border-l-4 border-emerald-500">
//                             <div>
//                                 <h3 className="font-bold">{app.tuitionTitle}</h3>
//                                 <p className="text-xs text-gray-400">Applied: {new Date(app.appliedAt).toLocaleDateString()}</p>
//                             </div>
//                             <span className={`badge font-bold ${app.status === 'Accepted' ? 'badge-success' : app.status === 'Rejected' ? 'badge-error' : 'badge-warning'}`}>
//                                 {app.status}
//                             </span>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default MyApplications;

// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';
// import { Calendar, Banknote, Clock, BookOpen, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

// const MyApplications = () => {
//     const { user } = useContext(AuthContext);
//     const [myApps, setMyApps] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             setLoading(true);
//             fetch(`http://localhost:5000/tutor/my-applications/${user?.email}`, {
//                 method: 'GET',
//                 credentials: "include" 
//             })
//             .then(res => res.json())
//             .then(data => {
//                 setMyApps(Array.isArray(data) ? data : []);
//                 setLoading(false);
//             })
//             .catch(() => setLoading(false));
//         }
//     }, [user?.email]);

//     if (loading) return (
//         <div className="flex justify-center items-center min-h-[400px]">
//             <span className="loading loading-spinner loading-lg text-emerald-600"></span>
//         </div>
//     );

//     return (
//         <div className="p-4 md:p-8 max-w-5xl mx-auto">
//             <div className="mb-8">
//                 <h2 className="text-3xl font-extrabold text-gray-800">My <span className="text-emerald-600">Applications</span></h2>
//                 <p className="text-gray-500 text-sm mt-1">Track the status of your tuition applications</p>
//                 <div className="w-16 h-1 bg-emerald-600 mt-3 rounded-full"></div>
//             </div>

//             <div className="grid gap-4 lg:grid-cols-2">
//                 {myApps.length === 0 ? (
//                     <div className="col-span-full py-20 text-center bg-white rounded-2xl border-2 border-dashed border-gray-200">
//                         <p className="text-gray-400 font-medium">You haven't applied to any tuitions yet.</p>
//                     </div>
//                 ) : (
//                     myApps.map(app => (
//                         <div key={app._id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
//                             {/* Status Indicator Bar */}
//                             <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
//                                 app.status === 'Accepted' ? 'bg-emerald-500' : 
//                                 app.status === 'Rejected' ? 'bg-red-500' : 'bg-amber-500'
//                             }`} />

//                             <div className="flex flex-col h-full">
//                                 <div className="flex justify-between items-start mb-3 gap-2">
//                                     <h3 className="font-bold text-gray-800 text-lg leading-tight line-clamp-1">
//                                         {app.tuitionTitle}
//                                     </h3>
//                                     <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
//                                         app.status === 'Accepted' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 
//                                         app.status === 'Rejected' ? 'bg-red-50 text-red-600 border border-red-100' : 
//                                         'bg-amber-50 text-amber-600 border border-amber-100'
//                                     }`}>
//                                         {app.status === 'Accepted' && <CheckCircle2 size={12} />}
//                                         {app.status === 'Rejected' && <XCircle size={12} />}
//                                         {app.status === 'pending' && <Clock size={12} />}
//                                         {app.status}
//                                     </span>
//                                 </div>

//                                 <div className="grid grid-cols-2 gap-3 mt-auto">
//                                     <div className="flex items-center gap-2 text-gray-500">
//                                         <div className="p-1.5 bg-gray-50 rounded-lg"><Calendar size={14} /></div>
//                                         <div>
//                                             <p className="text-[9px] uppercase font-bold text-gray-400 leading-none">Applied on</p>
//                                             <p className="text-xs font-semibold">{new Date(app.appliedAt).toLocaleDateString()}</p>
//                                         </div>
//                                     </div>
                                    
//                                     {/* 🔥 SHOWING THE EXPECTED SALARY FROM MODAL */}
//                                     <div className="flex items-center gap-2 text-gray-500">
//                                         <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-600"><Banknote size={14} /></div>
//                                         <div>
//                                             <p className="text-[9px] uppercase font-bold text-gray-400 leading-none">Your Bid</p>
//                                             <p className="text-xs font-bold text-emerald-700">৳{app.expectedSalary}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Experience Hint (Optional) */}
//                                 <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
//                                     <div className="flex items-center gap-2">
//                                         <BookOpen size={14} className="text-gray-400" />
//                                         <span className="text-[11px] text-gray-500 truncate max-w-[200px]">
//                                             {app.qualifications}
//                                         </span>
//                                     </div>
//                                     <button className="text-[10px] font-bold text-emerald-600 hover:underline">View Details</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MyApplications;


import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { Calendar, Banknote, Clock, BookOpen, CheckCircle2, XCircle, CreditCard, Info } from 'lucide-react';

const MyApplications = () => {
    const { user } = useContext(AuthContext);
    const [myApps, setMyApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            fetch(`http://localhost:5000/tutor/my-applications/${user?.email}`, {
                method: 'GET',
                credentials: "include" 
            })
            .then(res => res.json())
            .then(data => {
                setMyApps(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
        }
    }, [user?.email]);

    if (loading) return (
        <div className="flex justify-center items-center min-h-[400px]">
            <span className="loading loading-spinner loading-lg text-emerald-600"></span>
        </div>
    );

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto animate-fadeIn">
            {/* --- Header Section --- */}
            <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                    My <span className="text-emerald-600">Applications</span>
                </h2>
                <p className="text-gray-500 text-sm mt-2 flex items-center gap-1">
                    <Info size={14} /> Track the real-time status of your tuition requests
                </p>
                <div className="w-20 h-1.5 bg-emerald-600 mt-4 rounded-full shadow-sm"></div>
            </div>

            {/* --- Applications Grid --- */}
            <div className="grid gap-6 md:grid-cols-2">
                {myApps.length === 0 ? (
                    <div className="col-span-full py-24 text-center bg-white rounded-3xl border-2 border-dashed border-gray-100 flex flex-col items-center">
                        <div className="bg-gray-50 p-4 rounded-full mb-4">
                            <BookOpen size={40} className="text-gray-300" />
                        </div>
                        <p className="text-gray-400 font-semibold text-lg">No applications found!</p>
                        <p className="text-gray-300 text-sm">Start browsing tuitions and apply to see them here.</p>
                    </div>
                ) : (
                    myApps.map(app => (
                        <div key={app._id} className="group bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 relative overflow-hidden">
                            
                            {/* --- Left Status Border --- */}
                            <div className={`absolute left-0 top-0 bottom-0 w-2 ${
                                app.status === 'Approved' ? 'bg-emerald-500' : 
                                app.status === 'Rejected' ? 'bg-red-500' : 'bg-amber-400'
                            }`} />

                            <div className="flex flex-col h-full">
                                {/* --- Top Row: Title & Status --- */}
                                <div className="flex justify-between items-start mb-5 gap-3">
                                    <h3 className="font-black text-gray-800 text-xl leading-tight group-hover:text-emerald-700 transition-colors">
                                        {app.tuitionTitle}
                                    </h3>
                                    <div className="flex flex-col items-end gap-2">
                                        <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tighter shadow-sm ${
                                            app.status === 'Approved' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 
                                            app.status === 'Rejected' ? 'bg-red-100 text-red-700 border border-red-200' : 
                                            'bg-amber-100 text-amber-700 border border-amber-200'
                                        }`}>
                                            {app.status === 'Approved' && <CheckCircle2 size={13} />}
                                            {app.status === 'Rejected' && <XCircle size={13} />}
                                            {app.status === 'pending' && <Clock size={13} />}
                                            {app.status}
                                        </span>
                                        {app.paid && (
                                            <span className="flex items-center gap-1 text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100 italic">
                                                <CreditCard size={10} /> Paid & Confirmed
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* --- Info Grid --- */}
                                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-2xl mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white rounded-xl shadow-sm text-gray-400"><Calendar size={16} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase font-black text-gray-400 leading-none mb-1">Date</p>
                                            <p className="text-xs font-bold text-gray-700">{new Date(app.appliedAt).toLocaleDateString('en-GB')}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white rounded-xl shadow-sm text-emerald-500"><Banknote size={16} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase font-black text-gray-400 leading-none mb-1">Your Bid</p>
                                            <p className="text-sm font-black text-emerald-600">৳{app.expectedSalary}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* --- Footer: Qualifications & Action --- */}
                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2 max-w-[70%]">
                                        <div className="min-w-[14px]"><BookOpen size={14} className="text-gray-300" /></div>
                                        <span className="text-[11px] text-gray-500 truncate italic">
                                            "{app.qualifications || "No additional info provided"}"
                                        </span>
                                    </div>
                                    <button className="text-xs font-black text-emerald-600 hover:text-emerald-800 transition-colors underline underline-offset-4">
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyApplications;
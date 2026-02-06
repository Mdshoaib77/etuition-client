// // // import React from 'react'

// // // const OngoingTuitions = () => {
// // //   return (
// // //     <div>
// // //       <h1>Alhamdulliah</h1>
// // //     </div>
// // //   )
// // // }

// // // export default OngoingTuitions


// // import React, { useEffect, useState, useContext } from 'react';
// // import { AuthContext } from '../../../context/AuthProvider';

// // const OngoingTuitions = () => {
// //     const { user } = useContext(AuthContext);
// //     const [tuitions, setTuitions] = useState([]);
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         if (user?.email) {
// //             fetch(`http://localhost:5000/ongoing-tuitions/${user?.email}`, {
// //                 method: 'GET',
// //                 headers: {
// //                     'content-type': 'application/json'
// //                 },
// //                 // Jodi cookie use koren credentials: "include" thakbe
// //             })
// //             .then(res => res.json())
// //             .then(data => {
// //                 setTuitions(data);
// //                 setLoading(false);
// //             })
// //             .catch(err => {
// //                 console.error(err);
// //                 setLoading(false);
// //             });
// //         }
// //     }, [user?.email]);

// //     if (loading) return <div className="p-10 text-center font-bold">Loading...</div>;

// //     return (
// //         <div className="p-8">
// //             <h2 className="text-3xl font-bold mb-8 italic text-emerald-700 border-b-2 border-emerald-100 pb-2">
// //                 Ongoing Tuitions (Alhamdulliah)
// //             </h2>

// //             {tuitions.length === 0 ? (
// //                 <div className="bg-emerald-50 p-10 text-center rounded-xl border-2 border-dashed border-emerald-200">
// //                     <p className="text-emerald-600 italic text-lg">No ongoing tuitions found. Complete a payment to start!</p>
// //                 </div>
// //             ) : (
// //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //                     {tuitions.map((t) => (
// //                         <div key={t._id} className="card bg-white shadow-xl border-t-4 border-emerald-500 hover:scale-105 transition-transform">
// //                             <div className="card-body p-6">
// //                                 <div className="flex justify-between items-start">
// //                                     <h3 className="text-xl font-bold text-gray-800">{t.tuitionTitle}</h3>
// //                                     <span className="badge badge-success text-white font-bold">ACTIVE</span>
// //                                 </div>
                                
// //                                 <div className="mt-4 space-y-2">
// //                                     <p className="text-sm font-semibold text-gray-500">
// //                                         {user?.email === t.studentEmail ? "Tutor Email:" : "Student Email:"}
// //                                     </p>
// //                                     <p className="bg-gray-100 p-2 rounded text-emerald-700 font-medium">
// //                                         {user?.email === t.studentEmail ? t.tutorEmail : t.studentEmail}
// //                                     </p>
                                    
// //                                     <div className="flex justify-between items-center pt-4">
// //                                         <div>
// //                                             <p className="text-xs text-gray-400">Monthly Salary</p>
// //                                             <p className="text-lg font-bold text-emerald-600">${t.salary}</p>
// //                                         </div>
// //                                         <button className="btn btn-sm btn-outline btn-success">
// //                                             Contact Now
// //                                         </button>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default OngoingTuitions;


// // import React, { useEffect, useState, useContext } from 'react';
// // import { AuthContext } from '../../../context/AuthProvider';

// // const OngoingTuitions = () => {
// //     const { user } = useContext(AuthContext);
// //     // 🔥 Fix 1: Initial state always ekti empty array [] hobe
// //     const [tuitions, setTuitions] = useState([]);
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         if (user?.email) {
// //             fetch(`http://localhost:5000/ongoing-tuitions/${user?.email}`)
// //             .then(res => res.json())
// //             .then(data => {
// //                 // 🔥 Fix 2: Backend theke data array na ashle empty array set kora
// //                 if (Array.isArray(data)) {
// //                     setTuitions(data);
// //                 } else {
// //                     console.error("Data is not an array:", data);
// //                     setTuitions([]); 
// //                 }
// //                 setLoading(false);
// //             })
// //             .catch(err => {
// //                 console.error("Fetch error:", err);
// //                 setTuitions([]); 
// //                 setLoading(false);
// //             });
// //         }
// //     }, [user?.email]);

// //     if (loading) return <div className="p-10 text-center font-bold">Loading...</div>;

// //     return (
// //         <div className="p-8">
// //             <h2 className="text-3xl font-bold mb-8 italic text-emerald-700 border-b-2 border-emerald-100 pb-2">
// //                 Ongoing Tuitions (Alhamdulliah)
// //             </h2>

// //             {/* 🔥 Fix 3: Condition check jate map crash na kore */}
// //             {(!tuitions || tuitions.length === 0) ? (
// //                 <div className="bg-emerald-50 p-10 text-center rounded-xl border-2 border-dashed border-emerald-200">
// //                     <p className="text-emerald-600 italic text-lg">No ongoing tuitions found.</p>
// //                 </div>
// //             ) : (
// //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //                     {tuitions.map((t) => (
// //                         <div key={t._id} className="card bg-white shadow-xl border-t-4 border-emerald-500 hover:scale-105 transition-transform">
// //                             <div className="card-body p-6">
// //                                 <div className="flex justify-between items-start">
// //                                     <h3 className="text-xl font-bold text-gray-800">{t.tuitionTitle || "Tuition Title"}</h3>
// //                                     <span className="badge badge-success text-white font-bold">ACTIVE</span>
// //                                 </div>
                                
// //                                 <div className="mt-4 space-y-2">
// //                                     <p className="text-sm font-semibold text-gray-500">
// //                                         {user?.email === t.studentEmail ? "Tutor Email:" : "Student Email:"}
// //                                     </p>
// //                                     <p className="bg-gray-100 p-2 rounded text-emerald-700 font-medium">
// //                                         {user?.email === t.studentEmail ? t.tutorEmail : t.studentEmail}
// //                                     </p>
                                    
// //                                     <div className="flex justify-between items-center pt-4">
// //                                         <div>
// //                                             <p className="text-xs text-gray-400">Monthly Salary</p>
// //                                             <p className="text-lg font-bold text-emerald-600">${t.salary}</p>
// //                                         </div>
// //                                         <button className="btn btn-sm btn-outline btn-success">
// //                                             Contact Now
// //                                         </button>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default OngoingTuitions;

// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';
// import { Phone, Mail, DollarSign, User, Calendar, ExternalLink } from 'lucide-react';

// const OngoingTuitions = () => {
//     const { user } = useContext(AuthContext);
//     const [tuitions, setTuitions] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             setLoading(true);
//             // আমরা পেমেন্ট হয়ে যাওয়া এবং বুকড টিউটোরিয়ালগুলোকেই 'Ongoing' হিসেবে ধরছি
//             fetch(`http://localhost:5000/ongoing-tuitions/${user?.email}`, {
//                 method: 'GET',
//                 credentials: "include"
//             })
//             .then(res => res.json())
//             .then(data => {
//                 if (Array.isArray(data)) {
//                     setTuitions(data);
//                 } else {
//                     setTuitions([]); 
//                 }
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error("Fetch error:", err);
//                 setTuitions([]); 
//                 setLoading(false);
//             });
//         }
//     }, [user?.email]);

//     if (loading) return (
//         <div className="flex justify-center items-center min-h-[400px]">
//             <span className="loading loading-spinner loading-lg text-emerald-600"></span>
//         </div>
//     );

//     return (
//         <div className="p-4 md:p-8 max-w-7xl mx-auto">
//             <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
//                 <div>
//                     <h2 className="text-3xl font-black text-gray-800">
//                         Ongoing <span className="text-emerald-600">Tuitions</span>
//                     </h2>
//                     <p className="text-gray-500 italic mt-1">Manage your active learning and teaching sessions.</p>
//                 </div>
//                 <div className="badge badge-lg bg-emerald-100 text-emerald-700 border-none p-4 font-bold shadow-sm">
//                     {tuitions.length} Active Sessions
//                 </div>
//             </div>

//             {tuitions.length === 0 ? (
//                 <div className="bg-white p-16 text-center rounded-3xl border-2 border-dashed border-gray-100 shadow-sm flex flex-col items-center">
//                     <div className="bg-emerald-50 p-6 rounded-full mb-6">
//                         <Calendar size={48} className="text-emerald-300" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-700">No active tuitions found!</h3>
//                     <p className="text-gray-400 mt-2 max-w-sm">
//                         Tuitions will appear here once the payment is confirmed and the tutor is booked.
//                     </p>
//                 </div>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//                     {tuitions.map((t) => (
//                         <div key={t._id} className="group bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-emerald-200 transition-all duration-300">
                            
//                             {/* --- Card Header --- */}
//                             <div className="bg-emerald-600 p-6 text-white relative">
//                                 <div className="absolute right-4 top-4">
//                                     <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/30">
//                                         Active
//                                     </span>
//                                 </div>
//                                 <h3 className="text-xl font-black leading-tight mt-2 pr-10">
//                                     {t.tuitionTitle || "Untitled Session"}
//                                 </h3>
//                             </div>

//                             <div className="p-6">
//                                 {/* --- Info Section --- */}
//                                 <div className="space-y-4">
//                                     <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl">
//                                         <div className="p-2 bg-white rounded-xl shadow-sm text-emerald-600">
//                                             <User size={18} />
//                                         </div>
//                                         <div className="overflow-hidden">
//                                             <p className="text-[10px] font-black text-gray-400 uppercase leading-none mb-1">
//                                                 {user?.email === t.studentEmail ? "Assigned Tutor" : "Assigned Student"}
//                                             </p>
//                                             <p className="text-sm font-bold text-gray-700 truncate">
//                                                 {user?.email === t.studentEmail ? t.tutorEmail : t.studentEmail}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <div className="grid grid-cols-2 gap-4">
//                                         <div className="flex items-center gap-3">
//                                             <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600">
//                                                 <DollarSign size={16} />
//                                             </div>
//                                             <div>
//                                                 <p className="text-[9px] font-black text-gray-400 uppercase">Monthly</p>
//                                                 <p className="text-sm font-black text-emerald-600">৳{t.salary}</p>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center gap-3">
//                                             <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
//                                                 <Mail size={16} />
//                                             </div>
//                                             <div>
//                                                 <p className="text-[9px] font-black text-gray-400 uppercase">Status</p>
//                                                 <p className="text-xs font-black text-blue-600 italic uppercase">Paid</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* --- Actions --- */}
//                                 <div className="mt-8 pt-6 border-t border-gray-50 flex gap-3">
//                                     <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3 rounded-2xl transition-all shadow-lg shadow-emerald-100 flex items-center justify-center gap-2 text-sm">
//                                         <Phone size={16} /> Contact
//                                     </button>
//                                     <button className="p-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-2xl transition-all">
//                                         <ExternalLink size={18} />
//                                     </button>
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
import { Phone, Mail, DollarSign, User, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';

const OngoingTuitions = () => {
    const { user } = useContext(AuthContext);
    const [tuitions, setTuitions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            fetch(`http://localhost:5000/ongoing-tuitions/${user?.email}`, {
                method: 'GET',
                credentials: "include"
            })
            .then(res => res.json())
            .then(data => {
                setTuitions(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Fetch error:", err);
                setTuitions([]); 
                setLoading(false);
            });
        }
    }, [user?.email]);

    if (loading) return (
        <div className="flex justify-center items-center min-h-[400px]">
            <span className="loading loading-bars loading-lg text-emerald-600"></span>
        </div>
    );

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto animate-fadeIn">
            {/* --- Header --- */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <div>
                    <h2 className="text-3xl font-black text-gray-800 tracking-tight">
                        Ongoing <span className="text-emerald-700">Tuitions</span>
                    </h2>
                    <p className="text-gray-500 font-medium mt-1 italic">Alhamdulliah, your active teaching journey</p>
                    <div className="w-20 h-1.5 bg-emerald-600 mt-4 rounded-full"></div>
                </div>
                <div className="stats shadow-sm border border-emerald-100 overflow-hidden">
                    <div className="stat bg-emerald-50 px-6 py-3">
                        <div className="stat-title text-emerald-700 font-bold uppercase text-xs">Total Active</div>
                        <div className="stat-value text-emerald-600 text-2xl">{tuitions.length}</div>
                    </div>
                </div>
            </div>

            {/* --- Content --- */}
            {tuitions.length === 0 ? (
                <div className="bg-white p-20 text-center rounded-[3rem] border-2 border-dashed border-gray-100 flex flex-col items-center">
                    <div className="bg-gray-50 p-6 rounded-full mb-6">
                        <Calendar size={48} className="text-gray-200" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-600">No ongoing tuitions found.</h3>
                    <p className="text-gray-400 mt-2 max-w-sm">
                        Tuitions will appear here once the student completes the payment and confirms you as their tutor.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tuitions.map((t) => (
                        <div key={t._id} className="group bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-emerald-200 transition-all duration-500">
                            
                            {/* Card Header with Status */}
                            <div className="bg-emerald-600 p-6 text-white relative">
                                <div className="absolute right-4 top-4 flex gap-2">
                                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 border border-white/30">
                                        <ShieldCheck size={12} /> Verified
                                    </span>
                                </div>
                                <h3 className="text-xl font-black leading-tight mt-3 pr-8 truncate">
                                    {t.tuitionTitle}
                                </h3>
                                <p className="text-emerald-100 text-xs mt-1 font-medium opacity-80">
                                    ID: {t.tuitionId?.slice(-6).toUpperCase() || t._id.slice(-6).toUpperCase()}
                                </p>
                            </div>

                            <div className="p-7">
                                {/* Interaction Info */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-emerald-50/50 rounded-2xl border border-emerald-50">
                                        <div className="p-2.5 bg-white rounded-xl shadow-sm text-emerald-600">
                                            <User size={20} />
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider leading-none mb-1">
                                                {user?.email === t.studentEmail ? "Assigned Tutor" : "Student Contact"}
                                            </p>
                                            <p className="text-sm font-bold text-gray-700 truncate">
                                                {user?.email === t.studentEmail ? t.tutorEmail : t.studentEmail}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-50 rounded-2xl">
                                            <p className="text-[9px] font-black text-gray-400 uppercase mb-1">Net Salary</p>
                                            <div className="flex items-center gap-1 text-emerald-600">
                                                <DollarSign size={14} />
                                                <span className="text-lg font-black tracking-tight">৳{t.salary || t.expectedSalary}</span>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-2xl">
                                            <p className="text-[9px] font-black text-gray-400 uppercase mb-1">Payment</p>
                                            <div className="flex items-center gap-1 text-blue-600">
                                                <ShieldCheck size={14} />
                                                <span className="text-xs font-black uppercase italic">Received</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Action Buttons */}
                                <div className="mt-8 flex gap-3">
                                    <button className="flex-[3] bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-emerald-100 flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                                        <Phone size={18} /> Contact Now
                                    </button>
                                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-2xl transition-all flex items-center justify-center">
                                        <Mail size={20} />
                                    </button>
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
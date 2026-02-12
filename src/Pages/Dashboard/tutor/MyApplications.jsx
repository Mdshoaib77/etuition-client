// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';
// import { Calendar, Banknote, Clock, BookOpen, CheckCircle2, XCircle, CreditCard, Info } from 'lucide-react';

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
//         <div className="p-4 md:p-8 max-w-6xl mx-auto animate-fadeIn">
//             {/* --- Header Section --- */}
//             <div className="mb-10">
//                 <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
//                     My <span className="text-emerald-600">Applications</span>
//                 </h2>
//                 <p className="text-gray-500 text-sm mt-2 flex items-center gap-1">
//                     <Info size={14} /> Track the real-time status of your tuition requests
//                 </p>
//                 <div className="w-20 h-1.5 bg-emerald-600 mt-4 rounded-full shadow-sm"></div>
//             </div>

//             {/* --- Applications Grid --- */}
//             <div className="grid gap-6 md:grid-cols-2">
//                 {myApps.length === 0 ? (
//                     <div className="col-span-full py-24 text-center bg-white rounded-3xl border-2 border-dashed border-gray-100 flex flex-col items-center">
//                         <div className="bg-gray-50 p-4 rounded-full mb-4">
//                             <BookOpen size={40} className="text-gray-300" />
//                         </div>
//                         <p className="text-gray-400 font-semibold text-lg">No applications found!</p>
//                         <p className="text-gray-300 text-sm">Start browsing tuitions and apply to see them here.</p>
//                     </div>
//                 ) : (
//                     myApps.map(app => (
//                         <div key={app._id} className="group bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 relative overflow-hidden">
                            
//                             {/* --- Left Status Border --- */}
//                             <div className={`absolute left-0 top-0 bottom-0 w-2 ${
//                                 app.status === 'Approved' ? 'bg-emerald-500' : 
//                                 app.status === 'Rejected' ? 'bg-red-500' : 'bg-amber-400'
//                             }`} />

//                             <div className="flex flex-col h-full">
//                                 {/* --- Top Row: Title & Status --- */}
//                                 <div className="flex justify-between items-start mb-5 gap-3">
//                                     <h3 className="font-black text-gray-800 text-xl leading-tight group-hover:text-emerald-700 transition-colors">
//                                         {app.tuitionTitle}
//                                     </h3>
//                                     <div className="flex flex-col items-end gap-2">
//                                         <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tighter shadow-sm ${
//                                             app.status === 'Approved' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 
//                                             app.status === 'Rejected' ? 'bg-red-100 text-red-700 border border-red-200' : 
//                                             'bg-amber-100 text-amber-700 border border-amber-200'
//                                         }`}>
//                                             {app.status === 'Approved' && <CheckCircle2 size={13} />}
//                                             {app.status === 'Rejected' && <XCircle size={13} />}
//                                             {app.status === 'pending' && <Clock size={13} />}
//                                             {app.status}
//                                         </span>
//                                         {app.paid && (
//                                             <span className="flex items-center gap-1 text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100 italic">
//                                                 <CreditCard size={10} /> Paid & Confirmed
//                                             </span>
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* --- Info Grid --- */}
//                                 <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-2xl mb-4">
//                                     <div className="flex items-center gap-3">
//                                         <div className="p-2 bg-white rounded-xl shadow-sm text-gray-400"><Calendar size={16} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-black text-gray-400 leading-none mb-1">Date</p>
//                                             <p className="text-xs font-bold text-gray-700">{new Date(app.appliedAt).toLocaleDateString('en-GB')}</p>
//                                         </div>
//                                     </div>
                                    
//                                     <div className="flex items-center gap-3">
//                                         <div className="p-2 bg-white rounded-xl shadow-sm text-emerald-500"><Banknote size={16} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-black text-gray-400 leading-none mb-1">Your Bid</p>
//                                             <p className="text-sm font-black text-emerald-600">৳{app.expectedSalary}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* --- Footer: Qualifications & Action --- */}
//                                 <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
//                                     <div className="flex items-center gap-2 max-w-[70%]">
//                                         <div className="min-w-[14px]"><BookOpen size={14} className="text-gray-300" /></div>
//                                         <span className="text-[11px] text-gray-500 truncate italic">
//                                             "{app.qualifications || "No additional info provided"}"
//                                         </span>
//                                     </div>
//                                     <button className="text-xs font-black text-emerald-600 hover:text-emerald-800 transition-colors underline underline-offset-4">
//                                         Details
//                                     </button>
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

// Backend URL from .env
const backendUrl = import.meta.env.VITE_API_URL;

const MyApplications = () => {
    const { user } = useContext(AuthContext);
    const [myApps, setMyApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            fetch(`${backendUrl}/tutor/my-applications/${user?.email}`, {
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

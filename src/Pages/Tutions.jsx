// import React from 'react'

// const Tutions = () => {
//   return (
//     <div>
//       Alhamdulliah 
//     </div>
//   )
// }

// export default Tutions


// import React, { useEffect, useState } from 'react';

// const Tuitions = () => {
//     const [tuitions, setTuitions] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5000/tuitions')
//             .then(res => res.json())
//             .then(data => setTuitions(data));
//     }, []);

//     return (
//         <div className="max-w-7xl mx-auto p-4">
//             <h2 className="text-3xl font-bold text-center mb-8">Available Tuitions</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {tuitions.map(t => (
//                     <div key={t._id} className="card bg-base-100 shadow-xl border border-emerald-100">
//                         <div className="card-body">
//                             <h2 className="card-title text-emerald-700">{t.title}</h2>
//                             <p><strong>Subject:</strong> {t.subject}</p>
//                             <p><strong>Class:</strong> {t.class}</p>
//                             <p><strong>Salary:</strong> {t.salary} BDT</p>
//                             <div className="card-actions justify-end mt-4">
//                                 <button className="btn btn-sm bg-emerald-600 text-white">View Details</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Tuitions;


// import React, { useEffect, useState } from 'react';
// import { MapPin, GraduationCap, Users, BookOpen, Calendar, Clock, UserCircle2 } from 'lucide-react';

// const Tuitions = () => {
//     const [tuitions, setTuitions] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5000/tuitions')
//             .then(res => res.json())
//             .then(data => setTuitions(data));
//     }, []);

//     return (
//         <div className="bg-gray-50 min-h-screen py-12 px-4">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-12">
//                     <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
//                         Available <span className="text-emerald-600">Tuitions</span>
//                     </h2>
//                     <p className="text-gray-500 font-medium">Find the perfect teaching opportunity that fits your schedule</p>
//                     <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {tuitions.map((t) => (
//                         <div key={t._id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
//                             {/* Card Header with Gradient */}
//                             <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-4 flex justify-between items-center text-white">
//                                 <span className="text-xs font-bold opacity-90 tracking-widest uppercase"># ID: {t._id?.slice(-5).toUpperCase() || "COM19"}</span>
//                                 <span className="text-xs bg-white/20 px-2 py-1 rounded-md backdrop-blur-sm">1d ago</span>
//                             </div>

//                             <div className="p-6">
//                                 {/* Title and Salary Section */}
//                                 <div className="flex justify-between items-start mb-6">
//                                     <h3 className="text-xl font-bold text-gray-800 leading-tight">
//                                         {t.title || "Male/Female Tutor"}
//                                     </h3>
//                                     <div className="bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-100">
//                                         <span className="text-emerald-700 font-bold text-lg">৳ {t.salary}</span>
//                                         <span className="text-emerald-600 text-xs font-bold ml-1 uppercase">BDT</span>
//                                     </div>
//                                 </div>

//                                 {/* Grid of Info Items */}
//                                 <div className="grid grid-cols-2 gap-y-5 gap-x-2 border-b border-gray-100 pb-6 mb-6">
//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><MapPin size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Location</p>
//                                             <p className="text-sm font-semibold text-gray-700 line-clamp-2 leading-snug">{t.location || "Cumilla"}</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><GraduationCap size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Class</p>
//                                             <p className="text-sm font-semibold text-gray-700">{t.class || "N/A"}</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-orange-50 rounded-lg text-orange-600"><Users size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Group</p>
//                                             <p className="text-sm font-semibold text-gray-700">{t.group || "All"}</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600"><BookOpen size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Subjects</p>
//                                             <p className="text-sm font-semibold text-gray-700">{t.subjects || "All"}</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-pink-50 rounded-lg text-pink-600"><Calendar size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Days</p>
//                                             <p className="text-sm font-semibold text-gray-700">{t.days || "0"} Days/Week</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-cyan-50 rounded-lg text-cyan-600"><Clock size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Time</p>
//                                             <p className="text-sm font-semibold text-gray-700">{t.time || "N/A"}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Footer: Gender and Action */}
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-2">
//                                         <UserCircle2 className="text-gray-400" size={20} />
//                                         <span className="text-sm font-bold text-gray-600">Student: <span className="text-emerald-600">{t.studentGender || "Any"}</span></span>
//                                     </div>
//                                     <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-200">
//                                         <span className="text-lg">⚠</span> Apply Now
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Tuitions;


import React, { useEffect, useState } from 'react';
import { MapPin, GraduationCap, Users, BookOpen, Calendar, Clock, UserCircle2, Briefcase } from 'lucide-react';

const Tuitions = () => {
    const [tuitions, setTuitions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tuitions')
            .then(res => res.json())
            .then(data => setTuitions(data));
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
                        Available <span className="text-emerald-600">Tuitions</span>
                    </h2>
                    <p className="text-gray-500 font-medium">Find the perfect teaching opportunity that fits your schedule</p>
                    <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tuitions.map((t) => (
                        <div key={t._id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                            {/* Card Header with Gradient */}
                            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-4 flex justify-between items-center text-white">
                                <span className="text-xs font-bold opacity-90 tracking-widest uppercase"># ID: {t._id?.slice(-5).toUpperCase()}</span>
                                <span className="text-xs bg-white/20 px-2 py-1 rounded-md backdrop-blur-sm">
                                    {t.createdAt ? new Date(t.createdAt).toLocaleDateString() : 'Just Now'}
                                </span>
                            </div>

                            <div className="p-6 flex-grow">
                                {/* Title and Salary Section */}
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 leading-tight">
                                        {t.title}
                                    </h3>
                                    <div className="bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-100 flex flex-col items-center min-w-[80px]">
                                        <span className="text-emerald-700 font-bold text-lg">৳{t.salary}</span>
                                        <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-tighter">Per Month</span>
                                    </div>
                                </div>

                                {/* Grid of Info Items */}
                                <div className="grid grid-cols-2 gap-y-5 gap-x-2 border-b border-gray-100 pb-6 mb-6">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><MapPin size={18} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Location</p>
                                            <p className="text-sm font-semibold text-gray-700 line-clamp-1">{t.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><GraduationCap size={18} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Class</p>
                                            <p className="text-sm font-semibold text-gray-700">{t.className}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-orange-50 rounded-lg text-orange-600"><Briefcase size={18} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Curriculum</p>
                                            <p className="text-sm font-semibold text-gray-700">{t.curriculum || "N/A"}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600"><BookOpen size={18} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Subjects</p>
                                            <p className="text-sm font-semibold text-gray-700 line-clamp-1">{t.subject}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-pink-50 rounded-lg text-pink-600"><Calendar size={18} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Schedule</p>
                                            <p className="text-sm font-semibold text-gray-700">{t.daysPerWeek}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-cyan-50 rounded-lg text-cyan-600"><Clock size={18} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Time</p>
                                            <p className="text-sm font-semibold text-gray-700">{t.teachingTime}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer: Gender and Action */}
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-2">
                                        <UserCircle2 className="text-emerald-500" size={20} />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase font-bold text-gray-400">Student Gender</span>
                                            <span className="text-sm font-bold text-gray-700">{t.studentGender}</span>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-100">
                                        <span className="text-lg">⚠</span> Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tuitions;
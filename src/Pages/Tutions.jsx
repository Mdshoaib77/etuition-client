// // import React from 'react'

// // const Tutions = () => {
// //   return (
// //     <div>
// //       Alhamdulliah 
// //     </div>
// //   )
// // }

// // export default Tutions


// // import React, { useEffect, useState } from 'react';

// // const Tuitions = () => {
// //     const [tuitions, setTuitions] = useState([]);

// //     useEffect(() => {
// //         fetch('http://localhost:5000/tuitions')
// //             .then(res => res.json())
// //             .then(data => setTuitions(data));
// //     }, []);

// //     return (
// //         <div className="max-w-7xl mx-auto p-4">
// //             <h2 className="text-3xl font-bold text-center mb-8">Available Tuitions</h2>
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                 {tuitions.map(t => (
// //                     <div key={t._id} className="card bg-base-100 shadow-xl border border-emerald-100">
// //                         <div className="card-body">
// //                             <h2 className="card-title text-emerald-700">{t.title}</h2>
// //                             <p><strong>Subject:</strong> {t.subject}</p>
// //                             <p><strong>Class:</strong> {t.class}</p>
// //                             <p><strong>Salary:</strong> {t.salary} BDT</p>
// //                             <div className="card-actions justify-end mt-4">
// //                                 <button className="btn btn-sm bg-emerald-600 text-white">View Details</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default Tuitions;


// // import React, { useEffect, useState } from 'react';
// // import { MapPin, GraduationCap, Users, BookOpen, Calendar, Clock, UserCircle2 } from 'lucide-react';

// // const Tuitions = () => {
// //     const [tuitions, setTuitions] = useState([]);

// //     useEffect(() => {
// //         fetch('http://localhost:5000/tuitions')
// //             .then(res => res.json())
// //             .then(data => setTuitions(data));
// //     }, []);

// //     return (
// //         <div className="bg-gray-50 min-h-screen py-12 px-4">
// //             <div className="max-w-7xl mx-auto">
// //                 <div className="text-center mb-12">
// //                     <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
// //                         Available <span className="text-emerald-600">Tuitions</span>
// //                     </h2>
// //                     <p className="text-gray-500 font-medium">Find the perfect teaching opportunity that fits your schedule</p>
// //                     <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
// //                 </div>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //                     {tuitions.map((t) => (
// //                         <div key={t._id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
// //                             {/* Card Header with Gradient */}
// //                             <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-4 flex justify-between items-center text-white">
// //                                 <span className="text-xs font-bold opacity-90 tracking-widest uppercase"># ID: {t._id?.slice(-5).toUpperCase() || "COM19"}</span>
// //                                 <span className="text-xs bg-white/20 px-2 py-1 rounded-md backdrop-blur-sm">1d ago</span>
// //                             </div>

// //                             <div className="p-6">
// //                                 {/* Title and Salary Section */}
// //                                 <div className="flex justify-between items-start mb-6">
// //                                     <h3 className="text-xl font-bold text-gray-800 leading-tight">
// //                                         {t.title || "Male/Female Tutor"}
// //                                     </h3>
// //                                     <div className="bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-100">
// //                                         <span className="text-emerald-700 font-bold text-lg">৳ {t.salary}</span>
// //                                         <span className="text-emerald-600 text-xs font-bold ml-1 uppercase">BDT</span>
// //                                     </div>
// //                                 </div>

// //                                 {/* Grid of Info Items */}
// //                                 <div className="grid grid-cols-2 gap-y-5 gap-x-2 border-b border-gray-100 pb-6 mb-6">
// //                                     <div className="flex items-start gap-3">
// //                                         <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><MapPin size={18} /></div>
// //                                         <div>
// //                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Location</p>
// //                                             <p className="text-sm font-semibold text-gray-700 line-clamp-2 leading-snug">{t.location || "Cumilla"}</p>
// //                                         </div>
// //                                     </div>

// //                                     <div className="flex items-start gap-3">
// //                                         <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><GraduationCap size={18} /></div>
// //                                         <div>
// //                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Class</p>
// //                                             <p className="text-sm font-semibold text-gray-700">{t.class || "N/A"}</p>
// //                                         </div>
// //                                     </div>

// //                                     <div className="flex items-start gap-3">
// //                                         <div className="p-2 bg-orange-50 rounded-lg text-orange-600"><Users size={18} /></div>
// //                                         <div>
// //                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Group</p>
// //                                             <p className="text-sm font-semibold text-gray-700">{t.group || "All"}</p>
// //                                         </div>
// //                                     </div>

// //                                     <div className="flex items-start gap-3">
// //                                         <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600"><BookOpen size={18} /></div>
// //                                         <div>
// //                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Subjects</p>
// //                                             <p className="text-sm font-semibold text-gray-700">{t.subjects || "All"}</p>
// //                                         </div>
// //                                     </div>

// //                                     <div className="flex items-start gap-3">
// //                                         <div className="p-2 bg-pink-50 rounded-lg text-pink-600"><Calendar size={18} /></div>
// //                                         <div>
// //                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Days</p>
// //                                             <p className="text-sm font-semibold text-gray-700">{t.days || "0"} Days/Week</p>
// //                                         </div>
// //                                     </div>

// //                                     <div className="flex items-start gap-3">
// //                                         <div className="p-2 bg-cyan-50 rounded-lg text-cyan-600"><Clock size={18} /></div>
// //                                         <div>
// //                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Time</p>
// //                                             <p className="text-sm font-semibold text-gray-700">{t.time || "N/A"}</p>
// //                                         </div>
// //                                     </div>
// //                                 </div>

// //                                 {/* Footer: Gender and Action */}
// //                                 <div className="flex items-center justify-between">
// //                                     <div className="flex items-center gap-2">
// //                                         <UserCircle2 className="text-gray-400" size={20} />
// //                                         <span className="text-sm font-bold text-gray-600">Student: <span className="text-emerald-600">{t.studentGender || "Any"}</span></span>
// //                                     </div>
// //                                     <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-200">
// //                                         <span className="text-lg">⚠</span> Apply Now
// //                                     </button>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Tuitions;


// import React, { useEffect, useState } from 'react';
// import { MapPin, GraduationCap, Users, BookOpen, Calendar, Clock, UserCircle2, Briefcase } from 'lucide-react';

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
//                         <div key={t._id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
//                             {/* Card Header with Gradient */}
//                             <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-4 flex justify-between items-center text-white">
//                                 <span className="text-xs font-bold opacity-90 tracking-widest uppercase"># ID: {t._id?.slice(-5).toUpperCase()}</span>
//                                 <span className="text-xs bg-white/20 px-2 py-1 rounded-md backdrop-blur-sm">
//                                     {t.createdAt ? new Date(t.createdAt).toLocaleDateString() : 'Just Now'}
//                                 </span>
//                             </div>

//                             <div className="p-6 flex-grow">
//                                 {/* Title and Salary Section */}
//                                 <div className="flex justify-between items-start mb-6">
//                                     <h3 className="text-xl font-bold text-gray-800 leading-tight">
//                                         {t.title}
//                                     </h3>
//                                     <div className="bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-100 flex flex-col items-center min-w-[80px]">
//                                         <span className="text-emerald-700 font-bold text-lg">৳{t.salary}</span>
//                                         <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-tighter">Per Month</span>
//                                     </div>
//                                 </div>

//                                 {/* Grid of Info Items */}
//                                 <div className="grid grid-cols-2 gap-y-5 gap-x-2 border-b border-gray-100 pb-6 mb-6">
//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><MapPin size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Location</p>
//                                             <p className="text-sm font-semibold text-gray-700 line-clamp-1">{t.location}</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><GraduationCap size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Class</p>
//                                             <p className="text-sm font-semibold text-gray-700">{t.className}</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-orange-50 rounded-lg text-orange-600"><Briefcase size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Curriculum</p>
//                                             <p className="text-sm font-semibold text-gray-700">{t.curriculum || "N/A"}</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600"><BookOpen size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Subjects</p>
//                                             <p className="text-sm font-semibold text-gray-700 line-clamp-1">{t.subject}</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-pink-50 rounded-lg text-pink-600"><Calendar size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Schedule</p>
//                                             <p className="text-sm font-semibold text-gray-700">{t.daysPerWeek}</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-cyan-50 rounded-lg text-cyan-600"><Clock size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Time</p>
//                                             <p className="text-sm font-semibold text-gray-700">{t.teachingTime}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Footer: Gender and Action */}
//                                 <div className="flex items-center justify-between mt-auto">
//                                     <div className="flex items-center gap-2">
//                                         <UserCircle2 className="text-emerald-500" size={20} />
//                                         <div className="flex flex-col">
//                                             <span className="text-[10px] uppercase font-bold text-gray-400">Student Gender</span>
//                                             <span className="text-sm font-bold text-gray-700">{t.studentGender}</span>
//                                         </div>
//                                     </div>
//                                     <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-100">
//                                         <span className="text-lg">⚠</span> Apply
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

// import React, { useEffect, useState, useContext } from 'react';
// import { MapPin, GraduationCap, BookOpen, Calendar, Clock, UserCircle2, Briefcase, X, Send } from 'lucide-react';
// // 🔴 IMPORT LINE: Apnar folder structure onujayi path thik korun
// import { AuthContext } from '../context/AuthProvider'; 
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// const Tuitions = () => {
//     const [tuitions, setTuitions] = useState([]);
//     const [selectedTuition, setSelectedTuition] = useState(null);
    
//     // AuthContext theke data nichi (Apnar provider onujayi: user, loading ase)
//     const { user, loading } = useContext(AuthContext);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetch('http://localhost:5000/tuitions')
//             .then(res => res.json())
//             .then(data => setTuitions(data));
//     }, []);

//     const handleApplyClick = (t) => {
//         if (!user) {
//             Swal.fire({
//                 title: "Login Required",
//                 text: "Please login as a tutor to apply for this tuition!",
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#10b981",
//                 confirmButtonText: "Login Now"
//             }).then((result) => {
//                 if (result.isConfirmed) navigate('/login');
//             });
//             return;
//         }
//         setSelectedTuition(t);
//     };

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         const form = e.target;
        
//         const applicationData = {
//             tuitionId: selectedTuition._id,
//             tuitionTitle: selectedTuition.title,
//             studentEmail: selectedTuition.studentEmail,
//             tutorEmail: user?.email,
//             experience: form.experience.value,
//             qualifications: form.qualifications.value,
//             status: 'pending',
//             appliedAt: new Date()
//         };

//         try {
//             const res = await fetch('http://localhost:5000/applications', {
//                 method: 'POST',
//                 headers: { 'content-type': 'application/json' },
//                 body: JSON.stringify(applicationData)
//             });
//             const data = await res.json();
            
//             if (res.ok) {
//                 Swal.fire("Success!", "Your application has been submitted.", "success");
//                 setSelectedTuition(null);
//             } else {
//                 Swal.fire("Error", data.message || "Failed to apply", "error");
//             }
//         } catch (err) {
//             Swal.fire("Error", "Server is not responding", "error");
//         }
//     };

//     if (loading) return <div className="flex justify-center items-center min-h-screen text-emerald-600 font-bold">Loading...</div>;

//     return (
//         <div className="bg-gray-50 min-h-screen py-12 px-4 relative">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-12">
//                     <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Available <span className="text-emerald-600">Tuitions</span></h2>
//                     <p className="text-gray-500 font-medium">Find the perfect teaching opportunity that fits your schedule</p>
//                     <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {tuitions.map((t) => (
//                         <div key={t._id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
//                             {/* Card Header */}
//                             <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-4 flex justify-between items-center text-white">
//                                 <span className="text-xs font-bold opacity-90 tracking-widest uppercase"># ID: {t._id?.slice(-5).toUpperCase()}</span>
//                                 <span className="text-xs bg-white/20 px-2 py-1 rounded-md backdrop-blur-sm">
//                                     {t.createdAt ? new Date(t.createdAt).toLocaleDateString() : 'Just Now'}
//                                 </span>
//                             </div>

//                             <div className="p-6 flex-grow">
//                                 {/* Title and Salary */}
//                                 <div className="flex justify-between items-start mb-6">
//                                     <h3 className="text-xl font-bold text-gray-800 leading-tight">{t.title}</h3>
//                                     <div className="bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-100 flex flex-col items-center min-w-[80px]">
//                                         <span className="text-emerald-700 font-bold text-lg">৳{t.salary}</span>
//                                         <span className="text-emerald-600 text-[10px] font-bold uppercase">Per Month</span>
//                                     </div>
//                                 </div>

//                                 {/* Info Grid */}
//                                 <div className="grid grid-cols-2 gap-y-5 gap-x-2 border-b border-gray-100 pb-6 mb-6">
//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><MapPin size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400">Location</p>
//                                             <p className="text-sm font-semibold text-gray-700 line-clamp-1">{t.location}</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><GraduationCap size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400">Class</p>
//                                             <p className="text-sm font-semibold text-gray-700">{t.className}</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-orange-50 rounded-lg text-orange-600"><Briefcase size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400">Curriculum</p>
//                                             <p className="text-sm font-semibold text-gray-700">{t.curriculum || "N/A"}</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600"><BookOpen size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400">Subjects</p>
//                                             <p className="text-sm font-semibold text-gray-700 line-clamp-1">{t.subject}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Footer: Gender and Action */}
//                                 <div className="flex items-center justify-between mt-auto">
//                                     <div className="flex items-center gap-2">
//                                         <UserCircle2 className="text-emerald-500" size={20} />
//                                         <div className="flex flex-col">
//                                             <span className="text-[10px] uppercase font-bold text-gray-400">Gender</span>
//                                             <span className="text-sm font-bold text-gray-700">{t.studentGender}</span>
//                                         </div>
//                                     </div>
                                    
//                                     {/* Action Logic: user login na thakle ba tutor hole Apply button active */}
//                                     {(!user || user?.role === 'tutor') ? (
//                                         <button 
//                                             onClick={() => handleApplyClick(t)}
//                                             className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-100"
//                                         >
//                                             Apply
//                                         </button>
//                                     ) : (
//                                         <button disabled className="bg-gray-200 text-gray-400 font-bold py-2.5 px-6 rounded-xl cursor-not-allowed">
//                                             Tutor Only
//                                         </button>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Application Modal */}
//             {selectedTuition && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
//                     <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
//                         <div className="bg-emerald-600 p-6 text-white flex justify-between items-center">
//                             <div>
//                                 <h3 className="font-bold text-lg">Apply for Tuition</h3>
//                                 <p className="text-xs opacity-80">{selectedTuition.title}</p>
//                             </div>
//                             <button onClick={() => setSelectedTuition(null)} className="hover:bg-white/20 p-2 rounded-full transition-colors"><X /></button>
//                         </div>
//                         <form onSubmit={handleFormSubmit} className="p-8 space-y-5">
//                             <div>
//                                 <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Academic Qualifications</label>
//                                 <input name="qualifications" required placeholder="e.g. BSc in Physics, DU" className="w-full border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-emerald-500 transition-colors" />
//                             </div>
//                             <div>
//                                 <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Teaching Experience</label>
//                                 <input name="experience" required placeholder="e.g. 3 years of home tutoring" className="w-full border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-emerald-500 transition-colors" />
//                             </div>
//                             <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 shadow-xl hover:bg-emerald-700 transition-all active:scale-[0.98]">
//                                 <Send size={18} /> Confirm Application
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Tuitions;


// import React, { useEffect, useState, useContext } from 'react';
// import { MapPin, GraduationCap, BookOpen, Calendar, Clock, UserCircle2, Briefcase, X, Send, Mail, Phone } from 'lucide-react';
// // 🔴 IMPORT LINE: Apnar folder structure onujayi path thik korun
// import { AuthContext } from '../context/AuthProvider'; 
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// const Tuitions = () => {
//     const [tuitions, setTuitions] = useState([]);
//     const [selectedTuition, setSelectedTuition] = useState(null);
    
//     // AuthContext theke data nichi
//     const { user, loading } = useContext(AuthContext);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetch('http://localhost:5000/tuitions')
//             .then(res => res.json())
//             .then(data => setTuitions(data));
//     }, []);

//     const handleApplyClick = (t) => {
//         if (!user) {
//             Swal.fire({
//                 title: "Login Required",
//                 text: "Please login as a tutor to apply for this tuition!",
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#10b981",
//                 confirmButtonText: "Login Now"
//             }).then((result) => {
//                 if (result.isConfirmed) navigate('/login');
//             });
//             return;
//         }
//         setSelectedTuition(t);
//     };

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         const form = e.target;
        
//         const applicationData = {
//             tuitionId: selectedTuition._id,
//             tuitionTitle: selectedTuition.title,
//             studentEmail: selectedTuition.studentEmail,
//             tutorEmail: form.tutorEmail.value, // Taken from form field
//             tutorPhone: form.tutorPhone.value, // NEW FIELD
//             experience: form.experience.value,
//             qualifications: form.qualifications.value,
//             status: 'pending',
//             appliedAt: new Date()
//         };

//         try {
//             const res = await fetch('http://localhost:5000/applications', {
//                 method: 'POST',
//                 headers: { 'content-type': 'application/json' },
//                 body: JSON.stringify(applicationData)
//             });
//             const data = await res.json();
            
//             if (res.ok) {
//                 Swal.fire("Success!", "Your application has been submitted.", "success");
//                 setSelectedTuition(null);
//             } else {
//                 Swal.fire("Error", data.message || "Failed to apply", "error");
//             }
//         } catch (err) {
//             Swal.fire("Error", "Server is not responding", "error");
//         }
//     };

//     if (loading) return <div className="flex justify-center items-center min-h-screen text-emerald-600 font-bold">Loading...</div>;

//     return (
//         <div className="bg-gray-50 min-h-screen py-12 px-4 relative">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-12">
//                     <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Available <span className="text-emerald-600">Tuitions</span></h2>
//                     <p className="text-gray-500 font-medium">Find the perfect teaching opportunity that fits your schedule</p>
//                     <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {tuitions.map((t) => (
//                         <div key={t._id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
//                             <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-4 flex justify-between items-center text-white">
//                                 <span className="text-xs font-bold opacity-90 tracking-widest uppercase"># ID: {t._id?.slice(-5).toUpperCase()}</span>
//                                 <span className="text-xs bg-white/20 px-2 py-1 rounded-md backdrop-blur-sm">
//                                     {t.createdAt ? new Date(t.createdAt).toLocaleDateString() : 'Just Now'}
//                                 </span>
//                             </div>

//                             <div className="p-6 flex-grow">
//                                 <div className="flex justify-between items-start mb-6">
//                                     <h3 className="text-xl font-bold text-gray-800 leading-tight">{t.title}</h3>
//                                     <div className="bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-100 flex flex-col items-center min-w-[80px]">
//                                         <span className="text-emerald-700 font-bold text-lg">৳{t.salary}</span>
//                                         <span className="text-emerald-600 text-[10px] font-bold uppercase">Per Month</span>
//                                     </div>
//                                 </div>

//                                 <div className="grid grid-cols-2 gap-y-5 gap-x-2 border-b border-gray-100 pb-6 mb-6">
//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><MapPin size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400">Location</p>
//                                             <p className="text-sm font-semibold text-gray-700 line-clamp-1">{t.location}</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><GraduationCap size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400">Class</p>
//                                             <p className="text-sm font-semibold text-gray-700">{t.className}</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-orange-50 rounded-lg text-orange-600"><Briefcase size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400">Curriculum</p>
//                                             <p className="text-sm font-semibold text-gray-700">{t.curriculum || "N/A"}</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start gap-3">
//                                         <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600"><BookOpen size={18} /></div>
//                                         <div>
//                                             <p className="text-[10px] uppercase font-bold text-gray-400">Subjects</p>
//                                             <p className="text-sm font-semibold text-gray-700 line-clamp-1">{t.subject}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center justify-between mt-auto">
//                                     <div className="flex items-center gap-2">
//                                         <UserCircle2 className="text-emerald-500" size={20} />
//                                         <div className="flex flex-col">
//                                             <span className="text-[10px] uppercase font-bold text-gray-400">Gender</span>
//                                             <span className="text-sm font-bold text-gray-700">{t.studentGender}</span>
//                                         </div>
//                                     </div>
                                    
//                                     {(!user || user?.role === 'tutor') ? (
//                                         <button 
//                                             onClick={() => handleApplyClick(t)}
//                                             className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-100"
//                                         >
//                                             Apply
//                                         </button>
//                                     ) : (
//                                         <button disabled className="bg-gray-200 text-gray-400 font-bold py-2.5 px-6 rounded-xl cursor-not-allowed">
//                                             Tutor Only
//                                         </button>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Application Modal */}
//             {selectedTuition && (
//                 <div className="fixed mt-14 inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
//                     <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
//                         <div className="bg-emerald-600 p-6 text-white flex justify-between items-center">
//                             <div>
//                                 <h3 className="font-bold text-lg">Apply for Tuition</h3>
//                                 <p className="text-xs opacity-80">{selectedTuition.title}</p>
//                             </div>
//                             <button onClick={() => setSelectedTuition(null)} className="hover:bg-white/20 p-2 rounded-full transition-colors"><X /></button>
//                         </div>
//                         <form onSubmit={handleFormSubmit} className="p-8 space-y-4 max-h-[80vh] overflow-y-auto">
//                             {/* Email Field (Auto-filled) */}
//                             <div>
//                                 <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Your Email</label>
//                                 <div className="relative">
//                                     <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
//                                     <input name="tutorEmail" type="email" defaultValue={user?.email} readOnly className="w-full border-2 border-gray-100 p-3 pl-10 rounded-xl bg-gray-50 outline-none text-gray-500 cursor-not-allowed" />
//                                 </div>
//                             </div>

//                             {/* Phone Field */}
//                             <div>
//                                 <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Phone Number</label>
//                                 <div className="relative">
//                                     <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
//                                     <input name="tutorPhone" type="tel" required placeholder="017XXXXXXXX" className="w-full border-2 border-gray-100 p-3 pl-10 rounded-xl outline-none focus:border-emerald-500 transition-colors" />
//                                 </div>
//                             </div>

//                             {/* Qualifications */}
//                             <div>
//                                 <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Academic Qualifications</label>
//                                 <input name="qualifications" required placeholder="e.g. BSc in Physics, DU" className="w-full border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-emerald-500 transition-colors" />
//                             </div>

//                             {/* Experience */}
//                             <div>
//                                 <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Teaching Experience</label>
//                                 <input name="experience" required placeholder="e.g. 3 years of home tutoring" className="w-full border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-emerald-500 transition-colors" />
//                             </div>

//                             <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 shadow-xl hover:bg-emerald-700 transition-all active:scale-[0.98]">
//                                 <Send size={18} /> Confirm Application
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Tuitions;

import React, { useEffect, useState, useContext } from 'react';
import { MapPin, GraduationCap, BookOpen, Calendar, Clock, UserCircle2, Briefcase, X, Send, Mail, Phone } from 'lucide-react';
// 🔴 IMPORT LINE: Apnar folder structure onujayi path thik korun
import { AuthContext } from '../context/AuthProvider'; 
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Tuitions = () => {
    const [tuitions, setTuitions] = useState([]);
    const [selectedTuition, setSelectedTuition] = useState(null);
    
    // AuthContext theke data nichi
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/tuitions')
            .then(res => res.json())
            .then(data => setTuitions(data));
    }, []);

    const handleApplyClick = (t) => {
        if (!user) {
            Swal.fire({
                title: "Login Required",
                text: "Please login as a tutor to apply for this tuition!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#10b981",
                confirmButtonText: "Login Now"
            }).then((result) => {
                if (result.isConfirmed) navigate('/login');
            });
            return;
        }
        setSelectedTuition(t);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        
        const applicationData = {
            tuitionId: selectedTuition._id,
            tuitionTitle: selectedTuition.title,
            studentEmail: selectedTuition.studentEmail,
            tutorEmail: form.tutorEmail.value, // Taken from form field
            tutorPhone: form.tutorPhone.value, // NEW FIELD
            experience: form.experience.value,
            qualifications: form.qualifications.value,
            status: 'pending',
            appliedAt: new Date()
        };

        try {
            const res = await fetch('http://localhost:5000/applications', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                // 🔥 MUST: Cookies (Token) pathanor jonno credentials add kora hoyeche
                credentials: "include", 
                body: JSON.stringify(applicationData)
            });
            const data = await res.json();
            
            if (res.ok) {
                Swal.fire("Success!", "Your application has been submitted.", "success");
                setSelectedTuition(null);
            } else {
                Swal.fire("Error", data.message || "Failed to apply", "error");
            }
        } catch (err) {
            Swal.fire("Error", "Server is not responding", "error");
        }
    };

    if (loading) return <div className="flex justify-center items-center min-h-screen text-emerald-600 font-bold">Loading...</div>;

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Available <span className="text-emerald-600">Tuitions</span></h2>
                    <p className="text-gray-500 font-medium">Find the perfect teaching opportunity that fits your schedule</p>
                    <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tuitions.map((t) => (
                        <div key={t._id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-4 flex justify-between items-center text-white">
                                <span className="text-xs font-bold opacity-90 tracking-widest uppercase"># ID: {t._id?.slice(-5).toUpperCase()}</span>
                                <span className="text-xs bg-white/20 px-2 py-1 rounded-md backdrop-blur-sm">
                                    {t.createdAt ? new Date(t.createdAt).toLocaleDateString() : 'Just Now'}
                                </span>
                            </div>

                            <div className="p-6 flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 leading-tight">{t.title}</h3>
                                    <div className="bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-100 flex flex-col items-center min-w-[80px]">
                                        <span className="text-emerald-700 font-bold text-lg">৳{t.salary}</span>
                                        <span className="text-emerald-600 text-[10px] font-bold uppercase">Per Month</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-y-5 gap-x-2 border-b border-gray-100 pb-6 mb-6">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><MapPin size={18} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-gray-400">Location</p>
                                            <p className="text-sm font-semibold text-gray-700 line-clamp-1">{t.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><GraduationCap size={18} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-gray-400">Class</p>
                                            <p className="text-sm font-semibold text-gray-700">{t.className}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-orange-50 rounded-lg text-orange-600"><Briefcase size={18} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-gray-400">Curriculum</p>
                                            <p className="text-sm font-semibold text-gray-700">{t.curriculum || "N/A"}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600"><BookOpen size={18} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-gray-400">Subjects</p>
                                            <p className="text-sm font-semibold text-gray-700 line-clamp-1">{t.subject}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-2">
                                        <UserCircle2 className="text-emerald-500" size={20} />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase font-bold text-gray-400">Gender</span>
                                            <span className="text-sm font-bold text-gray-700">{t.studentGender}</span>
                                        </div>
                                    </div>
                                    
                                    {(!user || user?.role === 'tutor') ? (
                                        <button 
                                            onClick={() => handleApplyClick(t)}
                                            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-100"
                                        >
                                            Apply
                                        </button>
                                    ) : (
                                        <button disabled className="bg-gray-200 text-gray-400 font-bold py-2.5 px-6 rounded-xl cursor-not-allowed">
                                            Tutor Only
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Application Modal */}
            {selectedTuition && (
                <div className="fixed mt-14 inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
                        <div className="bg-emerald-600 p-6 text-white flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg">Apply for Tuition</h3>
                                <p className="text-xs opacity-80">{selectedTuition.title}</p>
                            </div>
                            <button onClick={() => setSelectedTuition(null)} className="hover:bg-white/20 p-2 rounded-full transition-colors"><X /></button>
                        </div>
                        <form onSubmit={handleFormSubmit} className="p-8 space-y-4 max-h-[80vh] overflow-y-auto">
                            {/* Email Field (Auto-filled) */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Your Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input name="tutorEmail" type="email" defaultValue={user?.email} readOnly className="w-full border-2 border-gray-100 p-3 pl-10 rounded-xl bg-gray-50 outline-none text-gray-500 cursor-not-allowed" />
                                </div>
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input name="tutorPhone" type="tel" required placeholder="017XXXXXXXX" className="w-full border-2 border-gray-100 p-3 pl-10 rounded-xl outline-none focus:border-emerald-500 transition-colors" />
                                </div>
                            </div>

                            {/* Qualifications */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Academic Qualifications</label>
                                <input name="qualifications" required placeholder="e.g. BSc in Physics, DU" className="w-full border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-emerald-500 transition-colors" />
                            </div>

                            {/* Experience */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Teaching Experience</label>
                                <input name="experience" required placeholder="e.g. 3 years of home tutoring" className="w-full border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-emerald-500 transition-colors" />
                            </div>

                            <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 shadow-xl hover:bg-emerald-700 transition-all active:scale-[0.98]">
                                <Send size={18} /> Confirm Application
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tuitions;
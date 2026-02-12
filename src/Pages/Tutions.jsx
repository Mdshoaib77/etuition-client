// import React, { useEffect, useState, useContext } from 'react';
// import { MapPin, GraduationCap, BookOpen, UserCircle2, Briefcase, X, Send, Mail, Phone, Banknote } from 'lucide-react';
// import { AuthContext } from '../context/AuthProvider'; 
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// const Tuitions = () => {
//     const [tuitions, setTuitions] = useState([]);
//     const [selectedTuition, setSelectedTuition] = useState(null);
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
//             tutorPhone: form.tutorPhone.value,
//             experience: form.experience.value,
//             qualifications: form.qualifications.value,
//             expectedSalary: parseFloat(form.expectedSalary.value), 
//             status: 'pending',
//             appliedAt: new Date()
//         };

//         try {
//             const res = await fetch('http://localhost:5000/applications', {
//                 method: 'POST',
//                 headers: { 'content-type': 'application/json' },
//                 credentials: "include", 
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
//                                         <span className="text-emerald-600 text-[10px] font-bold uppercase">Budget</span>
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
//                                             <span className="text-[10px] uppercase font-bold text-gray-400">Student</span>
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

//             {/* --- COMPACT & RESPONSIVE MODAL --- */}
//             {selectedTuition && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
//                     <div className="bg-white w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
//                         {/* Compact Header */}
//                         <div className="bg-emerald-600 px-5 py-4 text-white flex justify-between items-center">
//                             <div>
//                                 <h3 className="font-bold text-base leading-tight">Apply for Tuition</h3>
//                                 <p className="text-[10px] opacity-80 truncate w-40">Post: {selectedTuition.title}</p>
//                             </div>
//                             <button onClick={() => setSelectedTuition(null)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
//                                 <X size={20} />
//                             </button>
//                         </div>

//                         {/* Compact Form */}
//                         <form onSubmit={handleFormSubmit} className="p-5 space-y-3">
//                             <div className="grid grid-cols-1 gap-3">
//                                 {/* Email */}
//                                 <div>
//                                     <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Your Email</label>
//                                     <div className="relative mt-0.5">
//                                         <Mail className="absolute left-3 top-2.5 text-gray-300" size={14} />
//                                         <input value={user?.email} readOnly className="w-full border border-gray-100 p-2 pl-9 rounded-lg bg-gray-50 text-xs text-gray-500 outline-none" />
//                                     </div>
//                                 </div>

//                                 <div className="grid grid-cols-2 gap-3">
//                                     {/* Phone */}
//                                     <div>
//                                         <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Phone</label>
//                                         <div className="relative mt-0.5">
//                                             <Phone className="absolute left-3 top-2.5 text-gray-300" size={14} />
//                                             <input name="tutorPhone" type="tel" required placeholder="017..." className="w-full border border-gray-200 p-2 pl-9 rounded-lg text-xs outline-none focus:border-emerald-500 transition-colors" />
//                                         </div>
//                                     </div>
//                                     {/* Expected Salary */}
//                                     <div>
//                                         <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">My Salary</label>
//                                         <div className="relative mt-0.5">
//                                             <Banknote className="absolute left-3 top-2.5 text-emerald-400" size={14} />
//                                             <input name="expectedSalary" type="number" required defaultValue={selectedTuition.salary} className="w-full border border-gray-200 p-2 pl-9 rounded-lg text-xs font-bold text-emerald-700 outline-none focus:border-emerald-500 transition-colors" />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Qualifications */}
//                                 <div>
//                                     <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Qualifications</label>
//                                     <input name="qualifications" required placeholder="e.g. BSc in Math, DU" className="w-full mt-0.5 border border-gray-200 p-2 rounded-lg text-xs outline-none focus:border-emerald-500 transition-colors" />
//                                 </div>

//                                 {/* Experience */}
//                                 <div>
//                                     <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Experience</label>
//                                     <textarea name="experience" required rows="2" placeholder="Describe your experience..." className="w-full mt-0.5 border border-gray-200 p-2 rounded-lg text-xs outline-none focus:border-emerald-500 transition-colors resize-none" />
//                                 </div>
//                             </div>

//                             {/* Compact Submit Button */}
//                             <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2 shadow-lg hover:bg-emerald-700 transition-all active:scale-[0.98] mt-2 text-sm">
//                                 <Send size={16} /> Confirm Apply
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
import { MapPin, GraduationCap, BookOpen, UserCircle2, Briefcase, X, Send, Mail, Phone, Banknote } from 'lucide-react';
import { AuthContext } from '../context/AuthProvider'; 
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

// Backend URL from .env
const backendUrl = import.meta.env.VITE_API_URL;

const Tuitions = () => {
    const [tuitions, setTuitions] = useState([]);
    const [selectedTuition, setSelectedTuition] = useState(null);
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${backendUrl}/tuitions`)
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
            tutorEmail: user?.email, 
            tutorPhone: form.tutorPhone.value,
            experience: form.experience.value,
            qualifications: form.qualifications.value,
            expectedSalary: parseFloat(form.expectedSalary.value), 
            status: 'pending',
            appliedAt: new Date()
        };

        try {
            const res = await fetch(`${backendUrl}/applications`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
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
                                        <span className="text-emerald-600 text-[10px] font-bold uppercase">Budget</span>
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
                                            <span className="text-[10px] uppercase font-bold text-gray-400">Student</span>
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

            {/* --- COMPACT & RESPONSIVE MODAL --- */}
            {selectedTuition && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
                        {/* Compact Header */}
                        <div className="bg-emerald-600 px-5 py-4 text-white flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-base leading-tight">Apply for Tuition</h3>
                                <p className="text-[10px] opacity-80 truncate w-40">Post: {selectedTuition.title}</p>
                            </div>
                            <button onClick={() => setSelectedTuition(null)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Compact Form */}
                        <form onSubmit={handleFormSubmit} className="p-5 space-y-3">
                            <div className="grid grid-cols-1 gap-3">
                                {/* Email */}
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Your Email</label>
                                    <div className="relative mt-0.5">
                                        <Mail className="absolute left-3 top-2.5 text-gray-300" size={14} />
                                        <input value={user?.email} readOnly className="w-full border border-gray-100 p-2 pl-9 rounded-lg bg-gray-50 text-xs text-gray-500 outline-none" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {/* Phone */}
                                    <div>
                                        <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Phone</label>
                                        <div className="relative mt-0.5">
                                            <Phone className="absolute left-3 top-2.5 text-gray-300" size={14} />
                                            <input name="tutorPhone" type="tel" required placeholder="017..." className="w-full border border-gray-200 p-2 pl-9 rounded-lg text-xs outline-none focus:border-emerald-500 transition-colors" />
                                        </div>
                                    </div>
                                    {/* Expected Salary */}
                                    <div>
                                        <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">My Salary</label>
                                        <div className="relative mt-0.5">
                                            <Banknote className="absolute left-3 top-2.5 text-emerald-400" size={14} />
                                            <input name="expectedSalary" type="number" required defaultValue={selectedTuition.salary} className="w-full border border-gray-200 p-2 pl-9 rounded-lg text-xs font-bold text-emerald-700 outline-none focus:border-emerald-500 transition-colors" />
                                        </div>
                                    </div>
                                </div>

                                {/* Qualifications */}
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Qualifications</label>
                                    <input name="qualifications" required placeholder="e.g. BSc in Math, DU" className="w-full mt-0.5 border border-gray-200 p-2 rounded-lg text-xs outline-none focus:border-emerald-500 transition-colors" />
                                </div>

                                {/* Experience */}
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Experience</label>
                                    <textarea name="experience" required rows="2" placeholder="Describe your experience..." className="w-full mt-0.5 border border-gray-200 p-2 rounded-lg text-xs outline-none focus:border-emerald-500 transition-colors resize-none" />
                                </div>
                            </div>

                            {/* Compact Submit Button */}
                            <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2 shadow-lg hover:bg-emerald-700 transition-all active:scale-[0.98] mt-2 text-sm">
                                <Send size={16} /> Confirm Apply
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tuitions;

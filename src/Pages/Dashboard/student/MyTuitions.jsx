// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';
// import { BookOpen, MapPin, Edit, Trash2, Eye, Calendar, GraduationCap, Activity, Briefcase, Users } from 'lucide-react';
// import Swal from 'sweetalert2';

// const MyTuitions = () => {
//     const { user } = useContext(AuthContext);
//     const [myTuitions, setMyTuitions] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) fetchTuitions();
//     }, [user?.email]);

//     const fetchTuitions = () => {
//         fetch(`http://localhost:5000/my-tuitions/${user?.email}`, {
//             method: 'GET',
//             credentials: "include"
//         })
//         .then(res => res.json())
//         .then(data => {
//             setMyTuitions(Array.isArray(data) ? data : []);
//             setLoading(false);
//         })
//         .catch(() => setLoading(false));
//     };

//     // --- ENHANCED VIEW DETAILS MODAL ---
//     const handleViewDetails = (t) => {
//         Swal.fire({
//             title: `<span class="text-2xl font-black text-emerald-700">${t.title}</span>`,
//             html: `
//                 <div class="text-left space-y-4 p-2 text-gray-700">
//                     <div class="grid grid-cols-2 gap-4 bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
//                         <div><p class="text-[10px] uppercase font-black text-emerald-600">Subject</p><p class="font-bold">${t.subject}</p></div>
//                         <div><p class="text-[10px] uppercase font-black text-emerald-600">Class</p><p class="font-bold">${t.className}</p></div>
//                         <div><p class="text-[10px] uppercase font-black text-emerald-600">Salary</p><p class="font-bold">৳${t.salary}</p></div>
//                         <div><p class="text-[10px] uppercase font-black text-emerald-600">Time</p><p class="font-bold">${t.teachingTime || 'N/A'}</p></div>
//                         <div><p class="text-[10px] uppercase font-black text-emerald-600">Student Gender</p><p class="font-bold">${t.studentGender || 'Any'}</p></div>
//                         <div><p class="text-[10px] uppercase font-black text-emerald-600">Curriculum</p><p class="font-bold">${t.curriculum || 'N/A'}</p></div>
//                     </div>
//                     <div class="px-2">
//                         <p class="text-[10px] uppercase font-black text-gray-400">Description</p>
//                         <p class="italic text-sm text-gray-600 mt-1 leading-relaxed">${t.description || 'No additional requirements mentioned.'}</p>
//                     </div>
//                     <div class="flex items-center gap-2 px-2 text-xs font-bold text-gray-500">
//                         <MapPin size={14} className="text-emerald-500"/> ${t.location}
//                     </div>
//                 </div>
//             `,
//             confirmButtonText: 'Got it',
//             confirmButtonColor: '#059669',
//             showClass: { popup: 'animate__animated animate__fadeInUp animate__faster' },
//             customClass: { popup: 'rounded-[2rem]' }
//         });
//     };

//     // --- HANDLE FULL UPDATE (Exact Fields as requested) ---
//     const handleUpdate = async (t) => {
//         const { value: formValues } = await Swal.fire({
//             title: '<div class="flex items-center gap-2 justify-center text-emerald-600 font-black"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg> Update Tuition Post</div>',
//             width: '850px',
//             html: `
//                 <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left p-4 overflow-x-hidden">
//                     <div class="flex flex-col md:col-span-2">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Tuition Title</label>
//                         <input id="swal-title" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Need Experienced Math Tutor" value="${t.title}">
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Subject</label>
//                         <input id="swal-subject" class="swal2-input m-0 w-full text-sm" placeholder="Physics, Math etc." value="${t.subject}">
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Class/Grade</label>
//                         <input id="swal-className" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Class 10 / HSC" value="${t.className}">
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Salary (Monthly BDT)</label>
//                         <input id="swal-salary" type="number" class="swal2-input m-0 w-full text-sm" placeholder="Budget Amount" value="${t.salary}">
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Days Per Week</label>
//                         <select id="swal-daysPerWeek" class="swal2-input m-0 w-full text-sm font-medium">
//                             <option value="3 Days" ${t.daysPerWeek === '3 Days' ? 'selected' : ''}>3 Days</option>
//                             <option value="4 Days" ${t.daysPerWeek === '4 Days' ? 'selected' : ''}>4 Days</option>
//                             <option value="5 Days" ${t.daysPerWeek === '5 Days' ? 'selected' : ''}>5 Days</option>
//                             <option value="6 Days" ${t.daysPerWeek === '6 Days' ? 'selected' : ''}>6 Days</option>
//                         </select>
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Teaching Time</label>
//                         <input id="swal-teachingTime" class="swal2-input m-0 w-full text-sm" placeholder="e.g. 5:00 PM / Evening" value="${t.teachingTime || ''}">
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Student Gender</label>
//                         <select id="swal-studentGender" class="swal2-input m-0 w-full text-sm font-medium">
//                             <option value="Male" ${t.studentGender === 'Male' ? 'selected' : ''}>Male</option>
//                             <option value="Female" ${t.studentGender === 'Female' ? 'selected' : ''}>Female</option>
//                             <option value="Other" ${t.studentGender === 'Other' ? 'selected' : ''}>Both/Other</option>
//                         </select>
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Curriculum/Version</label>
//                         <input id="swal-curriculum" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Bangla Medium" value="${t.curriculum || ''}">
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Detailed Location</label>
//                         <input id="swal-location" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Mirpur-10, Dhaka" value="${t.location}">
//                     </div>
//                     <div class="flex flex-col md:col-span-2">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Additional Description</label>
//                         <textarea id="swal-description" class="swal2-textarea m-0 w-full h-24 text-sm" placeholder="Mention requirements...">${t.description || ''}</textarea>
//                     </div>
//                 </div>
//             `,
//             showCancelButton: true,
//             confirmButtonText: 'Save Changes',
//             confirmButtonColor: '#059669',
//             cancelButtonColor: '#6b7280',
//             customClass: { popup: 'rounded-[2rem]' },
//             preConfirm: () => {
//                 const title = document.getElementById('swal-title').value;
//                 const subject = document.getElementById('swal-subject').value;
//                 if (!title || !subject) {
//                     Swal.showValidationMessage(`Title and Subject are required`);
//                 }
//                 return {
//                     title,
//                     subject,
//                     className: document.getElementById('swal-className').value,
//                     salary: document.getElementById('swal-salary').value,
//                     daysPerWeek: document.getElementById('swal-daysPerWeek').value,
//                     teachingTime: document.getElementById('swal-teachingTime').value,
//                     studentGender: document.getElementById('swal-studentGender').value,
//                     curriculum: document.getElementById('swal-curriculum').value,
//                     location: document.getElementById('swal-location').value,
//                     description: document.getElementById('swal-description').value,
//                 }
//             }
//         });

//         if (formValues) {
//             fetch(`http://localhost:5000/tuitions/update/${t._id}`, {
//                 method: 'PATCH',
//                 headers: { 'content-type': 'application/json' },
//                 credentials: "include",
//                 body: JSON.stringify(formValues)
//             })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.modifiedCount > 0) {
//                     Swal.fire({
//                         title: "Updated!",
//                         text: "Post updated and sent for Admin re-approval.",
//                         icon: "success",
//                         confirmButtonColor: "#059669"
//                     });
//                     fetchTuitions(); 
//                 }
//             });
//         }
//     };

//     const handleDelete = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "This tuition post will be permanently removed.",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#ef4444",
//             cancelButtonColor: "#94a3b8",
//             confirmButtonText: "Yes, Delete it",
//             customClass: { popup: 'rounded-[2rem]' }
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/tuitions/student/${id}`, { method: 'DELETE', credentials: "include" })
//                 .then(() => {
//                     setMyTuitions(myTuitions.filter(t => t._id !== id));
//                     Swal.fire("Deleted!", "Post has been removed.", "success");
//                 });
//             }
//         });
//     };

//     if (loading) return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-dots loading-lg text-emerald-600"></span></div>;

//     return (
//         <div className="min-h-screen bg-[#f8fafc] pb-20">
//             {/* STICKY HEADER */}
//             <div className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-100 mb-8">
//                 <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
//                     <div>
//                         <h1 className="text-3xl font-black text-gray-900 tracking-tighter flex items-center gap-2">
//                             My <span className="text-emerald-600 italic">Tuitions</span> <Activity className="text-emerald-400" />
//                         </h1>
//                         <p className="text-gray-500 text-sm font-medium">Manage and track your active tutor requests</p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <div className="bg-emerald-50 px-5 py-2.5 rounded-2xl border border-emerald-100 hidden sm:block">
//                             <p className="text-[10px] font-black text-emerald-600 uppercase">Active Account</p>
//                             <p className="text-sm font-bold text-gray-700">{user?.displayName || user?.email}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto px-4">
//                 {myTuitions.length === 0 ? (
//                     <div className="bg-white rounded-[3rem] p-20 text-center shadow-sm border border-dashed border-gray-200 mt-10">
//                         <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
//                             <Briefcase className="text-gray-300" size={48} />
//                         </div>
//                         <h2 className="text-2xl font-black text-gray-800">No Tuitions Posted</h2>
//                         <p className="text-gray-500 mt-2 max-w-xs mx-auto">You haven't posted any requirements yet. Start finding your perfect tutor today!</p>
//                     </div>
//                 ) : (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {myTuitions.map((t) => (
//                             <div key={t._id} className="group bg-white rounded-[2.5rem] p-7 border border-transparent shadow-sm hover:shadow-2xl hover:border-emerald-100 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
//                                 <div className="absolute top-0 right-0">
//                                     <div className={`px-6 py-1.5 rounded-bl-3xl text-[10px] font-black uppercase tracking-widest text-white shadow-sm ${
//                                         t.status === 'Approved' ? 'bg-emerald-500' : t.status === 'Pending' ? 'bg-orange-400' : 'bg-rose-500'
//                                     }`}>
//                                         {t.status}
//                                     </div>
//                                 </div>

//                                 <div className="space-y-5">
//                                     <div className="pt-4">
//                                         <h3 className="text-xl font-black text-gray-800 leading-tight group-hover:text-emerald-700 transition-colors line-clamp-2 min-h-[56px]">
//                                             {t.title}
//                                         </h3>
//                                     </div>

//                                     <div className="flex flex-wrap gap-2">
//                                         <span className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5">
//                                             <BookOpen size={14}/> {t.subject}
//                                         </span>
//                                         <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5">
//                                             <GraduationCap size={14}/> {t.className}
//                                         </span>
//                                     </div>

//                                     <div className="space-y-3 text-sm text-gray-500 font-bold">
//                                         <div className="flex items-center gap-2.5"><Calendar size={18} className="text-emerald-500"/> {t.daysPerWeek}</div>
//                                         <div className="flex items-center gap-2.5"><MapPin size={18} className="text-emerald-500"/> <span className="truncate">{t.location}</span></div>
//                                     </div>

//                                     <div className="pt-5 border-t border-gray-50 flex items-center justify-between">
//                                         <div>
//                                             <span className="text-[10px] font-black text-gray-400 uppercase block tracking-wider">Budget / Month</span>
//                                             <span className="text-2xl font-black text-gray-900 group-hover:text-emerald-600 transition-colors">৳{t.salary}</span>
//                                         </div>
//                                         <div className="flex gap-2">
//                                             <button onClick={() => handleUpdate(t)} className="p-3.5 bg-gray-50 text-gray-600 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all border border-gray-100"><Edit size={20}/></button>
//                                             <button onClick={() => handleDelete(t._id)} className="p-3.5 bg-gray-50 text-rose-500 rounded-2xl hover:bg-rose-50 hover:text-rose-600 transition-all border border-gray-100"><Trash2 size={20}/></button>
//                                         </div>
//                                     </div>

//                                     <button 
//                                         onClick={() => handleViewDetails(t)}
//                                         className="w-full py-4 bg-gray-900 text-white font-black rounded-[1.2rem] flex items-center justify-center gap-2 group-hover:bg-emerald-600 transition-all shadow-xl shadow-gray-200 active:scale-95"
//                                     >
//                                         <Eye size={18} /> Full Overview
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MyTuitions;


import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { BookOpen, MapPin, Edit, Trash2, Eye, Calendar, GraduationCap, Activity, Briefcase } from 'lucide-react';
import Swal from 'sweetalert2';

// Backend URL from .env
const backendUrl = import.meta.env.VITE_API_URL;

const MyTuitions = () => {
    const { user } = useContext(AuthContext);
    const [myTuitions, setMyTuitions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) fetchTuitions();
    }, [user?.email]);

    const fetchTuitions = () => {
        fetch(`${backendUrl}/my-tuitions/${user?.email}`, {
            method: 'GET',
            credentials: "include"
        })
        .then(res => res.json())
        .then(data => {
            setMyTuitions(Array.isArray(data) ? data : []);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    };

    // --- VIEW DETAILS MODAL ---
    const handleViewDetails = (t) => {
        Swal.fire({
            title: `<span class="text-2xl font-black text-emerald-700">${t.title}</span>`,
            html: `
                <div class="text-left space-y-4 p-2 text-gray-700">
                    <div class="grid grid-cols-2 gap-4 bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                        <div><p class="text-[10px] uppercase font-black text-emerald-600">Subject</p><p class="font-bold">${t.subject}</p></div>
                        <div><p class="text-[10px] uppercase font-black text-emerald-600">Class</p><p class="font-bold">${t.className}</p></div>
                        <div><p class="text-[10px] uppercase font-black text-emerald-600">Salary</p><p class="font-bold">৳${t.salary}</p></div>
                        <div><p class="text-[10px] uppercase font-black text-emerald-600">Time</p><p class="font-bold">${t.teachingTime || 'N/A'}</p></div>
                        <div><p class="text-[10px] uppercase font-black text-emerald-600">Student Gender</p><p class="font-bold">${t.studentGender || 'Any'}</p></div>
                        <div><p class="text-[10px] uppercase font-black text-emerald-600">Curriculum</p><p class="font-bold">${t.curriculum || 'N/A'}</p></div>
                    </div>
                    <div class="px-2">
                        <p class="text-[10px] uppercase font-black text-gray-400">Description</p>
                        <p class="italic text-sm text-gray-600 mt-1 leading-relaxed">${t.description || 'No additional requirements mentioned.'}</p>
                    </div>
                    <div class="flex items-center gap-2 px-2 text-xs font-bold text-gray-500">
                        <MapPin size={14} className="text-emerald-500"/> ${t.location}
                    </div>
                </div>
            `,
            confirmButtonText: 'Got it',
            confirmButtonColor: '#059669',
            showClass: { popup: 'animate__animated animate__fadeInUp animate__faster' },
            customClass: { popup: 'rounded-[2rem]' }
        });
    };

    // --- HANDLE UPDATE ---
    const handleUpdate = async (t) => {
        const { value: formValues } = await Swal.fire({
            title: '<div class="flex items-center gap-2 justify-center text-emerald-600 font-black"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg> Update Tuition Post</div>',
            width: '850px',
            html: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left p-4 overflow-x-hidden">
                    <div class="flex flex-col md:col-span-2">
                        <label class="text-xs font-bold text-gray-700 mb-1">Tuition Title</label>
                        <input id="swal-title" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Need Experienced Math Tutor" value="${t.title}">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Subject</label>
                        <input id="swal-subject" class="swal2-input m-0 w-full text-sm" placeholder="Physics, Math etc." value="${t.subject}">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Class/Grade</label>
                        <input id="swal-className" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Class 10 / HSC" value="${t.className}">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Salary (Monthly BDT)</label>
                        <input id="swal-salary" type="number" class="swal2-input m-0 w-full text-sm" placeholder="Budget Amount" value="${t.salary}">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Days Per Week</label>
                        <select id="swal-daysPerWeek" class="swal2-input m-0 w-full text-sm font-medium">
                            <option value="3 Days" ${t.daysPerWeek === '3 Days' ? 'selected' : ''}>3 Days</option>
                            <option value="4 Days" ${t.daysPerWeek === '4 Days' ? 'selected' : ''}>4 Days</option>
                            <option value="5 Days" ${t.daysPerWeek === '5 Days' ? 'selected' : ''}>5 Days</option>
                            <option value="6 Days" ${t.daysPerWeek === '6 Days' ? 'selected' : ''}>6 Days</option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Teaching Time</label>
                        <input id="swal-teachingTime" class="swal2-input m-0 w-full text-sm" placeholder="e.g. 5:00 PM / Evening" value="${t.teachingTime || ''}">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Student Gender</label>
                        <select id="swal-studentGender" class="swal2-input m-0 w-full text-sm font-medium">
                            <option value="Male" ${t.studentGender === 'Male' ? 'selected' : ''}>Male</option>
                            <option value="Female" ${t.studentGender === 'Female' ? 'selected' : ''}>Female</option>
                            <option value="Other" ${t.studentGender === 'Other' ? 'selected' : ''}>Both/Other</option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Curriculum/Version</label>
                        <input id="swal-curriculum" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Bangla Medium" value="${t.curriculum || ''}">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Detailed Location</label>
                        <input id="swal-location" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Mirpur-10, Dhaka" value="${t.location}">
                    </div>
                    <div class="flex flex-col md:col-span-2">
                        <label class="text-xs font-bold text-gray-700 mb-1">Additional Description</label>
                        <textarea id="swal-description" class="swal2-textarea m-0 w-full h-24 text-sm" placeholder="Mention requirements...">${t.description || ''}</textarea>
                    </div>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Save Changes',
            confirmButtonColor: '#059669',
            cancelButtonColor: '#6b7280',
            customClass: { popup: 'rounded-[2rem]' },
            preConfirm: () => {
                const title = document.getElementById('swal-title').value;
                const subject = document.getElementById('swal-subject').value;
                if (!title || !subject) {
                    Swal.showValidationMessage(`Title and Subject are required`);
                }
                return {
                    title,
                    subject,
                    className: document.getElementById('swal-className').value,
                    salary: document.getElementById('swal-salary').value,
                    daysPerWeek: document.getElementById('swal-daysPerWeek').value,
                    teachingTime: document.getElementById('swal-teachingTime').value,
                    studentGender: document.getElementById('swal-studentGender').value,
                    curriculum: document.getElementById('swal-curriculum').value,
                    location: document.getElementById('swal-location').value,
                    description: document.getElementById('swal-description').value,
                }
            }
        });

        if (formValues) {
            fetch(`${backendUrl}/tuitions/update/${t._id}`, {
                method: 'PATCH',
                headers: { 'content-type': 'application/json' },
                credentials: "include",
                body: JSON.stringify(formValues)
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Post updated and sent for Admin re-approval.",
                        icon: "success",
                        confirmButtonColor: "#059669"
                    });
                    fetchTuitions(); 
                }
            });
        }
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This tuition post will be permanently removed.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#94a3b8",
            confirmButtonText: "Yes, Delete it",
            customClass: { popup: 'rounded-[2rem]' }
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${backendUrl}/tuitions/student/${id}`, { method: 'DELETE', credentials: "include" })
                .then(() => {
                    setMyTuitions(myTuitions.filter(t => t._id !== id));
                    Swal.fire("Deleted!", "Post has been removed.", "success");
                });
            }
        });
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-dots loading-lg text-emerald-600"></span></div>;

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-20">
            {/* STICKY HEADER */}
            <div className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-100 mb-8">
                <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 tracking-tighter flex items-center gap-2">
                            My <span className="text-emerald-600 italic">Tuitions</span> <Activity className="text-emerald-400" />
                        </h1>
                        <p className="text-gray-500 text-sm font-medium">Manage and track your active tutor requests</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-emerald-50 px-5 py-2.5 rounded-2xl border border-emerald-100 hidden sm:block">
                            <p className="text-[10px] font-black text-emerald-600 uppercase">Active Account</p>
                            <p className="text-sm font-bold text-gray-700">{user?.displayName || user?.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                {myTuitions.length === 0 ? (
                    <div className="bg-white rounded-[3rem] p-20 text-center shadow-sm border border-dashed border-gray-200 mt-10">
                        <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Briefcase className="text-gray-300" size={48} />
                        </div>
                        <h2 className="text-2xl font-black text-gray-800">No Tuitions Posted</h2>
                        <p className="text-gray-500 mt-2 max-w-xs mx-auto">You haven't posted any requirements yet. Start finding your perfect tutor today!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {myTuitions.map((t) => (
                            <div key={t._id} className="group bg-white rounded-[2.5rem] p-7 border border-transparent shadow-sm hover:shadow-2xl hover:border-emerald-100 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0">
                                    <div className={`px-6 py-1.5 rounded-bl-3xl text-[10px] font-black uppercase tracking-widest text-white shadow-sm ${
                                        t.status === 'Approved' ? 'bg-emerald-500' : t.status === 'Pending' ? 'bg-orange-400' : 'bg-rose-500'
                                    }`}>
                                        {t.status}
                                    </div>
                                </div>

                                <div className="space-y-5">
                                    <div className="pt-4">
                                        <h3 className="text-xl font-black text-gray-800 leading-tight group-hover:text-emerald-700 transition-colors line-clamp-2 min-h-[56px]">
                                            {t.title}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5">
                                            <BookOpen size={14}/> {t.subject}
                                        </span>
                                        <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5">
                                            <GraduationCap size={14}/> {t.className}
                                        </span>
                                    </div>

                                    <div className="space-y-3 text-sm text-gray-500 font-bold">
                                        <div className="flex items-center gap-2.5"><Calendar size={18} className="text-emerald-500"/> {t.daysPerWeek}</div>
                                        <div className="flex items-center gap-2.5"><MapPin size={18} className="text-emerald-500"/> <span className="truncate">{t.location}</span></div>
                                    </div>

                                    <div className="pt-5 border-t border-gray-50 flex items-center justify-between">
                                        <div>
                                            <span className="text-[10px] font-black text-gray-400 uppercase block tracking-wider">Budget / Month</span>
                                            <span className="text-2xl font-black text-gray-900 group-hover:text-emerald-600 transition-colors">৳{t.salary}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => handleUpdate(t)} className="p-3.5 bg-gray-50 text-gray-600 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all border border-gray-100"><Edit size={20}/></button>
                                            <button onClick={() => handleDelete(t._id)} className="p-3.5 bg-gray-50 text-rose-500 rounded-2xl hover:bg-rose-50 hover:text-rose-600 transition-all border border-gray-100"><Trash2 size={20}/></button>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => handleViewDetails(t)}
                                        className="w-full py-4 bg-gray-900 text-white font-black rounded-[1.2rem] flex items-center justify-center gap-2 group-hover:bg-emerald-600 transition-all shadow-xl shadow-gray-200 active:scale-95"
                                    >
                                        <Eye size={18} /> Full Overview
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyTuitions;

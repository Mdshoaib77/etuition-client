// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaTrash, FaCheck, FaTimes, FaEye, FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt, FaUser } from 'react-icons/fa';

// const TuitionManagement = () => {
//     const [allTuitions, setAllTuitions] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchTuitions();
//     }, []);

//     const fetchTuitions = () => {
//         fetch('http://localhost:5000/admin/all-tuitions', {
//             method: 'GET',
//             credentials: "include",
//         })
//         .then(res => res.json())
//         .then(data => {
//             setAllTuitions(Array.isArray(data) ? data : []);
//             setLoading(false);
//         })
//         .catch(err => {
//             console.error("Error loading tuitions:", err);
//             setLoading(false);
//         });
//     };

//     const openModerationModal = (t) => {
//         // Logic to find the correct data even if field names vary
//         const studentDisplayName = t?.studentName || t?.name || t?.userName || "Student User";
//         const specialReq = t?.requirements || t?.requirement || t?.details || t?.desc || "No special requirements mentioned.";

//         Swal.fire({
//             title: `<span class="text-emerald-700 font-black text-2xl">Moderation Review</span>`,
//             html: `
//                 <div class="text-left space-y-4 p-5 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner">
//                     <div class="grid grid-cols-2 gap-3 text-sm">
//                         <p><b>Student:</b> ${studentDisplayName}</p>
//                         <p><b>Gender:</b> ${t?.studentGender || t?.gender || 'Not Specified'}</p>
//                         <p><b>Class:</b> ${t?.className || 'N/A'}</p>
//                         <p><b>Subject:</b> ${t?.subject || 'N/A'}</p>
//                     </div>
//                     <hr class="border-slate-200">
//                     <p class="text-sm"><b>Location:</b> ${t?.location || 'Not Provided'}</p>
//                     <p class="text-sm"><b>Salary:</b> ${t?.salary || 0} BDT (${t?.daysPerWeek || 'Flexible'})</p>
//                     <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-100 mt-3">
//                         <p class="text-[10px] font-bold text-emerald-700 uppercase mb-1 underline">Requirements From Student:</p>
//                         <p class="text-sm font-medium text-slate-700 italic leading-relaxed">
//                             "${specialReq}"
//                         </p>
//                     </div>
//                 </div>
//             `,
//             showDenyButton: true,
//             showCancelButton: true,
//             showCloseButton: true,
//             confirmButtonText: '<i class="fa fa-check"></i> Approve',
//             denyButtonText: '<i class="fa fa-times"></i> Reject',
//             cancelButtonText: '<i class="fa fa-trash"></i> Delete',
//             confirmButtonColor: '#10b981', 
//             denyButtonColor: '#f59e0b',    
//             cancelButtonColor: '#ef4444',  
//             customClass: {
//                 confirmButton: 'rounded-xl order-1',
//                 denyButton: 'rounded-xl order-2',
//                 cancelButton: 'rounded-xl order-3',
//             }
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 updateStatus(t._id, 'Approved');
//             } else if (result.isDenied) {
//                 updateStatus(t._id, 'Rejected');
//             } else if (result.dismiss === Swal.DismissReason.cancel) {
//                 confirmDelete(t._id);
//             }
//         });
//     };

//     const updateStatus = (id, newStatus) => {
//         fetch(`http://localhost:5000/tuitions/status/${id}`, {
//             method: 'PATCH',
//             headers: { 'content-type': 'application/json' },
//             credentials: "include",
//             body: JSON.stringify({ status: newStatus })
//         })
//         .then(res => res.json())
//         .then(data => {
//             if(data.modifiedCount > 0){
//                 Swal.fire({ title: 'Success', text: `Tuition ${newStatus}`, icon: 'success', confirmButtonColor: '#10b981' });
//                 setAllTuitions(prev => prev.map(item => item._id === id ? {...item, status: newStatus} : item));
//             }
//         });
//     };

//     const confirmDelete = (id) => {
//         Swal.fire({
//             title: 'Delete Permanently?',
//             text: "This tuition post will be removed from the system!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#ef4444',
//             confirmButtonText: 'Yes, Delete'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/tuitions/${id}`, {
//                     method: 'DELETE',
//                     credentials: "include",
//                 })
//                 .then(res => res.json())
//                 .then(data => {
//                     if(data.deletedCount > 0){
//                         Swal.fire({ title: 'Deleted!', icon: 'success', confirmButtonColor: '#10b981' });
//                         setAllTuitions(prev => prev.filter(item => item._id !== id));
//                     }
//                 });
//             }
//         });
//     };

//     if (loading) return <div className="p-20 text-center"><span className="loading loading-spinner loading-lg text-emerald-600"></span></div>;

//     return (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 max-w-7xl mx-auto min-h-screen">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//                 <div>
//                     <h2 className="text-4xl font-black text-slate-800">Admin <span className="text-emerald-600">Moderation</span></h2>
//                     <p className="text-slate-500 font-medium italic">Monitor and manage tuition requests</p>
//                 </div>
//                 <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-slate-100 gap-2">
//                     <div className="bg-emerald-600 text-white px-5 py-2 rounded-xl text-center">
//                         <p className="text-[10px] font-bold uppercase">Approved</p>
//                         <p className="text-xl font-black">{allTuitions.filter(t => t.status === 'Approved').length}</p>
//                     </div>
//                     <div className="bg-amber-500 text-white px-5 py-2 rounded-xl text-center">
//                         <p className="text-[10px] font-bold uppercase">Pending</p>
//                         <p className="text-xl font-black">{allTuitions.filter(t => t.status === 'Pending').length}</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
//                 <div className="overflow-x-auto">
//                     <table className="table w-full">
//                         <thead className="bg-slate-50 border-b">
//                             <tr className="h-16 text-slate-400 text-xs uppercase tracking-widest font-bold">
//                                 <th className="pl-10">Student Profile</th>
//                                 <th>Subject</th>
//                                 <th>Remuneration</th>
//                                 <th>Status</th>
//                                 <th className="text-center pr-10">Decision</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <AnimatePresence>
//                                 {allTuitions.map((t) => {
//                                     const studentDisplayName = t?.studentName || t?.name || t?.userName || "Student";
//                                     return (
//                                         <motion.tr key={t._id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hover:bg-emerald-50/20 transition-all border-b border-slate-50">
//                                             <td className="pl-10 py-6">
//                                                 <div className="flex items-center gap-4">
//                                                     <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-black">
//                                                         {studentDisplayName.charAt(0)}
//                                                     </div>
//                                                     <div>
//                                                         <div className="font-black text-slate-800">{studentDisplayName}</div>
//                                                         <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase">
//                                                             <FaMapMarkerAlt className="text-emerald-500" /> {t?.location?.substring(0, 18) || "No Address"}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </td>
//                                             <td>
//                                                 <div className="font-bold text-slate-700">{t?.subject || 'N/A'}</div>
//                                                 <div className="badge badge-xs bg-slate-100 text-slate-500 border-none font-bold uppercase">{t?.className || 'N/A'}</div>
//                                             </td>
//                                             <td>
//                                                 <div className="font-black text-emerald-600 flex items-center gap-1"><FaMoneyBillWave /> {t?.salary || 0}</div>
//                                                 <div className="text-[10px] text-slate-400 font-bold uppercase">{t?.daysPerWeek || 'Flexible'}</div>
//                                             </td>
//                                             <td>
//                                                 <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${
//                                                     t.status === 'Approved' ? 'bg-green-100 text-green-700' : 
//                                                     t.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
//                                                 }`}>
//                                                     {t.status}
//                                                 </span>
//                                             </td>
//                                             <td className="pr-10 text-center">
//                                                 <button onClick={() => openModerationModal(t)} className="btn btn-sm bg-white hover:bg-emerald-600 hover:text-white rounded-xl border-slate-200 transition-all">
//                                                     <FaEye /> <span className="ml-1 uppercase text-[10px]">Review</span>
//                                                 </button>
//                                             </td>
//                                         </motion.tr>
//                                     );
//                                 })}
//                             </AnimatePresence>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default TuitionManagement;


import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrash, FaCheck, FaTimes, FaEye, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';

// 🔥 Backend URL from environment
const backendUrl = import.meta.env.VITE_API_URL;

const TuitionManagement = () => {
    const [allTuitions, setAllTuitions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTuitions();
    }, []);

    const fetchTuitions = () => {
        fetch(`${backendUrl}/admin/all-tuitions`, {
            method: 'GET',
            credentials: "include",
        })
        .then(res => res.json())
        .then(data => {
            setAllTuitions(Array.isArray(data) ? data : []);
            setLoading(false);
        })
        .catch(err => {
            console.error("Error loading tuitions:", err);
            setLoading(false);
        });
    };

    const openModerationModal = (t) => {
        const studentDisplayName = t?.studentName || t?.name || t?.userName || "Student User";
        const specialReq = t?.requirements || t?.requirement || t?.details || t?.desc || "No special requirements mentioned.";

        Swal.fire({
            title: `<span class="text-emerald-700 font-black text-2xl">Moderation Review</span>`,
            html: `
                <div class="text-left space-y-4 p-5 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner">
                    <div class="grid grid-cols-2 gap-3 text-sm">
                        <p><b>Student:</b> ${studentDisplayName}</p>
                        <p><b>Gender:</b> ${t?.studentGender || t?.gender || 'Not Specified'}</p>
                        <p><b>Class:</b> ${t?.className || 'N/A'}</p>
                        <p><b>Subject:</b> ${t?.subject || 'N/A'}</p>
                    </div>
                    <hr class="border-slate-200">
                    <p class="text-sm"><b>Location:</b> ${t?.location || 'Not Provided'}</p>
                    <p class="text-sm"><b>Salary:</b> ${t?.salary || 0} BDT (${t?.daysPerWeek || 'Flexible'})</p>
                    <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-100 mt-3">
                        <p class="text-[10px] font-bold text-emerald-700 uppercase mb-1 underline">Requirements From Student:</p>
                        <p class="text-sm font-medium text-slate-700 italic leading-relaxed">
                            "${specialReq}"
                        </p>
                    </div>
                </div>
            `,
            showDenyButton: true,
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: '<i class="fa fa-check"></i> Approve',
            denyButtonText: '<i class="fa fa-times"></i> Reject',
            cancelButtonText: '<i class="fa fa-trash"></i> Delete',
            confirmButtonColor: '#10b981', 
            denyButtonColor: '#f59e0b',    
            cancelButtonColor: '#ef4444',  
            customClass: {
                confirmButton: 'rounded-xl order-1',
                denyButton: 'rounded-xl order-2',
                cancelButton: 'rounded-xl order-3',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                updateStatus(t._id, 'Approved');
            } else if (result.isDenied) {
                updateStatus(t._id, 'Rejected');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                confirmDelete(t._id);
            }
        });
    };

    const updateStatus = (id, newStatus) => {
        fetch(`${backendUrl}/tuitions/status/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({ status: newStatus })
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({ title: 'Success', text: `Tuition ${newStatus}`, icon: 'success', confirmButtonColor: '#10b981' });
                setAllTuitions(prev => prev.map(item => item._id === id ? {...item, status: newStatus} : item));
            }
        });
    };

    const confirmDelete = (id) => {
        Swal.fire({
            title: 'Delete Permanently?',
            text: "This tuition post will be removed from the system!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            confirmButtonText: 'Yes, Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${backendUrl}/tuitions/${id}`, {
                    method: 'DELETE',
                    credentials: "include",
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire({ title: 'Deleted!', icon: 'success', confirmButtonColor: '#10b981' });
                        setAllTuitions(prev => prev.filter(item => item._id !== id));
                    }
                });
            }
        });
    };

    if (loading) return <div className="p-20 text-center"><span className="loading loading-spinner loading-lg text-emerald-600"></span></div>;

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 max-w-7xl mx-auto min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h2 className="text-4xl font-black text-slate-800">Admin <span className="text-emerald-600">Moderation</span></h2>
                    <p className="text-slate-500 font-medium italic">Monitor and manage tuition requests</p>
                </div>
                <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-slate-100 gap-2">
                    <div className="bg-emerald-600 text-white px-5 py-2 rounded-xl text-center">
                        <p className="text-[10px] font-bold uppercase">Approved</p>
                        <p className="text-xl font-black">{allTuitions.filter(t => t.status === 'Approved').length}</p>
                    </div>
                    <div className="bg-amber-500 text-white px-5 py-2 rounded-xl text-center">
                        <p className="text-[10px] font-bold uppercase">Pending</p>
                        <p className="text-xl font-black">{allTuitions.filter(t => t.status === 'Pending').length}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-slate-50 border-b">
                            <tr className="h-16 text-slate-400 text-xs uppercase tracking-widest font-bold">
                                <th className="pl-10">Student Profile</th>
                                <th>Subject</th>
                                <th>Remuneration</th>
                                <th>Status</th>
                                <th className="text-center pr-10">Decision</th>
                            </tr>
                        </thead>
                        <tbody>
                            <AnimatePresence>
                                {allTuitions.map((t) => {
                                    const studentDisplayName = t?.studentName || t?.name || t?.userName || "Student";
                                    return (
                                        <motion.tr key={t._id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hover:bg-emerald-50/20 transition-all border-b border-slate-50">
                                            <td className="pl-10 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-black">
                                                        {studentDisplayName.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="font-black text-slate-800">{studentDisplayName}</div>
                                                        <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase">
                                                            <FaMapMarkerAlt className="text-emerald-500" /> {t?.location?.substring(0, 18) || "No Address"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="font-bold text-slate-700">{t?.subject || 'N/A'}</div>
                                                <div className="badge badge-xs bg-slate-100 text-slate-500 border-none font-bold uppercase">{t?.className || 'N/A'}</div>
                                            </td>
                                            <td>
                                                <div className="font-black text-emerald-600 flex items-center gap-1"><FaMoneyBillWave /> {t?.salary || 0}</div>
                                                <div className="text-[10px] text-slate-400 font-bold uppercase">{t?.daysPerWeek || 'Flexible'}</div>
                                            </td>
                                            <td>
                                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${
                                                    t.status === 'Approved' ? 'bg-green-100 text-green-700' : 
                                                    t.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                                                }`}>
                                                    {t.status}
                                                </span>
                                            </td>
                                            <td className="pr-10 text-center">
                                                <button onClick={() => openModerationModal(t)} className="btn btn-sm bg-white hover:bg-emerald-600 hover:text-white rounded-xl border-slate-200 transition-all">
                                                    <FaEye /> <span className="ml-1 uppercase text-[10px]">Review</span>
                                                </button>
                                            </td>
                                        </motion.tr>
                                    );
                                })}
                            </AnimatePresence>
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );
};

export default TuitionManagement;

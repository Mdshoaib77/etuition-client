// // // import React from 'react'

// // // const TuitionManagement = () => {
// // //   return (
// // //     <div>
// // //       <h1>aLHAMDULLIAH admin mamage</h1>
// // //     </div>
// // //   )
// // // }

// // // export default TuitionManagement


// // // import React, { useEffect, useState } from 'react';
// // // import Swal from 'sweetalert2';

// // // const TuitionManagement = () => {
// // //     const [allTuitions, setAllTuitions] = useState([]);

// // //     useEffect(() => {
// // //         fetch('http://localhost:5000/all-tuitions') // verifyToken middleware handle korben
// // //             .then(res => res.json())
// // //             .then(data => setAllTuitions(data));
// // //     }, []);

// // //     const handleStatus = (id, newStatus) => {
// // //         fetch(`http://localhost:5000/tuition-status/${id}`, {
// // //             method: 'PATCH',
// // //             headers: { 'content-type': 'application/json' },
// // //             body: JSON.stringify({ status: newStatus })
// // //         })
// // //         .then(res => res.json())
// // //         .then(data => {
// // //             if(data.modifiedCount > 0){
// // //                 Swal.fire("Updated!", `Tuition is now ${newStatus}`, "success");
// // //                 // Local state update
// // //                 setAllTuitions(prev => prev.map(t => t._id === id ? {...t, status: newStatus} : t));
// // //             }
// // //         });
// // //     };

// // //     return (
// // //         <div className="overflow-x-auto">
// // //             <h2 className="text-2xl font-bold mb-4">Tuition Management</h2>
// // //             <table className="table table-zebra w-full">
// // //                 <thead className="bg-emerald-600 text-white">
// // //                     <tr>
// // //                         <th>Student</th>
// // //                         <th>Subject</th>
// // //                         <th>Status</th>
// // //                         <th>Action</th>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {allTuitions.map(tuition => (
// // //                         <tr key={tuition._id}>
// // //                             <td>{tuition.studentName}</td>
// // //                             <td>{tuition.subject}</td>
// // //                             <td>
// // //                                 <span className={`badge ${tuition.status === 'Approved' ? 'badge-success' : 'badge-warning'}`}>
// // //                                     {tuition.status}
// // //                                 </span>
// // //                             </td>
// // //                             <td className="space-x-2">
// // //                                 <button onClick={() => handleStatus(tuition._id, 'Approved')} className="btn btn-xs btn-success">Approve</button>
// // //                                 <button onClick={() => handleStatus(tuition._id, 'Rejected')} className="btn btn-xs btn-error">Reject</button>
// // //                             </td>
// // //                         </tr>
// // //                     ))}
// // //                 </tbody>
// // //             </table>
// // //         </div>
// // //     );
// // // };

// // // export default TuitionManagement;


// // import React, { useEffect, useState } from 'react';
// // import Swal from 'sweetalert2';

// // const TuitionManagement = () => {
// //     const [allTuitions, setAllTuitions] = useState([]);

// //     useEffect(() => {
// //         // Backend e path ta chilo '/admin/all-tuitions' 
// //         fetch('http://localhost:5000/admin/all-tuitions', {
// //             method: 'GET',
// //             credentials: "include", // JWT cookie pathanor jonno eita must
// //         })
// //             .then(res => {
// //                 if (!res.ok) throw new Error("Failed to fetch");
// //                 return res.json();
// //             })
// //             .then(data => setAllTuitions(data))
// //             .catch(err => console.error("Error loading tuitions:", err));
// //     }, []);

// //     const handleStatus = (id, newStatus) => {
// //         // Backend path chilo '/tuitions/status/:id'
// //         fetch(`http://localhost:5000/tuitions/status/${id}`, {
// //             method: 'PATCH',
// //             headers: { 'content-type': 'application/json' },
// //             credentials: "include",
// //             body: JSON.stringify({ status: newStatus })
// //         })
// //         .then(res => res.json())
// //         .then(data => {
// //             if(data.modifiedCount > 0){
// //                 Swal.fire("Updated!", `Tuition is now ${newStatus}`, "success");
// //                 // Local state update jate page reload na korei status change dekha jay
// //                 setAllTuitions(prev => prev.map(t => t._id === id ? {...t, status: newStatus} : t));
// //             }
// //         });
// //     };

// //     return (
// //         <div className="p-6">
// //             <h2 className="text-3xl font-bold mb-6 text-emerald-700">Tuition Management</h2>
// //             <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
// //                 <table className="table w-full">
// //                     {/* Head */}
// //                     <thead className="bg-emerald-600 text-white">
// //                         <tr>
// //                             <th>#</th>
// //                             <th>Student Name</th>
// //                             <th>Subject</th>
// //                             <th>Salary</th>
// //                             <th>Status</th>
// //                             <th>Action</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {allTuitions.length === 0 ? (
// //                             <tr>
// //                                 <td colSpan="6" className="text-center py-10 text-gray-500">No tuitions found.</td>
// //                             </tr>
// //                         ) : (
// //                             allTuitions.map((tuition, index) => (
// //                                 <tr key={tuition._id} className="hover:bg-gray-50 transition-colors">
// //                                     <th>{index + 1}</th>
// //                                     <td>
// //                                         <div className="font-bold">{tuition.studentName}</div>
// //                                         <div className="text-xs opacity-50">{tuition.studentEmail}</div>
// //                                     </td>
// //                                     <td>{tuition.subject}</td>
// //                                     <td>{tuition.salary} BDT</td>
// //                                     <td>
// //                                         <span className={`badge border-none py-3 px-4 ${
// //                                             tuition.status === 'Approved' ? 'bg-green-100 text-green-700' : 
// //                                             tuition.status === 'Rejected' ? 'bg-red-100 text-red-700' : 
// //                                             'bg-yellow-100 text-yellow-700'
// //                                         }`}>
// //                                             {tuition.status}
// //                                         </span>
// //                                     </td>
// //                                     <td className="flex gap-2">
// //                                         <button 
// //                                             disabled={tuition.status === 'Approved'}
// //                                             onClick={() => handleStatus(tuition._id, 'Approved')} 
// //                                             className="btn btn-sm btn-success text-white border-none bg-emerald-500 hover:bg-emerald-600">
// //                                             Approve
// //                                         </button>
// //                                         <button 
// //                                             disabled={tuition.status === 'Rejected'}
// //                                             onClick={() => handleStatus(tuition._id, 'Rejected')} 
// //                                             className="btn btn-sm btn-error text-white border-none bg-rose-500 hover:bg-rose-600">
// //                                             Reject
// //                                         </button>
// //                                     </td>
// //                                 </tr>
// //                             ))
// //                         )}
// //                     </tbody>
// //                 </table>
// //             </div>
// //         </div>
// //     );
// // };

// // export default TuitionManagement;


// // import React, { useEffect, useState } from 'react';
// // import Swal from 'sweetalert2';

// // const TuitionManagement = () => {
// //     const [allTuitions, setAllTuitions] = useState([]);

// //     useEffect(() => {
// //         fetch('http://localhost:5000/admin/all-tuitions', {
// //             method: 'GET',
// //             credentials: "include",
// //         })
// //         .then(res => res.json())
// //         .then(data => setAllTuitions(data))
// //         .catch(err => console.error("Error loading tuitions:", err));
// //     }, []);

// //     const handleStatus = (id, newStatus) => {
// //         fetch(`http://localhost:5000/tuitions/status/${id}`, {
// //             method: 'PATCH',
// //             headers: { 'content-type': 'application/json' },
// //             credentials: "include",
// //             body: JSON.stringify({ status: newStatus })
// //         })
// //         .then(res => res.json())
// //         .then(data => {
// //             if(data.modifiedCount > 0){
// //                 Swal.fire("Success!", `Tuition is now ${newStatus}`, "success");
// //                 setAllTuitions(prev => prev.map(t => t._id === id ? {...t, status: newStatus} : t));
// //             }
// //         });
// //     };

// //     return (
// //         <div className="p-6">
// //             <h2 className="text-3xl font-black mb-8 text-emerald-800">Manage All Tuitions</h2>
// //             <div className="overflow-x-auto bg-white shadow-2xl rounded-2xl border border-gray-100">
// //                 <table className="table w-full">
// //                     <thead className="bg-emerald-600 text-white">
// //                         <tr>
// //                             <th>Student & Info</th>
// //                             <th>Subject/Class</th>
// //                             <th>Days/Salary</th>
// //                             <th>Location</th>
// //                             <th>Status</th>
// //                             <th>Action</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {allTuitions.map((t) => (
// //                             <tr key={t._id} className="hover:bg-gray-50">
// //                                 <td>
// //                                     <div className="font-bold text-gray-800">{t.studentName}</div>
// //                                     <div className="text-xs text-emerald-600 font-bold">{t.studentGender} Student</div>
// //                                 </td>
// //                                 <td>
// //                                     <div className="font-bold">{t.subject}</div>
// //                                     <div className="text-xs opacity-60">{t.className} ({t.curriculum})</div>
// //                                 </td>
// //                                 <td>
// //                                     <div className="font-bold">{t.salary} BDT</div>
// //                                     <div className="badge badge-sm badge-outline text-gray-500">{t.daysPerWeek}</div>
// //                                 </td>
// //                                 <td className="max-w-[150px] truncate text-xs">{t.location}</td>
// //                                 <td>
// //                                     <span className={`badge border-none font-bold ${
// //                                         t.status === 'Approved' ? 'bg-green-100 text-green-700' : 
// //                                         t.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
// //                                     }`}>
// //                                         {t.status}
// //                                     </span>
// //                                 </td>
// //                                 <td className="flex gap-2">
// //                                     <button onClick={() => handleStatus(t._id, 'Approved')} disabled={t.status === 'Approved'} className="btn btn-xs btn-success text-white">Approve</button>
// //                                     <button onClick={() => handleStatus(t._id, 'Rejected')} disabled={t.status === 'Rejected'} className="btn btn-xs btn-error text-white">Reject</button>
// //                                 </td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             </div>
// //         </div>
// //     );
// // };

// // export default TuitionManagement;

// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaCheck, FaTimes, FaEye, FaInfoCircle } from 'react-icons/fa';

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
//             setAllTuitions(data);
//             setLoading(false);
//         })
//         .catch(err => {
//             console.error("Error loading tuitions:", err);
//             setLoading(false);
//         });
//     };

//     const handleStatus = (id, newStatus) => {
//         const isApprove = newStatus === 'Approved';
        
//         Swal.fire({
//             title: isApprove ? 'Approve Tuition?' : 'Reject Tuition?',
//             text: isApprove ? "This will make it visible to all tutors." : "This will hide it and notify the student.",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: isApprove ? '#059669' : '#ef4444',
//             confirmButtonText: isApprove ? 'Yes, Approve' : 'Yes, Reject'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/tuitions/status/${id}`, {
//                     method: 'PATCH',
//                     headers: { 'content-type': 'application/json' },
//                     credentials: "include",
//                     body: JSON.stringify({ status: newStatus })
//                 })
//                 .then(res => res.json())
//                 .then(data => {
//                     if(data.modifiedCount > 0){
//                         Swal.fire({
//                             title: 'Status Updated!',
//                             icon: 'success',
//                             confirmButtonColor: '#059669'
//                         });
//                         setAllTuitions(prev => prev.map(t => t._id === id ? {...t, status: newStatus} : t));
//                     }
//                 });
//             }
//         });
//     };

//     const viewFullDetails = (t) => {
//         Swal.fire({
//             title: `<span class="text-emerald-600 font-black">${t.subject} Details</span>`,
//             html: `
//                 <div class="text-left space-y-3 p-4 bg-slate-50 rounded-2xl border border-emerald-50">
//                     <p><b>Student:</b> ${t.studentName} (${t.studentGender})</p>
//                     <p><b>Class:</b> ${t.className} - ${t.curriculum}</p>
//                     <p><b>Salary:</b> ${t.salary} BDT</p>
//                     <p><b>Days:</b> ${t.daysPerWeek}</p>
//                     <p><b>Address:</b> ${t.location}</p>
//                     <p><b>Email:</b> ${t.studentEmail}</p>
//                     <p><b>Requirements:</b> ${t.requirements || 'N/A'}</p>
//                 </div>
//             `,
//             confirmButtonColor: '#059669',
//             confirmButtonText: 'Close Review'
//         });
//     };

//     if (loading) return <div className="p-20 text-center"><span className="loading loading-spinner loading-lg text-emerald-600"></span></div>;

//     return (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 space-y-8">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//                 <div>
//                     <h2 className="text-3xl font-black text-slate-800 tracking-tight">Tuition Moderation</h2>
//                     <p className="text-slate-500 font-medium">Verify and approve student tuition requests</p>
//                 </div>
//                 <div className="flex gap-4">
//                     <div className="bg-amber-50 text-amber-700 px-4 py-2 rounded-xl font-bold border border-amber-100 shadow-sm text-sm">
//                         Pending: {allTuitions.filter(t => t.status === 'Pending').length}
//                     </div>
//                     <div className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl font-bold border border-emerald-100 shadow-sm text-sm">
//                         Total Posts: {allTuitions.length}
//                     </div>
//                 </div>
//             </div>

//             <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
//                 <div className="overflow-x-auto">
//                     <table className="table w-full border-none">
//                         <thead className="bg-emerald-600 text-white border-none">
//                             <tr className="h-16 text-xs uppercase tracking-widest">
//                                 <th className="pl-8">Student & Location</th>
//                                 <th>Subject/Class</th>
//                                 <th>Financials</th>
//                                 <th>Status</th>
//                                 <th className="text-center pr-8">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <AnimatePresence>
//                                 {allTuitions.map((t) => (
//                                     <motion.tr 
//                                         key={t._id}
//                                         layout
//                                         initial={{ opacity: 0 }}
//                                         animate={{ opacity: 1 }}
//                                         className="hover:bg-emerald-50/30 transition-all border-slate-50"
//                                     >
//                                         <td className="pl-8 py-5">
//                                             <div className="font-black text-slate-800 capitalize">{t.studentName}</div>
//                                             <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
//                                                 <FaInfoCircle /> {t.location.substring(0, 20)}...
//                                             </div>
//                                         </td>
//                                         <td>
//                                             <div className="font-bold text-slate-700">{t.subject}</div>
//                                             <div className="text-xs opacity-60 font-medium">{t.className} ({t.curriculum})</div>
//                                         </td>
//                                         <td>
//                                             <div className="font-black text-emerald-600">{t.salary} BDT</div>
//                                             <div className="badge badge-xs badge-ghost font-bold text-[9px] uppercase">{t.daysPerWeek}</div>
//                                         </td>
//                                         <td>
//                                             <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
//                                                 t.status === 'Approved' ? 'bg-green-100 text-green-700' : 
//                                                 t.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
//                                             }`}>
//                                                 {t.status}
//                                             </span>
//                                         </td>
//                                         <td className="pr-8">
//                                             <div className="flex justify-center items-center gap-2">
//                                                 <button 
//                                                     onClick={() => viewFullDetails(t)} 
//                                                     className="btn btn-sm btn-ghost text-blue-600 hover:bg-blue-50 rounded-xl"
//                                                     title="Review Details"
//                                                 >
//                                                     <FaEye size={18} />
//                                                 </button>
                                                
//                                                 <button 
//                                                     onClick={() => handleStatus(t._id, 'Approved')} 
//                                                     disabled={t.status === 'Approved'}
//                                                     className="btn btn-sm btn-ghost text-emerald-600 hover:bg-emerald-50 rounded-xl disabled:opacity-20"
//                                                     title="Approve Post"
//                                                 >
//                                                     <FaCheck size={16} />
//                                                 </button>

//                                                 <button 
//                                                     onClick={() => handleStatus(t._id, 'Rejected')} 
//                                                     disabled={t.status === 'Rejected'}
//                                                     className="btn btn-sm btn-ghost text-red-500 hover:bg-red-50 rounded-xl disabled:opacity-20"
//                                                     title="Reject Post"
//                                                 >
//                                                     <FaTimes size={16} />
//                                                 </button>
//                                             </div>
//                                         </td>
//                                     </motion.tr>
//                                 ))}
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
import { FaTrash, FaCheck, FaTimes, FaEye, FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt, FaUser } from 'react-icons/fa';

const TuitionManagement = () => {
    const [allTuitions, setAllTuitions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTuitions();
    }, []);

    const fetchTuitions = () => {
        fetch('http://localhost:5000/admin/all-tuitions', {
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
        // Logic to find the correct data even if field names vary
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
        fetch(`http://localhost:5000/tuitions/status/${id}`, {
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
                fetch(`http://localhost:5000/tuitions/${id}`, {
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
// // import React from 'react'

// // const TuitionManagement = () => {
// //   return (
// //     <div>
// //       <h1>aLHAMDULLIAH admin mamage</h1>
// //     </div>
// //   )
// // }

// // export default TuitionManagement


// // import React, { useEffect, useState } from 'react';
// // import Swal from 'sweetalert2';

// // const TuitionManagement = () => {
// //     const [allTuitions, setAllTuitions] = useState([]);

// //     useEffect(() => {
// //         fetch('http://localhost:5000/all-tuitions') // verifyToken middleware handle korben
// //             .then(res => res.json())
// //             .then(data => setAllTuitions(data));
// //     }, []);

// //     const handleStatus = (id, newStatus) => {
// //         fetch(`http://localhost:5000/tuition-status/${id}`, {
// //             method: 'PATCH',
// //             headers: { 'content-type': 'application/json' },
// //             body: JSON.stringify({ status: newStatus })
// //         })
// //         .then(res => res.json())
// //         .then(data => {
// //             if(data.modifiedCount > 0){
// //                 Swal.fire("Updated!", `Tuition is now ${newStatus}`, "success");
// //                 // Local state update
// //                 setAllTuitions(prev => prev.map(t => t._id === id ? {...t, status: newStatus} : t));
// //             }
// //         });
// //     };

// //     return (
// //         <div className="overflow-x-auto">
// //             <h2 className="text-2xl font-bold mb-4">Tuition Management</h2>
// //             <table className="table table-zebra w-full">
// //                 <thead className="bg-emerald-600 text-white">
// //                     <tr>
// //                         <th>Student</th>
// //                         <th>Subject</th>
// //                         <th>Status</th>
// //                         <th>Action</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {allTuitions.map(tuition => (
// //                         <tr key={tuition._id}>
// //                             <td>{tuition.studentName}</td>
// //                             <td>{tuition.subject}</td>
// //                             <td>
// //                                 <span className={`badge ${tuition.status === 'Approved' ? 'badge-success' : 'badge-warning'}`}>
// //                                     {tuition.status}
// //                                 </span>
// //                             </td>
// //                             <td className="space-x-2">
// //                                 <button onClick={() => handleStatus(tuition._id, 'Approved')} className="btn btn-xs btn-success">Approve</button>
// //                                 <button onClick={() => handleStatus(tuition._id, 'Rejected')} className="btn btn-xs btn-error">Reject</button>
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default TuitionManagement;


// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';

// const TuitionManagement = () => {
//     const [allTuitions, setAllTuitions] = useState([]);

//     useEffect(() => {
//         // Backend e path ta chilo '/admin/all-tuitions' 
//         fetch('http://localhost:5000/admin/all-tuitions', {
//             method: 'GET',
//             credentials: "include", // JWT cookie pathanor jonno eita must
//         })
//             .then(res => {
//                 if (!res.ok) throw new Error("Failed to fetch");
//                 return res.json();
//             })
//             .then(data => setAllTuitions(data))
//             .catch(err => console.error("Error loading tuitions:", err));
//     }, []);

//     const handleStatus = (id, newStatus) => {
//         // Backend path chilo '/tuitions/status/:id'
//         fetch(`http://localhost:5000/tuitions/status/${id}`, {
//             method: 'PATCH',
//             headers: { 'content-type': 'application/json' },
//             credentials: "include",
//             body: JSON.stringify({ status: newStatus })
//         })
//         .then(res => res.json())
//         .then(data => {
//             if(data.modifiedCount > 0){
//                 Swal.fire("Updated!", `Tuition is now ${newStatus}`, "success");
//                 // Local state update jate page reload na korei status change dekha jay
//                 setAllTuitions(prev => prev.map(t => t._id === id ? {...t, status: newStatus} : t));
//             }
//         });
//     };

//     return (
//         <div className="p-6">
//             <h2 className="text-3xl font-bold mb-6 text-emerald-700">Tuition Management</h2>
//             <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
//                 <table className="table w-full">
//                     {/* Head */}
//                     <thead className="bg-emerald-600 text-white">
//                         <tr>
//                             <th>#</th>
//                             <th>Student Name</th>
//                             <th>Subject</th>
//                             <th>Salary</th>
//                             <th>Status</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {allTuitions.length === 0 ? (
//                             <tr>
//                                 <td colSpan="6" className="text-center py-10 text-gray-500">No tuitions found.</td>
//                             </tr>
//                         ) : (
//                             allTuitions.map((tuition, index) => (
//                                 <tr key={tuition._id} className="hover:bg-gray-50 transition-colors">
//                                     <th>{index + 1}</th>
//                                     <td>
//                                         <div className="font-bold">{tuition.studentName}</div>
//                                         <div className="text-xs opacity-50">{tuition.studentEmail}</div>
//                                     </td>
//                                     <td>{tuition.subject}</td>
//                                     <td>{tuition.salary} BDT</td>
//                                     <td>
//                                         <span className={`badge border-none py-3 px-4 ${
//                                             tuition.status === 'Approved' ? 'bg-green-100 text-green-700' : 
//                                             tuition.status === 'Rejected' ? 'bg-red-100 text-red-700' : 
//                                             'bg-yellow-100 text-yellow-700'
//                                         }`}>
//                                             {tuition.status}
//                                         </span>
//                                     </td>
//                                     <td className="flex gap-2">
//                                         <button 
//                                             disabled={tuition.status === 'Approved'}
//                                             onClick={() => handleStatus(tuition._id, 'Approved')} 
//                                             className="btn btn-sm btn-success text-white border-none bg-emerald-500 hover:bg-emerald-600">
//                                             Approve
//                                         </button>
//                                         <button 
//                                             disabled={tuition.status === 'Rejected'}
//                                             onClick={() => handleStatus(tuition._id, 'Rejected')} 
//                                             className="btn btn-sm btn-error text-white border-none bg-rose-500 hover:bg-rose-600">
//                                             Reject
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default TuitionManagement;


import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const TuitionManagement = () => {
    const [allTuitions, setAllTuitions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/admin/all-tuitions', {
            method: 'GET',
            credentials: "include",
        })
        .then(res => res.json())
        .then(data => setAllTuitions(data))
        .catch(err => console.error("Error loading tuitions:", err));
    }, []);

    const handleStatus = (id, newStatus) => {
        fetch(`http://localhost:5000/tuitions/status/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({ status: newStatus })
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire("Success!", `Tuition is now ${newStatus}`, "success");
                setAllTuitions(prev => prev.map(t => t._id === id ? {...t, status: newStatus} : t));
            }
        });
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-black mb-8 text-emerald-800">Manage All Tuitions</h2>
            <div className="overflow-x-auto bg-white shadow-2xl rounded-2xl border border-gray-100">
                <table className="table w-full">
                    <thead className="bg-emerald-600 text-white">
                        <tr>
                            <th>Student & Info</th>
                            <th>Subject/Class</th>
                            <th>Days/Salary</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTuitions.map((t) => (
                            <tr key={t._id} className="hover:bg-gray-50">
                                <td>
                                    <div className="font-bold text-gray-800">{t.studentName}</div>
                                    <div className="text-xs text-emerald-600 font-bold">{t.studentGender} Student</div>
                                </td>
                                <td>
                                    <div className="font-bold">{t.subject}</div>
                                    <div className="text-xs opacity-60">{t.className} ({t.curriculum})</div>
                                </td>
                                <td>
                                    <div className="font-bold">{t.salary} BDT</div>
                                    <div className="badge badge-sm badge-outline text-gray-500">{t.daysPerWeek}</div>
                                </td>
                                <td className="max-w-[150px] truncate text-xs">{t.location}</td>
                                <td>
                                    <span className={`badge border-none font-bold ${
                                        t.status === 'Approved' ? 'bg-green-100 text-green-700' : 
                                        t.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                                    }`}>
                                        {t.status}
                                    </span>
                                </td>
                                <td className="flex gap-2">
                                    <button onClick={() => handleStatus(t._id, 'Approved')} disabled={t.status === 'Approved'} className="btn btn-xs btn-success text-white">Approve</button>
                                    <button onClick={() => handleStatus(t._id, 'Rejected')} disabled={t.status === 'Rejected'} className="btn btn-xs btn-error text-white">Reject</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TuitionManagement;
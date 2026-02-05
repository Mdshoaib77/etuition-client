// // // import React from 'react'

// // // const AppliedTutors = () => {
// // //   return (
// // //     <div>
// // //       <h1>Alhamndulliah</h1>
// // //     </div>
// // //   )
// // // }

// // // export default AppliedTutors


// // import React, { useEffect, useState, useContext } from 'react';
// // import { AuthContext } from '../../../context/AuthProvider';
// // import Swal from 'sweetalert2';

// // const AppliedTutors = () => {
// //     const { user } = useContext(AuthContext);
// //     const [applications, setApplications] = useState([]);

// //     useEffect(() => {
// //         fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`)
// //             .then(res => res.json())
// //             .then(data => setApplications(data));
// //     }, [user]);

// //     const handleStatus = (id, newStatus) => {
// //         fetch(`http://localhost:5000/applications/status/${id}`, {
// //             method: 'PATCH',
// //             headers: { 'content-type': 'application/json' },
// //             body: JSON.stringify({ status: newStatus })
// //         })
// //         .then(res => res.json())
// //         .then(() => {
// //             Swal.fire("Updated!", `Application ${newStatus}`, "success");
// //             setApplications(applications.map(app => app._id === id ? { ...app, status: newStatus } : app));
// //         });
// //     };

// //     return (
// //         <div className="p-8">
// //             <h2 className="text-2xl font-bold mb-6">Tutors Applied to Your Posts</h2>
// //             <div className="overflow-x-auto shadow-lg rounded-lg">
// //                 <table className="table w-full bg-white">
// //                     <thead className="bg-emerald-600 text-white">
// //                         <tr>
// //                             <th>Tutor Email</th>
// //                             <th>Tuition Title</th>
// //                             <th>Experience</th>
// //                             <th>Status</th>
// //                             <th>Action</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {applications.map(app => (
// //                             <tr key={app._id}>
// //                                 <td>{app.tutorEmail}</td>
// //                                 <td>{app.tuitionTitle}</td>
// //                                 <td>{app.experience}</td>
// //                                 <td>
// //                                     <span className={`badge ${app.status === 'Accepted' ? 'badge-success' : app.status === 'Rejected' ? 'badge-error' : 'badge-warning'}`}>
// //                                         {app.status}
// //                                     </span>
// //                                 </td>
// //                                 <td className="flex gap-2">
// //                                     {app.status === 'pending' && (
// //                                         <>
// //                                             <button onClick={() => handleStatus(app._id, 'Accepted')} className="btn btn-xs btn-success text-white">Accept</button>
// //                                             <button onClick={() => handleStatus(app._id, 'Rejected')} className="btn btn-xs btn-error text-white">Reject</button>
// //                                         </>
// //                                     )}
// //                                 </td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AppliedTutors;

// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';
// import Swal from 'sweetalert2';

// const AppliedTutors = () => {
//     const { user } = useContext(AuthContext);
//     // 🔥 Initial state faka array [] rakhte hobe
//     const [applications, setApplications] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             setLoading(true);
//             fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     // 🔥 Check kora hocche data asholei Array kina
//                     if (Array.isArray(data)) {
//                         setApplications(data);
//                     } else {
//                         setApplications([]); // Jodi object ba error ashe, array faka kore dibo
//                     }
//                     setLoading(false);
//                 })
//                 .catch(err => {
//                     console.error("Fetch error:", err);
//                     setApplications([]);
//                     setLoading(false);
//                 });
//         }
//     }, [user?.email]);

//     const handleStatus = (id, newStatus) => {
//         fetch(`http://localhost:5000/applications/status/${id}`, {
//             method: 'PATCH',
//             headers: { 'content-type': 'application/json' },
//             body: JSON.stringify({ status: newStatus })
//         })
//         .then(res => res.json())
//         .then(data => {
//             if (data.modifiedCount > 0) {
//                 Swal.fire("Updated!", `Application ${newStatus}`, "success");
//                 setApplications(applications.map(app => app._id === id ? { ...app, status: newStatus } : app));
//             }
//         });
//     };

//     if (loading) return <div className="p-8 text-center font-bold">Loading Applications...</div>;

//     return (
//         <div className="p-8">
//             <h2 className="text-2xl font-bold mb-6">Tutors Applied to Your Posts</h2>
            
//             {/* 🔥 Application length check kora valo */}
//             {applications.length === 0 ? (
//                 <div className="bg-white p-10 text-center rounded-xl shadow">
//                     <p className="text-gray-500 italic">No tutors have applied to your posts yet.</p>
//                 </div>
//             ) : (
//                 <div className="overflow-x-auto shadow-lg rounded-lg">
//                     <table className="table w-full bg-white">
//                         <thead className="bg-emerald-600 text-white">
//                             <tr>
//                                 <th>Tutor Email</th>
//                                 <th>Tuition Title</th>
//                                 <th>Experience</th>
//                                 <th>Status</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {/* 🔥 Optional chaining (?.) use kora safe */}
//                             {applications?.map(app => (
//                                 <tr key={app._id} className="hover:bg-gray-50">
//                                     <td className="font-medium text-gray-700">{app.tutorEmail}</td>
//                                     <td>{app.tuitionTitle}</td>
//                                     <td>{app.experience}</td>
//                                     <td>
//                                         <span className={`badge border-none px-3 py-1 font-bold ${
//                                             app.status === 'Accepted' ? 'bg-green-100 text-green-700' : 
//                                             app.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
//                                         }`}>
//                                             {app.status}
//                                         </span>
//                                     </td>
//                                     <td className="flex gap-2">
//                                         {app.status === 'pending' ? (
//                                             <>
//                                                 <button onClick={() => handleStatus(app._id, 'Accepted')} className="btn btn-xs bg-emerald-600 hover:bg-emerald-700 text-white border-none">Accept</button>
//                                                 <button onClick={() => handleStatus(app._id, 'Rejected')} className="btn btn-xs bg-red-500 hover:bg-red-600 text-white border-none">Reject</button>
//                                             </>
//                                         ) : (
//                                             <span className="text-xs text-gray-400 italic font-medium">No Action</span>
//                                         )}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AppliedTutors;


import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Swal from 'sweetalert2';

const AppliedTutors = () => {
    const { user } = useContext(AuthContext);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`, {
                method: 'GET',
                credentials: "include" // 🔥 Crucial for Cookie
            })
            .then(res => res.json())
            .then(data => {
                setApplications(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
        }
    }, [user?.email]);

    const handleStatus = (id, newStatus) => {
        fetch(`http://localhost:5000/applications/status/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            credentials: "include", // 🔥 Crucial for Cookie
            body: JSON.stringify({ status: newStatus })
        })
        .then(res => res.json())
        .then(() => {
            Swal.fire("Updated!", `Status changed to ${newStatus}`, "success");
            setApplications(applications.map(app => app._id === id ? { ...app, status: newStatus } : app));
        });
    };

    if (loading) return <div className="p-8">Loading...</div>;

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 italic">Applied Tutors</h2>
            {applications.length === 0 ? <p>No applications found.</p> : (
                <div className="overflow-x-auto shadow-xl rounded-lg">
                    <table className="table w-full bg-white">
                        <thead className="bg-emerald-600 text-white">
                            <tr>
                                <th>Tutor Email</th>
                                <th>Tuition</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map(app => (
                                <tr key={app._id}>
                                    <td>{app.tutorEmail}</td>
                                    <td>{app.tuitionTitle}</td>
                                    <td><span className="badge badge-warning uppercase font-bold text-[10px]">{app.status}</span></td>
                                    <td className="flex gap-2">
                                        {app.status === 'pending' && (
                                            <>
                                                <button onClick={() => handleStatus(app._id, 'Accepted')} className="btn btn-xs btn-success">Accept</button>
                                                <button onClick={() => handleStatus(app._id, 'Rejected')} className="btn btn-xs btn-error">Reject</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AppliedTutors;
// // // // // // import React from 'react'

// // // // // // const AppliedTutors = () => {
// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h1>Alhamndulliah</h1>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default AppliedTutors


// // // // // import React, { useEffect, useState, useContext } from 'react';
// // // // // import { AuthContext } from '../../../context/AuthProvider';
// // // // // import Swal from 'sweetalert2';

// // // // // const AppliedTutors = () => {
// // // // //     const { user } = useContext(AuthContext);
// // // // //     const [applications, setApplications] = useState([]);

// // // // //     useEffect(() => {
// // // // //         fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`)
// // // // //             .then(res => res.json())
// // // // //             .then(data => setApplications(data));
// // // // //     }, [user]);

// // // // //     const handleStatus = (id, newStatus) => {
// // // // //         fetch(`http://localhost:5000/applications/status/${id}`, {
// // // // //             method: 'PATCH',
// // // // //             headers: { 'content-type': 'application/json' },
// // // // //             body: JSON.stringify({ status: newStatus })
// // // // //         })
// // // // //         .then(res => res.json())
// // // // //         .then(() => {
// // // // //             Swal.fire("Updated!", `Application ${newStatus}`, "success");
// // // // //             setApplications(applications.map(app => app._id === id ? { ...app, status: newStatus } : app));
// // // // //         });
// // // // //     };

// // // // //     return (
// // // // //         <div className="p-8">
// // // // //             <h2 className="text-2xl font-bold mb-6">Tutors Applied to Your Posts</h2>
// // // // //             <div className="overflow-x-auto shadow-lg rounded-lg">
// // // // //                 <table className="table w-full bg-white">
// // // // //                     <thead className="bg-emerald-600 text-white">
// // // // //                         <tr>
// // // // //                             <th>Tutor Email</th>
// // // // //                             <th>Tuition Title</th>
// // // // //                             <th>Experience</th>
// // // // //                             <th>Status</th>
// // // // //                             <th>Action</th>
// // // // //                         </tr>
// // // // //                     </thead>
// // // // //                     <tbody>
// // // // //                         {applications.map(app => (
// // // // //                             <tr key={app._id}>
// // // // //                                 <td>{app.tutorEmail}</td>
// // // // //                                 <td>{app.tuitionTitle}</td>
// // // // //                                 <td>{app.experience}</td>
// // // // //                                 <td>
// // // // //                                     <span className={`badge ${app.status === 'Accepted' ? 'badge-success' : app.status === 'Rejected' ? 'badge-error' : 'badge-warning'}`}>
// // // // //                                         {app.status}
// // // // //                                     </span>
// // // // //                                 </td>
// // // // //                                 <td className="flex gap-2">
// // // // //                                     {app.status === 'pending' && (
// // // // //                                         <>
// // // // //                                             <button onClick={() => handleStatus(app._id, 'Accepted')} className="btn btn-xs btn-success text-white">Accept</button>
// // // // //                                             <button onClick={() => handleStatus(app._id, 'Rejected')} className="btn btn-xs btn-error text-white">Reject</button>
// // // // //                                         </>
// // // // //                                     )}
// // // // //                                 </td>
// // // // //                             </tr>
// // // // //                         ))}
// // // // //                     </tbody>
// // // // //                 </table>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default AppliedTutors;

// // // // import React, { useEffect, useState, useContext } from 'react';
// // // // import { AuthContext } from '../../../context/AuthProvider';
// // // // import Swal from 'sweetalert2';

// // // // const AppliedTutors = () => {
// // // //     const { user } = useContext(AuthContext);
// // // //     // 🔥 Initial state faka array [] rakhte hobe
// // // //     const [applications, setApplications] = useState([]);
// // // //     const [loading, setLoading] = useState(true);

// // // //     useEffect(() => {
// // // //         if (user?.email) {
// // // //             setLoading(true);
// // // //             fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`)
// // // //                 .then(res => res.json())
// // // //                 .then(data => {
// // // //                     // 🔥 Check kora hocche data asholei Array kina
// // // //                     if (Array.isArray(data)) {
// // // //                         setApplications(data);
// // // //                     } else {
// // // //                         setApplications([]); // Jodi object ba error ashe, array faka kore dibo
// // // //                     }
// // // //                     setLoading(false);
// // // //                 })
// // // //                 .catch(err => {
// // // //                     console.error("Fetch error:", err);
// // // //                     setApplications([]);
// // // //                     setLoading(false);
// // // //                 });
// // // //         }
// // // //     }, [user?.email]);

// // // //     const handleStatus = (id, newStatus) => {
// // // //         fetch(`http://localhost:5000/applications/status/${id}`, {
// // // //             method: 'PATCH',
// // // //             headers: { 'content-type': 'application/json' },
// // // //             body: JSON.stringify({ status: newStatus })
// // // //         })
// // // //         .then(res => res.json())
// // // //         .then(data => {
// // // //             if (data.modifiedCount > 0) {
// // // //                 Swal.fire("Updated!", `Application ${newStatus}`, "success");
// // // //                 setApplications(applications.map(app => app._id === id ? { ...app, status: newStatus } : app));
// // // //             }
// // // //         });
// // // //     };

// // // //     if (loading) return <div className="p-8 text-center font-bold">Loading Applications...</div>;

// // // //     return (
// // // //         <div className="p-8">
// // // //             <h2 className="text-2xl font-bold mb-6">Tutors Applied to Your Posts</h2>
            
// // // //             {/* 🔥 Application length check kora valo */}
// // // //             {applications.length === 0 ? (
// // // //                 <div className="bg-white p-10 text-center rounded-xl shadow">
// // // //                     <p className="text-gray-500 italic">No tutors have applied to your posts yet.</p>
// // // //                 </div>
// // // //             ) : (
// // // //                 <div className="overflow-x-auto shadow-lg rounded-lg">
// // // //                     <table className="table w-full bg-white">
// // // //                         <thead className="bg-emerald-600 text-white">
// // // //                             <tr>
// // // //                                 <th>Tutor Email</th>
// // // //                                 <th>Tuition Title</th>
// // // //                                 <th>Experience</th>
// // // //                                 <th>Status</th>
// // // //                                 <th>Action</th>
// // // //                             </tr>
// // // //                         </thead>
// // // //                         <tbody>
// // // //                             {/* 🔥 Optional chaining (?.) use kora safe */}
// // // //                             {applications?.map(app => (
// // // //                                 <tr key={app._id} className="hover:bg-gray-50">
// // // //                                     <td className="font-medium text-gray-700">{app.tutorEmail}</td>
// // // //                                     <td>{app.tuitionTitle}</td>
// // // //                                     <td>{app.experience}</td>
// // // //                                     <td>
// // // //                                         <span className={`badge border-none px-3 py-1 font-bold ${
// // // //                                             app.status === 'Accepted' ? 'bg-green-100 text-green-700' : 
// // // //                                             app.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
// // // //                                         }`}>
// // // //                                             {app.status}
// // // //                                         </span>
// // // //                                     </td>
// // // //                                     <td className="flex gap-2">
// // // //                                         {app.status === 'pending' ? (
// // // //                                             <>
// // // //                                                 <button onClick={() => handleStatus(app._id, 'Accepted')} className="btn btn-xs bg-emerald-600 hover:bg-emerald-700 text-white border-none">Accept</button>
// // // //                                                 <button onClick={() => handleStatus(app._id, 'Rejected')} className="btn btn-xs bg-red-500 hover:bg-red-600 text-white border-none">Reject</button>
// // // //                                             </>
// // // //                                         ) : (
// // // //                                             <span className="text-xs text-gray-400 italic font-medium">No Action</span>
// // // //                                         )}
// // // //                                     </td>
// // // //                                 </tr>
// // // //                             ))}
// // // //                         </tbody>
// // // //                     </table>
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default AppliedTutors;


// // // // import React, { useEffect, useState, useContext } from 'react';
// // // // import { AuthContext } from '../../../context/AuthProvider';
// // // // import Swal from 'sweetalert2';

// // // // const AppliedTutors = () => {
// // // //     const { user } = useContext(AuthContext);
// // // //     const [applications, setApplications] = useState([]);
// // // //     const [loading, setLoading] = useState(true);

// // // //     useEffect(() => {
// // // //         if (user?.email) {
// // // //             setLoading(true);
// // // //             fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`, {
// // // //                 method: 'GET',
// // // //                 credentials: "include" // 🔥 Crucial for Cookie
// // // //             })
// // // //             .then(res => res.json())
// // // //             .then(data => {
// // // //                 setApplications(Array.isArray(data) ? data : []);
// // // //                 setLoading(false);
// // // //             })
// // // //             .catch(() => setLoading(false));
// // // //         }
// // // //     }, [user?.email]);

// // // //     const handleStatus = (id, newStatus) => {
// // // //         fetch(`http://localhost:5000/applications/status/${id}`, {
// // // //             method: 'PATCH',
// // // //             headers: { 'content-type': 'application/json' },
// // // //             credentials: "include", // 🔥 Crucial for Cookie
// // // //             body: JSON.stringify({ status: newStatus })
// // // //         })
// // // //         .then(res => res.json())
// // // //         .then(() => {
// // // //             Swal.fire("Updated!", `Status changed to ${newStatus}`, "success");
// // // //             setApplications(applications.map(app => app._id === id ? { ...app, status: newStatus } : app));
// // // //         });
// // // //     };

// // // //     if (loading) return <div className="p-8">Loading...</div>;

// // // //     return (
// // // //         <div className="p-8">
// // // //             <h2 className="text-2xl font-bold mb-6 italic">Applied Tutors</h2>
// // // //             {applications.length === 0 ? <p>No applications found.</p> : (
// // // //                 <div className="overflow-x-auto shadow-xl rounded-lg">
// // // //                     <table className="table w-full bg-white">
// // // //                         <thead className="bg-emerald-600 text-white">
// // // //                             <tr>
// // // //                                 <th>Tutor Email</th>
// // // //                                 <th>Tuition</th>
// // // //                                 <th>Status</th>
// // // //                                 <th>Action</th>
// // // //                             </tr>
// // // //                         </thead>
// // // //                         <tbody>
// // // //                             {applications.map(app => (
// // // //                                 <tr key={app._id}>
// // // //                                     <td>{app.tutorEmail}</td>
// // // //                                     <td>{app.tuitionTitle}</td>
// // // //                                     <td><span className="badge badge-warning uppercase font-bold text-[10px]">{app.status}</span></td>
// // // //                                     <td className="flex gap-2">
// // // //                                         {app.status === 'pending' && (
// // // //                                             <>
// // // //                                                 <button onClick={() => handleStatus(app._id, 'Accepted')} className="btn btn-xs btn-success">Accept</button>
// // // //                                                 <button onClick={() => handleStatus(app._id, 'Rejected')} className="btn btn-xs btn-error">Reject</button>
// // // //                                             </>
// // // //                                         )}
// // // //                                     </td>
// // // //                                 </tr>
// // // //                             ))}
// // // //                         </tbody>
// // // //                     </table>
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default AppliedTutors;


// // // import React, { useEffect, useState, useContext } from 'react';
// // // import { AuthContext } from '../../../context/AuthProvider';
// // // import Swal from 'sweetalert2';
// // // import { Link } from 'react-router-dom';

// // // const AppliedTutors = () => {
// // //     const { user } = useContext(AuthContext);
// // //     const [applications, setApplications] = useState([]);
// // //     const [loading, setLoading] = useState(true);

// // //     useEffect(() => {
// // //         if (user?.email) {
// // //             setLoading(true);
// // //             fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`, {
// // //                 method: 'GET',
// // //                 credentials: "include"
// // //             })
// // //             .then(res => res.json())
// // //             .then(data => {
// // //                 setApplications(Array.isArray(data) ? data : []);
// // //                 setLoading(false);
// // //             })
// // //             .catch(() => setLoading(false));
// // //         }
// // //     }, [user?.email]);

// // //     const handleStatus = (id, newStatus) => {
// // //         fetch(`http://localhost:5000/applications/status/${id}`, {
// // //             method: 'PATCH',
// // //             headers: { 'content-type': 'application/json' },
// // //             credentials: "include",
// // //             body: JSON.stringify({ status: newStatus })
// // //         })
// // //         .then(res => res.json())
// // //         .then(() => {
// // //             Swal.fire("Updated!", `Status changed to ${newStatus}`, "success");
// // //             setApplications(applications.map(app => app._id === id ? { ...app, status: newStatus } : app));
// // //         });
// // //     };

// // //     if (loading) return <div className="p-8 text-center text-xl font-semibold">Loading...</div>;

// // //     return (
// // //         <div className="p-8">
// // //             <h2 className="text-2xl font-bold mb-6 italic">Applied Tutors</h2>
// // //             {applications.length === 0 ? <p>No applications found.</p> : (
// // //                 <div className="overflow-x-auto shadow-xl rounded-lg">
// // //                     <table className="table w-full bg-white">
// // //                         <thead className="bg-emerald-600 text-white">
// // //                             <tr>
// // //                                 <th>Tutor Email</th>
// // //                                 <th>Tuition</th>
// // //                                 <th>Status</th>
// // //                                 <th>Action</th>
// // //                             </tr>
// // //                         </thead>
// // //                         <tbody>
// // //                             {applications.map(app => (
// // //                                 <tr key={app._id} className="hover:bg-gray-50">
// // //                                     <td>{app.tutorEmail}</td>
// // //                                     <td>{app.tuitionTitle}</td>
// // //                                     <td>
// // //                                         <span className={`badge ${app.status === 'Accepted' ? 'badge-success' : 'badge-warning'} uppercase font-bold text-[10px]`}>
// // //                                             {app.status}
// // //                                         </span>
// // //                                     </td>
// // //                                     <td className="flex gap-2">
// // //                                         {app.status === 'pending' && (
// // //                                             <>
// // //                                                 <button onClick={() => handleStatus(app._id, 'Accepted')} className="btn btn-xs btn-success text-white">Accept</button>
// // //                                                 <button onClick={() => handleStatus(app._id, 'Rejected')} className="btn btn-xs btn-error text-white">Reject</button>
// // //                                             </>
// // //                                         )}
// // //                                         {/* 🔥 Pay Button: Only shows when Accepted and not yet paid */}
// // //                                         {app.status === 'Accepted' && !app.paid && (
// // //                                             <Link to="/dashboard/payment" state={{ application: app }} className="btn btn-xs btn-primary text-white">
// // //                                                 Pay Now
// // //                                             </Link>
// // //                                         )}
// // //                                         {app.paid && <span className="badge badge-outline badge-success font-bold">Paid</span>}
// // //                                     </td>
// // //                                 </tr>
// // //                             ))}
// // //                         </tbody>
// // //                     </table>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default AppliedTutors;


// // import React, { useEffect, useState, useContext } from 'react';
// // import { AuthContext } from '../../../context/AuthProvider';
// // import Swal from 'sweetalert2';
// // import { Link } from 'react-router-dom';

// // const AppliedTutors = () => {
// //     const { user } = useContext(AuthContext);
// //     const [applications, setApplications] = useState([]);
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         if (user?.email) {
// //             setLoading(true);
// //             fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`, {
// //                 method: 'GET',
// //                 credentials: "include"
// //             })
// //             .then(res => res.json())
// //             .then(data => {
// //                 setApplications(Array.isArray(data) ? data : []);
// //                 setLoading(false);
// //             })
// //             .catch(() => setLoading(false));
// //         }
// //     }, [user?.email]);

// //     const handleStatus = (id, newStatus) => {
// //         fetch(`http://localhost:5000/applications/status/${id}`, {
// //             method: 'PATCH',
// //             headers: { 'content-type': 'application/json' },
// //             credentials: "include",
// //             body: JSON.stringify({ status: newStatus })
// //         })
// //         .then(res => res.json())
// //         .then(() => {
// //             Swal.fire("Updated!", `Status changed to ${newStatus}`, "success");
// //             setApplications(applications.map(app => app._id === id ? { ...app, status: newStatus } : app));
// //         });
// //     };

// //     if (loading) return <div className="p-8 text-center text-xl font-semibold">Loading...</div>;

// //     return (
// //         <div className="p-8">
// //             <h2 className="text-2xl font-bold mb-6 italic">Applied Tutors</h2>
// //             {applications.length === 0 ? <p>No applications found.</p> : (
// //                 <div className="overflow-x-auto shadow-xl rounded-lg">
// //                     <table className="table w-full bg-white">
// //                         <thead className="bg-emerald-600 text-white">
// //                             <tr>
// //                                 <th>Tutor Email</th>
// //                                 <th>Tuition</th>
// //                                 <th>Status</th>
// //                                 <th>Action</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {applications.map(app => (
// //                                 <tr key={app._id} className="hover:bg-gray-50">
// //                                     <td>{app.tutorEmail}</td>
// //                                     <td>{app.tuitionTitle}</td>
// //                                     <td>
// //                                         <span className={`badge ${app.status === 'Accepted' ? 'badge-success' : 'badge-warning'} uppercase font-bold text-[10px]`}>
// //                                             {app.status}
// //                                         </span>
// //                                     </td>
// //                                     <td className="flex gap-2">
// //                                         {app.status === 'pending' && (
// //                                             <>
// //                                                 <button onClick={() => handleStatus(app._id, 'Accepted')} className="btn btn-xs btn-success text-white">Accept</button>
// //                                                 <button onClick={() => handleStatus(app._id, 'Rejected')} className="btn btn-xs btn-error text-white">Reject</button>
// //                                             </>
// //                                         )}
                                        
// //                                         {/* 🔥 Fixed Link Path to match your router */}
// //                                         {app.status === 'Accepted' && !app.paid && (
// //                                             <Link 
// //                                                 to="/dashboard/student/payment-process" 
// //                                                 state={{ application: app }} 
// //                                                 className="btn btn-xs btn-primary text-white"
// //                                             >
// //                                                 Pay Now
// //                                             </Link>
// //                                         )}
// //                                         {app.paid && <span className="badge badge-outline badge-success font-bold">Paid</span>}
// //                                     </td>
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default AppliedTutors;


// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';
// import Swal from 'sweetalert2';
// import { loadStripe } from '@stripe/stripe-js';

// // Load Stripe with VITE_ prefixed key
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

// const AppliedTutors = () => {
//     const { user } = useContext(AuthContext);
//     const [applications, setApplications] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             setLoading(true);
//             fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`, {
//                 method: 'GET',
//                 credentials: "include"
//             })
//             .then(res => res.json())
//             .then(data => {
//                 setApplications(Array.isArray(data) ? data : []);
//                 setLoading(false);
//             })
//             .catch(() => setLoading(false));
//         }
//     }, [user?.email]);

//     const handlePayment = async (app) => {
//         const stripe = await stripePromise;

//         try {
//             const response = await fetch('http://localhost:5000/create-checkout-session', {
//                 method: 'POST',
//                 headers: { 'content-type': 'application/json' },
//                 body: JSON.stringify({ application: app })
//             });

//             const session = await response.json();

//             if (session.id) {
//                 const result = await stripe.redirectToCheckout({
//                     sessionId: session.id,
//                 });
//                 if (result.error) {
//                     Swal.fire("Error", result.error.message, "error");
//                 }
//             }
//         } catch (error) {
//             Swal.fire("Error", "Payment initiation failed!", "error");
//         }
//     };

//     const handleStatus = (id, newStatus) => {
//         fetch(`http://localhost:5000/applications/status/${id}`, {
//             method: 'PATCH',
//             headers: { 'content-type': 'application/json' },
//             credentials: "include",
//             body: JSON.stringify({ status: newStatus })
//         })
//         .then(res => res.json())
//         .then(() => {
//             Swal.fire("Updated!", `Status changed to ${newStatus}`, "success");
//             setApplications(applications.map(app => app._id === id ? { ...app, status: newStatus } : app));
//         });
//     };

//     if (loading) return <div className="p-8 text-center text-xl font-semibold">Loading...</div>;

//     return (
//         <div className="p-8">
//             <h2 className="text-2xl font-bold mb-6 italic text-emerald-700">Applied Tutors</h2>
//             {applications.length === 0 ? <p>No applications found.</p> : (
//                 <div className="overflow-x-auto shadow-xl rounded-lg">
//                     <table className="table w-full bg-white">
//                         <thead className="bg-emerald-600 text-white">
//                             <tr>
//                                 <th>Tutor Email</th>
//                                 <th>Tuition</th>
//                                 <th>Status</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {applications.map(app => (
//                                 <tr key={app._id} className="hover:bg-gray-50">
//                                     <td>{app.tutorEmail}</td>
//                                     <td>{app.tuitionTitle}</td>
//                                     <td>
//                                         <span className={`badge ${app.status === 'Accepted' ? 'badge-success' : 'badge-warning'} uppercase font-bold text-[10px]`}>
//                                             {app.status}
//                                         </span>
//                                     </td>
//                                     <td className="flex gap-2">
//                                         {app.status === 'pending' && (
//                                             <>
//                                                 <button onClick={() => handleStatus(app._id, 'Accepted')} className="btn btn-xs btn-success text-white">Accept</button>
//                                                 <button onClick={() => handleStatus(app._id, 'Rejected')} className="btn btn-xs btn-error text-white">Reject</button>
//                                             </>
//                                         )}
//                                         {app.status === 'Accepted' && !app.paid && (
//                                             <button 
//                                                 onClick={() => handlePayment(app)} 
//                                                 className="btn btn-xs btn-primary text-white"
//                                             >
//                                                 Pay Now
//                                             </button>
//                                         )}
//                                         {app.paid && <span className="badge badge-outline badge-success font-bold">Paid</span>}
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

// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';
// import Swal from 'sweetalert2';
// import { loadStripe } from '@stripe/stripe-js';

// // Load Stripe with VITE_ prefixed key
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

// const AppliedTutors = () => {
//     const { user } = useContext(AuthContext);
//     const [applications, setApplications] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             setLoading(true);
//             fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`, {
//                 method: 'GET',
//                 credentials: "include"
//             })
//             .then(res => res.json())
//             .then(data => {
//                 setApplications(Array.isArray(data) ? data : []);
//                 setLoading(false);
//             })
//             .catch(() => setLoading(false));
//         }
//     }, [user?.email]);

//     const handlePayment = async (app) => {
//         // Step 1: Initialize Stripe
//         const stripe = await stripePromise;
        
//         // Safety check to ensure key is loaded
//         if (!stripe) {
//             Swal.fire("Error", "Stripe Publishable Key not found! Check your .env file.", "error");
//             return;
//         }

//         try {
//             // Step 2: Create Checkout Session in Backend
//             const response = await fetch('http://localhost:5000/create-checkout-session', {
//                 method: 'POST',
//                 headers: { 
//                     'content-type': 'application/json',
//                     // Adding credentials or token if needed
//                 },
//                 body: JSON.stringify({ application: app })
//             });

//             const session = await response.json();

//             // Step 3: Redirect to Stripe Hosted Checkout
//             if (session.id) {
//                 const result = await stripe.redirectToCheckout({
//                     sessionId: session.id,
//                 });
//                 if (result.error) {
//                     Swal.fire("Error", result.error.message, "error");
//                 }
//             } else {
//                 Swal.fire("Error", "Failed to create payment session from backend.", "error");
//             }
//         } catch (error) {
//             console.error("Payment Error:", error);
//             Swal.fire("Error", "Payment initiation failed! Make sure your backend server is running.", "error");
//         }
//     };

//     const handleStatus = (id, newStatus) => {
//         fetch(`http://localhost:5000/applications/status/${id}`, {
//             method: 'PATCH',
//             headers: { 'content-type': 'application/json' },
//             credentials: "include",
//             body: JSON.stringify({ status: newStatus })
//         })
//         .then(res => res.json())
//         .then(() => {
//             Swal.fire("Updated!", `Status changed to ${newStatus}`, "success");
//             setApplications(applications.map(app => app._id === id ? { ...app, status: newStatus } : app));
//         });
//     };

//     if (loading) return <div className="p-8 text-center text-xl font-semibold">Loading...</div>;

//     return (
//         <div className="p-8">
//             <h2 className="text-2xl font-bold mb-6 italic text-emerald-700">Applied Tutors</h2>
//             {applications.length === 0 ? (
//                 <div className="p-10 text-center bg-gray-100 rounded-lg">No applications found.</div>
//             ) : (
//                 <div className="overflow-x-auto shadow-xl rounded-lg">
//                     <table className="table w-full bg-white">
//                         <thead className="bg-emerald-600 text-white">
//                             <tr>
//                                 <th>Tutor Email</th>
//                                 <th>Tuition Title</th>
//                                 <th>Salary</th>
//                                 <th>Status</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {applications.map(app => (
//                                 <tr key={app._id} className="hover:bg-gray-50 border-b">
//                                     <td>{app.tutorEmail}</td>
//                                     <td>{app.tuitionTitle}</td>
//                                     <td className="font-bold text-emerald-600">${app.salary}</td>
//                                     <td>
//                                         <span className={`badge ${app.status === 'Accepted' ? 'badge-success' : 'badge-warning'} uppercase font-bold text-[10px] p-2`}>
//                                             {app.status}
//                                         </span>
//                                     </td>
//                                     <td className="flex gap-2">
//                                         {app.status === 'pending' && (
//                                             <>
//                                                 <button onClick={() => handleStatus(app._id, 'Accepted')} className="btn btn-xs btn-success text-white px-3">Accept</button>
//                                                 <button onClick={() => handleStatus(app._id, 'Rejected')} className="btn btn-xs btn-error text-white px-3">Reject</button>
//                                             </>
//                                         )}
//                                         {app.status === 'Accepted' && !app.paid && (
//                                             <button 
//                                                 onClick={() => handlePayment(app)} 
//                                                 className="btn btn-xs btn-primary text-white px-4 font-bold"
//                                             >
//                                                 Pay Now
//                                             </button>
//                                         )}
//                                         {app.paid && (
//                                             <span className="badge badge-success badge-outline font-bold">PAID ✅</span>
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


// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';
// import Swal from 'sweetalert2';
// import { loadStripe } from '@stripe/stripe-js';

// // Load Stripe with VITE_ prefixed key
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

// const AppliedTutors = () => {
//     const { user } = useContext(AuthContext);
//     const [applications, setApplications] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             setLoading(true);
//             fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`, {
//                 method: 'GET',
//                 credentials: "include"
//             })
//             .then(res => res.json())
//             .then(data => {
//                 setApplications(Array.isArray(data) ? data : []);
//                 setLoading(false);
//             })
//             .catch(() => setLoading(false));
//         }
//     }, [user?.email]);

//     const handlePayment = async (app) => {
//         const stripe = await stripePromise;
        
//         if (!stripe) {
//             Swal.fire("Error", "Stripe Publishable Key not found! Check your .env file.", "error");
//             return;
//         }

//         try {
//             // Backend-e 'app' object-ta jabe jar bhitore ekhon 'expectedSalary' ache
//             const response = await fetch('http://localhost:5000/create-checkout-session', {
//                 method: 'POST',
//                 headers: { 
//                     'content-type': 'application/json',
//                 },
//                 body: JSON.stringify({ application: app })
//             });

//             const session = await response.json();

//             if (session.id) {
//                 const result = await stripe.redirectToCheckout({
//                     sessionId: session.id,
//                 });
//                 if (result.error) {
//                     Swal.fire("Error", result.error.message, "error");
//                 }
//             } else {
//                 Swal.fire("Error", session.message || "Failed to create payment session.", "error");
//             }
//         } catch (error) {
//             console.error("Payment Error:", error);
//             Swal.fire("Error", "Payment initiation failed!", "error");
//         }
//     };

//     const handleStatus = (id, newStatus) => {
//         fetch(`http://localhost:5000/applications/status/${id}`, {
//             method: 'PATCH',
//             headers: { 'content-type': 'application/json' },
//             credentials: "include",
//             body: JSON.stringify({ status: newStatus })
//         })
//         .then(res => res.json())
//         .then(() => {
//             Swal.fire("Updated!", `Tutor has been ${newStatus}`, "success");
//             setApplications(applications.map(app => app._id === id ? { ...app, status: newStatus } : app));
//         });
//     };

//     if (loading) return <div className="p-8 text-center text-xl font-semibold">Loading...</div>;

//     return (
//         <div className="p-8">
//             <h2 className="text-2xl font-bold mb-6 italic text-emerald-700">Applied Tutors & Moderation</h2>
//             {applications.length === 0 ? (
//                 <div className="p-10 text-center bg-gray-100 rounded-lg">No applications found.</div>
//             ) : (
//                 <div className="overflow-x-auto shadow-xl rounded-lg">
//                     <table className="table w-full bg-white">
//                         <thead className="bg-emerald-600 text-white">
//                             <tr>
//                                 <th>Tutor Details</th>
//                                 <th>Tuition Title</th>
//                                 <th>Requested Salary</th>
//                                 <th>Status</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {applications.map(app => (
//                                 <tr key={app._id} className="hover:bg-gray-50 border-b text-sm">
//                                     <td>
//                                         <div className="font-bold">{app.tutorEmail}</div>
//                                         <div className="text-xs text-gray-500">{app.tutorPhone}</div>
//                                         <div className="text-[10px] text-emerald-600 font-semibold">{app.qualifications}</div>
//                                     </td>
//                                     <td>{app.tuitionTitle}</td>
//                                     {/* Ekhane requested salary dekhano hocche */}
//                                     <td className="font-bold text-emerald-600">
//                                         ৳{app.expectedSalary || app.salary}
//                                     </td>
//                                     <td>
//                                         <span className={`badge ${
//                                             app.status === 'Accepted' ? 'badge-success' : 
//                                             app.status === 'Rejected' ? 'badge-error' : 'badge-warning'
//                                         } uppercase font-bold text-[10px] p-2 text-white`}>
//                                             {app.status}
//                                         </span>
//                                     </td>
//                                     <td className="flex gap-2">
//                                         {app.status === 'pending' && (
//                                             <>
//                                                 <button onClick={() => handleStatus(app._id, 'Accepted')} className="btn btn-xs btn-success text-white px-3">Accept</button>
//                                                 <button onClick={() => handleStatus(app._id, 'Rejected')} className="btn btn-xs btn-error text-white px-3">Reject</button>
//                                             </>
//                                         )}
//                                         {/* Status 'Accepted' hole and payment na hoye thakle 'Pay Now' dekhabe */}
//                                         {app.status === 'Accepted' && !app.paid && (
//                                             <button 
//                                                 onClick={() => handlePayment(app)} 
//                                                 className="btn btn-xs btn-primary text-white px-4 font-bold shadow-md"
//                                             >
//                                                 Pay ৳{app.expectedSalary || app.salary}
//                                             </button>
//                                         )}
//                                         {app.paid && (
//                                             <span className="badge badge-success badge-outline font-bold flex items-center gap-1">
//                                                 PAID ✅
//                                             </span>
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


// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';
// import Swal from 'sweetalert2';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

// const AppliedTutors = () => {
//     const { user } = useContext(AuthContext);
//     const [applications, setApplications] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             setLoading(true);
//             fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`, {
//                 method: 'GET',
//                 credentials: "include"
//             })
//             .then(res => res.json())
//             .then(data => {
//                 setApplications(Array.isArray(data) ? data : []);
//                 setLoading(false);
//             })
//             .catch(() => setLoading(false));
//         }
//     }, [user?.email]);

//     const handlePayment = async (app) => {
//         const stripe = await stripePromise;
//         if (!stripe) return;

//         try {
//             const response = await fetch('http://localhost:5000/create-checkout-session', {
//                 method: 'POST',
//                 headers: { 'content-type': 'application/json' },
//                 body: JSON.stringify({ application: app })
//             });
//             const session = await response.json();
//             if (session.id) {
//                 await stripe.redirectToCheckout({ sessionId: session.id });
//             }
//         } catch (error) {
//             Swal.fire("Error", "Payment failed!", "error");
//         }
//     };

//     const handleStatus = (id, newStatus) => {
//         fetch(`http://localhost:5000/applications/status/${id}`, {
//             method: 'PATCH',
//             headers: { 'content-type': 'application/json' },
//             credentials: "include",
//             body: JSON.stringify({ status: newStatus })
//         })
//         .then(res => res.json())
//         .then(() => {
//             Swal.fire("Updated!", `Status: ${newStatus}`, "success");
//             setApplications(applications.map(app => app._id === id ? { ...app, status: newStatus } : app));
//         });
//     };

//     if (loading) return <div className="p-8 text-center text-xl font-semibold">Loading...</div>;

//     return (
//         <div className="p-8">
//             <h2 className="text-2xl font-bold mb-6 italic text-emerald-700">Applied Tutors & Moderation</h2>
//             {applications.length === 0 ? (
//                 <div className="p-10 text-center bg-gray-100 rounded-lg">No applications found.</div>
//             ) : (
//                 <div className="overflow-x-auto shadow-xl rounded-lg">
//                     <table className="table w-full bg-white">
//                         <thead className="bg-emerald-600 text-white">
//                             <tr>
//                                 <th>Tutor Details</th>
//                                 <th>Tuition Title</th>
//                                 <th>Requested Salary</th>
//                                 <th>Status</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {applications.map(app => (
//                                 <tr key={app._id} className="hover:bg-gray-50 border-b text-sm">
//                                     <td>
//                                         <div className="font-bold">{app.tutorName || "Anonymous Tutor"}</div>
//                                         <div className="text-xs text-gray-500">{app.tutorEmail}</div>
//                                         {/* Fallback check for Phone and Qualifications */}
//                                         <div className="text-[10px] text-blue-600">{app.tutorPhone || "No Phone Provided"}</div>
//                                         <div className="text-[10px] text-emerald-600 italic">{app.qualifications || "Bachelors/Student"}</div>
//                                     </td>
//                                     <td>{app.tuitionTitle}</td>
//                                     <td className="font-bold text-emerald-600">
//                                         {/* Jodi expectedSalary thake oita dekhabe, na thakle original salary */}
//                                         ৳{app.expectedSalary ? app.expectedSalary : app.salary}
//                                     </td>
//                                     <td>
//                                         <span className={`badge ${
//                                             app.status === 'Accepted' ? 'badge-success' : 
//                                             app.status === 'Rejected' ? 'badge-error' : 'badge-warning'
//                                         } uppercase font-bold text-[10px] p-2 text-white`}>
//                                             {app.status}
//                                         </span>
//                                     </td>
//                                     <td className="flex gap-2">
//                                         {app.status === 'pending' && (
//                                             <>
//                                                 <button onClick={() => handleStatus(app._id, 'Accepted')} className="btn btn-xs btn-success text-white">Accept</button>
//                                                 <button onClick={() => handleStatus(app._id, 'Rejected')} className="btn btn-xs btn-error text-white">Reject</button>
//                                             </>
//                                         )}
//                                         {app.status === 'Accepted' && !app.paid && (
//                                             <button 
//                                                 onClick={() => handlePayment(app)} 
//                                                 className="btn btn-xs btn-primary text-white font-bold"
//                                             >
//                                                 Pay ৳{app.expectedSalary || app.salary}
//                                             </button>
//                                         )}
//                                         {app.paid && <span className="badge badge-success badge-outline font-bold">PAID ✅</span>}
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

// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';
// import Swal from 'sweetalert2';
// import { loadStripe } from '@stripe/stripe-js';

// // Stripe Public Key
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

// const AppliedTutors = () => {
//     const { user } = useContext(AuthContext);
//     const [applications, setApplications] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             fetchApplications();
//         }
//     }, [user?.email]);

//     const fetchApplications = () => {
//         setLoading(true);
//         fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`, {
//             method: 'GET',
//             credentials: "include"
//         })
//         .then(res => res.json())
//         .then(data => {
//             setApplications(Array.isArray(data) ? data : []);
//             setLoading(false);
//         })
//         .catch(() => setLoading(false));
//     }

//     // 🔥 Accept & Pay Logic (Redirects to Stripe)
//     const handleAcceptAndPay = async (app) => {
//         const stripe = await stripePromise;

//         try {
//             const response = await fetch('http://localhost:5000/create-checkout-session', {
//                 method: 'POST',
//                 headers: { 'content-type': 'application/json' },
//                 body: JSON.stringify({ application: app })
//             });
//             const data = await response.json();

//             if (data.url) {
//                 // Stripe-er Hosted Checkout page-e pathiye diche (Image er moto)
//                 window.location.href = data.url; 
//             }
//         } catch (error) {
//             Swal.fire("Error", "Could not initiate payment!", "error");
//         }
//     };

//     // 🔥 Reject Logic
//     const handleReject = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You want to reject this tutor?",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#d33",
//             confirmButtonText: "Yes, Reject!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/applications/reject/${id}`, {
//                     method: 'PATCH',
//                     headers: { 'content-type': 'application/json' }
//                 })
//                 .then(res => res.json())
//                 .then(() => {
//                     Swal.fire("Rejected!", "Application has been rejected.", "success");
//                     fetchApplications(); // List refresh
//                 });
//             }
//         });
//     };

//     if (loading) return <div className="p-8 text-center text-xl font-semibold">Loading Applications...</div>;

//     return (
//         <div className="p-8">
//             <h2 className="text-2xl font-bold mb-6 italic text-emerald-700">Tutor Applications</h2>
//             {applications.length === 0 ? (
//                 <div className="p-10 text-center bg-gray-100 rounded-lg">No tutors applied yet.</div>
//             ) : (
//                 <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-100">
//                     <table className="table w-full bg-white">
//                         <thead className="bg-emerald-600 text-white">
//                             <tr>
//                                 <th>Tutor Info</th>
//                                 <th>Tuition Title</th>
//                                 <th>Requested Salary</th>
//                                 <th>Status</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {applications.map(app => (
//                                 <tr key={app._id} className="hover:bg-gray-50 border-b transition-colors">
//                                     <td>
//                                         <div className="font-bold text-gray-800">{app.tutorName}</div>
//                                         <div className="text-xs text-gray-500 font-medium">{app.tutorEmail}</div>
//                                         <div className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded mt-1 inline-block">{app.qualifications}</div>
//                                     </td>
//                                     <td className="text-sm font-medium">{app.tuitionTitle}</td>
//                                     <td className="font-bold text-emerald-700 font-mono text-lg">
//                                         ৳{app.expectedSalary || app.salary}
//                                     </td>
//                                     <td>
//                                         <span className={`badge badge-sm font-bold p-3 ${
//                                             app.status === 'Approved' ? 'badge-success text-white' : 
//                                             app.status === 'Rejected' ? 'badge-error text-white' : 'badge-warning'
//                                         }`}>
//                                             {app.status.toUpperCase()}
//                                         </span>
//                                     </td>
//                                     <td>
//                                         <div className="flex gap-2">
//                                             {app.status === 'pending' && (
//                                                 <>
//                                                     <button 
//                                                         onClick={() => handleAcceptAndPay(app)} 
//                                                         className="btn btn-xs btn-success text-white shadow-sm"
//                                                     >
//                                                         Accept & Pay
//                                                     </button>
//                                                     <button 
//                                                         onClick={() => handleReject(app._id)} 
//                                                         className="btn btn-xs btn-outline btn-error"
//                                                     >
//                                                         Reject
//                                                     </button>
//                                                 </>
//                                             )}
//                                             {app.status === 'Approved' && (
//                                                 <span className="text-emerald-600 font-bold text-xs flex items-center gap-1">
//                                                     ✅ Verified & Paid
//                                                 </span>
//                                             )}
//                                         </div>
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
import { loadStripe } from '@stripe/stripe-js';

// Stripe Public Key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const AppliedTutors = () => {
    const { user } = useContext(AuthContext);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetchApplications();
        }
    }, [user?.email]);

    const fetchApplications = () => {
        setLoading(true);
        // আপনার ব্যাকএন্ডের সাথে মিল রেখে credentials: "include" যোগ করা হয়েছে
        fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`, {
            method: 'GET',
            credentials: "include" // এটি কুকি (JWT) পাঠানোর জন্য অপরিহার্য
        })
        .then(res => {
            if (!res.ok) throw new Error("Unauthorized or Network Error");
            return res.json();
        })
        .then(data => {
            setApplications(Array.isArray(data) ? data : []);
            setLoading(false);
        })
        .catch(err => {
            console.error("Fetch Error:", err);
            setLoading(false);
        });
    }

    // 🔥 Accept & Pay Logic
    const handleAcceptAndPay = async (app) => {
        try {
            const response = await fetch('http://localhost:5000/create-checkout-session', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                credentials: "include", // কুকি পাঠানোর জন্য
                body: JSON.stringify({ application: app })
            });
            const data = await response.json();

            if (data.url) {
                window.location.href = data.url; 
            } else {
                Swal.fire("Error", data.message || "Failed to start payment", "error");
            }
        } catch (error) {
            Swal.fire("Error", "Could not initiate payment!", "error");
        }
    };

    // 🔥 Reject Logic (Backend route sync kora hoyeche)
    const handleReject = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to reject this tutor?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes, Reject!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/applications/status/${id}`, {
                    method: 'PATCH',
                    headers: { 'content-type': 'application/json' },
                    credentials: "include",
                    body: JSON.stringify({ status: 'Rejected' })
                })
                .then(res => res.json())
                .then(() => {
                    Swal.fire("Rejected!", "Application has been rejected.", "success");
                    fetchApplications(); 
                });
            }
        });
    };

    if (loading) return (
        <div className="p-20 text-center">
            <span className="loading loading-bars loading-lg text-emerald-600"></span>
            <p className="mt-4 text-gray-500 font-medium italic">Fetching applied tutors...</p>
        </div>
    );

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 italic text-emerald-700">Tutor Applications</h2>
                
                {applications.length === 0 ? (
                    <div className="p-10 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                        <p className="text-gray-500">No tutors applied yet or no data found.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-emerald-600 text-white">
                                <tr>
                                    <th className="rounded-tl-xl">Tutor Info</th>
                                    <th>Tuition Title</th>
                                    <th>Requested Salary</th>
                                    <th>Status</th>
                                    <th className="rounded-tr-xl">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map(app => (
                                    <tr key={app._id} className="hover:bg-emerald-50/30 transition-colors">
                                        <td>
                                            <div className="font-bold text-gray-800">{app.tutorName}</div>
                                            <div className="text-xs text-gray-500 font-medium">{app.tutorEmail}</div>
                                            <div className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded mt-1 inline-block border border-blue-100">
                                                {app.qualifications}
                                            </div>
                                        </td>
                                        <td className="text-sm font-medium">{app.tuitionTitle}</td>
                                        <td className="font-bold text-emerald-700 font-mono text-lg">
                                            ৳{app.expectedSalary || app.salary}
                                        </td>
                                        <td>
                                            <span className={`badge badge-sm font-bold p-3 border-none shadow-sm ${
                                                app.status.toLowerCase() === 'approved' || app.status.toLowerCase() === 'accepted' ? 'bg-emerald-500 text-white' : 
                                                app.status.toLowerCase() === 'rejected' ? 'bg-red-500 text-white' : 'bg-amber-400 text-white'
                                            }`}>
                                                {app.status.toUpperCase()}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="flex gap-2">
                                                {app.status.toLowerCase() === 'pending' && (
                                                    <>
                                                        <button 
                                                            onClick={() => handleAcceptAndPay(app)} 
                                                            className="btn btn-xs btn-success text-white px-4 h-8 rounded-lg shadow-sm"
                                                        >
                                                            Accept & Pay
                                                        </button>
                                                        <button 
                                                            onClick={() => handleReject(app._id)} 
                                                            className="btn btn-xs btn-outline btn-error h-8 rounded-lg"
                                                        >
                                                            Reject
                                                        </button>
                                                    </>
                                                )}
                                                {(app.status.toLowerCase() === 'approved' || app.status.toLowerCase() === 'accepted') && (
                                                    <span className="text-emerald-600 font-bold text-xs flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-lg">
                                                        ✅ Verified & Paid
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppliedTutors;
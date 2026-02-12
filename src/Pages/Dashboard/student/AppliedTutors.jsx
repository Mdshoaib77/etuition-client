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
//         // আপনার ব্যাকএন্ডের সাথে মিল রেখে credentials: "include" যোগ করা হয়েছে
//         fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`, {
//             method: 'GET',
//             credentials: "include" // এটি কুকি (JWT) পাঠানোর জন্য অপরিহার্য
//         })
//         .then(res => {
//             if (!res.ok) throw new Error("Unauthorized or Network Error");
//             return res.json();
//         })
//         .then(data => {
//             setApplications(Array.isArray(data) ? data : []);
//             setLoading(false);
//         })
//         .catch(err => {
//             console.error("Fetch Error:", err);
//             setLoading(false);
//         });
//     }

//     // 🔥 Accept & Pay Logic
//     const handleAcceptAndPay = async (app) => {
//         try {
//             const response = await fetch('http://localhost:5000/create-checkout-session', {
//                 method: 'POST',
//                 headers: { 'content-type': 'application/json' },
//                 credentials: "include", // কুকি পাঠানোর জন্য
//                 body: JSON.stringify({ application: app })
//             });
//             const data = await response.json();

//             if (data.url) {
//                 window.location.href = data.url; 
//             } else {
//                 Swal.fire("Error", data.message || "Failed to start payment", "error");
//             }
//         } catch (error) {
//             Swal.fire("Error", "Could not initiate payment!", "error");
//         }
//     };

//     // 🔥 Reject Logic (Backend route sync kora hoyeche)
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
//                 fetch(`http://localhost:5000/applications/status/${id}`, {
//                     method: 'PATCH',
//                     headers: { 'content-type': 'application/json' },
//                     credentials: "include",
//                     body: JSON.stringify({ status: 'Rejected' })
//                 })
//                 .then(res => res.json())
//                 .then(() => {
//                     Swal.fire("Rejected!", "Application has been rejected.", "success");
//                     fetchApplications(); 
//                 });
//             }
//         });
//     };

//     if (loading) return (
//         <div className="p-20 text-center">
//             <span className="loading loading-bars loading-lg text-emerald-600"></span>
//             <p className="mt-4 text-gray-500 font-medium italic">Fetching applied tutors...</p>
//         </div>
//     );

//     return (
//         <div className="p-8 bg-gray-50 min-h-screen">
//             <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
//                 <h2 className="text-2xl font-bold mb-6 italic text-emerald-700">Tutor Applications</h2>
                
//                 {applications.length === 0 ? (
//                     <div className="p-10 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
//                         <p className="text-gray-500">No tutors applied yet or no data found.</p>
//                     </div>
//                 ) : (
//                     <div className="overflow-x-auto">
//                         <table className="table w-full">
//                             <thead className="bg-emerald-600 text-white">
//                                 <tr>
//                                     <th className="rounded-tl-xl">Tutor Info</th>
//                                     <th>Tuition Title</th>
//                                     <th>Requested Salary</th>
//                                     <th>Status</th>
//                                     <th className="rounded-tr-xl">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {applications.map(app => (
//                                     <tr key={app._id} className="hover:bg-emerald-50/30 transition-colors">
//                                         <td>
//                                             <div className="font-bold text-gray-800">{app.tutorName}</div>
//                                             <div className="text-xs text-gray-500 font-medium">{app.tutorEmail}</div>
//                                             <div className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded mt-1 inline-block border border-blue-100">
//                                                 {app.qualifications}
//                                             </div>
//                                         </td>
//                                         <td className="text-sm font-medium">{app.tuitionTitle}</td>
//                                         <td className="font-bold text-emerald-700 font-mono text-lg">
//                                             ৳{app.expectedSalary || app.salary}
//                                         </td>
//                                         <td>
//                                             <span className={`badge badge-sm font-bold p-3 border-none shadow-sm ${
//                                                 app.status.toLowerCase() === 'approved' || app.status.toLowerCase() === 'accepted' ? 'bg-emerald-500 text-white' : 
//                                                 app.status.toLowerCase() === 'rejected' ? 'bg-red-500 text-white' : 'bg-amber-400 text-white'
//                                             }`}>
//                                                 {app.status.toUpperCase()}
//                                             </span>
//                                         </td>
//                                         <td>
//                                             <div className="flex gap-2">
//                                                 {app.status.toLowerCase() === 'pending' && (
//                                                     <>
//                                                         <button 
//                                                             onClick={() => handleAcceptAndPay(app)} 
//                                                             className="btn btn-xs btn-success text-white px-4 h-8 rounded-lg shadow-sm"
//                                                         >
//                                                             Accept & Pay
//                                                         </button>
//                                                         <button 
//                                                             onClick={() => handleReject(app._id)} 
//                                                             className="btn btn-xs btn-outline btn-error h-8 rounded-lg"
//                                                         >
//                                                             Reject
//                                                         </button>
//                                                     </>
//                                                 )}
//                                                 {(app.status.toLowerCase() === 'approved' || app.status.toLowerCase() === 'accepted') && (
//                                                     <span className="text-emerald-600 font-bold text-xs flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-lg">
//                                                         ✅ Verified & Paid
//                                                     </span>
//                                                 )}
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </div>
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

// Backend URL from .env
const backendUrl = import.meta.env.VITE_API_URL;

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
        fetch(`${backendUrl}/student/applied-tutors/${user?.email}`, {
            method: 'GET',
            credentials: "include"
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
            const response = await fetch(`${backendUrl}/create-checkout-session`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                credentials: "include",
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

    // 🔥 Reject Logic
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
                fetch(`${backendUrl}/applications/status/${id}`, {
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

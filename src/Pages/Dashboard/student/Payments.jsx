// // // // import React from 'react'

// // // // const Payments = () => {
// // // //   return (
// // // //     <div>
// // // //       <h1>Alhamdulliah payments</h1>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Payments


// // // import React from 'react'

// // // const Payments = () => {
// // //   return (
// // //     <div>
// // //       <h1>Alhamdulliah payments</h1>
// // //     </div>
// // //   )
// // // }

// // // export default Payments


// // // import React, { useEffect, useState, useContext } from 'react';
// // // import { AuthContext } from '../../../context/AuthProvider';

// // // const Payments = () => {
// // //     const { user } = useContext(AuthContext);
// // //     const [payments, setPayments] = useState([]);
// // //     const [loading, setLoading] = useState(true);

// // //     useEffect(() => {
// // //         if (user?.email) {
// // //             setLoading(true);
// // //             // Backend-e student-er email diye payments fetch kora hoyeche
// // //             fetch(`http://localhost:5000/payments/${user?.email}`, {
// // //                 method: 'GET',
// // //                 credentials: "include"
// // //             })
// // //             .then(res => res.json())
// // //             .then(data => {
// // //                 setPayments(Array.isArray(data) ? data : []);
// // //                 setLoading(false);
// // //             })
// // //             .catch(() => setLoading(false));
// // //         }
// // //     }, [user?.email]);

// // //     if (loading) return <div className="p-8 text-center font-bold">Loading Payment History...</div>;

// // //     return (
// // //         <div className="p-8">
// // //             <h2 className="text-2xl font-bold mb-6 italic text-emerald-700">Alhamdulliah, My Payments</h2>
            
// // //             {payments.length === 0 ? (
// // //                 <div className="alert alert-info shadow-lg">
// // //                     <div>
// // //                         <span>You haven't made any payments yet.</span>
// // //                     </div>
// // //                 </div>
// // //             ) : (
// // //                 <div className="overflow-x-auto shadow-xl rounded-lg">
// // //                     <table className="table w-full bg-white">
// // //                         <thead className="bg-emerald-600 text-white">
// // //                             <tr>
// // //                                 <th>#</th>
// // //                                 <th>Transaction ID</th>
// // //                                 <th>Tutor Email</th>
// // //                                 <th>Amount</th>
// // //                                 <th>Date</th>
// // //                             </tr>
// // //                         </thead>
// // //                         <tbody>
// // //                             {payments.map((payment, index) => (
// // //                                 <tr key={payment._id} className="hover:bg-gray-50">
// // //                                     <th>{index + 1}</th>
// // //                                     <td className="font-mono text-xs text-blue-600 font-bold">
// // //                                         {payment.transactionId}
// // //                                     </td>
// // //                                     <td>{payment.tutorEmail}</td>
// // //                                     <td className="font-bold text-emerald-600">
// // //                                         ${payment.salary}
// // //                                     </td>
// // //                                     <td className="text-sm">
// // //                                         {new Date(payment.date).toLocaleDateString()}
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

// // // export default Payments;

// // import React, { useEffect, useState, useContext } from 'react';
// // import { AuthContext } from '../../../context/AuthProvider';
// // import { useLocation } from 'react-router-dom';
// // import Swal from 'sweetalert2';

// // const Payments = () => {
// //     const { user } = useContext(AuthContext);
// //     const [payments, setPayments] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const location = useLocation();

// //     // 🔥 URL parameters processing for successful payments
// //     useEffect(() => {
// //         const query = new URLSearchParams(location.search);
// //         const success = query.get('success');
// //         const sessionId = query.get('session_id');
// //         const appId = query.get('appId');

// //         if (success && sessionId && appId && user?.email) {
// //             const paymentData = {
// //                 transactionId: sessionId,
// //                 studentEmail: user.email,
// //                 tutorEmail: query.get('tutorEmail'),
// //                 salary: parseFloat(query.get('salary')),
// //                 applicationId: appId,
// //                 tuitionId: query.get('tuitionId'),
// //                 date: new Date()
// //             };

// //             // Database save korchi
// //             fetch('http://localhost:5000/payments', {
// //                 method: 'POST',
// //                 headers: { 'content-type': 'application/json' },
// //                 body: JSON.stringify(paymentData)
// //             })
// //             .then(res => res.json())
// //             .then(data => {
// //                 if (data.insertedId) {
// //                     Swal.fire("Alhamdulliah", "Payment Successful!", "success");
// //                     // URL clean up (optional)
// //                     window.history.replaceState(null, '', '/dashboard/student/payments');
// //                 }
// //             });
// //         }
// //     }, [location, user]);

// //     useEffect(() => {
// //         if (user?.email) {
// //             setLoading(true);
// //             fetch(`http://localhost:5000/payments/${user?.email}`, {
// //                 method: 'GET',
// //                 credentials: "include"
// //             })
// //             .then(res => res.json())
// //             .then(data => {
// //                 setPayments(Array.isArray(data) ? data : []);
// //                 setLoading(false);
// //             })
// //             .catch(() => setLoading(false));
// //         }
// //     }, [user?.email]);

// //     if (loading) return <div className="p-8 text-center font-bold">Loading Payment History...</div>;

// //     return (
// //         <div className="p-8">
// //             <h2 className="text-2xl font-bold mb-6 italic text-emerald-700">Alhamdulliah, My Payments</h2>
// //             {payments.length === 0 ? (
// //                 <div className="alert alert-info">No payments record found.</div>
// //             ) : (
// //                 <div className="overflow-x-auto shadow-xl rounded-lg">
// //                     <table className="table w-full bg-white">
// //                         <thead className="bg-emerald-600 text-white">
// //                             <tr>
// //                                 <th>#</th>
// //                                 <th>Transaction ID</th>
// //                                 <th>Tutor Email</th>
// //                                 <th>Amount</th>
// //                                 <th>Date</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {payments.map((payment, index) => (
// //                                 <tr key={payment._id}>
// //                                     <th>{index + 1}</th>
// //                                     <td className="text-xs text-blue-600 font-bold">{payment.transactionId?.slice(-15)}...</td>
// //                                     <td>{payment.tutorEmail}</td>
// //                                     <td className="font-bold text-emerald-600">${payment.salary}</td>
// //                                     <td>{new Date(payment.date).toLocaleDateString()}</td>
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default Payments;


// // import React, { useEffect, useState, useContext } from 'react';
// // import { AuthContext } from '../../../context/AuthProvider';
// // import { useLocation } from 'react-router-dom';
// // import Swal from 'sweetalert2';

// // const Payments = () => {
// //     const { user } = useContext(AuthContext);
// //     const [payments, setPayments] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const location = useLocation();

// //     useEffect(() => {
// //         const query = new URLSearchParams(location.search);
// //         const success = query.get('success');
// //         const sessionId = query.get('session_id');

// //         if (success && sessionId && user?.email) {
// //             const paymentData = {
// //                 transactionId: sessionId,
// //                 studentEmail: user.email,
// //                 tutorEmail: query.get('tutorEmail'),
// //                 salary: query.get('salary'),
// //                 applicationId: query.get('appId'),
// //                 tuitionId: query.get('tuitionId'),
// //                 date: new Date()
// //             };

// //             fetch('http://localhost:5000/payments', {
// //                 method: 'POST',
// //                 headers: { 'content-type': 'application/json' },
// //                 body: JSON.stringify(paymentData)
// //             })
// //             .then(res => res.json())
// //             .then(data => {
// //                 if (data.insertedId) {
// //                     Swal.fire("Success", "Payment Recorded!", "success");
// //                     window.history.replaceState(null, '', '/dashboard/student/payments');
// //                 }
// //             });
// //         }
// //     }, [location, user]);

// //     useEffect(() => {
// //         if (user?.email) {
// //             fetch(`http://localhost:5000/payments/${user?.email}`)
// //             .then(res => res.json())
// //             .then(data => {
// //                 setPayments(data);
// //                 setLoading(false);
// //             });
// //         }
// //     }, [user?.email]);

// //     if (loading) return <div className="p-8 text-center font-bold">Loading...</div>;

// //     return (
// //         <div className="p-8">
// //             <h2 className="text-2xl font-bold mb-6 italic text-emerald-700">Payment History</h2>
// //             <div className="overflow-x-auto">
// //                 <table className="table w-full">
// //                     <thead>
// //                         <tr>
// //                             <th>#</th>
// //                             <th>Transaction ID</th>
// //                             <th>Tutor</th>
// //                             <th>Amount</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {payments.map((p, i) => (
// //                             <tr key={p._id}>
// //                                 <th>{i + 1}</th>
// //                                 <td className="text-xs text-blue-600">{p.transactionId}</td>
// //                                 <td>{p.tutorEmail}</td>
// //                                 <td>${p.salary}</td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Payments;

// // import React, { useEffect, useState, useContext } from 'react';
// // import { AuthContext } from '../../../context/AuthProvider';
// // import { useLocation } from 'react-router-dom';
// // import Swal from 'sweetalert2';

// // const Payments = () => {
// //     const { user } = useContext(AuthContext);
// //     const [payments, setPayments] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const location = useLocation();

// //     useEffect(() => {
// //         const query = new URLSearchParams(location.search);
// //         const success = query.get('success');
// //         const sessionId = query.get('session_id');

// //         // 🔥 Logic: Payment successful hole metadata backend-e pathabo
// //         if (success && sessionId && user?.email) {
// //             const paymentData = {
// //                 transactionId: sessionId,
// //                 studentEmail: user.email,
// //                 tutorEmail: query.get('tutorEmail'),
// //                 salary: parseFloat(query.get('salary')), // number-e convert kora bhalo
// //                 applicationId: query.get('appId'),
// //                 tuitionId: query.get('tuitionId'),
// //                 date: new Date()
// //             };

// //             fetch('http://localhost:5000/payments', {
// //                 method: 'POST',
// //                 headers: { 'content-type': 'application/json' },
// //                 body: JSON.stringify(paymentData)
// //             })
// //             .then(res => res.json())
// //             .then(data => {
// //                 if (data.insertedId) {
// //                     Swal.fire({
// //                         title: "Payment Successful!",
// //                         text: "Your payment has been recorded.",
// //                         icon: "success",
// //                         timer: 2000
// //                     });
                    
// //                     // URL theke query parameters muche fela (clean URL)
// //                     window.history.replaceState(null, '', '/dashboard/student/payments');
                    
// //                     // List reload kora
// //                     fetchPayments();
// //                 }
// //             })
// //             .catch(err => console.error("Error saving payment:", err));
// //         } else if (user?.email) {
// //             fetchPayments();
// //         }
// //     }, [location, user?.email]);

// //     // 🔥 Function to fetch history
// //     const fetchPayments = () => {
// //         fetch(`http://localhost:5000/payments/${user?.email}`)
// //             .then(res => res.json())
// //             .then(data => {
// //                 setPayments(data);
// //                 setLoading(false);
// //             })
// //             .catch(() => setLoading(false));
// //     };

// //     if (loading) return (
// //         <div className="flex justify-center items-center h-64">
// //             <span className="loading loading-spinner loading-lg text-emerald-600"></span>
// //         </div>
// //     );

// //     return (
// //         <div className="p-8">
// //             <h2 className="text-2xl font-bold mb-6 italic text-emerald-700 border-b-2 border-emerald-100 pb-2">
// //                 Payment History
// //             </h2>

// //             {payments.length === 0 ? (
// //                 <div className="bg-gray-50 p-10 text-center rounded-lg border-2 border-dashed border-gray-200">
// //                     <p className="text-gray-500 italic">You haven't made any payments yet.</p>
// //                 </div>
// //             ) : (
// //                 <div className="overflow-x-auto shadow-2xl rounded-xl border border-gray-100">
// //                     <table className="table w-full bg-white">
// //                         {/* head */}
// //                         <thead className="bg-emerald-600 text-white">
// //                             <tr>
// //                                 <th className="rounded-tl-lg">#</th>
// //                                 <th>Transaction ID</th>
// //                                 <th>Tutor Email</th>
// //                                 <th>Amount</th>
// //                                 <th className="rounded-tr-lg">Date</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {payments.map((p, i) => (
// //                                 <tr key={p._id} className="hover:bg-emerald-50 transition-colors">
// //                                     <th className="font-bold text-gray-400">{i + 1}</th>
// //                                     <td>
// //                                         <code className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
// //                                             {p.transactionId}
// //                                         </code>
// //                                     </td>
// //                                     <td className="font-medium text-gray-700">{p.tutorEmail}</td>
// //                                     <td className="font-bold text-emerald-600">${p.salary}</td>
// //                                     <td className="text-gray-500 text-sm">
// //                                         {new Date(p.date).toLocaleDateString()}
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

// // export default Payments;


// import React from 'react'

// const Payments = () => {
//   return (
//     <div>
//       <h1>Alhamdulliah</h1>
//     </div>
//   )
// }

// export default Payments


import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Payments = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    
    // session theke data gula query parameter e thake
    const appId = searchParams.get("appId");
    const tuitionId = searchParams.get("tuitionId");

    useEffect(() => {
        if (appId && tuitionId) {
            // Backend-er oi special approve route ta call hobe
            fetch(`http://localhost:5000/applications/approve-after-payment/${appId}`, {
                method: 'PATCH',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ tuitionId })
            })
            .then(res => res.json())
            .then(data => {
                Swal.fire("Success!", "Tutor Approved & Status Updated.", "success");
            });
        }
    }, [appId, tuitionId]);

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-10">
            <div className="bg-emerald-100 p-6 rounded-full mb-4 text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Alhamdulliah!</h1>
            <p className="text-gray-600 text-lg mb-8">Your payment was successful and the tutor is hired.</p>
            <button 
                onClick={() => navigate('/dashboard/student/applied-tutors')}
                className="btn btn-emerald bg-emerald-600 text-white border-none px-8"
            >
                Back to Dashboard
            </button>
        </div>
    );
};

export default Payments;
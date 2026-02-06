// // import React, { useEffect, useState } from 'react';
// // import { useNavigate, useSearchParams, Link } from 'react-router-dom';
// // import Swal from 'sweetalert2';
// // import { CheckCircle, ArrowRight, LayoutDashboard, Calendar, Banknote } from 'lucide-react';

// // const PaymentSuccess = () => {
// //     const [searchParams] = useSearchParams();
// //     const navigate = useNavigate();
// //     const [loading, setLoading] = useState(true);
    
// //     // Stripe success_url theke query parameter gulo nichi
// //     const appId = searchParams.get("appId");
// //     const tuitionId = searchParams.get("tuitionId");

// //     useEffect(() => {
// //         if (appId && tuitionId) {
// //             // 🔥 Backend-e Approved status update kora ebong onno application reject kora
// //             fetch(`http://localhost:5000/applications/approve-after-payment/${appId}`, {
// //                 method: 'PATCH',
// //                 headers: { 'content-type': 'application/json' },
// //                 body: JSON.stringify({ tuitionId })
// //             })
// //             .then(res => res.json())
// //             .then(data => {
// //                 setLoading(false);
// //                 // Success message
// //                 Swal.fire({
// //                     title: "Alhamdulliah!",
// //                     text: "Payment received and Tutor has been officially Approved!",
// //                     icon: "success",
// //                     confirmButtonColor: "#10b981"
// //                 });
// //             })
// //             .catch(err => {
// //                 console.error("Status Update Error:", err);
// //                 setLoading(false);
// //             });
// //         }
// //     }, [appId, tuitionId]);

// //     if (loading) {
// //         return (
// //             <div className="min-h-[70vh] flex flex-col items-center justify-center">
// //                 <span className="loading loading-spinner loading-lg text-emerald-600"></span>
// //                 <p className="mt-4 text-gray-500 font-medium animate-pulse">Confirming your payment, please wait...</p>
// //             </div>
// //         );
// //     }

// //     return (
// //         <div className="min-h-[80vh] flex items-center justify-center p-4">
// //             <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
// //                 {/* Top Green Section */}
// //                 <div className="bg-emerald-600 p-8 text-center">
// //                     <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-lg">
// //                         <CheckCircle size={48} className="text-emerald-600" />
// //                     </div>
// //                     <h1 className="text-3xl font-bold text-white tracking-tight">Success!</h1>
// //                     <p className="text-emerald-100 mt-2">Payment Completed Successfully</p>
// //                 </div>

// //                 {/* Content Section */}
// //                 <div className="p-8">
// //                     <div className="space-y-4 mb-8">
// //                         <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
// //                             <div className="flex items-center gap-3 text-gray-600">
// //                                 <Calendar size={18} />
// //                                 <span className="text-sm font-medium">Date</span>
// //                             </div>
// //                             <span className="text-sm font-bold text-gray-800">{new Date().toLocaleDateString()}</span>
// //                         </div>
// //                         <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
// //                             <div className="flex items-center gap-3 text-gray-600">
// //                                 <Banknote size={18} />
// //                                 <span className="text-sm font-medium">Status</span>
// //                             </div>
// //                             <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Paid & Approved</span>
// //                         </div>
// //                     </div>

// //                     <div className="text-center mb-8">
// //                         <p className="text-gray-500 text-sm leading-relaxed">
// //                             Alhamdulillah! Your tutor has been hired. You can now find their contact details in your application list.
// //                         </p>
// //                     </div>

// //                     {/* Action Buttons */}
// //                     <div className="grid gap-3">
// //                         <button 
// //                             onClick={() => navigate('/dashboard/student/applied-tutors')}
// //                             className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none h-12 rounded-xl flex items-center justify-center gap-2 group transition-all"
// //                         >
// //                             View All Applications
// //                             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
// //                         </button>
                        
// //                         <Link 
// //                             to="/dashboard"
// //                             className="btn btn-ghost text-gray-500 hover:bg-gray-100 h-12 rounded-xl flex items-center justify-center gap-2"
// //                         >
// //                             <LayoutDashboard size={18} />
// //                             Back to Dashboard
// //                         </Link>
// //                     </div>
// //                 </div>

// //                 {/* Footer Decoration */}
// //                 <div className="h-2 bg-emerald-600/10"></div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default PaymentSuccess;



// // import React, { useEffect, useState } from 'react';
// // import { useNavigate, useSearchParams, Link } from 'react-router-dom';
// // import Swal from 'sweetalert2';
// // import { CheckCircle, ArrowRight, LayoutDashboard, Calendar, Banknote } from 'lucide-react';

// // const PaymentSuccess = () => {
// //     const [searchParams] = useSearchParams();
// //     const navigate = useNavigate();
// //     const [loading, setLoading] = useState(true);
    
// //     const appId = searchParams.get("appId");
// //     const tuitionId = searchParams.get("tuitionId");

// //     useEffect(() => {
// //         if (appId && tuitionId) {
// //             // পেমেন্ট সাকসেস হওয়ার পর ব্যাকএন্ডে স্ট্যাটাস আপডেট কল
// //             fetch(`http://localhost:5000/applications/approve-after-payment/${appId}`, {
// //                 method: 'PATCH',
// //                 headers: { 
// //                     'content-type': 'application/json',
// //                     // যদি আপনার ব্যাকএন্ডে কুকি বেজড JWT না হয়ে হেডার বেজড হয়, তবে নিচের লাইনটি লাগবে
// //                     // 'authorization': `Bearer ${localStorage.getItem('token')}` 
// //                 },
// //                 body: JSON.stringify({ tuitionId })
// //             })
// //             .then(res => res.json())
// //             .then(data => {
// //                 setLoading(false);
// //                 Swal.fire({
// //                     title: "Alhamdulillah!",
// //                     text: "Payment received and Tutor has been officially Approved!",
// //                     icon: "success",
// //                     confirmButtonColor: "#10b981"
// //                 });
// //             })
// //             .catch(err => {
// //                 console.error("Status Update Error:", err);
// //                 setLoading(false);
// //                 Swal.fire("Error", "Payment was successful but status update failed. Please contact support.", "error");
// //             });
// //         }
// //     }, [appId, tuitionId]);

// //     // Loading State
// //     if (loading) {
// //         return (
// //             <div className="min-h-[70vh] flex flex-col items-center justify-center">
// //                 <span className="loading loading-spinner loading-lg text-emerald-600"></span>
// //                 <p className="mt-4 text-gray-500 font-medium animate-pulse">Finalizing your tutor selection, please wait...</p>
// //             </div>
// //         );
// //     }

// //     return (
// //         <div className="min-h-[80vh] flex items-center justify-center p-4 bg-gray-50/50">
// //             <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
// //                 {/* Success Header */}
// //                 <div className="bg-emerald-600 p-8 text-center relative">
// //                     <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
// //                         <svg viewBox="0 0 100 100" className="w-full h-full fill-white"><circle cx="10" cy="10" r="2" /><circle cx="30" cy="50" r="3" /><circle cx="70" cy="20" r="2" /><circle cx="90" cy="80" r="4" /></svg>
// //                     </div>
// //                     <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-lg animate-bounce">
// //                         <CheckCircle size={48} className="text-emerald-600" />
// //                     </div>
// //                     <h1 className="text-3xl font-bold text-white tracking-tight">Success!</h1>
// //                     <p className="text-emerald-100 mt-2">Tutor Hired Successfully</p>
// //                 </div>

// //                 {/* Info Card */}
// //                 <div className="p-8">
// //                     <div className="space-y-3 mb-8">
// //                         <div className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
// //                             <div className="flex items-center gap-3 text-emerald-700">
// //                                 <Calendar size={18} />
// //                                 <span className="text-sm font-semibold">Date</span>
// //                             </div>
// //                             <span className="text-sm font-bold text-emerald-800">{new Date().toLocaleDateString('en-GB')}</span>
// //                         </div>
// //                         <div className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
// //                             <div className="flex items-center gap-3 text-emerald-700">
// //                                 <Banknote size={18} />
// //                                 <span className="text-sm font-semibold">Status</span>
// //                             </div>
// //                             <span className="badge badge-success text-white font-bold py-3">PAID & BOOKED</span>
// //                         </div>
// //                     </div>

// //                     <div className="text-center mb-8">
// //                         <p className="text-gray-600 text-sm leading-relaxed px-4">
// //                             You have successfully completed the payment. The tuition post is now marked as <strong>Booked</strong> and other pending applications have been cleared.
// //                         </p>
// //                     </div>

// //                     {/* Navigation Buttons */}
// //                     <div className="grid gap-4">
// //                         <button 
// //                             onClick={() => navigate('/dashboard/student/applied-tutors')}
// //                             className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none h-14 rounded-2xl flex items-center justify-center gap-3 group transition-all shadow-lg shadow-emerald-200"
// //                         >
// //                             My Applied Tutors
// //                             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
// //                         </button>
                        
// //                         <Link 
// //                             to="/dashboard"
// //                             className="btn btn-ghost text-gray-500 hover:bg-gray-100 h-14 rounded-2xl flex items-center justify-center gap-3 font-semibold"
// //                         >
// //                             <LayoutDashboard size={18} />
// //                             Student Dashboard
// //                         </Link>
// //                     </div>
// //                 </div>

// //                 <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
// //                     <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Transaction ID: STRIPE_SUCCESS_{appId.slice(-6)}</p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default PaymentSuccess;

// import { useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const PaymentSuccess = () => {
//     const [searchParams] = useSearchParams();
//     const navigate = useNavigate();
//     const appId = searchParams.get("appId");
//     const tuitionId = searchParams.get("tuitionId");

//     useEffect(() => {
//         if (appId && tuitionId) {
//             // পেমেন্ট সফল হওয়ার পর ব্যাকএন্ডে ডাটা পাঠানো
//             const paymentInfo = {
//                 applicationId: appId,
//                 tuitionId: tuitionId,
//                 transactionId: `STRIPE_${Date.now()}`, // অথবা স্ট্রাইপ সেশন আইডি
//                 date: new Date()
//             };

//             // আমরা অ্যাপ্লিকেশনের ডিটেইলস নিয়ে আসার জন্য একটি ফেচ করতে পারি অথবা 
//             // সরাসরি পেমেন্ট কালেকশনে ডাটা পাঠাতে পারি
//             fetch(`http://localhost:5000/payments`, {
//                 method: "POST",
//                 headers: { "content-type": "application/json" },
//                 credentials: "include",
//                 body: JSON.stringify(paymentInfo)
//             })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.insertedId) {
//                     Swal.fire("Alhamdulliah!", "Payment successful and tutor booked!", "success");
//                     navigate("/dashboard/student/applied-tutors");
//                 }
//             });
//         }
//     }, [appId, tuitionId]);

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen">
//             <h2 className="text-2xl font-bold text-emerald-600">Verifying Payment...</h2>
//             <span className="loading loading-spinner loading-lg text-emerald-600"></span>
//         </div>
//     );
// };

// export default PaymentSuccess;


// import { useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const PaymentSuccess = () => {
//     const [searchParams] = useSearchParams();
//     const navigate = useNavigate();
//     const appId = searchParams.get("appId");
//     const tuitionId = searchParams.get("tuitionId");

//     useEffect(() => {
//         if (appId && tuitionId) {
//             // পেমেন্ট সফল হওয়ার পর ব্যাকএন্ডে ডাটা পাঠানো
//             const paymentInfo = {
//                 applicationId: appId,
//                 tuitionId: tuitionId,
//                 transactionId: `STRIPE_${Date.now()}`, // অথবা স্ট্রাইপ সেশন আইডি
//                 date: new Date()
//             };

//             // আমরা অ্যাপ্লিকেশনের ডিটেইলস নিয়ে আসার জন্য একটি ফেচ করতে পারি অথবা 
//             // সরাসরি পেমেন্ট কালেকশনে ডাটা পাঠাতে পারি
//             fetch(`http://localhost:5000/payments`, {
//                 method: "POST",
//                 headers: { "content-type": "application/json" },
//                 credentials: "include",
//                 body: JSON.stringify(paymentInfo)
//             })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.insertedId) {
//                     Swal.fire("Alhamdulliah!", "Payment successful and tutor booked!", "success");
//                     navigate("/dashboard/student/applied-tutors");
//                 }
//             });
//         }
//     }, [appId, tuitionId]);

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen">
//             <h2 className="text-2xl font-bold text-emerald-600">Verifying Payment...</h2>
//             <span className="loading loading-spinner loading-lg text-emerald-600"></span>
//         </div>
//     );
// };

// export default PaymentSuccess;

import { useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    
    // useRef ব্যবহার করা হয়েছে যাতে ২বার API কল না হয়
    const hasProcessed = useRef(false);

    // URL থেকে সব প্রয়োজনীয় ডাটা নেওয়া হচ্ছে
    const appId = searchParams.get("appId");
    const tuitionId = searchParams.get("tuitionId");
    const tutorEmail = searchParams.get("tutorEmail");
    const amount = searchParams.get("amount");

    useEffect(() => {
        // যদি ডাটা থাকে এবং আগে প্রসেস না হয়ে থাকে
        if (appId && tuitionId && !hasProcessed.current) {
            hasProcessed.current = true; // প্রসেস শুরু হলে লক করে দেওয়া হলো

            const paymentInfo = {
                applicationId: appId,
                tuitionId: tuitionId,
                tutorEmail: tutorEmail, // টিউটরের আয়ের হিসাবের জন্য
                salary: parseFloat(amount), // সংখ্যায় রূপান্তর
                transactionId: `STRIPE_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
                date: new Date()
            };

            // ব্যাকএন্ডে পেমেন্ট কনফার্মেশন পাঠানো
            fetch(`http://localhost:5000/payments`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                credentials: "include",
                body: JSON.stringify(paymentInfo)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Alhamdulliah!",
                        text: "Payment successful and tutor booked!",
                        icon: "success",
                        confirmButtonColor: "#059669"
                    });
                    // পেমেন্ট শেষে স্টুডেন্টের অ্যাপ্লাইড টিউটর লিস্টে পাঠিয়ে দেওয়া
                    navigate("/dashboard/student/applied-tutors");
                }
            })
            .catch(err => {
                console.error("Payment Error:", err);
                Swal.fire("Error", "Something went wrong while updating status", "error");
            });
        }
    }, [appId, tuitionId, tutorEmail, amount, navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
            <div className="text-center p-8 rounded-2xl shadow-xl bg-white">
                <h2 className="text-2xl font-bold text-emerald-600 mb-4">Verifying Payment...</h2>
                <div className="flex justify-center">
                    <span className="loading loading-spinner loading-lg text-emerald-600"></span>
                </div>
                <p className="mt-4 text-gray-500 italic">Please wait, updating your tuition status.</p>
            </div>
        </div>
    );
};

export default PaymentSuccess;
// import { useEffect, useRef } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const PaymentSuccess = () => {
//     const [searchParams] = useSearchParams();
//     const navigate = useNavigate();
    
//     // useRef ব্যবহার করা হয়েছে যাতে ২বার API কল না হয়
//     const hasProcessed = useRef(false);

//     // URL থেকে সব প্রয়োজনীয় ডাটা নেওয়া হচ্ছে
//     const appId = searchParams.get("appId");
//     const tuitionId = searchParams.get("tuitionId");
//     const tutorEmail = searchParams.get("tutorEmail");
//     const amount = searchParams.get("amount");

//     useEffect(() => {
//         // যদি ডাটা থাকে এবং আগে প্রসেস না হয়ে থাকে
//         if (appId && tuitionId && !hasProcessed.current) {
//             hasProcessed.current = true; // প্রসেস শুরু হলে লক করে দেওয়া হলো

//             const paymentInfo = {
//                 applicationId: appId,
//                 tuitionId: tuitionId,
//                 tutorEmail: tutorEmail, // টিউটরের আয়ের হিসাবের জন্য
//                 salary: parseFloat(amount), // সংখ্যায় রূপান্তর
//                 transactionId: `STRIPE_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
//                 date: new Date()
//             };

//             // ব্যাকএন্ডে পেমেন্ট কনফার্মেশন পাঠানো
//             fetch(`http://localhost:5000/payments`, {
//                 method: "POST",
//                 headers: { "content-type": "application/json" },
//                 credentials: "include",
//                 body: JSON.stringify(paymentInfo)
//             })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.insertedId) {
//                     Swal.fire({
//                         title: "Alhamdulliah!",
//                         text: "Payment successful and tutor booked!",
//                         icon: "success",
//                         confirmButtonColor: "#059669"
//                     });
//                     // পেমেন্ট শেষে স্টুডেন্টের অ্যাপ্লাইড টিউটর লিস্টে পাঠিয়ে দেওয়া
//                     navigate("/dashboard/student/applied-tutors");
//                 }
//             })
//             .catch(err => {
//                 console.error("Payment Error:", err);
//                 Swal.fire("Error", "Something went wrong while updating status", "error");
//             });
//         }
//     }, [appId, tuitionId, tutorEmail, amount, navigate]);

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
//             <div className="text-center p-8 rounded-2xl shadow-xl bg-white">
//                 <h2 className="text-2xl font-bold text-emerald-600 mb-4">Verifying Payment...</h2>
//                 <div className="flex justify-center">
//                     <span className="loading loading-spinner loading-lg text-emerald-600"></span>
//                 </div>
//                 <p className="mt-4 text-gray-500 italic">Please wait, updating your tuition status.</p>
//             </div>
//         </div>
//     );
// };

// export default PaymentSuccess;


import { useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Backend URL from .env
const backendUrl = import.meta.env.VITE_API_URL;

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
            fetch(`${backendUrl}/payments`, {
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

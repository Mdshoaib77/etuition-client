// import React from 'react'

// const Payment = () => {
//   return (
//     <div>
//       <h1>Alhamdulliah payment</h1>
//     </div>
//   )
// }

// export default Payment


// import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import CheckoutForm from './CheckoutForm';
// import { useLocation } from 'react-router-dom';

// // 🔥 Replace with your actual Stripe Publishable Key (pk_test_...)
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

// const Payment = () => {
//     const location = useLocation();
//     const application = location.state?.application; // Application data passed via Link state

//     if (!application) return <div className="p-20 text-center">No application found to pay for.</div>;

//     return (
//         <div className="p-10 max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold text-center mb-8 italic">Complete Your Payment</h2>
//             <div className="bg-base-200 p-8 rounded-2xl shadow-xl">
//                 <p className="mb-4"><strong>Tuition:</strong> {application.tuitionTitle}</p>
//                 <p className="mb-8"><strong>Amount:</strong> ${application.salary}</p>
                
//                 <Elements stripe={stripePromise}>
//                     <CheckoutForm application={application} />
//                 </Elements>
//             </div>
//         </div>
//     );
// };

// export default Payment;


import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';

// 🔥 VITE_ prefix check korben oboshoy
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
    const location = useLocation();
    const application = location.state?.application; 

    if (!application) return (
        <div className="p-20 text-center text-red-500 font-bold">
            No application data found! Please go back and try again.
        </div>
    );

    return (
        <div className="p-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 italic text-emerald-700">
                Complete Your Payment
            </h2>
            <div className="bg-white border p-8 rounded-2xl shadow-2xl">
                <div className="flex justify-between mb-4 border-b pb-2">
                    <span className="font-semibold">Tuition:</span>
                    <span>{application.tuitionTitle}</span>
                </div>
                <div className="flex justify-between mb-8">
                    <span className="font-semibold">Total Amount:</span>
                    <span className="text-xl font-bold text-emerald-600">${application.salary}</span>
                </div>
                
                {/* Stripe Elements Provider */}
                <Elements stripe={stripePromise}>
                    <CheckoutForm application={application} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
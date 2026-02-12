// import React, { useEffect, useState, useContext } from 'react';
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { AuthContext } from '../../../context/AuthProvider';
// import Swal from 'sweetalert2';

// const CheckoutForm = ({ application }) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const { user } = useContext(AuthContext);
//     const [clientSecret, setClientSecret] = useState('');
//     const [transactionId, setTransactionId] = useState('');
//     const [processing, setProcessing] = useState(false);

//     useEffect(() => {
//         // Backend-er `/create-payment-intent` route er sathe mil rekhe
//         if (application?.salary > 0) {
//             fetch('http://localhost:5000/create-payment-intent', {
//                 method: 'POST',
//                 headers: { 
//                     'content-type': 'application/json' 
//                 },
//                 // credentials: 'include', // Jodi JWT cookie-te thake tobe eita un-comment korun
//                 body: JSON.stringify({ salary: application.salary }) // price er poriborte salary
//             })
//             .then(res => res.json())
//             .then(data => {
//                 if(data.clientSecret) {
//                     setClientSecret(data.clientSecret);
//                 }
//             })
//             .catch(err => console.error("Stripe Secret Error:", err));
//         }
//     }, [application?.salary]);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!stripe || !elements || !clientSecret) return;

//         const card = elements.getElement(CardElement);
//         if (card == null) return;

//         setProcessing(true);

//         const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card });

//         if (error) {
//             Swal.fire("Error", error.message, "error");
//             setProcessing(false);
//             return;
//         }

//         // Card Payment Confirm kora
//         const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: card,
//                 billing_details: { 
//                     email: user?.email || 'anonymous', 
//                     name: user?.displayName || 'anonymous' 
//                 }
//             }
//         });

//         if (confirmError) {
//             Swal.fire("Error", confirmError.message, "error");
//             setProcessing(false);
//         } else if (paymentIntent.status === 'succeeded') {
//             setTransactionId(paymentIntent.id);
            
//             // Backend-er `/payments` route er payload
//             const paymentInfo = {
//                 transactionId: paymentIntent.id,
//                 studentEmail: user.email,
//                 tutorEmail: application.tutorEmail,
//                 salary: application.salary,
//                 date: new Date(),
//                 applicationId: application._id,
//                 tuitionId: application.tuitionId
//             };

//             fetch('http://localhost:5000/payments', {
//                 method: 'POST',
//                 headers: { 'content-type': 'application/json' },
//                 // credentials: 'include', 
//                 body: JSON.stringify(paymentInfo)
//             })
//             .then(res => res.json())
//             .then(data => {
//                 setProcessing(false);
//                 if (data.insertedId) {
//                     Swal.fire({
//                         title: "Alhamdulliah!",
//                         text: `Payment Successful and Tutor Approved! Transaction ID: ${paymentIntent.id}`,
//                         icon: "success",
//                         confirmButtonText: "Great!"
//                     }).then(() => {
//                         // Success hole dashboard e pathate paren ba page refresh korte paren
//                         window.location.reload(); 
//                     });
//                 }
//             });
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
//             <div className="border p-4 rounded-lg bg-white shadow-sm">
//                 <CardElement 
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': { color: '#aab7c4' },
//                             },
//                             invalid: { color: '#9e2146' },
//                         },
//                     }}
//                 />
//             </div>
            
//             <button 
//                 className={`btn btn-primary mt-6 w-full text-white font-bold ${processing ? 'opacity-50 cursor-not-allowed' : ''}`} 
//                 type="submit" 
//                 disabled={!stripe || !clientSecret || processing}
//             >
//                 {processing ? (
//                     <span className="loading loading-spinner"></span>
//                 ) : (
//                     `Confirm Approval ($${application?.salary})`
//                 )}
//             </button>
            
//             {transactionId && (
//                 <div className="alert alert-success mt-4">
//                     <span>Payment Done! ID: {transactionId}</span>
//                 </div>
//             )}
//         </form>
//     );
// };

// export default CheckoutForm;


import React, { useEffect, useState, useContext } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { AuthContext } from '../../../context/AuthProvider';
import Swal from 'sweetalert2';

// Backend URL from .env
const backendUrl = import.meta.env.VITE_API_URL;

const CheckoutForm = ({ application }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        // Backend-er `/create-payment-intent` route er sathe mil rekhe
        if (application?.salary > 0) {
            fetch(`${backendUrl}/create-payment-intent`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                // credentials: 'include', // Jodi JWT cookie-te thake tobe uncomment korun
                body: JSON.stringify({ salary: application.salary }) // price er poriborte salary
            })
            .then(res => res.json())
            .then(data => {
                if(data.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
            .catch(err => console.error("Stripe Secret Error:", err));
        }
    }, [application?.salary]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements || !clientSecret) return;

        const card = elements.getElement(CardElement);
        if (!card) return;

        setProcessing(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card });

        if (error) {
            Swal.fire("Error", error.message, "error");
            setProcessing(false);
            return;
        }

        // Card Payment Confirm kora
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: { 
                    email: user?.email || 'anonymous', 
                    name: user?.displayName || 'anonymous' 
                }
            }
        });

        if (confirmError) {
            Swal.fire("Error", confirmError.message, "error");
            setProcessing(false);
        } else if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            
            // Backend-er `/payments` route er payload
            const paymentInfo = {
                transactionId: paymentIntent.id,
                studentEmail: user.email,
                tutorEmail: application.tutorEmail,
                salary: application.salary,
                date: new Date(),
                applicationId: application._id,
                tuitionId: application.tuitionId
            };

            fetch(`${backendUrl}/payments`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                // credentials: 'include', 
                body: JSON.stringify(paymentInfo)
            })
            .then(res => res.json())
            .then(data => {
                setProcessing(false);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Alhamdulliah!",
                        text: `Payment Successful and Tutor Approved! Transaction ID: ${paymentIntent.id}`,
                        icon: "success",
                        confirmButtonText: "Great!"
                    }).then(() => {
                        // Success hole dashboard e pathate paren ba page refresh korte paren
                        window.location.reload(); 
                    });
                }
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <div className="border p-4 rounded-lg bg-white shadow-sm">
                <CardElement 
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': { color: '#aab7c4' },
                            },
                            invalid: { color: '#9e2146' },
                        },
                    }}
                />
            </div>
            
            <button 
                className={`btn btn-primary mt-6 w-full text-white font-bold ${processing ? 'opacity-50 cursor-not-allowed' : ''}`} 
                type="submit" 
                disabled={!stripe || !clientSecret || processing}
            >
                {processing ? (
                    <span className="loading loading-spinner"></span>
                ) : (
                    `Confirm Approval ($${application?.salary})`
                )}
            </button>
            
            {transactionId && (
                <div className="alert alert-success mt-4">
                    <span>Payment Done! ID: {transactionId}</span>
                </div>
            )}
        </form>
    );
};

export default CheckoutForm;

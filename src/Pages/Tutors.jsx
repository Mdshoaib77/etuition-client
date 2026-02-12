// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../context/AuthProvider';
// import { Loader2, CheckCircle, XCircle, CreditCard, User, Phone, GraduationCap, Briefcase } from 'lucide-react';
// import Swal from 'sweetalert2';

// const Tutors = () => {
//     const { user } = useContext(AuthContext);
//     const [applications, setApplications] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (!user?.email) return;

//         fetch(`http://localhost:5000/student/applied-tutors/${user.email}`, {
//             credentials: 'include'
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (Array.isArray(data)) setApplications(data);
//                 else if (Array.isArray(data?.applications)) setApplications(data.applications);
//                 else if (Array.isArray(data?.data)) setApplications(data.data);
//                 else setApplications([]);

//                 setLoading(false);
//             })
//             .catch(() => {
//                 setApplications([]);
//                 setLoading(false);
//             });

//     }, [user]);

//     const handleStatusUpdate = (id, newStatus) => {
//         fetch(`http://localhost:5000/applications/status/${id}`, {
//             method: 'PATCH',
//             headers: { 'content-type': 'application/json' },
//             body: JSON.stringify({ status: newStatus })
//         })
//             .then(res => res.json())
//             .then(() => {
//                 setApplications(prev =>
//                     prev.map(app =>
//                         app._id === id ? { ...app, status: newStatus } : app
//                     )
//                 );

//                 Swal.fire("Updated!", `Application marked as ${newStatus}`, "success");
//             });
//     };

//     const handlePaymentRedirect = (app) => {
//         fetch('http://localhost:5000/create-checkout-session', {
//             method: 'POST',
//             headers: { 'content-type': 'application/json' },
//             body: JSON.stringify({ application: app }),
//             credentials: "include"
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data?.url) window.location.href = data.url;
//                 else Swal.fire("Error", "Payment session failed!", "error");
//             });
//     };

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-emerald-50 to-white">
//                 <Loader2 className="animate-spin text-emerald-500" size={50} />
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-8">
            
//             <div className="max-w-7xl mx-auto">
//                 <h1 className="text-4xl font-black text-gray-800 mb-10 tracking-tight">
//                     Tutor Applications 
//                     <span className="ml-3 px-4 py-1 rounded-full text-sm bg-emerald-600 text-white shadow-md">
//                         {applications.length}
//                     </span>
//                 </h1>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//                     {applications.length > 0 && applications.map((app) => (
//                         <div
//                             key={app._id}
//                             className="relative backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col gap-5"
//                         >

//                             {/* Status Ribbon */}
//                             <div className={`absolute top-0 right-0 px-8 py-2 rounded-bl-3xl text-xs font-black uppercase tracking-widest shadow-lg ${
//                                 app.status?.toLowerCase() === 'approved'
//                                     ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
//                                     : app.status?.toLowerCase() === 'rejected'
//                                     ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
//                                     : 'bg-gradient-to-r from-orange-400 to-orange-500 text-white'
//                             }`}>
//                                 {app.status}
//                             </div>

//                             <div className="flex items-center gap-5 border-b border-gray-200 pb-5">
//                                 <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-4 rounded-2xl shadow-lg">
//                                     <User size={26} />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-bold text-xl text-gray-800">
//                                         {app.tutorEmail}
//                                     </h3>
//                                     <p className="text-sm text-gray-500">
//                                         Post: {app.tuitionTitle}
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Info Section */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">

//                                 <div className="flex items-center gap-3 text-gray-700 bg-white/60 p-3 rounded-xl shadow-sm">
//                                     <Phone size={16} className="text-blue-500" />
//                                     {app.tutorPhone}
//                                 </div>

//                                 <div className="flex items-center gap-3 text-gray-700 font-semibold bg-white/60 p-3 rounded-xl shadow-sm">
//                                     <span className="text-emerald-600 text-lg">৳</span>
//                                     Expected: {app.expectedSalary}
//                                 </div>

//                                 <div className="flex items-start gap-3 text-gray-700 bg-white/60 p-3 rounded-xl shadow-sm md:col-span-2">
//                                     <GraduationCap size={16} className="text-purple-500 mt-1" />
//                                     <span><strong>Qualification:</strong> {app.qualifications}</span>
//                                 </div>

//                                 <div className="flex items-start gap-3 text-gray-700 bg-white/60 p-3 rounded-xl shadow-sm md:col-span-2">
//                                     <Briefcase size={16} className="text-orange-500 mt-1" />
//                                     <span><strong>Experience:</strong> {app.experience}</span>
//                                 </div>

//                             </div>

//                             {/* Buttons */}
//                             <div className="flex flex-wrap gap-4 mt-auto pt-5 border-t border-gray-200">

//                                 {app.status?.toLowerCase() === 'pending' && (
//                                     <>
//                                         <button
//                                             onClick={() => handlePaymentRedirect(app)}
//                                             className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all hover:scale-105"
//                                         >
//                                             <CreditCard size={18} /> Approve & Pay
//                                         </button>

//                                         <button
//                                             onClick={() => handleStatusUpdate(app._id, 'Rejected')}
//                                             className="flex-1 flex items-center justify-center gap-2 bg-white border border-red-400 text-red-500 py-3 rounded-xl font-bold hover:bg-red-50 transition-all hover:scale-105"
//                                         >
//                                             <XCircle size={18} /> Reject
//                                         </button>
//                                     </>
//                                 )}

//                                 {app.status?.toLowerCase() === 'approved' && (
//                                     <div className="w-full flex items-center justify-center gap-2 bg-emerald-100 text-emerald-700 py-3 rounded-xl font-bold border border-emerald-300 shadow-sm">
//                                         <CheckCircle size={18} /> Tutor Hired Successfully
//                                     </div>
//                                 )}

//                             </div>

//                         </div>
//                     ))}

//                     {applications.length === 0 && (
//                         <div className="col-span-full text-center py-24 bg-white/70 backdrop-blur-lg rounded-3xl border border-white shadow-xl text-gray-500 text-lg">
//                             ✨ No tutors have applied for your posts yet.
//                         </div>
//                     )}

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Tutors;


import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Loader2, CheckCircle, XCircle, CreditCard, User, Phone, GraduationCap, Briefcase } from 'lucide-react';
import Swal from 'sweetalert2';

// Backend URL from .env
const backendUrl = import.meta.env.VITE_API_URL;

const Tutors = () => {
    const { user } = useContext(AuthContext);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`${backendUrl}/student/applied-tutors/${user.email}`, {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) setApplications(data);
                else if (Array.isArray(data?.applications)) setApplications(data.applications);
                else if (Array.isArray(data?.data)) setApplications(data.data);
                else setApplications([]);

                setLoading(false);
            })
            .catch(() => {
                setApplications([]);
                setLoading(false);
            });

    }, [user]);

    const handleStatusUpdate = (id, newStatus) => {
        fetch(`${backendUrl}/applications/status/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: newStatus })
        })
            .then(res => res.json())
            .then(() => {
                setApplications(prev =>
                    prev.map(app =>
                        app._id === id ? { ...app, status: newStatus } : app
                    )
                );

                Swal.fire("Updated!", `Application marked as ${newStatus}`, "success");
            });
    };

    const handlePaymentRedirect = (app) => {
        fetch(`${backendUrl}/create-checkout-session`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ application: app }),
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => {
                if (data?.url) window.location.href = data.url;
                else Swal.fire("Error", "Payment session failed!", "error");
            });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-emerald-50 to-white">
                <Loader2 className="animate-spin text-emerald-500" size={50} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-8">
            
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-black text-gray-800 mb-10 tracking-tight">
                    Tutor Applications 
                    <span className="ml-3 px-4 py-1 rounded-full text-sm bg-emerald-600 text-white shadow-md">
                        {applications.length}
                    </span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {applications.length > 0 && applications.map((app) => (
                        <div
                            key={app._id}
                            className="relative backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col gap-5"
                        >

                            {/* Status Ribbon */}
                            <div className={`absolute top-0 right-0 px-8 py-2 rounded-bl-3xl text-xs font-black uppercase tracking-widest shadow-lg ${
                                app.status?.toLowerCase() === 'approved'
                                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
                                    : app.status?.toLowerCase() === 'rejected'
                                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                                    : 'bg-gradient-to-r from-orange-400 to-orange-500 text-white'
                            }`}>
                                {app.status}
                            </div>

                            <div className="flex items-center gap-5 border-b border-gray-200 pb-5">
                                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-4 rounded-2xl shadow-lg">
                                    <User size={26} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-800">
                                        {app.tutorEmail}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Post: {app.tuitionTitle}
                                    </p>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">

                                <div className="flex items-center gap-3 text-gray-700 bg-white/60 p-3 rounded-xl shadow-sm">
                                    <Phone size={16} className="text-blue-500" />
                                    {app.tutorPhone}
                                </div>

                                <div className="flex items-center gap-3 text-gray-700 font-semibold bg-white/60 p-3 rounded-xl shadow-sm">
                                    <span className="text-emerald-600 text-lg">৳</span>
                                    Expected: {app.expectedSalary}
                                </div>

                                <div className="flex items-start gap-3 text-gray-700 bg-white/60 p-3 rounded-xl shadow-sm md:col-span-2">
                                    <GraduationCap size={16} className="text-purple-500 mt-1" />
                                    <span><strong>Qualification:</strong> {app.qualifications}</span>
                                </div>

                                <div className="flex items-start gap-3 text-gray-700 bg-white/60 p-3 rounded-xl shadow-sm md:col-span-2">
                                    <Briefcase size={16} className="text-orange-500 mt-1" />
                                    <span><strong>Experience:</strong> {app.experience}</span>
                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 mt-auto pt-5 border-t border-gray-200">

                                {app.status?.toLowerCase() === 'pending' && (
                                    <>
                                        <button
                                            onClick={() => handlePaymentRedirect(app)}
                                            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all hover:scale-105"
                                        >
                                            <CreditCard size={18} /> Approve & Pay
                                        </button>

                                        <button
                                            onClick={() => handleStatusUpdate(app._id, 'Rejected')}
                                            className="flex-1 flex items-center justify-center gap-2 bg-white border border-red-400 text-red-500 py-3 rounded-xl font-bold hover:bg-red-50 transition-all hover:scale-105"
                                        >
                                            <XCircle size={18} /> Reject
                                        </button>
                                    </>
                                )}

                                {app.status?.toLowerCase() === 'approved' && (
                                    <div className="w-full flex items-center justify-center gap-2 bg-emerald-100 text-emerald-700 py-3 rounded-xl font-bold border border-emerald-300 shadow-sm">
                                        <CheckCircle size={18} /> Tutor Hired Successfully
                                    </div>
                                )}

                            </div>

                        </div>
                    ))}

                    {applications.length === 0 && (
                        <div className="col-span-full text-center py-24 bg-white/70 backdrop-blur-lg rounded-3xl border border-white shadow-xl text-gray-500 text-lg">
                            ✨ No tutors have applied for your posts yet.
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Tutors;

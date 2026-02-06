// import React from 'react'

// const Tutors = () => {
//   return (
//     <div>
//       <h1>Alhamdulliah tutors</h1>
//     </div>
//   )
// }

// export default Tutors


import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Loader2, CheckCircle, XCircle, CreditCard, User, Phone, GraduationCap, Briefcase } from 'lucide-react';
import Swal from 'sweetalert2';

const Tutors = () => {
    const { user } = useContext(AuthContext);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/student/applied-tutors/${user?.email}`, {
                credentials: 'include'
            })
                .then(res => res.json())
                .then(data => {
                    setApplications(data);
                    setLoading(false);
                });
        }
    }, [user]);

    const handleStatusUpdate = (id, newStatus) => {
        fetch(`http://localhost:5000/applications/status/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: newStatus })
        })
        .then(res => res.json())
        .then(() => {
            setApplications(prev => prev.map(app => app._id === id ? { ...app, status: newStatus } : app));
            Swal.fire("Updated!", `Application marked as ${newStatus}`, "success");
        });
    };

    const handlePaymentRedirect = (app) => {
        // Stripe Checkout Session তৈরি করার জন্য কল
        fetch('http://localhost:5000/create-checkout-session', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ application: app }),
            credentials: "include"
        })
        .then(res => res.json())
        .then(data => {
            if (data.url) window.location.href = data.url;
        });
    };

    if (loading) return <div className="flex justify-center p-20"><Loader2 className="animate-spin text-emerald-500" size={40} /></div>;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-black text-gray-800 mb-8">Tutor Applications <span className="text-emerald-500">({applications.length})</span></h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {applications.map((app) => (
                    <div key={app._id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col gap-4 relative overflow-hidden transition-all hover:shadow-lg">
                        {/* Status Ribbon */}
                        <div className={`absolute top-0 right-0 px-6 py-1 rounded-bl-2xl text-[10px] font-black uppercase tracking-widest ${
                            app.status === 'Approved' ? 'bg-emerald-500 text-white' : 
                            app.status === 'Rejected' ? 'bg-red-500 text-white' : 'bg-orange-400 text-white'
                        }`}>
                            {app.status}
                        </div>

                        <div className="flex items-center gap-4 border-b border-gray-50 pb-4">
                            <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
                                <User size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-800">{app.tutorEmail}</h3>
                                <p className="text-xs text-gray-500">Post: {app.tuitionTitle}</p>
                            </div>
                        </div>

                        {/* Modal Dynamic Data */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Phone size={16} className="text-blue-500" />
                                <span>{app.tutorPhone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 font-bold">
                                <span className="text-emerald-600">৳</span>
                                <span>Expected: {app.expectedSalary}</span>
                            </div>
                            <div className="flex items-start gap-2 text-sm text-gray-600 md:col-span-2">
                                <GraduationCap size={16} className="text-purple-500 shrink-0 mt-1" />
                                <span><strong>Qual:</strong> {app.qualifications}</span>
                            </div>
                            <div className="flex items-start gap-2 text-sm text-gray-600 md:col-span-2">
                                <Briefcase size={16} className="text-orange-500 shrink-0 mt-1" />
                                <span><strong>Exp:</strong> {app.experience}</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50">
                            {app.status === 'pending' && (
                                <>
                                    <button 
                                        onClick={() => handlePaymentRedirect(app)}
                                        className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all active:scale-95"
                                    >
                                        <CreditCard size={18} /> Approve & Pay
                                    </button>
                                    <button 
                                        onClick={() => handleStatusUpdate(app._id, 'Rejected')}
                                        className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-600 py-3 rounded-xl font-bold hover:bg-red-50 hover:text-red-600 transition-all"
                                    >
                                        <XCircle size={18} /> Reject
                                    </button>
                                </>
                            )}
                            {app.status === 'Approved' && (
                                <div className="w-full flex items-center justify-center gap-2 bg-emerald-50 text-emerald-600 py-3 rounded-xl font-bold border border-emerald-100">
                                    <CheckCircle size={18} /> Tutor Hired Successfully
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {applications.length === 0 && (
                    <div className="col-span-full text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-gray-100 text-gray-400 italic">
                        No tutors have applied for your posts yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tutors;
// import React from 'react'

// const MyTuitions = () => {
//   return (
//     <div>
//       <h1>Alhamdulliah tutions</h1>
//     </div>
//   )
// }

// export default MyTuitions

import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { BookOpen, MapPin, Clock } from 'lucide-react';

const MyTuitions = () => {
    const { user } = useContext(AuthContext);
    const [myTuitions, setMyTuitions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/my-tuitions/${user?.email}`, {
                method: 'GET',
                credentials: "include" // 🔥 Cookie pathanor jonno
            })
            .then(res => res.json())
            .then(data => {
                setMyTuitions(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
        }
    }, [user?.email]);

    if (loading) return <div className="p-10 font-bold text-emerald-600 text-center">Loading...</div>;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 italic text-gray-800">My Posted <span className="text-emerald-600">Tuitions</span></h1>
            
            {myTuitions.length === 0 ? (
                <div className="bg-white p-10 rounded-2xl shadow text-center">
                    <p className="text-gray-500">You haven't posted any tuitions yet.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {myTuitions.map((t) => (
                        <div key={t._id} className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-emerald-500 hover:shadow-xl transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-bold text-xl text-gray-800">{t.title}</h3>
                                <span className={`badge font-bold py-3 ${t.status === 'Approved' ? 'badge-success' : 'badge-warning'}`}>
                                    {t.status}
                                </span>
                            </div>
                            
                            <div className="space-y-2 text-sm text-gray-600 mb-4">
                                <p className="flex items-center gap-2"><BookOpen size={16}/> {t.subject}</p>
                                <p className="flex items-center gap-2"><MapPin size={16}/> {t.location}</p>
                                <p className="flex items-center gap-2"><Clock size={16}/> {new Date(t.createdAt).toLocaleDateString()}</p>
                            </div>

                            <div className="flex justify-between items-center border-t pt-4">
                                <p className="font-bold text-emerald-700 text-lg">৳{t.salary}</p>
                                <button className="btn btn-sm btn-outline btn-emerald">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyTuitions;
// // // import React from 'react'

// // // const MyTuitions = () => {
// // //   return (
// // //     <div>
// // //       <h1>Alhamdulliah tutions</h1>
// // //     </div>
// // //   )
// // // }

// // // export default MyTuitions

// // // import React, { useEffect, useState, useContext } from 'react';
// // // import { AuthContext } from '../../../context/AuthProvider';
// // // import { BookOpen, MapPin, Clock } from 'lucide-react';

// // // const MyTuitions = () => {
// // //     const { user } = useContext(AuthContext);
// // //     const [myTuitions, setMyTuitions] = useState([]);
// // //     const [loading, setLoading] = useState(true);

// // //     useEffect(() => {
// // //         if (user?.email) {
// // //             fetch(`http://localhost:5000/my-tuitions/${user?.email}`, {
// // //                 method: 'GET',
// // //                 credentials: "include" // 🔥 Cookie pathanor jonno
// // //             })
// // //             .then(res => res.json())
// // //             .then(data => {
// // //                 setMyTuitions(Array.isArray(data) ? data : []);
// // //                 setLoading(false);
// // //             })
// // //             .catch(err => {
// // //                 console.error(err);
// // //                 setLoading(false);
// // //             });
// // //         }
// // //     }, [user?.email]);

// // //     if (loading) return <div className="p-10 font-bold text-emerald-600 text-center">Loading...</div>;

// // //     return (
// // //         <div className="p-8">
// // //             <h1 className="text-3xl font-bold mb-6 italic text-gray-800">My Posted <span className="text-emerald-600">Tuitions</span></h1>
            
// // //             {myTuitions.length === 0 ? (
// // //                 <div className="bg-white p-10 rounded-2xl shadow text-center">
// // //                     <p className="text-gray-500">You haven't posted any tuitions yet.</p>
// // //                 </div>
// // //             ) : (
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                     {myTuitions.map((t) => (
// // //                         <div key={t._id} className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-emerald-500 hover:shadow-xl transition-all">
// // //                             <div className="flex justify-between items-start mb-4">
// // //                                 <h3 className="font-bold text-xl text-gray-800">{t.title}</h3>
// // //                                 <span className={`badge font-bold py-3 ${t.status === 'Approved' ? 'badge-success' : 'badge-warning'}`}>
// // //                                     {t.status}
// // //                                 </span>
// // //                             </div>
                            
// // //                             <div className="space-y-2 text-sm text-gray-600 mb-4">
// // //                                 <p className="flex items-center gap-2"><BookOpen size={16}/> {t.subject}</p>
// // //                                 <p className="flex items-center gap-2"><MapPin size={16}/> {t.location}</p>
// // //                                 <p className="flex items-center gap-2"><Clock size={16}/> {new Date(t.createdAt).toLocaleDateString()}</p>
// // //                             </div>

// // //                             <div className="flex justify-between items-center border-t pt-4">
// // //                                 <p className="font-bold text-emerald-700 text-lg">৳{t.salary}</p>
// // //                                 <button className="btn btn-sm btn-outline btn-emerald">View Details</button>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default MyTuitions;

// // // import React, { useEffect, useState, useContext } from 'react';
// // // import { AuthContext } from '../../../context/AuthProvider';
// // // import { BookOpen, MapPin, Clock, Edit, Trash2, Eye } from 'lucide-react';
// // // import Swal from 'sweetalert2';

// // // const MyTuitions = () => {
// // //     const { user } = useContext(AuthContext);
// // //     const [myTuitions, setMyTuitions] = useState([]);
// // //     const [loading, setLoading] = useState(true);

// // //     useEffect(() => {
// // //         if (user?.email) {
// // //             fetchTuitions();
// // //         }
// // //     }, [user?.email]);

// // //     const fetchTuitions = () => {
// // //         fetch(`http://localhost:5000/my-tuitions/${user?.email}`, {
// // //             method: 'GET',
// // //             credentials: "include"
// // //         })
// // //         .then(res => res.json())
// // //         .then(data => {
// // //             setMyTuitions(Array.isArray(data) ? data : []);
// // //             setLoading(false);
// // //         })
// // //         .catch(err => {
// // //             console.error(err);
// // //             setLoading(false);
// // //         });
// // //     };

// // //     // --- DELETE FUNCTION ---
// // //     const handleDelete = (id) => {
// // //         Swal.fire({
// // //             title: "Are you sure?",
// // //             text: "This tuition post will be permanently deleted!",
// // //             icon: "warning",
// // //             showCancelButton: true,
// // //             confirmButtonColor: "#ef4444",
// // //             cancelButtonColor: "#6b7280",
// // //             confirmButtonText: "Yes, delete it!"
// // //         }).then((result) => {
// // //             if (result.isConfirmed) {
// // //                 fetch(`http://localhost:5000/tuitions/${id}`, {
// // //                     method: 'DELETE',
// // //                     credentials: "include"
// // //                 })
// // //                 .then(res => res.json())
// // //                 .then(data => {
// // //                     if (data.deletedCount > 0) {
// // //                         Swal.fire("Deleted!", "Post has been removed.", "success");
// // //                         setMyTuitions(myTuitions.filter(t => t._id !== id));
// // //                     }
// // //                 });
// // //             }
// // //         });
// // //     };

// // //     // --- UPDATE FUNCTION (Shows Default Values) ---
// // //     const handleUpdate = async (t) => {
// // //         const { value: formValues } = await Swal.fire({
// // //             title: '<span class="text-emerald-600 font-bold">Update Tuition</span>',
// // //             html: `
// // //                 <div class="flex flex-col gap-3">
// // //                     <input id="swal-title" class="swal2-input m-0 w-full" placeholder="Title" value="${t.title}">
// // //                     <input id="swal-subject" class="swal2-input m-0 w-full" placeholder="Subject" value="${t.subject}">
// // //                     <input id="swal-salary" type="number" class="swal2-input m-0 w-full" placeholder="Salary" value="${t.salary}">
// // //                     <input id="swal-location" class="swal2-input m-0 w-full" placeholder="Location" value="${t.location}">
// // //                 </div>
// // //             `,
// // //             focusConfirm: false,
// // //             showCancelButton: true,
// // //             confirmButtonText: 'Update Now',
// // //             confirmButtonColor: '#10b981',
// // //             preConfirm: () => {
// // //                 return {
// // //                     title: document.getElementById('swal-title').value,
// // //                     subject: document.getElementById('swal-subject').value,
// // //                     salary: document.getElementById('swal-salary').value,
// // //                     location: document.getElementById('swal-location').value
// // //                 }
// // //             }
// // //         });

// // //         if (formValues) {
// // //             fetch(`http://localhost:5000/tuitions/update/${t._id}`, {
// // //                 method: 'PATCH',
// // //                 headers: { 'content-type': 'application/json' },
// // //                 credentials: "include",
// // //                 body: JSON.stringify(formValues)
// // //             })
// // //             .then(res => res.json())
// // //             .then(data => {
// // //                 if (data.modifiedCount > 0) {
// // //                     Swal.fire("Success!", "Tuition updated and sent for re-approval.", "success");
// // //                     fetchTuitions(); // Refresh the list
// // //                 }
// // //             });
// // //         }
// // //     };

// // //     if (loading) return <div className="p-10 font-bold text-emerald-600 text-center">Loading...</div>;

// // //     return (
// // //         <div className="p-8">
// // //             <h1 className="text-3xl font-bold mb-6 italic text-gray-800">My Posted <span className="text-emerald-600">Tuitions</span></h1>
            
// // //             {myTuitions.length === 0 ? (
// // //                 <div className="bg-white p-10 rounded-2xl shadow text-center">
// // //                     <p className="text-gray-500">You haven't posted any tuitions yet.</p>
// // //                 </div>
// // //             ) : (
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                     {myTuitions.map((t) => (
// // //                         <div key={t._id} className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-emerald-500 hover:shadow-xl transition-all">
// // //                             <div className="flex justify-between items-start mb-4">
// // //                                 <div>
// // //                                     <h3 className="font-bold text-xl text-gray-800">{t.title}</h3>
// // //                                     <span className={`badge badge-sm font-bold mt-1 ${t.status === 'Approved' ? 'badge-success' : 'badge-warning'}`}>
// // //                                         {t.status}
// // //                                     </span>
// // //                                 </div>
// // //                                 <div className="flex gap-1">
// // //                                     <button onClick={() => handleUpdate(t)} className="btn btn-ghost btn-xs text-blue-600"><Edit size={18}/></button>
// // //                                     <button onClick={() => handleDelete(t._id)} className="btn btn-ghost btn-xs text-red-600"><Trash2 size={18}/></button>
// // //                                 </div>
// // //                             </div>
                            
// // //                             <div className="space-y-2 text-sm text-gray-600 mb-4">
// // //                                 <p className="flex items-center gap-2"><BookOpen size={16}/> {t.subject}</p>
// // //                                 <p className="flex items-center gap-2"><MapPin size={16}/> {t.location}</p>
// // //                                 <p className="flex items-center gap-2"><Clock size={16}/> {new Date(t.createdAt).toLocaleDateString()}</p>
// // //                             </div>

// // //                             <div className="flex justify-between items-center border-t pt-4">
// // //                                 <p className="font-bold text-emerald-700 text-lg">৳{t.salary}</p>
// // //                                 <button className="btn btn-sm btn-outline btn-emerald border-emerald-500 text-emerald-600 hover:bg-emerald-600 hover:border-emerald-600">
// // //                                    <Eye size={14} className="mr-1"/> Details
// // //                                 </button>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default MyTuitions;


// // import React, { useEffect, useState, useContext } from 'react';
// // import { AuthContext } from '../../../context/AuthProvider';
// // import { BookOpen, MapPin, Clock, Edit, Trash2, Eye } from 'lucide-react';
// // import Swal from 'sweetalert2';

// // const MyTuitions = () => {
// //     const { user } = useContext(AuthContext);
// //     const [myTuitions, setMyTuitions] = useState([]);
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         if (user?.email) {
// //             fetchTuitions();
// //         }
// //     }, [user?.email]);

// //     const fetchTuitions = () => {
// //         fetch(`http://localhost:5000/my-tuitions/${user?.email}`, {
// //             method: 'GET',
// //             credentials: "include"
// //         })
// //         .then(res => res.json())
// //         .then(data => {
// //             setMyTuitions(Array.isArray(data) ? data : []);
// //             setLoading(false);
// //         })
// //         .catch(err => {
// //             console.error(err);
// //             setLoading(false);
// //         });
// //     };

// //     // --- DELETE FUNCTION ---
// //     const handleDelete = (id) => {
// //         Swal.fire({
// //             title: "Are you sure?",
// //             text: "This tuition post will be permanently deleted!",
// //             icon: "warning",
// //             showCancelButton: true,
// //             confirmButtonColor: "#ef4444",
// //             cancelButtonColor: "#6b7280",
// //             confirmButtonText: "Yes, delete it!"
// //         }).then((result) => {
// //             if (result.isConfirmed) {
// //                 // Using the specific student-delete route for safety
// //                 fetch(`http://localhost:5000/tuitions/student/${id}`, {
// //                     method: 'DELETE',
// //                     credentials: "include"
// //                 })
// //                 .then(res => res.json())
// //                 .then(data => {
// //                     if (data.deletedCount > 0) {
// //                         Swal.fire("Deleted!", "Post has been removed.", "success");
// //                         setMyTuitions(myTuitions.filter(t => t._id !== id));
// //                     }
// //                 })
// //                 .catch(err => Swal.fire("Error", "Could not delete post", "error"));
// //             }
// //         });
// //     };

// //     // --- UPDATE FUNCTION (Shows Default Values) ---
// //     const handleUpdate = async (t) => {
// //         const { value: formValues } = await Swal.fire({
// //             title: '<span class="text-emerald-600 font-bold">Update Tuition</span>',
// //             html: `
// //                 <div class="flex flex-col gap-3">
// //                     <label class="text-left text-xs font-semibold text-gray-500 ml-1">Title</label>
// //                     <input id="swal-title" class="swal2-input m-0 w-full" placeholder="Title" value="${t.title}">
                    
// //                     <label class="text-left text-xs font-semibold text-gray-500 ml-1">Subject</label>
// //                     <input id="swal-subject" class="swal2-input m-0 w-full" placeholder="Subject" value="${t.subject}">
                    
// //                     <label class="text-left text-xs font-semibold text-gray-500 ml-1">Salary</label>
// //                     <input id="swal-salary" type="number" class="swal2-input m-0 w-full" placeholder="Salary" value="${t.salary}">
                    
// //                     <label class="text-left text-xs font-semibold text-gray-500 ml-1">Location</label>
// //                     <input id="swal-location" class="swal2-input m-0 w-full" placeholder="Location" value="${t.location}">
// //                 </div>
// //             `,
// //             focusConfirm: false,
// //             showCancelButton: true,
// //             confirmButtonText: 'Update Now',
// //             confirmButtonColor: '#10b981',
// //             preConfirm: () => {
// //                 const title = document.getElementById('swal-title').value;
// //                 const subject = document.getElementById('swal-subject').value;
// //                 const salary = document.getElementById('swal-salary').value;
// //                 const location = document.getElementById('swal-location').value;

// //                 if (!title || !subject || !salary || !location) {
// //                     Swal.showValidationMessage(`Please fill out all fields`);
// //                 }
// //                 return { title, subject, salary, location };
// //             }
// //         });

// //         if (formValues) {
// //             fetch(`http://localhost:5000/tuitions/update/${t._id}`, {
// //                 method: 'PATCH',
// //                 headers: { 'content-type': 'application/json' },
// //                 credentials: "include",
// //                 body: JSON.stringify(formValues)
// //             })
// //             .then(res => res.json())
// //             .then(data => {
// //                 if (data.modifiedCount > 0) {
// //                     Swal.fire("Success!", "Tuition updated and sent for re-approval.", "success");
// //                     fetchTuitions(); // Refresh the list to show "Pending" status
// //                 } else {
// //                     Swal.fire("No Changes", "No data was modified.", "info");
// //                 }
// //             })
// //             .catch(err => Swal.fire("Error", "Update failed", "error"));
// //         }
// //     };

// //     if (loading) return <div className="p-10 font-bold text-emerald-600 text-center">Loading...</div>;

// //     return (
// //         <div className="p-8">
// //             <h1 className="text-3xl font-bold mb-6 italic text-gray-800">My Posted <span className="text-emerald-600">Tuitions</span></h1>
            
// //             {myTuitions.length === 0 ? (
// //                 <div className="bg-white p-10 rounded-2xl shadow text-center">
// //                     <p className="text-gray-500">You haven't posted any tuitions yet.</p>
// //                 </div>
// //             ) : (
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                     {myTuitions.map((t) => (
// //                         <div key={t._id} className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-emerald-500 hover:shadow-xl transition-all">
// //                             <div className="flex justify-between items-start mb-4">
// //                                 <div>
// //                                     <h3 className="font-bold text-xl text-gray-800">{t.title}</h3>
// //                                     <span className={`badge badge-sm font-bold mt-1 ${t.status === 'Approved' ? 'badge-success' : 'badge-warning'}`}>
// //                                         {t.status}
// //                                     </span>
// //                                 </div>
// //                                 <div className="flex gap-1">
// //                                     <button 
// //                                         onClick={() => handleUpdate(t)} 
// //                                         className="btn btn-ghost btn-xs text-blue-600 hover:bg-blue-50"
// //                                         title="Edit Tuition"
// //                                     >
// //                                         <Edit size={18}/>
// //                                     </button>
// //                                     <button 
// //                                         onClick={() => handleDelete(t._id)} 
// //                                         className="btn btn-ghost btn-xs text-red-600 hover:bg-red-50"
// //                                         title="Delete Tuition"
// //                                     >
// //                                         <Trash2 size={18}/>
// //                                     </button>
// //                                 </div>
// //                             </div>
                            
// //                             <div className="space-y-2 text-sm text-gray-600 mb-4">
// //                                 <p className="flex items-center gap-2"><BookOpen size={16}/> {t.subject}</p>
// //                                 <p className="flex items-center gap-2"><MapPin size={16}/> {t.location}</p>
// //                                 <p className="flex items-center gap-2"><Clock size={16}/> {new Date(t.createdAt).toLocaleDateString()}</p>
// //                             </div>

// //                             <div className="flex justify-between items-center border-t pt-4">
// //                                 <p className="font-bold text-emerald-700 text-lg">৳{t.salary}</p>
// //                                 <button className="btn btn-sm btn-outline btn-emerald border-emerald-500 text-emerald-600 hover:bg-emerald-600 hover:border-emerald-600">
// //                                    <Eye size={14} className="mr-1"/> Details
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default MyTuitions;

// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthProvider';
// import { BookOpen, MapPin, Clock, Edit, Trash2, Eye, Calendar, User, Briefcase, GraduationCap } from 'lucide-react';
// import Swal from 'sweetalert2';

// const MyTuitions = () => {
//     const { user } = useContext(AuthContext);
//     const [myTuitions, setMyTuitions] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             fetchTuitions();
//         }
//     }, [user?.email]);

//     const fetchTuitions = () => {
//         fetch(`http://localhost:5000/my-tuitions/${user?.email}`, {
//             method: 'GET',
//             credentials: "include"
//         })
//         .then(res => res.json())
//         .then(data => {
//             setMyTuitions(Array.isArray(data) ? data : []);
//             setLoading(false);
//         })
//         .catch(err => {
//             console.error(err);
//             setLoading(false);
//         });
//     };

//     // --- HANDLE FULL UPDATE (Mirrors PostTuition Form) ---
//     const handleUpdate = async (t) => {
//         const { value: formValues } = await Swal.fire({
//             title: '<div class="flex items-center gap-2 justify-center text-emerald-600 font-black"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg> Update Tuition Post</div>',
//             width: '850px',
//             html: `
//                 <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left p-4 overflow-x-hidden">
//                     <div class="flex flex-col md:col-span-2">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Tuition Title</label>
//                         <input id="swal-title" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Need Experienced Math Tutor" value="${t.title}">
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Subject</label>
//                         <input id="swal-subject" class="swal2-input m-0 w-full text-sm" placeholder="Physics, Math etc." value="${t.subject}">
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Class/Grade</label>
//                         <input id="swal-className" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Class 10 / HSC" value="${t.className}">
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Salary (Monthly BDT)</label>
//                         <input id="swal-salary" type="number" class="swal2-input m-0 w-full text-sm" placeholder="Budget Amount" value="${t.salary}">
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Days Per Week</label>
//                         <select id="swal-daysPerWeek" class="swal2-input m-0 w-full text-sm font-medium">
//                             <option value="3 Days" ${t.daysPerWeek === '3 Days' ? 'selected' : ''}>3 Days</option>
//                             <option value="4 Days" ${t.daysPerWeek === '4 Days' ? 'selected' : ''}>4 Days</option>
//                             <option value="5 Days" ${t.daysPerWeek === '5 Days' ? 'selected' : ''}>5 Days</option>
//                             <option value="6 Days" ${t.daysPerWeek === '6 Days' ? 'selected' : ''}>6 Days</option>
//                         </select>
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Teaching Time</label>
//                         <input id="swal-teachingTime" class="swal2-input m-0 w-full text-sm" placeholder="e.g. 5:00 PM / Evening" value="${t.teachingTime}">
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Student Gender</label>
//                         <select id="swal-studentGender" class="swal2-input m-0 w-full text-sm font-medium">
//                             <option value="Male" ${t.studentGender === 'Male' ? 'selected' : ''}>Male</option>
//                             <option value="Female" ${t.studentGender === 'Female' ? 'selected' : ''}>Female</option>
//                             <option value="Other" ${t.studentGender === 'Other' ? 'selected' : ''}>Both/Other</option>
//                         </select>
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Curriculum/Version</label>
//                         <input id="swal-curriculum" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Bangla Medium" value="${t.curriculum}">
//                     </div>
//                     <div class="flex flex-col">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Detailed Location</label>
//                         <input id="swal-location" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Mirpur-10, Dhaka" value="${t.location}">
//                     </div>
//                     <div class="flex flex-col md:col-span-2">
//                         <label class="text-xs font-bold text-gray-700 mb-1">Additional Description</label>
//                         <textarea id="swal-description" class="swal2-textarea m-0 w-full h-24 text-sm" placeholder="Mention requirements...">${t.description || ''}</textarea>
//                     </div>
//                 </div>
//             `,
//             showCancelButton: true,
//             confirmButtonText: 'Save Changes',
//             confirmButtonColor: '#059669',
//             cancelButtonColor: '#6b7280',
//             preConfirm: () => {
//                 const title = document.getElementById('swal-title').value;
//                 const subject = document.getElementById('swal-subject').value;
//                 if (!title || !subject) {
//                     Swal.showValidationMessage(`Title and Subject are required`);
//                 }
//                 return {
//                     title,
//                     subject,
//                     className: document.getElementById('swal-className').value,
//                     salary: document.getElementById('swal-salary').value,
//                     daysPerWeek: document.getElementById('swal-daysPerWeek').value,
//                     teachingTime: document.getElementById('swal-teachingTime').value,
//                     studentGender: document.getElementById('swal-studentGender').value,
//                     curriculum: document.getElementById('swal-curriculum').value,
//                     location: document.getElementById('swal-location').value,
//                     description: document.getElementById('swal-description').value,
//                 }
//             }
//         });

//         if (formValues) {
//             fetch(`http://localhost:5000/tuitions/update/${t._id}`, {
//                 method: 'PATCH',
//                 headers: { 'content-type': 'application/json' },
//                 credentials: "include",
//                 body: JSON.stringify(formValues)
//             })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.modifiedCount > 0) {
//                     Swal.fire({
//                         title: "Updated!",
//                         text: "Post updated and sent for Admin re-approval.",
//                         icon: "success",
//                         confirmButtonColor: "#059669"
//                     });
//                     fetchTuitions(); 
//                 }
//             });
//         }
//     };

//     // --- HANDLE DELETE ---
//     const handleDelete = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#ef4444",
//             cancelButtonColor: "#6b7280",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/tuitions/student/${id}`, {
//                     method: 'DELETE',
//                     credentials: "include"
//                 })
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.deletedCount > 0) {
//                         Swal.fire("Deleted!", "Your post has been removed.", "success");
//                         setMyTuitions(myTuitions.filter(t => t._id !== id));
//                     }
//                 });
//             }
//         });
//     };

//     if (loading) return <div className="flex justify-center items-center min-h-[400px]"><span className="loading loading-spinner loading-lg text-emerald-600"></span></div>;

//     return (
//         <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
//             <div className="max-w-7xl mx-auto">
//                 <div className="mb-8">
//                     <h1 className="text-3xl font-black text-gray-800 tracking-tight">
//                         My Posted <span className="text-emerald-600 italic">Tuitions</span>
//                     </h1>
//                     <p className="text-gray-500 font-medium mt-1">Manage and track your tuition requests</p>
//                 </div>
                
//                 {myTuitions.length === 0 ? (
//                     <div className="bg-white p-20 rounded-3xl shadow-sm text-center border-2 border-dashed border-gray-200">
//                         <div className="flex justify-center mb-4 text-gray-300">
//                             <Briefcase size={64} />
//                         </div>
//                         <p className="text-gray-500 font-bold text-xl">No tuitions posted yet.</p>
//                     </div>
//                 ) : (
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                         {myTuitions.map((t) => (
//                             <div key={t._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all group">
//                                 <div className="flex justify-between items-start mb-4">
//                                     <div className="space-y-1">
//                                         <h3 className="font-black text-xl text-gray-800 group-hover:text-emerald-700 transition-colors line-clamp-1">{t.title}</h3>
//                                         <div className="flex items-center gap-2">
//                                             <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
//                                                 t.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 
//                                                 t.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
//                                             }`}>
//                                                 {t.status}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <button onClick={() => handleUpdate(t)} className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"><Edit size={18}/></button>
//                                         <button onClick={() => handleDelete(t._id)} className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm"><Trash2 size={18}/></button>
//                                     </div>
//                                 </div>
                                
//                                 <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-600 mb-6">
//                                     <p className="flex items-center gap-2 font-semibold"><BookOpen size={16} className="text-emerald-500"/> {t.subject}</p>
//                                     <p className="flex items-center gap-2 font-semibold"><GraduationCap size={16} className="text-emerald-500"/> {t.className}</p>
//                                     <p className="flex items-center gap-2"><Calendar size={16} className="text-emerald-500"/> {t.daysPerWeek}</p>
//                                     <p className="flex items-center gap-2"><User size={16} className="text-emerald-500"/> {t.studentGender}</p>
//                                     <p className="flex items-center gap-2 col-span-2"><MapPin size={16} className="text-emerald-500"/> {t.location}</p>
//                                 </div>

//                                 <div className="flex justify-between items-center border-t border-gray-50 pt-4">
//                                     <div>
//                                         <p className="text-[10px] text-gray-400 font-bold uppercase">Monthly Salary</p>
//                                         <p className="font-black text-emerald-600 text-xl">৳{t.salary}</p>
//                                     </div>
//                                     <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-xs font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-gray-200">
//                                        <Eye size={14}/> View Details
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MyTuitions;

import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { BookOpen, MapPin, Edit, Trash2, Eye, Calendar, GraduationCap, Activity, Briefcase, Users } from 'lucide-react';
import Swal from 'sweetalert2';

const MyTuitions = () => {
    const { user } = useContext(AuthContext);
    const [myTuitions, setMyTuitions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) fetchTuitions();
    }, [user?.email]);

    const fetchTuitions = () => {
        fetch(`http://localhost:5000/my-tuitions/${user?.email}`, {
            method: 'GET',
            credentials: "include"
        })
        .then(res => res.json())
        .then(data => {
            setMyTuitions(Array.isArray(data) ? data : []);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    };

    // --- ENHANCED VIEW DETAILS MODAL ---
    const handleViewDetails = (t) => {
        Swal.fire({
            title: `<span class="text-2xl font-black text-emerald-700">${t.title}</span>`,
            html: `
                <div class="text-left space-y-4 p-2 text-gray-700">
                    <div class="grid grid-cols-2 gap-4 bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                        <div><p class="text-[10px] uppercase font-black text-emerald-600">Subject</p><p class="font-bold">${t.subject}</p></div>
                        <div><p class="text-[10px] uppercase font-black text-emerald-600">Class</p><p class="font-bold">${t.className}</p></div>
                        <div><p class="text-[10px] uppercase font-black text-emerald-600">Salary</p><p class="font-bold">৳${t.salary}</p></div>
                        <div><p class="text-[10px] uppercase font-black text-emerald-600">Time</p><p class="font-bold">${t.teachingTime || 'N/A'}</p></div>
                        <div><p class="text-[10px] uppercase font-black text-emerald-600">Student Gender</p><p class="font-bold">${t.studentGender || 'Any'}</p></div>
                        <div><p class="text-[10px] uppercase font-black text-emerald-600">Curriculum</p><p class="font-bold">${t.curriculum || 'N/A'}</p></div>
                    </div>
                    <div class="px-2">
                        <p class="text-[10px] uppercase font-black text-gray-400">Description</p>
                        <p class="italic text-sm text-gray-600 mt-1 leading-relaxed">${t.description || 'No additional requirements mentioned.'}</p>
                    </div>
                    <div class="flex items-center gap-2 px-2 text-xs font-bold text-gray-500">
                        <MapPin size={14} className="text-emerald-500"/> ${t.location}
                    </div>
                </div>
            `,
            confirmButtonText: 'Got it',
            confirmButtonColor: '#059669',
            showClass: { popup: 'animate__animated animate__fadeInUp animate__faster' },
            customClass: { popup: 'rounded-[2rem]' }
        });
    };

    // --- HANDLE FULL UPDATE (Exact Fields as requested) ---
    const handleUpdate = async (t) => {
        const { value: formValues } = await Swal.fire({
            title: '<div class="flex items-center gap-2 justify-center text-emerald-600 font-black"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg> Update Tuition Post</div>',
            width: '850px',
            html: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left p-4 overflow-x-hidden">
                    <div class="flex flex-col md:col-span-2">
                        <label class="text-xs font-bold text-gray-700 mb-1">Tuition Title</label>
                        <input id="swal-title" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Need Experienced Math Tutor" value="${t.title}">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Subject</label>
                        <input id="swal-subject" class="swal2-input m-0 w-full text-sm" placeholder="Physics, Math etc." value="${t.subject}">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Class/Grade</label>
                        <input id="swal-className" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Class 10 / HSC" value="${t.className}">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Salary (Monthly BDT)</label>
                        <input id="swal-salary" type="number" class="swal2-input m-0 w-full text-sm" placeholder="Budget Amount" value="${t.salary}">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Days Per Week</label>
                        <select id="swal-daysPerWeek" class="swal2-input m-0 w-full text-sm font-medium">
                            <option value="3 Days" ${t.daysPerWeek === '3 Days' ? 'selected' : ''}>3 Days</option>
                            <option value="4 Days" ${t.daysPerWeek === '4 Days' ? 'selected' : ''}>4 Days</option>
                            <option value="5 Days" ${t.daysPerWeek === '5 Days' ? 'selected' : ''}>5 Days</option>
                            <option value="6 Days" ${t.daysPerWeek === '6 Days' ? 'selected' : ''}>6 Days</option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Teaching Time</label>
                        <input id="swal-teachingTime" class="swal2-input m-0 w-full text-sm" placeholder="e.g. 5:00 PM / Evening" value="${t.teachingTime || ''}">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Student Gender</label>
                        <select id="swal-studentGender" class="swal2-input m-0 w-full text-sm font-medium">
                            <option value="Male" ${t.studentGender === 'Male' ? 'selected' : ''}>Male</option>
                            <option value="Female" ${t.studentGender === 'Female' ? 'selected' : ''}>Female</option>
                            <option value="Other" ${t.studentGender === 'Other' ? 'selected' : ''}>Both/Other</option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Curriculum/Version</label>
                        <input id="swal-curriculum" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Bangla Medium" value="${t.curriculum || ''}">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold text-gray-700 mb-1">Detailed Location</label>
                        <input id="swal-location" class="swal2-input m-0 w-full text-sm" placeholder="e.g. Mirpur-10, Dhaka" value="${t.location}">
                    </div>
                    <div class="flex flex-col md:col-span-2">
                        <label class="text-xs font-bold text-gray-700 mb-1">Additional Description</label>
                        <textarea id="swal-description" class="swal2-textarea m-0 w-full h-24 text-sm" placeholder="Mention requirements...">${t.description || ''}</textarea>
                    </div>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Save Changes',
            confirmButtonColor: '#059669',
            cancelButtonColor: '#6b7280',
            customClass: { popup: 'rounded-[2rem]' },
            preConfirm: () => {
                const title = document.getElementById('swal-title').value;
                const subject = document.getElementById('swal-subject').value;
                if (!title || !subject) {
                    Swal.showValidationMessage(`Title and Subject are required`);
                }
                return {
                    title,
                    subject,
                    className: document.getElementById('swal-className').value,
                    salary: document.getElementById('swal-salary').value,
                    daysPerWeek: document.getElementById('swal-daysPerWeek').value,
                    teachingTime: document.getElementById('swal-teachingTime').value,
                    studentGender: document.getElementById('swal-studentGender').value,
                    curriculum: document.getElementById('swal-curriculum').value,
                    location: document.getElementById('swal-location').value,
                    description: document.getElementById('swal-description').value,
                }
            }
        });

        if (formValues) {
            fetch(`http://localhost:5000/tuitions/update/${t._id}`, {
                method: 'PATCH',
                headers: { 'content-type': 'application/json' },
                credentials: "include",
                body: JSON.stringify(formValues)
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Post updated and sent for Admin re-approval.",
                        icon: "success",
                        confirmButtonColor: "#059669"
                    });
                    fetchTuitions(); 
                }
            });
        }
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This tuition post will be permanently removed.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#94a3b8",
            confirmButtonText: "Yes, Delete it",
            customClass: { popup: 'rounded-[2rem]' }
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/tuitions/student/${id}`, { method: 'DELETE', credentials: "include" })
                .then(() => {
                    setMyTuitions(myTuitions.filter(t => t._id !== id));
                    Swal.fire("Deleted!", "Post has been removed.", "success");
                });
            }
        });
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-dots loading-lg text-emerald-600"></span></div>;

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-20">
            {/* STICKY HEADER */}
            <div className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-100 mb-8">
                <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 tracking-tighter flex items-center gap-2">
                            My <span className="text-emerald-600 italic">Tuitions</span> <Activity className="text-emerald-400" />
                        </h1>
                        <p className="text-gray-500 text-sm font-medium">Manage and track your active tutor requests</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-emerald-50 px-5 py-2.5 rounded-2xl border border-emerald-100 hidden sm:block">
                            <p className="text-[10px] font-black text-emerald-600 uppercase">Active Account</p>
                            <p className="text-sm font-bold text-gray-700">{user?.displayName || user?.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                {myTuitions.length === 0 ? (
                    <div className="bg-white rounded-[3rem] p-20 text-center shadow-sm border border-dashed border-gray-200 mt-10">
                        <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Briefcase className="text-gray-300" size={48} />
                        </div>
                        <h2 className="text-2xl font-black text-gray-800">No Tuitions Posted</h2>
                        <p className="text-gray-500 mt-2 max-w-xs mx-auto">You haven't posted any requirements yet. Start finding your perfect tutor today!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {myTuitions.map((t) => (
                            <div key={t._id} className="group bg-white rounded-[2.5rem] p-7 border border-transparent shadow-sm hover:shadow-2xl hover:border-emerald-100 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0">
                                    <div className={`px-6 py-1.5 rounded-bl-3xl text-[10px] font-black uppercase tracking-widest text-white shadow-sm ${
                                        t.status === 'Approved' ? 'bg-emerald-500' : t.status === 'Pending' ? 'bg-orange-400' : 'bg-rose-500'
                                    }`}>
                                        {t.status}
                                    </div>
                                </div>

                                <div className="space-y-5">
                                    <div className="pt-4">
                                        <h3 className="text-xl font-black text-gray-800 leading-tight group-hover:text-emerald-700 transition-colors line-clamp-2 min-h-[56px]">
                                            {t.title}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5">
                                            <BookOpen size={14}/> {t.subject}
                                        </span>
                                        <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5">
                                            <GraduationCap size={14}/> {t.className}
                                        </span>
                                    </div>

                                    <div className="space-y-3 text-sm text-gray-500 font-bold">
                                        <div className="flex items-center gap-2.5"><Calendar size={18} className="text-emerald-500"/> {t.daysPerWeek}</div>
                                        <div className="flex items-center gap-2.5"><MapPin size={18} className="text-emerald-500"/> <span className="truncate">{t.location}</span></div>
                                    </div>

                                    <div className="pt-5 border-t border-gray-50 flex items-center justify-between">
                                        <div>
                                            <span className="text-[10px] font-black text-gray-400 uppercase block tracking-wider">Budget / Month</span>
                                            <span className="text-2xl font-black text-gray-900 group-hover:text-emerald-600 transition-colors">৳{t.salary}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => handleUpdate(t)} className="p-3.5 bg-gray-50 text-gray-600 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all border border-gray-100"><Edit size={20}/></button>
                                            <button onClick={() => handleDelete(t._id)} className="p-3.5 bg-gray-50 text-rose-500 rounded-2xl hover:bg-rose-50 hover:text-rose-600 transition-all border border-gray-100"><Trash2 size={20}/></button>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => handleViewDetails(t)}
                                        className="w-full py-4 bg-gray-900 text-white font-black rounded-[1.2rem] flex items-center justify-center gap-2 group-hover:bg-emerald-600 transition-all shadow-xl shadow-gray-200 active:scale-95"
                                    >
                                        <Eye size={18} /> Full Overview
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyTuitions;
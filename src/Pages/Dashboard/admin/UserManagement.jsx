// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaTrashAlt, FaUserEdit, FaUserShield, FaEnvelope, FaIdBadge, FaPhone } from 'react-icons/fa';

// const UserManagement = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = () => {
//         fetch('http://localhost:5000/users', { credentials: 'include' })
//             .then(res => res.json())
//             .then(data => {
//                 setUsers(Array.isArray(data) ? data : []);
//                 setLoading(false);
//             })
//             .catch(err => { 
//                 console.error(err); 
//                 setLoading(false); 
//             });
//     };

//     // --- 1. Update User Profile Logic ---
//     const handleEditUser = (user) => {
//         Swal.fire({
//             title: '<span class="text-xl font-bold text-emerald-600">Update User Information</span>',
//             html:
//                 `<div class="flex flex-col gap-3 text-left">
//                     <label class="text-xs font-bold text-slate-500 ml-1">Full Name</label>
//                     <input id="swal-name" class="swal2-input !m-0 !w-full focus:border-emerald-500" placeholder="Name" value="${user.name}">
                    
//                     <label class="text-xs font-bold text-slate-500 ml-1">Phone Number</label>
//                     <input id="swal-phone" class="swal2-input !m-0 !w-full focus:border-emerald-500" placeholder="Phone" value="${user.phone || ''}">
                    
//                     <label class="text-xs font-bold text-slate-500 ml-1">Profile Image URL</label>
//                     <input id="swal-image" class="swal2-input !m-0 !w-full focus:border-emerald-500" placeholder="Photo URL" value="${user.image || ''}">
                    
//                     <label class="text-xs font-bold text-slate-500 ml-1">Verification Status</label>
//                     <select id="swal-status" class="swal2-input !m-0 !w-full focus:border-emerald-500">
//                         <option value="Verified" ${user.status === 'Verified' ? 'selected' : ''}>Verified</option>
//                         <option value="Pending" ${user.status === 'Pending' ? 'selected' : ''}>Pending</option>
//                         <option value="Blocked" ${user.status === 'Blocked' ? 'selected' : ''}>Blocked</option>
//                     </select>
//                 </div>`,
//             focusConfirm: false,
//             showCancelButton: true,
//             confirmButtonText: 'Save Changes',
//             confirmButtonColor: '#059669', // emerald-600
//             cancelButtonColor: '#64748b',
//             preConfirm: () => {
//                 return {
//                     name: document.getElementById('swal-name').value,
//                     phone: document.getElementById('swal-phone').value,
//                     image: document.getElementById('swal-image').value,
//                     status: document.getElementById('swal-status').value
//                 }
//             }
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/users/update/${user._id}`, {
//                     method: 'PATCH',
//                     headers: { 'content-type': 'application/json' },
//                     body: JSON.stringify(result.value),
//                     credentials: 'include'
//                 })
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.modifiedCount > 0) {
//                         fetchUsers();
//                         Swal.fire({
//                             title: 'Updated!',
//                             text: 'User information has been saved.',
//                             icon: 'success',
//                             confirmButtonColor: '#059669'
//                         });
//                     }
//                 });
//             }
//         });
//     };

//     // --- 2. Role Change Logic ---
//     const handleRoleChange = (user, newRole) => {
//         Swal.fire({
//             title: `Make ${user.name} an ${newRole}?`,
//             text: "This will change their access level immediately.",
//             icon: 'info',
//             showCancelButton: true,
//             confirmButtonColor: '#059669', // emerald-600
//             confirmButtonText: 'Yes, Update Role'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/users/role/${user._id}`, {
//                     method: 'PATCH',
//                     headers: { 'content-type': 'application/json' },
//                     body: JSON.stringify({ role: newRole }),
//                     credentials: 'include'
//                 })
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.modifiedCount > 0) {
//                         fetchUsers();
//                         Swal.fire({
//                             title: 'Success!',
//                             text: 'Role updated successfully.',
//                             icon: 'success',
//                             confirmButtonColor: '#059669'
//                         });
//                     }
//                 });
//             }
//         });
//     };

//     // --- 3. Delete User Logic ---
//     const handleDeleteUser = (id) => {
//         Swal.fire({
//             title: 'Delete Account?',
//             text: "This action is permanent and cannot be undone!",
//             icon: 'error',
//             showCancelButton: true,
//             confirmButtonColor: '#ef4444',
//             confirmButtonText: 'Delete Permanently'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/users/${id}`, { method: 'DELETE', credentials: 'include' })
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.deletedCount > 0) {
//                         setUsers(users.filter(u => u._id !== id));
//                         Swal.fire({
//                             title: 'Deleted!',
//                             text: 'User has been removed.',
//                             icon: 'success',
//                             confirmButtonColor: '#059669'
//                         });
//                     }
//                 });
//             }
//         });
//     };

//     if (loading) return (
//         <div className="p-20 text-center">
//             <span className="loading loading-spinner loading-lg text-emerald-600"></span>
//             <p className="mt-2 text-emerald-600 font-bold">Loading Users...</p>
//         </div>
//     );

//     return (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
//             {/* Header Section */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-2">
//                 <div>
//                     <h2 className="text-3xl font-black text-slate-800 tracking-tight">User Management</h2>
//                     <p className="text-slate-500 font-medium">Monitor and manage all system participants</p>
//                 </div>
//                 <div className="bg-emerald-50 text-emerald-600 px-6 py-2 rounded-2xl font-bold border border-emerald-100 shadow-sm">
//                     Total: {users.length} Users
//                 </div>
//             </div>

//             {/* Main Table Card */}
//             <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
//                 <div className="overflow-x-auto">
//                     <table className="table table-zebra w-full border-none">
//                         <thead className="bg-emerald-600 text-white border-none">
//                             <tr className="h-16 text-xs uppercase tracking-[0.1em]">
//                                 <th className="pl-8">User Profile</th>
//                                 <th>Contact & Status</th>
//                                 <th>Role</th>
//                                 <th className="text-center">Permissions & Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <AnimatePresence>
//                                 {users.map((user) => (
//                                     <motion.tr 
//                                         key={user._id}
//                                         layout
//                                         initial={{ opacity: 0 }}
//                                         animate={{ opacity: 1 }}
//                                         exit={{ opacity: 0, x: -20 }}
//                                         className="hover:bg-emerald-50/30 transition-all border-slate-50"
//                                     >
//                                         <td className="pl-8 py-5">
//                                             <div className="flex items-center gap-4">
//                                                 <div className="avatar">
//                                                     <div className="w-14 h-14 rounded-2xl ring ring-emerald-100 ring-offset-2 overflow-hidden">
//                                                         <img src={user.image || `https://ui-avatars.com/api/?name=${user.name}&background=10b981&color=fff`} alt={user.name} />
//                                                     </div>
//                                                 </div>
//                                                 <div>
//                                                     <div className="font-black text-slate-800 capitalize">{user.name}</div>
//                                                     <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
//                                                         <FaIdBadge className="text-emerald-500" /> ID: {user._id.substring(0, 8)}...
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </td>
//                                         <td>
//                                             <div className="flex flex-col gap-1">
//                                                 <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
//                                                     <FaEnvelope className="text-emerald-600" /> {user.email}
//                                                 </div>
//                                                 <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
//                                                     <FaPhone className="text-emerald-500" /> {user.phone || 'No Phone'}
//                                                 </div>
//                                                 <div className={`badge badge-sm font-black border-none py-2 px-3 ${
//                                                     user.status === 'Verified' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
//                                                 }`}>
//                                                     {user.status || 'Verified'}
//                                                 </div>
//                                             </div>
//                                         </td>
//                                         <td>
//                                             <span className={`px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider ${
//                                                 user.role === 'admin' ? 'bg-emerald-600 text-white shadow-md' :
//                                                 user.role === 'tutor' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
//                                             }`}>
//                                                 {user.role}
//                                             </span>
//                                         </td>
//                                         <td>
//                                             <div className="flex justify-center items-center gap-2">
//                                                 {/* Role Switcher */}
//                                                 <div className="dropdown dropdown-left">
//                                                     <label tabIndex={0} className="btn btn-sm btn-ghost text-emerald-600 hover:bg-emerald-100 rounded-xl transition-colors">
//                                                         <FaUserShield size={18} />
//                                                     </label>
//                                                     <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-white rounded-2xl w-40 border border-emerald-50 font-bold text-xs">
//                                                         <li className="hover:text-emerald-600"><button onClick={() => handleRoleChange(user, 'admin')}>Set Admin</button></li>
//                                                         <li className="hover:text-emerald-600"><button onClick={() => handleRoleChange(user, 'tutor')}>Set Tutor</button></li>
//                                                         <li className="hover:text-emerald-600"><button onClick={() => handleRoleChange(user, 'student')}>Set Student</button></li>
//                                                     </ul>
//                                                 </div>

//                                                 {/* Edit Action */}
//                                                 <button 
//                                                     onClick={() => handleEditUser(user)} 
//                                                     className="btn btn-sm btn-ghost text-emerald-600 hover:bg-emerald-100 rounded-xl transition-colors"
//                                                     title="Edit User"
//                                                 >
//                                                     <FaUserEdit size={18} />
//                                                 </button>

//                                                 {/* Delete Action */}
//                                                 <button 
//                                                     onClick={() => handleDeleteUser(user._id)} 
//                                                     className="btn btn-sm btn-ghost text-red-500 hover:bg-red-50 rounded-xl transition-colors"
//                                                     title="Delete User"
//                                                 >
//                                                     <FaTrashAlt size={16} />
//                                                 </button>
//                                             </div>
//                                         </td>
//                                     </motion.tr>
//                                 ))}
//                             </AnimatePresence>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default UserManagement;


import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrashAlt, FaUserEdit, FaUserShield, FaEnvelope, FaIdBadge, FaPhone } from 'react-icons/fa';

// 🔥 Backend URL from environment
const backendUrl = import.meta.env.VITE_API_URL;

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch(`${backendUrl}/users`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setUsers(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(err => { 
                console.error(err); 
                setLoading(false); 
            });
    };

    // --- 1. Update User Profile Logic ---
    const handleEditUser = (user) => {
        Swal.fire({
            title: '<span class="text-xl font-bold text-emerald-600">Update User Information</span>',
            html:
                `<div class="flex flex-col gap-3 text-left">
                    <label class="text-xs font-bold text-slate-500 ml-1">Full Name</label>
                    <input id="swal-name" class="swal2-input !m-0 !w-full focus:border-emerald-500" placeholder="Name" value="${user.name}">
                    
                    <label class="text-xs font-bold text-slate-500 ml-1">Phone Number</label>
                    <input id="swal-phone" class="swal2-input !m-0 !w-full focus:border-emerald-500" placeholder="Phone" value="${user.phone || ''}">
                    
                    <label class="text-xs font-bold text-slate-500 ml-1">Profile Image URL</label>
                    <input id="swal-image" class="swal2-input !m-0 !w-full focus:border-emerald-500" placeholder="Photo URL" value="${user.image || ''}">
                    
                    <label class="text-xs font-bold text-slate-500 ml-1">Verification Status</label>
                    <select id="swal-status" class="swal2-input !m-0 !w-full focus:border-emerald-500">
                        <option value="Verified" ${user.status === 'Verified' ? 'selected' : ''}>Verified</option>
                        <option value="Pending" ${user.status === 'Pending' ? 'selected' : ''}>Pending</option>
                        <option value="Blocked" ${user.status === 'Blocked' ? 'selected' : ''}>Blocked</option>
                    </select>
                </div>`,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Save Changes',
            confirmButtonColor: '#059669', // emerald-600
            cancelButtonColor: '#64748b',
            preConfirm: () => {
                return {
                    name: document.getElementById('swal-name').value,
                    phone: document.getElementById('swal-phone').value,
                    image: document.getElementById('swal-image').value,
                    status: document.getElementById('swal-status').value
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${backendUrl}/users/update/${user._id}`, {
                    method: 'PATCH',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(result.value),
                    credentials: 'include'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        fetchUsers();
                        Swal.fire({
                            title: 'Updated!',
                            text: 'User information has been saved.',
                            icon: 'success',
                            confirmButtonColor: '#059669'
                        });
                    }
                });
            }
        });
    };

    // --- 2. Role Change Logic ---
    const handleRoleChange = (user, newRole) => {
        Swal.fire({
            title: `Make ${user.name} an ${newRole}?`,
            text: "This will change their access level immediately.",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#059669', // emerald-600
            confirmButtonText: 'Yes, Update Role'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${backendUrl}/users/role/${user._id}`, {
                    method: 'PATCH',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ role: newRole }),
                    credentials: 'include'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        fetchUsers();
                        Swal.fire({
                            title: 'Success!',
                            text: 'Role updated successfully.',
                            icon: 'success',
                            confirmButtonColor: '#059669'
                        });
                    }
                });
            }
        });
    };

    // --- 3. Delete User Logic ---
    const handleDeleteUser = (id) => {
        Swal.fire({
            title: 'Delete Account?',
            text: "This action is permanent and cannot be undone!",
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            confirmButtonText: 'Delete Permanently'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${backendUrl}/users/${id}`, { method: 'DELETE', credentials: 'include' })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setUsers(users.filter(u => u._id !== id));
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'User has been removed.',
                            icon: 'success',
                            confirmButtonColor: '#059669'
                        });
                    }
                });
            }
        });
    };

    if (loading) return (
        <div className="p-20 text-center">
            <span className="loading loading-spinner loading-lg text-emerald-600"></span>
            <p className="mt-2 text-emerald-600 font-bold">Loading Users...</p>
        </div>
    );

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-2">
                <div>
                    <h2 className="text-3xl font-black text-slate-800 tracking-tight">User Management</h2>
                    <p className="text-slate-500 font-medium">Monitor and manage all system participants</p>
                </div>
                <div className="bg-emerald-50 text-emerald-600 px-6 py-2 rounded-2xl font-bold border border-emerald-100 shadow-sm">
                    Total: {users.length} Users
                </div>
            </div>

            {/* Main Table Card */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full border-none">
                        <thead className="bg-emerald-600 text-white border-none">
                            <tr className="h-16 text-xs uppercase tracking-[0.1em]">
                                <th className="pl-8">User Profile</th>
                                <th>Contact & Status</th>
                                <th>Role</th>
                                <th className="text-center">Permissions & Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <AnimatePresence>
                                {users.map((user) => (
                                    <motion.tr 
                                        key={user._id}
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="hover:bg-emerald-50/30 transition-all border-slate-50"
                                    >
                                        <td className="pl-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="avatar">
                                                    <div className="w-14 h-14 rounded-2xl ring ring-emerald-100 ring-offset-2 overflow-hidden">
                                                        <img src={user.image || `https://ui-avatars.com/api/?name=${user.name}&background=10b981&color=fff`} alt={user.name} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-black text-slate-800 capitalize">{user.name}</div>
                                                    <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                                                        <FaIdBadge className="text-emerald-500" /> ID: {user._id.substring(0, 8)}...
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                                                    <FaEnvelope className="text-emerald-600" /> {user.email}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                                                    <FaPhone className="text-emerald-500" /> {user.phone || 'No Phone'}
                                                </div>
                                                <div className={`badge badge-sm font-black border-none py-2 px-3 ${
                                                    user.status === 'Verified' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                                                }`}>
                                                    {user.status || 'Verified'}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider ${
                                                user.role === 'admin' ? 'bg-emerald-600 text-white shadow-md' :
                                                user.role === 'tutor' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                                            }`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="flex justify-center items-center gap-2">
                                                {/* Role Switcher */}
                                                <div className="dropdown dropdown-left">
                                                    <label tabIndex={0} className="btn btn-sm btn-ghost text-emerald-600 hover:bg-emerald-100 rounded-xl transition-colors">
                                                        <FaUserShield size={18} />
                                                    </label>
                                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-white rounded-2xl w-40 border border-emerald-50 font-bold text-xs">
                                                        <li className="hover:text-emerald-600"><button onClick={() => handleRoleChange(user, 'admin')}>Set Admin</button></li>
                                                        <li className="hover:text-emerald-600"><button onClick={() => handleRoleChange(user, 'tutor')}>Set Tutor</button></li>
                                                        <li className="hover:text-emerald-600"><button onClick={() => handleRoleChange(user, 'student')}>Set Student</button></li>
                                                    </ul>
                                                </div>

                                                {/* Edit Action */}
                                                <button 
                                                    onClick={() => handleEditUser(user)} 
                                                    className="btn btn-sm btn-ghost text-emerald-600 hover:bg-emerald-100 rounded-xl transition-colors"
                                                    title="Edit User"
                                                >
                                                    <FaUserEdit size={18} />
                                                </button>

                                                {/* Delete Action */}
                                                <button 
                                                    onClick={() => handleDeleteUser(user._id)} 
                                                    className="btn btn-sm btn-ghost text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                                                    title="Delete User"
                                                >
                                                    <FaTrashAlt size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );
};

export default UserManagement;

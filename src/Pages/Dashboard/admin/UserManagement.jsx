// // import React from 'react'

// // const UserManagement = () => {
// //   return (
// //     <div>
// //       <h1>Alhamdulliah admin users</h1>
// //     </div>
// //   )
// // }

// // export default UserManagement


// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';

// const UserManagement = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = () => {
//         // Backend theke users anar somoy oboshoy credentials pathate hobe
//         fetch('http://localhost:5000/users', {
//             method: 'GET',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             // 🔥 GURUTTOPURNO: Cookie (Token) pathanor jonno
//             credentials: 'include' 
//         })
//         .then(res => {
//             if (!res.ok) throw new Error('Unauthorized/Forbidden');
//             return res.json();
//         })
//         .then(data => {
//             setUsers(Array.isArray(data) ? data : []);
//             setLoading(false);
//         })
//         .catch(err => {
//             console.error("Fetch Error:", err);
//             setLoading(false);
//         });
//     };

//     const handleMakeAdmin = (user) => {
//         fetch(`http://localhost:5000/users/role/${user._id}`, {
//             method: 'PATCH',
//             headers: { 'content-type': 'application/json' },
//             body: JSON.stringify({ role: 'admin' }),
//             credentials: 'include' // 🔥 Token eikhaneo lagbe
//         })
//         .then(res => res.json())
//         .then(data => {
//             if (data.modifiedCount > 0) {
//                 fetchUsers();
//                 Swal.fire('Success!', `${user.name} is now an Admin`, 'success');
//             }
//         });
//     };

//     if (loading) return <div className="p-10 text-center font-bold">Loading Users...</div>;

//     return (
//         <div className="p-8">
//             <h2 className="text-3xl font-bold italic text-emerald-700 mb-6">User Management</h2>
            
//             {users.length === 0 ? (
//                 <div className="alert alert-warning">
//                     No users found or Access Denied. (Check if you are Admin)
//                 </div>
//             ) : (
//                 <div className="overflow-x-auto shadow-xl rounded-lg">
//                     <table className="table w-full">
//                         <thead className="bg-emerald-600 text-white">
//                             <tr>
//                                 <th>#</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Role</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users.map((user, index) => (
//                                 <tr key={user._id}>
//                                     <th>{index + 1}</th>
//                                     <td>{user.name}</td>
//                                     <td>{user.email}</td>
//                                     <td className="uppercase font-bold text-xs">{user.role}</td>
//                                     <td>
//                                         {user.role !== 'admin' && (
//                                             <button 
//                                                 onClick={() => handleMakeAdmin(user)}
//                                                 className="btn btn-xs btn-success text-white"
//                                             >
//                                                 Make Admin
//                                             </button>
//                                         )}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UserManagement;


import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch('http://localhost:5000/users', {
            credentials: 'include' 
        })
        .then(res => res.json())
        .then(data => {
            setUsers(Array.isArray(data) ? data : []);
            setLoading(false);
        })
        .catch(err => {
            console.error("Fetch Error:", err);
            setLoading(false);
        });
    };

    // Role Change Function (Make Admin or Remove Admin)
    const handleRoleUpdate = (user, newRole) => {
        const actionText = newRole === 'admin' ? "Make Admin" : "Remove Admin Rights";
        
        // 🔥 SweetAlert2 Modal
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to ${actionText} for ${user.name}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#10b981', // Emerald 500
            cancelButtonColor: '#ef4444', // Red 500
            confirmButtonText: 'Yes, do it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Fetch call to backend
                fetch(`http://localhost:5000/users/role/${user._id}`, {
                    method: 'PATCH',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ role: newRole }),
                    credentials: 'include'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        fetchUsers(); // Refresh Table
                        Swal.fire(
                            'Updated!',
                            `${user.name} is now a ${newRole}.`,
                            'success'
                        );
                    }
                });
            }
        });
    };

    if (loading) return <div className="p-10 text-center font-bold text-emerald-600">Loading Users...</div>;

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold italic text-emerald-700 mb-6 border-b-2 border-emerald-100 pb-2">
                User Management (Admin Panel)
            </h2>
            
            <div className="overflow-x-auto shadow-2xl rounded-2xl border border-emerald-50">
                <table className="table w-full">
                    <thead className="bg-emerald-600 text-white">
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Email Address</th>
                            <th>Status/Role</th>
                            <th className="text-center">Manage Permissions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className="hover:bg-emerald-50 transition-colors">
                                <th>{index + 1}</th>
                                <td className="font-medium text-gray-700">{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <span className={`badge badge-sm font-bold ${
                                        user.role === 'admin' ? 'badge-secondary' : 'badge-ghost'
                                    }`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="flex gap-2 justify-center">
                                    {user.role !== 'admin' ? (
                                        <button 
                                            onClick={() => handleRoleUpdate(user, 'admin')}
                                            className="btn btn-xs btn-success text-white"
                                        >
                                            Promote to Admin
                                        </button>
                                    ) : (
                                        <button 
                                            onClick={() => handleRoleUpdate(user, 'student')}
                                            className="btn btn-xs btn-error btn-outline"
                                        >
                                            Remove Admin
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
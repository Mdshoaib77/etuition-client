// // import React from 'react'

// // const PostTuition = () => {
// //   return (
// //     <div>
// //       <h1>Alhamdulliah</h1>
// //     </div>
// //   )
// // }

// // export default PostTuition


// // import React from 'react';
// // import { useAuth } from '../../../Hooks/useAuth'; // Apnar auth context onujayi change hote pare
// // import Swal from 'sweetalert2';

// // const PostTuition = () => {
// //     const { user } = useAuth(); 

// //     const handlePostTuition = async (e) => {
// //         e.preventDefault();
// //         const form = e.target;
        
// //         const tuitionData = {
// //             title: form.title.value,
// //             subject: form.subject.value,
// //             class: form.className.value,
// //             salary: form.salary.value,
// //             location: form.location.value,
// //             description: form.description.value,
// //             studentName: user?.displayName,
// //             studentEmail: user?.email,
// //             studentImage: user?.photoURL,
// //         };

// //         const response = await fetch('http://localhost:5000/tuitions', {
// //             method: 'POST',
// //             headers: { 'content-type': 'application/json' },
// //             body: JSON.stringify(tuitionData)
// //         });
        
// //         if (response.ok) {
// //             Swal.fire("Success!", "Tuition posted for Admin approval", "success");
// //             form.reset();
// //         }
// //     };

// //     return (
// //         <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
// //             <h2 className="text-2xl font-bold mb-6 text-emerald-600">Post New Tuition</h2>
// //             <form onSubmit={handlePostTuition} className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <input name="title" type="text" placeholder="Tuition Title" className="input input-bordered w-full" required />
// //                 <input name="subject" type="text" placeholder="Subject" className="input input-bordered w-full" required />
// //                 <input name="className" type="text" placeholder="Class (e.g. Class 10)" className="input input-bordered w-full" required />
// //                 <input name="salary" type="number" placeholder="Salary/Budget" className="input input-bordered w-full" required />
// //                 <input name="location" type="text" placeholder="Location" className="input input-bordered w-full" required />
// //                 <textarea name="description" className="textarea textarea-bordered md:col-span-2" placeholder="Tell us more about your requirements..."></textarea>
// //                 <button type="submit" className="btn bg-emerald-600 text-white md:col-span-2 border-none">Post Tuition</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default PostTuition;

// // import React from 'react';
// // import useAuth from '../../../Hooks/useAuth'; // { useAuth } er bodole sudhu useAuth hobe
// // import Swal from 'sweetalert2';

// // const PostTuition = () => {
// //     // Custom hook theke user data anlam
// //     const { user } = useAuth(); 

// //     const handlePostTuition = async (e) => {
// //         e.preventDefault();
// //         const form = e.target;
        
// //         const tuitionData = {
// //             title: form.title.value,
// //             subject: form.subject.value,
// //             class: form.className.value,
// //             salary: form.salary.value,
// //             location: form.location.value,
// //             description: form.description.value,
// //             studentName: user?.displayName,
// //             studentEmail: user?.email,
// //             studentImage: user?.photoURL,
// //         };

// //         try {
// //             const response = await fetch('http://localhost:5000/tuitions', {
// //                 method: 'POST',
// //                 headers: { 
// //                     'content-type': 'application/json' 
// //                 },
// //                 // JWT verifyToken cookie check korle eita must lagbe
// //                 credentials: "include", 
// //                 body: JSON.stringify(tuitionData)
// //             });
            
// //             const data = await response.json();

// //             if (data.insertedId) {
// //                 Swal.fire({
// //                     title: "Success!",
// //                     text: "Tuition posted for Admin approval",
// //                     icon: "success",
// //                     confirmButtonColor: "#059669"
// //                 });
// //                 form.reset();
// //             }
// //         } catch (error) {
// //             console.error("Post error:", error);
// //             Swal.fire("Error", "Something went wrong. Check console.", "error");
// //         }
// //     };

// //     return (
// //         <div className="bg-white p-8 rounded-xl shadow-lg border border-emerald-50 max-w-2xl mx-auto mt-10">
// //             <h2 className="text-3xl font-extrabold mb-6 text-emerald-700 text-center">Post New Tuition</h2>
// //             <form onSubmit={handlePostTuition} className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                 <div className="form-control">
// //                     <label className="label font-semibold">Tuition Title</label>
// //                     <input name="title" type="text" placeholder="e.g. Need Math Tutor" className="input input-bordered focus:border-emerald-500 w-full" required />
// //                 </div>
// //                 <div className="form-control">
// //                     <label className="label font-semibold">Subject</label>
// //                     <input name="subject" type="text" placeholder="e.g. Physics" className="input input-bordered focus:border-emerald-500 w-full" required />
// //                 </div>
// //                 <div className="form-control">
// //                     <label className="label font-semibold">Class</label>
// //                     <input name="className" type="text" placeholder="e.g. Class 10" className="input input-bordered focus:border-emerald-500 w-full" required />
// //                 </div>
// //                 <div className="form-control">
// //                     <label className="label font-semibold">Salary (BDT)</label>
// //                     <input name="salary" type="number" placeholder="Budget" className="input input-bordered focus:border-emerald-500 w-full" required />
// //                 </div>
// //                 <div className="form-control md:col-span-2">
// //                     <label className="label font-semibold">Location</label>
// //                     <input name="location" type="text" placeholder="e.g. Mirpur, Dhaka" className="input input-bordered focus:border-emerald-500 w-full" required />
// //                 </div>
// //                 <div className="form-control md:col-span-2">
// //                     <label className="label font-semibold">Description</label>
// //                     <textarea name="description" className="textarea textarea-bordered focus:border-emerald-500 h-24" placeholder="Mention details like schedule or qualifications..."></textarea>
// //                 </div>
// //                 <button type="submit" className="btn bg-emerald-600 hover:bg-emerald-700 text-white md:col-span-2 border-none transition-all duration-300">
// //                     Submit Tuition Post
// //                 </button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default PostTuition;


// import React from 'react';
// import useAuth from '../../../Hooks/useAuth';
// import Swal from 'sweetalert2';

// const PostTuition = () => {
//     const { user } = useAuth(); 

//     const handlePostTuition = async (e) => {
//         e.preventDefault();
//         const form = e.target;
        
//         const tuitionData = {
//             title: form.title.value,
//             subject: form.subject.value,
//             className: form.className.value,
//             salary: form.salary.value,
//             location: form.location.value,
//             daysPerWeek: form.daysPerWeek.value,
//             teachingTime: form.teachingTime.value,
//             studentGender: form.studentGender.value,
//             curriculum: form.curriculum.value,
//             description: form.description.value,
//             studentName: user?.displayName,
//             studentEmail: user?.email,
//             studentImage: user?.photoURL,
//         };

//         try {
//             const response = await fetch('http://localhost:5000/tuitions', {
//                 method: 'POST',
//                 headers: { 'content-type': 'application/json' },
//                 credentials: "include", 
//                 body: JSON.stringify(tuitionData)
//             });
            
//             const data = await response.json();

//             if (data.insertedId) {
//                 Swal.fire({
//                     title: "Success!",
//                     text: "Tuition posted for Admin approval",
//                     icon: "success",
//                     confirmButtonColor: "#059669"
//                 });
//                 form.reset();
//             }
//         } catch (error) {
//             console.error("Post error:", error);
//             Swal.fire("Error", "Something went wrong.", "error");
//         }
//     };

//     return (
//         <div className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-50 max-w-4xl mx-auto my-10">
//             <div className="text-center mb-10">
//                 <h2 className="text-4xl font-black text-emerald-700">Post New Tuition</h2>
//                 <p className="text-gray-500 mt-2 font-medium">Provide detailed info to find the best tutor</p>
//             </div>
            
//             <form onSubmit={handlePostTuition} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Title */}
//                 <div className="form-control md:col-span-2">
//                     <label className="label font-bold text-gray-700">Tuition Title</label>
//                     <input name="title" type="text" placeholder="e.g. Need Experienced Math Tutor" className="input input-bordered focus:border-emerald-500 w-full" required />
//                 </div>

//                 {/* Subject & Class */}
//                 <div className="form-control">
//                     <label className="label font-bold text-gray-700">Subject</label>
//                     <input name="subject" type="text" placeholder="Physics, Math etc." className="input input-bordered focus:border-emerald-500 w-full" required />
//                 </div>
//                 <div className="form-control">
//                     <label className="label font-bold text-gray-700">Class/Grade</label>
//                     <input name="className" type="text" placeholder="e.g. Class 10 / HSC" className="input input-bordered focus:border-emerald-500 w-full" required />
//                 </div>

//                 {/* Salary & Days */}
//                 <div className="form-control">
//                     <label className="label font-bold text-gray-700">Salary (Monthly BDT)</label>
//                     <input name="salary" type="number" placeholder="Budget Amount" className="input input-bordered focus:border-emerald-500 w-full" required />
//                 </div>
//                 <div className="form-control">
//                     <label className="label font-bold text-gray-700">Days Per Week</label>
//                     <select name="daysPerWeek" className="select select-bordered focus:border-emerald-500 w-full">
//                         <option value="3 Days">3 Days</option>
//                         <option value="4 Days">4 Days</option>
//                         <option value="5 Days">5 Days</option>
//                         <option value="6 Days">6 Days</option>
//                     </select>
//                 </div>

//                 {/* Time & Gender */}
//                 <div className="form-control">
//                     <label className="label font-bold text-gray-700">Teaching Time</label>
//                     <input name="teachingTime" type="text" placeholder="e.g. 5:00 PM / Evening" className="input input-bordered focus:border-emerald-500 w-full" required />
//                 </div>
//                 <div className="form-control">
//                     <label className="label font-bold text-gray-700">Student Gender</label>
//                     <select name="studentGender" className="select select-bordered focus:border-emerald-500 w-full">
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                         <option value="Other">Both/Other</option>
//                     </select>
//                 </div>

//                 {/* Curriculum & Location */}
//                 <div className="form-control">
//                     <label className="label font-bold text-gray-700">Curriculum/Version</label>
//                     <input name="curriculum" type="text" placeholder="e.g. Bangla Medium / English Version" className="input input-bordered focus:border-emerald-500 w-full" required />
//                 </div>
//                 <div className="form-control">
//                     <label className="label font-bold text-gray-700">Detailed Location</label>
//                     <input name="location" type="text" placeholder="e.g. Road-4, Mirpur-10, Dhaka" className="input input-bordered focus:border-emerald-500 w-full" required />
//                 </div>

//                 {/* Description */}
//                 <div className="form-control md:col-span-2">
//                     <label className="label font-bold text-gray-700">Additional Description</label>
//                     <textarea name="description" className="textarea textarea-bordered focus:border-emerald-500 h-32" placeholder="Mention any specific requirements or preferences..."></textarea>
//                 </div>

//                 <button type="submit" className="btn bg-emerald-600 hover:bg-emerald-700 text-white md:col-span-2 border-none py-4 text-lg font-bold transition-all transform hover:scale-[1.01]">
//                     Submit Tuition Post
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default PostTuition;


import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const PostTuition = () => {
    const { user } = useAuth(); 

    const handlePostTuition = async (e) => {
        e.preventDefault();
        const form = e.target;
        
        const tuitionData = {
            title: form.title.value,
            subject: form.subject.value,
            className: form.className.value,
            salary: form.salary.value,
            location: form.location.value,
            daysPerWeek: form.daysPerWeek.value,
            teachingTime: form.teachingTime.value,
            studentGender: form.studentGender.value,
            curriculum: form.curriculum.value,
            description: form.description.value,
            studentName: user?.displayName,
            studentEmail: user?.email,
            studentImage: user?.photoURL,
        };

        try {
            const response = await fetch('http://localhost:5000/tuitions', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                credentials: "include", 
                body: JSON.stringify(tuitionData)
            });
            
            const data = await response.json();

            if (data.insertedId) {
                Swal.fire({
                    title: "Alhamdulliah!",
                    text: "Tuition posted for Admin approval",
                    icon: "success",
                    confirmButtonColor: "#059669"
                });
                form.reset();
            }
        } catch (error) {
            console.error("Post error:", error);
            Swal.fire("Error", "Something went wrong.", "error");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full space-y-8 bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-emerald-100 transition-all">
                
                {/* Header Section */}
                <div className="text-center">
                    <div className="inline-block p-3 rounded-full bg-emerald-50 mb-4">
                        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-800 tracking-tight">Post New Tuition</h2>
                    <p className="mt-2 text-sm sm:text-base text-gray-500 font-medium">Connect with the best tutors in the city</p>
                    <div className="flex justify-center mt-3">
                        <div className="h-1.5 w-16 bg-emerald-500 rounded-full"></div>
                    </div>
                </div>
                
                <form onSubmit={handlePostTuition} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        
                        {/* Title - Full Width on all screens */}
                        <div className="form-control md:col-span-2">
                            <label className="label font-bold text-gray-700">Tuition Title</label>
                            <input name="title" type="text" placeholder="e.g. Need Experienced Math Tutor" className="input input-bordered focus:ring-2 focus:ring-emerald-500 border-gray-200 w-full transition-all" required />
                        </div>

                        {/* Subject */}
                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Subject</label>
                            <input name="subject" type="text" placeholder="Physics, Math etc." className="input input-bordered focus:ring-2 focus:ring-emerald-500 border-gray-200 w-full transition-all" required />
                        </div>

                        {/* Class */}
                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Class/Grade</label>
                            <input name="className" type="text" placeholder="e.g. Class 10 / HSC" className="input input-bordered focus:ring-2 focus:ring-emerald-500 border-gray-200 w-full transition-all" required />
                        </div>

                        {/* Salary */}
                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Salary (Monthly BDT)</label>
                            <input name="salary" type="number" placeholder="Budget Amount" className="input input-bordered focus:ring-2 focus:ring-emerald-500 border-gray-200 w-full transition-all" required />
                        </div>

                        {/* Days */}
                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Days Per Week</label>
                            <select name="daysPerWeek" className="select select-bordered focus:ring-2 focus:ring-emerald-500 border-gray-200 w-full transition-all font-medium">
                                <option value="3 Days">3 Days</option>
                                <option value="4 Days">4 Days</option>
                                <option value="5 Days">5 Days</option>
                                <option value="6 Days">6 Days</option>
                            </select>
                        </div>

                        {/* Time */}
                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Teaching Time</label>
                            <input name="teachingTime" type="text" placeholder="e.g. 5:00 PM / Evening" className="input input-bordered focus:ring-2 focus:ring-emerald-500 border-gray-200 w-full transition-all" required />
                        </div>

                        {/* Gender */}
                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Student Gender</label>
                            <select name="studentGender" className="select select-bordered focus:ring-2 focus:ring-emerald-500 border-gray-200 w-full transition-all font-medium">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Both/Other</option>
                            </select>
                        </div>

                        {/* Curriculum */}
                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Curriculum/Version</label>
                            <input name="curriculum" type="text" placeholder="e.g. Bangla Medium / English Version" className="input input-bordered focus:ring-2 focus:ring-emerald-500 border-gray-200 w-full transition-all" required />
                        </div>

                        {/* Location */}
                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Detailed Location</label>
                            <input name="location" type="text" placeholder="e.g. Road-4, Mirpur-10, Dhaka" className="input input-bordered focus:ring-2 focus:ring-emerald-500 border-gray-200 w-full transition-all" required />
                        </div>

                        {/* Description - Full Width */}
                        {/* <div className="form-control md:col-span-2">
                            <label className="label font-bold text-gray-700">Additional Description:    </label>
                            <textarea name="description" className="textarea textarea-bordered focus:ring-2 focus:ring-emerald-500 border-gray-200 h-32 text-base transition-all" placeholder="Mention any specific requirements..."></textarea>
                        </div> */}
                        <div className="form-control md:col-span-2 space-y-1">
    <label className="label py-0">
        <span className="label-text font-bold text-gray-700 text-sm">Additional Description:</span>
    </label>
    <textarea 
        name="description" 
        className="textarea textarea-bordered focus:outline-none focus:ring-2 focus:ring-emerald-500/50 border-gray-300 h-24 text-sm w-full leading-tight transition-all rounded-lg" 
        placeholder="Mention any specific requirements...">
    </textarea>
</div>
                    </div>

                    {/* Submit Button Section */}
                    <div className="pt-4">
                        <button type="submit" className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-black rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all transform hover:scale-[1.01] active:scale-95 shadow-xl shadow-emerald-200">
                            Submit Tuition Post
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-4 font-medium italic">
                            By posting, you agree to our community guidelines.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostTuition;
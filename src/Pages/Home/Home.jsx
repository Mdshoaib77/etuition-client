// // // // // // // // // // // import React from 'react'

// // // // // // // // // // // const Home = () => {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div>
// // // // // // // // // // //       <h1>Alhamdulliah this is home.</h1>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   )
// // // // // // // // // // // }

// // // // // // // // // // // export default Home


// // // // // // // // // // import React from "react";

// // // // // // // // // // const Home = () => {
// // // // // // // // // //   return (
// // // // // // // // // //     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      
// // // // // // // // // //       <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
// // // // // // // // // //         Alhamdulillah 🤍
// // // // // // // // // //       </h1>

// // // // // // // // // //       <p className="text-lg md:text-xl text-center max-w-2xl mb-6">
// // // // // // // // // //         Welcome to our website. We are building something meaningful, useful,
// // // // // // // // // //         and impactful for everyone. Stay connected and explore more.
// // // // // // // // // //       </p>

// // // // // // // // // //       <div className="flex gap-4">
// // // // // // // // // //         <button className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition">
// // // // // // // // // //           Get Started
// // // // // // // // // //         </button>

// // // // // // // // // //         <button className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-purple-600 transition">
// // // // // // // // // //           Learn More
// // // // // // // // // //         </button>
// // // // // // // // // //       </div>

// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Home;


// // // // // // // // // import { motion } from "framer-motion";

// // // // // // // // // const Home = () => {
// // // // // // // // //   return (
// // // // // // // // //     <div className="overflow-hidden">
// // // // // // // // //       {/* Hero Section */}
// // // // // // // // //       <section className="relative min-h-[90vh] flex items-center bg-[#F9FBFF]">
// // // // // // // // //         {/* Animated Background Blobs */}
// // // // // // // // //         <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
// // // // // // // // //         <div className="absolute bottom-0 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

// // // // // // // // //         <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
// // // // // // // // //           <motion.div 
// // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // //             className="space-y-8"
// // // // // // // // //           >
// // // // // // // // //             <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
// // // // // // // // //               <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
// // // // // // // // //               <span className="text-xs font-bold uppercase tracking-wider text-gray-500">The Ultimate Learning Hub</span>
// // // // // // // // //             </div>

// // // // // // // // //             <h1 className="text-5xl lg:text-7xl font-black text-neutral leading-[1.1] tracking-tight">
// // // // // // // // //               Empower Your <span className="text-primary">Future</span> with Top Tutors
// // // // // // // // //             </h1>

// // // // // // // // //             <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
// // // // // // // // //               Connecting brilliant minds across Bangladesh. Whether you're a student seeking knowledge or a tutor sharing expertise, eTuitionBD is your perfect partner.
// // // // // // // // //             </p>

// // // // // // // // //             <div className="flex flex-col sm:flex-row gap-4 pt-4">
// // // // // // // // //               <button className="btn btn-primary btn-lg rounded-2xl px-10 font-bold text-white shadow-xl shadow-primary/20">
// // // // // // // // //                 Find a Tutor
// // // // // // // // //               </button>
// // // // // // // // //               <button className="btn btn-outline btn-lg rounded-2xl px-10 font-bold hover:bg-neutral">
// // // // // // // // //                 Post a Tuition
// // // // // // // // //               </button>
// // // // // // // // //             </div>

// // // // // // // // //             {/* Stats */}
// // // // // // // // //             <div className="flex gap-10 pt-10 border-t border-gray-200">
// // // // // // // // //               <div>
// // // // // // // // //                 <h3 className="text-3xl font-black text-neutral">12K+</h3>
// // // // // // // // //                 <p className="text-sm font-medium text-gray-400">Happy Students</p>
// // // // // // // // //               </div>
// // // // // // // // //               <div>
// // // // // // // // //                 <h3 className="text-3xl font-black text-neutral">500+</h3>
// // // // // // // // //                 <p className="text-sm font-medium text-gray-400">Verified Tutors</p>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </motion.div>

// // // // // // // // //           <motion.div 
// // // // // // // // //             initial={{ opacity: 0, x: 50 }}
// // // // // // // // //             animate={{ opacity: 1, x: 0 }}
// // // // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // //             className="relative flex justify-center lg:justify-end"
// // // // // // // // //           >
// // // // // // // // //             {/* Main Image Wrapper */}
// // // // // // // // //             <div className="relative w-full max-w-[500px]">
// // // // // // // // //               <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[3rem] rotate-6 scale-95 opacity-20"></div>
// // // // // // // // //               <img 
// // // // // // // // //                 src="https://img.freepik.com/free-photo/smiling-young-female-student-holding-book-looking-camera_23-2148203976.jpg" 
// // // // // // // // //                 alt="Student Success" 
// // // // // // // // //                 className="relative rounded-[3rem] shadow-2xl z-10 w-full object-cover"
// // // // // // // // //               />
              
// // // // // // // // //               {/* Floating Review Card */}
// // // // // // // // //               <motion.div 
// // // // // // // // //                 animate={{ y: [0, 15, 0] }}
// // // // // // // // //                 transition={{ duration: 3, repeat: Infinity }}
// // // // // // // // //                 className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden md:block border border-gray-50"
// // // // // // // // //               >
// // // // // // // // //                 <div className="flex items-center gap-4">
// // // // // // // // //                   <div className="avatar-group -space-x-4 rtl:space-x-reverse">
// // // // // // // // //                     <div className="avatar w-8"><img src="https://i.pravatar.cc/100?img=1" /></div>
// // // // // // // // //                     <div className="avatar w-8"><img src="https://i.pravatar.cc/100?img=2" /></div>
// // // // // // // // //                     <div className="avatar w-8"><img src="https://i.pravatar.cc/100?img=3" /></div>
// // // // // // // // //                   </div>
// // // // // // // // //                   <div>
// // // // // // // // //                     <p className="text-sm font-black">4.9/5 Rating</p>
// // // // // // // // //                     <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Verified Feedback</p>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </motion.div>
// // // // // // // // //             </div>
// // // // // // // // //           </motion.div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Home;


// // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // import { motion } from 'framer-motion';
// // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // import { FaUserGraduation, FaSearch, FaCheckCircle, FaRocket } from 'react-icons/fa';

// // // // // // // // const Home = () => {
// // // // // // // //     const [latestTuitions, setLatestTuitions] = useState([]);
// // // // // // // //     const [latestTutors, setLatestTutors] = useState([]);

// // // // // // // //     // Note: Replace with your actual API endpoints
// // // // // // // //     useEffect(() => {
// // // // // // // //         fetch('https://your-server-url.com/latest-tuitions')
// // // // // // // //             .then(res => res.json())
// // // // // // // //             .then(data => setLatestTuitions(data.slice(0, 6)));

// // // // // // // //         fetch('https://your-server-url.com/latest-tutors')
// // // // // // // //             .then(res => res.json())
// // // // // // // //             .then(data => setLatestTutors(data.slice(0, 6)));
// // // // // // // //     }, []);

// // // // // // // //     return (
// // // // // // // //         <div className="overflow-x-hidden">
// // // // // // // //             {/* 1. Hero Section with Framer Motion */}
// // // // // // // //             <section className="hero min-h-[80vh] bg-base-200 px-4">
// // // // // // // //                 <div className="hero-content flex-col lg:flex-row-reverse">
// // // // // // // //                     <motion.img 
// // // // // // // //                         initial={{ x: 100, opacity: 0 }}
// // // // // // // //                         animate={{ x: 0, opacity: 1 }}
// // // // // // // //                         transition={{ duration: 0.8 }}
// // // // // // // //                         src="https://img.freepik.com/free-vector/online-tutoring-concept_52683-37332.jpg" 
// // // // // // // //                         className="max-w-sm md:max-w-md rounded-lg shadow-2xl" 
// // // // // // // //                         alt="Hero"
// // // // // // // //                     />
// // // // // // // //                     <motion.div
// // // // // // // //                         initial={{ x: -100, opacity: 0 }}
// // // // // // // //                         animate={{ x: 0, opacity: 1 }}
// // // // // // // //                         transition={{ duration: 0.8 }}
// // // // // // // //                     >
// // // // // // // //                         <h1 className="text-5xl font-bold">Unlock Your Potential with <span className="text-primary">eTuitionBd</span></h1>
// // // // // // // //                         <p className="py-6 text-lg">Connect with expert tutors or find your dream tuition. A transparent, automated, and secure platform for students and teachers.</p>
// // // // // // // //                         <div className="flex gap-4">
// // // // // // // //                             <Link to="/tuitions" className="btn btn-primary">Find Tuition</Link>
// // // // // // // //                             <Link to="/tutors" className="btn btn-outline">Find Tutors</Link>
// // // // // // // //                         </div>
// // // // // // // //                     </motion.div>
// // // // // // // //                 </div>
// // // // // // // //             </section>

// // // // // // // //             {/* 2. How the Platform Works (Visual Grid) */}
// // // // // // // //             <section className="py-20 container mx-auto px-4 text-center">
// // // // // // // //                 <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest">How It Works</h2>
// // // // // // // //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // // // // //                     <div className="card bg-base-100 shadow-xl border border-primary/10 p-6">
// // // // // // // //                         <FaUserGraduation className="text-5xl text-primary mx-auto mb-4" />
// // // // // // // //                         <h3 className="text-xl font-bold">1. Create Profile</h3>
// // // // // // // //                         <p>Register as a Student or Tutor and complete your profile setup.</p>
// // // // // // // //                     </div>
// // // // // // // //                     <div className="card bg-base-100 shadow-xl border border-primary/10 p-6">
// // // // // // // //                         <FaSearch className="text-5xl text-primary mx-auto mb-4" />
// // // // // // // //                         <h3 className="text-xl font-bold">2. Post or Apply</h3>
// // // // // // // //                         <p>Students post requirements, Tutors apply to their preferred subjects.</p>
// // // // // // // //                     </div>
// // // // // // // //                     <div className="card bg-base-100 shadow-xl border border-primary/10 p-6">
// // // // // // // //                         <FaCheckCircle className="text-5xl text-primary mx-auto mb-4" />
// // // // // // // //                         <h3 className="text-xl font-bold">3. Confirm & Start</h3>
// // // // // // // //                         <p>Review, pay securely via Stripe, and start your learning journey.</p>
// // // // // // // //                     </div>
// // // // // // // //                 </div>
// // // // // // // //             </section>

// // // // // // // //             {/* 3. Latest Tuition Posts (Dynamic) */}
// // // // // // // //             <section className="py-16 bg-base-200">
// // // // // // // //                 <div className="container mx-auto px-4">
// // // // // // // //                     <h2 className="text-3xl font-bold text-center mb-10">Latest Tuition Requests</h2>
// // // // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // //                         {latestTuitions.map((post) => (
// // // // // // // //                             <div key={post._id} className="card bg-base-100 shadow-md hover:shadow-2xl transition-all">
// // // // // // // //                                 <div className="card-body">
// // // // // // // //                                     <div className="badge badge-secondary">{post.class}</div>
// // // // // // // //                                     <h3 className="card-title text-primary">{post.subject}</h3>
// // // // // // // //                                     <p className="text-sm">📍 {post.location}</p>
// // // // // // // //                                     <p className="font-bold text-lg">Budget: ৳{post.budget}</p>
// // // // // // // //                                     <div className="card-actions justify-end">
// // // // // // // //                                         <Link to={`/tuition/${post._id}`} className="btn btn-sm btn-primary">Details</Link>
// // // // // // // //                                     </div>
// // // // // // // //                                 </div>
// // // // // // // //                             </div>
// // // // // // // //                         ))}
// // // // // // // //                     </div>
// // // // // // // //                 </div>
// // // // // // // //             </section>

// // // // // // // //             {/* 4. Why Choose Us Section */}
// // // // // // // //             <section className="py-20 container mx-auto px-4">
// // // // // // // //                 <div className="flex flex-col lg:flex-row items-center gap-12">
// // // // // // // //                     <div className="lg:w-1/2">
// // // // // // // //                         <h2 className="text-4xl font-bold mb-6">Why Choose <span className="text-primary">Our Platform?</span></h2>
// // // // // // // //                         <ul className="space-y-4">
// // // // // // // //                             <li className="flex items-center gap-3"><FaRocket className="text-primary"/> Verified & Expert Tutors</li>
// // // // // // // //                             <li className="flex items-center gap-3"><FaRocket className="text-primary"/> Transparent Payment System</li>
// // // // // // // //                             <li className="flex items-center gap-3"><FaRocket className="text-primary"/> Real-time Class Tracking</li>
// // // // // // // //                             <li className="flex items-center gap-3"><FaRocket className="text-primary"/> Admin-moderated Secure Environment</li>
// // // // // // // //                         </ul>
// // // // // // // //                     </div>
// // // // // // // //                     <div className="lg:w-1/2 grid grid-cols-2 gap-4">
// // // // // // // //                         <div className="stats shadow bg-primary text-primary-content text-center">
// // // // // // // //                             <div className="stat">
// // // // // // // //                                 <div className="stat-value text-3xl">500+</div>
// // // // // // // //                                 <div className="stat-title text-white">Active Tutors</div>
// // // // // // // //                             </div>
// // // // // // // //                         </div>
// // // // // // // //                         <div className="stats shadow bg-secondary text-secondary-content text-center">
// // // // // // // //                             <div className="stat">
// // // // // // // //                                 <div className="stat-value text-3xl">1.2k+</div>
// // // // // // // //                                 <div className="stat-title text-white">Total Posts</div>
// // // // // // // //                             </div>
// // // // // // // //                         </div>
// // // // // // // //                     </div>
// // // // // // // //                 </div>
// // // // // // // //             </section>

// // // // // // // //             {/* 5. Latest Tutors Section (Dynamic) */}
// // // // // // // //             <section className="py-16 bg-slate-900 text-white">
// // // // // // // //                 <div className="container mx-auto px-4">
// // // // // // // //                     <h2 className="text-3xl font-bold text-center mb-10">Our Featured Tutors</h2>
// // // // // // // //                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // // // // //                         {latestTutors.map((tutor) => (
// // // // // // // //                             <motion.div 
// // // // // // // //                                 whileHover={{ scale: 1.05 }}
// // // // // // // //                                 key={tutor._id} 
// // // // // // // //                                 className="card bg-gray-800 shadow-xl overflow-hidden"
// // // // // // // //                             >
// // // // // // // //                                 <figure className="h-48 overflow-hidden">
// // // // // // // //                                     <img src={tutor.photoUrl} alt={tutor.name} className="w-full object-cover" />
// // // // // // // //                                 </figure>
// // // // // // // //                                 <div className="card-body p-4 items-center text-center">
// // // // // // // //                                     <h3 className="card-title text-secondary">{tutor.name}</h3>
// // // // // // // //                                     <p className="text-xs text-gray-400">{tutor.qualifications}</p>
// // // // // // // //                                     <Link to={`/tutor/${tutor._id}`} className="btn btn-xs btn-outline btn-secondary mt-2">View Profile</Link>
// // // // // // // //                                 </div>
// // // // // // // //                             </motion.div>
// // // // // // // //                         ))}
// // // // // // // //                     </div>
// // // // // // // //                 </div>
// // // // // // // //             </section>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default Home;


// // // // // // // // import React from 'react'
// // // // // // // // import hero from '../../assets/Hero-section-Image.webp'

// // // // // // // // const Home = () => {
// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <h1>Alhamdulliah </h1>
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // export default Home



// // // // // // // import React from 'react';
// // // // // // // import { motion } from 'framer-motion';

// // // // // // // const Home = () => {
// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      
// // // // // // //       {/* --- HERO SECTION --- */}
// // // // // // //       <section className="container mx-auto px-4 lg:px-12 py-12 lg:py-24">
// // // // // // //         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
// // // // // // //           {/* Left Content */}
// // // // // // //           <motion.div 
// // // // // // //             initial={{ opacity: 0, x: -50 }}
// // // // // // //             whileInView={{ opacity: 1, x: 0 }}
// // // // // // //             transition={{ duration: 0.8 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="flex-1 text-left"
// // // // // // //           >
// // // // // // //             {/* Tagline */}
// // // // // // //             <div className="flex items-center gap-2 mb-6">
// // // // // // //               <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-200">
// // // // // // //                 Tuition Port
// // // // // // //               </span>
// // // // // // //               <span className="text-gray-400 text-xs">• Tutor matching, streamlined</span>
// // // // // // //             </div>

// // // // // // //             {/* Main Heading */}
// // // // // // //             <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
// // // // // // //               Find the right tutor. <br />
// // // // // // //               <span className="text-gray-900">Faster. Smarter.</span>
// // // // // // //             </h1>

// // // // // // //             {/* Description */}
// // // // // // //             <p className="text-gray-500 text-lg lg:text-xl max-w-lg mb-10 leading-relaxed">
// // // // // // //               A modern platform for students and parents to discover verified tutors, 
// // // // // // //               and for tutors to grow careers—backed by manual verification and secure contact sharing.
// // // // // // //             </p>

// // // // // // //             {/* Buttons */}
// // // // // // //             <div className="flex flex-wrap gap-4 mb-10">
// // // // // // //               <motion.button 
// // // // // // //                 whileHover={{ scale: 1.05 }}
// // // // // // //                 whileTap={{ scale: 0.95 }}
// // // // // // //                 className="bg-[#10a342] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-200"
// // // // // // //               >
// // // // // // //                 Looking for Tutor
// // // // // // //               </motion.button>
// // // // // // //               <motion.button 
// // // // // // //                 whileHover={{ scale: 1.05 }}
// // // // // // //                 whileTap={{ scale: 0.95 }}
// // // // // // //                 className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors"
// // // // // // //               >
// // // // // // //                 Become a Tutor
// // // // // // //               </motion.button>
// // // // // // //             </div>

// // // // // // //             {/* Trust Indicator */}
// // // // // // //             <div className="flex items-center gap-4">
// // // // // // //               <div className="flex -space-x-2">
// // // // // // //                 <div className="w-8 h-8 rounded-full bg-green-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">A</div>
// // // // // // //                 <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">B</div>
// // // // // // //                 <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">C</div>
// // // // // // //                 <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">D</div>
// // // // // // //               </div>
// // // // // // //               <p className="text-gray-400 text-sm font-medium">Trusted by students and tutors across Bangladesh</p>
// // // // // // //             </div>
// // // // // // //           </motion.div>

// // // // // // //           {/* Right Image/Illustration Section */}
// // // // // // //           <motion.div 
// // // // // // //             initial={{ opacity: 0, scale: 0.8 }}
// // // // // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="flex-1 w-full max-w-2xl relative"
// // // // // // //           >
// // // // // // //             {/* Background Decorative Gradient */}
// // // // // // //             <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60"></div>
            
// // // // // // //             {/* Illustration Placeholder (Using a Stylized SVG/Div mix to match the card look) */}
// // // // // // //             <div className="relative z-10 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 p-2 transform rotate-2">
// // // // // // //                <img 
// // // // // // //                  src="https://img.freepik.com/free-vector/flat-university-concept-background_23-2148190367.jpg" 
// // // // // // //                  alt="Illustration" 
// // // // // // //                  className="w-full h-auto rounded-[35px]"
// // // // // // //                />
// // // // // // //             </div>

// // // // // // //             {/* Floating Element Animation */}
// // // // // // //             <motion.div 
// // // // // // //               animate={{ y: [0, -15, 0] }}
// // // // // // //               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
// // // // // // //               className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3 border border-gray-50"
// // // // // // //             >
// // // // // // //               <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
// // // // // // //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
// // // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // // // // //                 </svg>
// // // // // // //               </div>
// // // // // // //               <div>
// // // // // // //                 <p className="text-xs text-gray-400">Verified Tutors</p>
// // // // // // //                 <p className="font-bold text-gray-800">10,000+ Active</p>
// // // // // // //               </div>
// // // // // // //             </motion.div>
// // // // // // //           </motion.div>

// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* --- ADDED DYNAMIC SECTIONS (As per requirements) --- */}
      
// // // // // // //       {/* Latest Tuitions Preview */}
// // // // // // //       <section className="bg-gray-50 py-16">
// // // // // // //         <div className="container mx-auto px-4">
// // // // // // //            <div className="flex justify-between items-end mb-10">
// // // // // // //               <div>
// // // // // // //                 <h2 className="text-3xl font-bold text-gray-800">Latest Tuition Requests</h2>
// // // // // // //                 <p className="text-gray-500">Find the perfect match for your teaching skills</p>
// // // // // // //               </div>
// // // // // // //               <button className="text-green-600 font-bold hover:underline">View All</button>
// // // // // // //            </div>
           
// // // // // // //            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // //               {[1, 2, 3].map((item) => (
// // // // // // //                 <motion.div 
// // // // // // //                   key={item}
// // // // // // //                   whileHover={{ y: -5 }}
// // // // // // //                   className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
// // // // // // //                 >
// // // // // // //                   <div className="flex justify-between mb-4">
// // // // // // //                     <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-xs font-bold">Class 10</span>
// // // // // // //                     <span className="text-gray-400 text-xs">2 hours ago</span>
// // // // // // //                   </div>
// // // // // // //                   <h3 className="font-bold text-xl mb-2 text-gray-800">Physics & Math Tutor</h3>
// // // // // // //                   <p className="text-gray-500 text-sm mb-4">📍 Mirpur, Dhaka (Home Visit)</p>
// // // // // // //                   <div className="flex items-center justify-between pt-4 border-t border-gray-50">
// // // // // // //                     <span className="font-extrabold text-green-600">৳ 5,000/month</span>
// // // // // // //                     <button className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg">Apply</button>
// // // // // // //                   </div>
// // // // // // //                 </motion.div>
// // // // // // //               ))}
// // // // // // //            </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Home;


// // // // // // import React from 'react';
// // // // // // import { motion } from 'framer-motion';

// // // // // // const Home = () => {
// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      
// // // // // //       {/* --- HERO SECTION --- */}
// // // // // //       <section className="container mx-auto px-4 lg:px-12 py-12 lg:py-24">
// // // // // //         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
// // // // // //           {/* Left Content */}
// // // // // //           <motion.div 
// // // // // //             initial={{ opacity: 0, x: -50 }}
// // // // // //             whileInView={{ opacity: 1, x: 0 }}
// // // // // //             transition={{ duration: 0.8 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="flex-1 text-left"
// // // // // //           >
// // // // // //             {/* Tagline */}
// // // // // //             <div className="flex items-center gap-2 mb-6">
// // // // // //               <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-200">
// // // // // //                 Tuition Port
// // // // // //               </span>
// // // // // //               <span className="text-gray-400 text-xs">• Tutor matching, streamlined</span>
// // // // // //             </div>

// // // // // //             {/* Main Heading */}
// // // // // //             <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
// // // // // //               Find the right tutor. <br />
// // // // // //               <span className="text-gray-900">Faster. Smarter.</span>
// // // // // //             </h1>

// // // // // //             {/* Description */}
// // // // // //             <p className="text-gray-500 text-lg lg:text-xl max-w-lg mb-10 leading-relaxed">
// // // // // //               A modern platform for students and parents to discover verified tutors, 
// // // // // //               and for tutors to grow careers—backed by manual verification and secure contact sharing.
// // // // // //             </p>

// // // // // //             {/* Buttons */}
// // // // // //             <div className="flex flex-wrap gap-4 mb-10">
// // // // // //               <motion.button 
// // // // // //                 whileHover={{ scale: 1.05 }}
// // // // // //                 whileTap={{ scale: 0.95 }}
// // // // // //                 className="bg-[#10a342] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-200"
// // // // // //               >
// // // // // //                 Looking for Tutor
// // // // // //               </motion.button>
// // // // // //               <motion.button 
// // // // // //                 whileHover={{ scale: 1.05 }}
// // // // // //                 whileTap={{ scale: 0.95 }}
// // // // // //                 className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors"
// // // // // //               >
// // // // // //                 Become a Tutor
// // // // // //               </motion.button>
// // // // // //             </div>

// // // // // //             {/* Trust Indicator */}
// // // // // //             <div className="flex items-center gap-4">
// // // // // //               <div className="flex -space-x-2">
// // // // // //                 <div className="w-8 h-8 rounded-full bg-green-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">A</div>
// // // // // //                 <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">B</div>
// // // // // //                 <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">C</div>
// // // // // //                 <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">D</div>
// // // // // //               </div>
// // // // // //               <p className="text-gray-400 text-sm font-medium">Trusted by students and tutors across Bangladesh</p>
// // // // // //             </div>
// // // // // //           </motion.div>

// // // // // //           {/* Right Image/Illustration Section */}
// // // // // //           <motion.div 
// // // // // //             initial={{ opacity: 0, scale: 0.8 }}
// // // // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="flex-1 w-full max-w-2xl relative"
// // // // // //           >
// // // // // //             {/* Background Decorative Gradient */}
// // // // // //             <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60"></div>
            
// // // // // //             {/* Illustration Placeholder (Using a Stylized SVG/Div mix to match the card look) */}
// // // // // //             <div className="relative z-10 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 p-2 transform rotate-2">
// // // // // //                <img 
// // // // // //                  src="https://img.freepik.com/free-vector/flat-university-concept-background_23-2148190367.jpg" 
// // // // // //                  alt="Illustration" 
// // // // // //                  className="w-full h-auto rounded-[35px]"
// // // // // //                />
// // // // // //             </div>

// // // // // //             {/* Floating Element Animation */}
// // // // // //             <motion.div 
// // // // // //               animate={{ y: [0, -15, 0] }}
// // // // // //               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
// // // // // //               className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3 border border-gray-50"
// // // // // //             >
// // // // // //               <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
// // // // // //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
// // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // // // //                 </svg>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <p className="text-xs text-gray-400">Verified Tutors</p>
// // // // // //                 <p className="font-bold text-gray-800">10,000+ Active</p>
// // // // // //               </div>
// // // // // //             </motion.div>
// // // // // //           </motion.div>

// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* --- ADDED DYNAMIC SECTIONS (As per requirements) --- */}
      
// // // // // //       {/* Latest Tuitions Preview */}
// // // // // //       <section className="bg-gray-50 py-16">
// // // // // //         <div className="container mx-auto px-4">
// // // // // //            <div className="flex justify-between items-end mb-10">
// // // // // //               <div>
// // // // // //                 <h2 className="text-3xl font-bold text-gray-800">Latest Tuition Requests</h2>
// // // // // //                 <p className="text-gray-500">Find the perfect match for your teaching skills</p>
// // // // // //               </div>
// // // // // //               <button className="text-green-600 font-bold hover:underline">View All</button>
// // // // // //            </div>
           
// // // // // //            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // //               {[1, 2, 3].map((item) => (
// // // // // //                 <motion.div 
// // // // // //                   key={item}
// // // // // //                   whileHover={{ y: -5 }}
// // // // // //                   className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
// // // // // //                 >
// // // // // //                   <div className="flex justify-between mb-4">
// // // // // //                     <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-xs font-bold">Class 10</span>
// // // // // //                     <span className="text-gray-400 text-xs">2 hours ago</span>
// // // // // //                   </div>
// // // // // //                   <h3 className="font-bold text-xl mb-2 text-gray-800">Physics & Math Tutor</h3>
// // // // // //                   <p className="text-gray-500 text-sm mb-4">📍 Mirpur, Dhaka (Home Visit)</p>
// // // // // //                   <div className="flex items-center justify-between pt-4 border-t border-gray-50">
// // // // // //                     <span className="font-extrabold text-green-600">৳ 5,000/month</span>
// // // // // //                     <button className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg">Apply</button>
// // // // // //                   </div>
// // // // // //                 </motion.div>
// // // // // //               ))}
// // // // // //            </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Home;

// // // // // import React from 'react';
// // // // // import { motion } from 'framer-motion';

// // // // // const Home = () => {
// // // // //   return (
// // // // //     <div className="min-h-screen bg-white">
// // // // //       {/* --- Hero Section --- */}
// // // // //       <section className="container mx-auto px-6 lg:px-16 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        
// // // // //         {/* Left Side: Content */}
// // // // //         <motion.div 
// // // // //           initial={{ opacity: 0, x: -60 }}
// // // // //           animate={{ opacity: 1, x: 0 }}
// // // // //           transition={{ duration: 0.8 }}
// // // // //           className="flex-1"
// // // // //         >
// // // // //           <div className="flex items-center gap-2 mb-4">
// // // // //             <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">
// // // // //               Tuition Port
// // // // //             </span>
// // // // //             <span className="text-gray-400 text-xs">• Tutor matching, streamlined</span>
// // // // //           </div>

// // // // //           <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
// // // // //             Find the right tutor. <br />
// // // // //             <span className="text-slate-800">Faster. Smarter.</span>
// // // // //           </h1>

// // // // //           <p className="text-gray-500 text-lg mb-8 max-w-lg">
// // // // //             A modern platform for students and parents to discover verified tutors, and for tutors to grow careers.
// // // // //           </p>

// // // // //           <div className="flex flex-wrap gap-4">
// // // // //             <motion.button 
// // // // //               whileHover={{ scale: 1.05 }}
// // // // //               whileTap={{ scale: 0.95 }}
// // // // //               className="bg-[#10a342] text-white px-8 py-4 rounded-xl font-bold shadow-lg"
// // // // //             >
// // // // //               Looking for Tutor
// // // // //             </motion.button>
// // // // //             <motion.button 
// // // // //               whileHover={{ scale: 1.05 }}
// // // // //               className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold"
// // // // //             >
// // // // //               Become a Tutor
// // // // //             </motion.button>
// // // // //           </div>
// // // // //         </motion.div>

// // // // //         {/* Right Side: Visual Element */}
// // // // //         <motion.div 
// // // // //           initial={{ opacity: 0, scale: 0.8 }}
// // // // //           animate={{ opacity: 1, scale: 1 }}
// // // // //           transition={{ duration: 0.8 }}
// // // // //           className="flex-1 relative w-full"
// // // // //         >
// // // // //           {/* Decorative Gradient Background */}
// // // // //           <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-[50px] blur-2xl opacity-50"></div>
          
// // // // //           {/* Card-like Illustration Holder */}
// // // // //           <div className="relative bg-white border border-gray-100 rounded-[40px] p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
// // // // //             <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 rounded-[30px] flex items-center justify-center text-white text-4xl font-bold">
// // // // //                eTuitionBd
// // // // //             </div>
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       </section>

// // // // //       {/* --- Requirement: How it Works Section --- */}
// // // // //       <section className="py-20 bg-slate-50">
// // // // //         <div className="container mx-auto px-6 text-center">
// // // // //           <h2 className="text-3xl font-bold mb-12">How the Platform Works</h2>
// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // //             <div className="p-8 bg-white rounded-2xl shadow-sm">
// // // // //               <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
// // // // //               <h3 className="font-bold text-xl mb-2">Post Tuition</h3>
// // // // //               <p className="text-gray-500">Students post their requirements.</p>
// // // // //             </div>
// // // // //             <div className="p-8 bg-white rounded-2xl shadow-sm">
// // // // //               <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
// // // // //               <h3 className="font-bold text-xl mb-2">Tutors Apply</h3>
// // // // //               <p className="text-gray-500">Verified tutors apply for the post.</p>
// // // // //             </div>
// // // // //             <div className="p-8 bg-white rounded-2xl shadow-sm">
// // // // //               <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
// // // // //               <h3 className="font-bold text-xl mb-2">Start Learning</h3>
// // // // //               <p className="text-gray-500">Pay securely and start classes.</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home;


// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { Link } from 'react-router-dom'; // Link ব্যবহারের জন্য react-router-dom ইম্পোর্ট করা হয়েছে
// // // // import { FaGraduationCap, FaChalkboardTeacher, FaRegLightbulb, FaCheckCircle } from 'react-icons/fa'; // কিছু আইকন ব্যবহার করা হয়েছে

// // // // const Home = () => {
// // // //   return (
// // // //     <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden">
      
// // // //       {/* --- HERO SECTION --- */}
// // // //       <section className="container mx-auto px-6 lg:px-16 py-16 lg:py-24">
// // // //         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
// // // //           {/* Left Content */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0, x: -60 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.8 }}
// // // //             className="flex-1 text-left"
// // // //           >
// // // //             {/* Tagline */}
// // // //             <div className="flex items-center gap-2 mb-4">
// // // //               <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-200">
// // // //                 Tuition Port
// // // //               </span>
// // // //               <span className="text-gray-400 text-xs">• Tutor matching, streamlined</span>
// // // //             </div>

// // // //             {/* Main Heading */}
// // // //             <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
// // // //               Find the right tutor. <br />
// // // //               <span className="text-[#10a342]">Faster. Smarter.</span>
// // // //             </h1>

// // // //             {/* Description */}
// // // //             <p className="text-gray-500 text-lg lg:text-xl max-w-lg mb-10 leading-relaxed">
// // // //               A modern platform for students and parents to discover verified tutors, 
// // // //               and for tutors to grow careers—backed by manual verification and secure contact sharing.
// // // //             </p>

// // // //             {/* Buttons - with Link components */}
// // // //             <div className="flex flex-wrap gap-4 mb-10">
// // // //               <Link to="/find-tutor" // এটি আপনার Find Tutor পেজের পাথ হবে
// // // //                     className="btn bg-[#10a342] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-green-700 transition-colors"
// // // //               >
// // // //                 Looking for Tutor
// // // //               </Link>
// // // //               <Link to="/become-tutor" // এটি আপনার Become a Tutor পেজের পাথ হবে
// // // //                     className="btn bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors"
// // // //               >
// // // //                 Become a Tutor
// // // //               </Link>
// // // //             </div>

// // // //             {/* Trust Indicator */}
// // // //             <div className="flex items-center gap-4">
// // // //               <div className="flex -space-x-2">
// // // //                 {/* DasiyUI Avatar Placeholder, or simple colored circles */}
// // // //                 <div className="w-8 h-8 rounded-full bg-indigo-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">A</div>
// // // //                 <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">B</div>
// // // //                 <div className="w-8 h-8 rounded-full bg-yellow-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">C</div>
// // // //                 <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">D</div>
// // // //               </div>
// // // //               <p className="text-gray-400 text-sm font-medium">Trusted by students and tutors across Bangladesh</p>
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* Right Visual Element (Gradient and SVG-like illustration) */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0, scale: 0.8 }}
// // // //             animate={{ opacity: 1, scale: 1 }}
// // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // //             className="flex-1 w-full max-w-2xl relative"
// // // //           >
// // // //             {/* Background Decorative Gradient */}
// // // //             <div className="absolute -inset-8 bg-gradient-to-br from-green-50/70 via-blue-50/70 to-purple-50/70 rounded-[50px] blur-3xl opacity-60"></div>
            
// // // //             {/* Illustration Placeholder - Modern, clean design using SVG-like shapes */}
// // // //             <div className="relative z-10 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
// // // //                {/* This can be replaced by an actual SVG or Image, but for now, it's a styled div */}
// // // //                <div className="w-full aspect-video bg-gradient-to-tr from-[#a8e063] to-[#56ab2f] rounded-[35px] flex items-center justify-center p-8">
// // // //                   <svg className="w-4/5 h-4/5 text-white opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
// // // //                     <path d="M12 2L2 7l10 5 10-5-10-5z" />
// // // //                     <path d="M2 17l10 5 10-5" />
// // // //                     <path d="M2 12l10 5 10-5" />
// // // //                     <circle cx="12" cy="7" r="2" fill="white" stroke="none" />
// // // //                     <path d="M16 20v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
// // // //                     <circle cx="12" cy="10" r="2" fill="none" stroke="currentColor"/>
// // // //                     <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
// // // //                   </svg>
// // // //                </div>
// // // //             </div>

// // // //             {/* Floating Element Animation */}
// // // //             <motion.div 
// // // //               animate={{ y: [0, -15, 0] }}
// // // //               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
// // // //               className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3 border border-gray-50"
// // // //             >
// // // //               <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
// // // //                 <FaCheckCircle className="text-xl" />
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-xs text-gray-400">Verified Tutors</p>
// // // //                 <p className="font-bold text-gray-800">10,000+ Active</p>
// // // //               </div>
// // // //             </motion.div>
// // // //           </motion.div>

// // // //         </div>
// // // //       </section>

// // // //       {/* --- How the Platform Works (3 steps visual grid) --- */}
// // // //       <section className="py-20 bg-gray-50">
// // // //         <div className="container mx-auto px-6 text-center">
// // // //           <h2 className="text-4xl font-bold text-slate-800 mb-12">How It Works</h2>
// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //             <motion.div 
// // // //               initial={{ opacity: 0, y: 50 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6, delay: 0.1 }}
// // // //               viewport={{ once: true }}
// // // //               className="card bg-white shadow-lg border border-gray-100 rounded-2xl p-8"
// // // //             >
// // // //               <FaGraduationCap className="text-5xl text-[#10a342] mx-auto mb-4" />
// // // //               <h3 className="text-2xl font-bold mb-2">1. Register Profile</h3>
// // // //               <p className="text-gray-600">Create your student or tutor profile quickly.</p>
// // // //             </motion.div>
// // // //             <motion.div 
// // // //               initial={{ opacity: 0, y: 50 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6, delay: 0.3 }}
// // // //               viewport={{ once: true }}
// // // //               className="card bg-white shadow-lg border border-gray-100 rounded-2xl p-8"
// // // //             >
// // // //               <FaChalkboardTeacher className="text-5xl text-[#10a342] mx-auto mb-4" />
// // // //               <h3 className="text-2xl font-bold mb-2">2. Match & Apply</h3>
// // // //               <p className="text-gray-600">Students post tuitions, tutors apply easily.</p>
// // // //             </motion.div>
// // // //             <motion.div 
// // // //               initial={{ opacity: 0, y: 50 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6, delay: 0.5 }}
// // // //               viewport={{ once: true }}
// // // //               className="card bg-white shadow-lg border border-gray-100 rounded-2xl p-8"
// // // //             >
// // // //               <FaRegLightbulb className="text-5xl text-[#10a342] mx-auto mb-4" />
// // // //               <h3 className="text-2xl font-bold mb-2">3. Learn & Grow</h3>
// // // //               <p className="text-gray-600">Begin your learning journey with confidence.</p>
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- Why Choose Us (features section) --- */}
// // // //       <section className="py-20 container mx-auto px-6">
// // // //         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
// // // //           <motion.div 
// // // //             initial={{ opacity: 0, x: -50 }}
// // // //             whileInView={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.7 }}
// // // //             viewport={{ once: true }}
// // // //             className="lg:w-1/2 text-left"
// // // //           >
// // // //             <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose <span className="text-[#10a342]">eTuitionBd</span>?</h2>
// // // //             <ul className="space-y-4 text-gray-700 text-lg">
// // // //               <li className="flex items-start gap-3">
// // // //                 <FaCheckCircle className="text-[#10a342] mt-1 flex-shrink-0" />
// // // //                 <p><span className="font-semibold">Verified Tutors:</span> All tutors undergo a thorough manual verification process.</p>
// // // //               </li>
// // // //               <li className="flex items-start gap-3">
// // // //                 <FaCheckCircle className="text-[#10a342] mt-1 flex-shrink-0" />
// // // //                 <p><span className="font-semibold">Secure Payments:</span> Transparent and secure payment system powered by Stripe.</p>
// // // //               </li>
// // // //               <li className="flex items-start gap-3">
// // // //                 <FaCheckCircle className="text-[#10a342] mt-1 flex-shrink-0" />
// // // //                 <p><span className="font-semibold">Automated Matching:</span> Reduce friction with smart student-tutor matching.</p>
// // // //               </li>
// // // //               <li className="flex items-start gap-3">
// // // //                 <FaCheckCircle className="text-[#10a342] mt-1 flex-shrink-0" />
// // // //                 <p><span className="font-semibold">Dedicated Support:</span> Admins monitor activities and handle disputes effectively.</p>
// // // //               </li>
// // // //             </ul>
// // // //           </motion.div>
          
// // // //           <motion.div 
// // // //             initial={{ opacity: 0, x: 50 }}
// // // //             whileInView={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.7 }}
// // // //             viewport={{ once: true }}
// // // //             className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
// // // //           >
// // // //              <div className="stats shadow bg-gradient-to-br from-[#10a342] to-green-600 text-white p-6 rounded-2xl text-center">
// // // //                  <div className="stat">
// // // //                      <div className="stat-value text-4xl font-extrabold">500+</div>
// // // //                      <div className="stat-title text-white opacity-80 mt-2">Verified Tutors</div>
// // // //                  </div>
// // // //              </div>
// // // //              <div className="stats shadow bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-2xl text-center">
// // // //                  <div className="stat">
// // // //                      <div className="stat-value text-4xl font-extrabold">1.2K+</div>
// // // //                      <div className="stat-title text-white opacity-80 mt-2">Tuition Posts</div>
// // // //                  </div>
// // // //              </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;

// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // // আপনার ইমেজ পাথটি এখানে ঠিক করে নিন
// // // import hero from '../../assets/Hero-section-Image.webp'; 

// // // const Home = () => {
// // //   return (
// // //     <section className="min-h-screen bg-white flex items-center justify-center px-6 py-12 md:px-12 lg:px-24">
// // //       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
// // //         {/* Left Content */}
// // //         <motion.div 
// // //           initial={{ opacity: 0, x: -50 }}
// // //           animate={{ opacity: 1, x: 0 }}
// // //           transition={{ duration: 0.6, ease: "easeOut" }}
// // //           className="space-y-6"
// // //         >
// // //           <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-100 px-3 py-1 rounded-full">
// // //             <span className="text-green-600 text-xs font-semibold tracking-wide">Tuition Port</span>
// // //             <span className="text-gray-400 text-xs">•</span>
// // //             <span className="text-gray-500 text-xs">Tutor matching, streamlined</span>
// // //           </div>

// // //           <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
// // //             Find the right tutor. <br />
// // //             <span className="text-slate-900">Faster. Smarter.</span>
// // //           </h1>

// // //           <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
// // //             A modern platform for students and parents to discover verified tutors, 
// // //             and for tutors to grow careers—backed by manual verification and 
// // //             secure contact sharing.
// // //           </p>

// // //           <div className="flex flex-wrap gap-4 pt-4">
// // //             <motion.button 
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               className="bg-[#10a34a] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-green-700 transition-colors"
// // //             >
// // //               Looking for Tutor
// // //             </motion.button>
            
// // //             <motion.button 
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               className="bg-white text-slate-700 border-2 border-gray-100 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-sm"
// // //             >
// // //               Become a Tutor
// // //             </motion.button>
// // //           </div>

// // //           {/* Social Proof / Avatars */}
// // //           <div className="flex items-center gap-4 pt-8">
// // //             <div className="flex -space-x-3">
// // //               {['bg-green-200', 'bg-blue-200', 'bg-purple-200', 'bg-pink-200'].map((color, i) => (
// // //                 <div key={i} className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600 ${color}`}>
// // //                   {String.fromCharCode(65 + i)}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //             <p className="text-gray-500 text-sm font-medium">
// // //               Trusted by students and tutors across Bangladesh
// // //             </p>
// // //           </div>
// // //         </motion.div>

// // //         {/* Right Image Section */}
// // //         <motion.div 
// // //           initial={{ opacity: 0, scale: 0.8 }}
// // //           animate={{ opacity: 1, scale: 1 }}
// // //           transition={{ duration: 0.8, delay: 0.2 }}
// // //           className="relative"
// // //         >
// // //           <div className="bg-white rounded-[40px] shadow-2xl p-4 md:p-8 relative overflow-hidden">
// // //             {/* Soft Glow Background behind image */}
// // //             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-70"></div>
            
// // //             <img 
// // //               src={hero} 
// // //               alt="Tutor and Students Illustration" 
// // //               className="w-full h-auto relative z-10 rounded-2xl"
// // //             />
// // //           </div>
// // //         </motion.div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Home;


// // import React from 'react'

// // const Home = () => {
// //   return (
// //     <div>
// //       <h1>Alhamdulliah</h1>
// //     </div>
// //   )
// // }

// // export default Home




// import React from 'react';
// import { motion } from 'framer-motion';
// // আপনার ইমেজ পাথটি ঠিক আছে কিনা নিশ্চিত করে নিন
// import hero from '../../assets/Hero-section-Image.webp'; 

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-[#F9FAFB] font-sans">
//       {/* Main Hero Container */}
//       <div className="max-w-[1400px] mx-auto min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-20">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Side: Content */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col items-start"
//           >
//             {/* Badge */}
//             <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-full mb-8 shadow-sm">
//               <span className="text-[#10a34a] text-xs font-bold px-2 py-0.5 bg-green-50 rounded-full border border-green-100">
//                 Tuition Port
//               </span>
//               <span className="text-gray-400 text-sm tracking-tight">• Tutor matching, streamlined</span>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-[44px] md:text-[64px] font-extrabold text-[#0f172a] leading-[1.1] mb-6 tracking-tight">
//               Find the right tutor. <br />
//               Faster. Smarter.
//             </h1>

//             {/* Description */}
//             <p className="text-[#475569] text-lg md:text-[20px] leading-relaxed max-w-[540px] mb-10">
//               A modern platform for students and parents to discover verified tutors, 
//               and for tutors to grow careers—backed by manual verification and 
//               secure contact sharing.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-4 mb-12">
//               <motion.button 
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="bg-[#10a34a] text-white px-8 py-4 rounded-xl font-bold text-[17px] shadow-lg shadow-green-200"
//               >
//                 Looking for Tutor
//               </motion.button>
              
//               <motion.button 
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="bg-white text-[#334155] border border-gray-200 px-8 py-4 rounded-xl font-bold text-[17px] hover:bg-gray-50 shadow-sm"
//               >
//                 Become a Tutor
//               </motion.button>
//             </div>

//             {/* Trust Indicator */}
//             <div className="flex items-center gap-4">
//               <div className="flex -space-x-3">
//                 <div className="w-10 h-10 rounded-full bg-[#dcfce7] border-2 border-white flex items-center justify-center text-[13px] font-bold text-gray-600">A</div>
//                 <div className="w-10 h-10 rounded-full bg-[#dbeafe] border-2 border-white flex items-center justify-center text-[13px] font-bold text-gray-600">B</div>
//                 <div className="w-10 h-10 rounded-full bg-[#f3e8ff] border-2 border-white flex items-center justify-center text-[13px] font-bold text-gray-600">C</div>
//                 <div className="w-10 h-10 rounded-full bg-[#fce7f3] border-2 border-white flex items-center justify-center text-[13px] font-bold text-gray-600">D</div>
//               </div>
//               <p className="text-[#64748b] text-[15px] font-medium">
//                 Trusted by students and tutors across Bangladesh
//               </p>
//             </div>
//           </motion.div>

//           {/* Right Side: Image with Card Design */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="bg-white p-4 md:p-10 rounded-[48px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
//               {/* Background accent */}
//               <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-green-50/50 to-transparent -z-10 blur-3xl"></div>
              
//               <img 
//                 src={hero} 
//                 alt="Illustration" 
//                 className="w-full h-auto object-contain relative z-10"
//               />
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { motion } from 'framer-motion';
import hero from '../../assets/Hero-section-Image.webp'; 

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 md:p-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-8">
            <span className="text-emerald-600 font-bold text-sm bg-emerald-50 px-2 py-0.5 rounded-md">E Tuition Bd</span>
            <span className="text-gray-400 text-sm">• Tutor matching, streamlined</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
            Find the right tutor. <br />
            <span className="text-slate-900">Faster. Smarter.</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            A modern platform for students and parents to discover verified tutors, and for tutors to grow careers—backed by manual verification and secure contact sharing.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#10a34a] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-green-100"
            >
              Looking for Tutor
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm"
            >
              Become a Tutor
            </motion.button>
          </div>

          {/* Trust Avatars */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-green-200 border-2 border-white flex items-center justify-center font-bold">A</div>
              <div className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center font-bold">B</div>
              <div className="w-10 h-10 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center font-bold">C</div>
              <div className="w-10 h-10 rounded-full bg-pink-200 border-2 border-white flex items-center justify-center font-bold">D</div>
            </div>
            <p className="text-gray-500 font-medium">Trusted by students and tutors across Bangladesh</p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="bg-white p-6 md:p-12 rounded-[50px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50">
            <img 
              src={hero} 
              alt="Hero Illustration" 
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
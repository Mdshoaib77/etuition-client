// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import { ShieldCheck, Users, Zap, Clock, CreditCard, CheckCircle } from 'lucide-react';

// // // const WhyChooseUs = () => {
// // //   const features = [
// // //     {
// // //       id: 1,
// // //       icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
// // //       title: "Verified Tutors",
// // //       description: "Every tutor undergoes a manual verification process of their NID and academic documents to ensure safety."
// // //     },
// // //     {
// // //       id: 2,
// // //       icon: <Zap className="w-8 h-8 text-emerald-600" />,
// // //       title: "Instant Matching",
// // //       description: "Our smart algorithm connects students with the most suitable tutors based on subjects and location instantly."
// // //     },
// // //     {
// // //       id: 3,
// // //       icon: <CreditCard className="w-8 h-8 text-emerald-600" />,
// // //       title: "Secure Payments",
// // //       description: "Integrated with Stripe for transparent and secure transactions. No hidden fees or payment disputes."
// // //     },
// // //     {
// // //       id: 4,
// // //       icon: <Clock className="w-8 h-8 text-emerald-600" />,
// // //       title: "Flexible Scheduling",
// // //       description: "Tutors and students can mutually agree on schedules that fit their busy lifestyles perfectly."
// // //     },
// // //     {
// // //       id: 5,
// // //       icon: <Users className="w-8 h-8 text-emerald-600" />,
// // //       title: "Active Community",
// // //       description: "Join a growing network of thousands of verified students and expert tutors across Bangladesh."
// // //     },
// // //     {
// // //       id: 6,
// // //       icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
// // //       title: "Class Tracking",
// // //       description: "Maintain a digital log of your classes and progress directly from your personalized dashboard."
// // //     }
// // //   ];

// // //   // Animation Variants
// // //   const containerVariants = {
// // //     hidden: { opacity: 0 },
// // //     visible: {
// // //       opacity: 1,
// // //       transition: { staggerChildren: 0.2 }
// // //     }
// // //   };

// // //   const cardVariants = {
// // //     hidden: { y: 20, opacity: 0 },
// // //     visible: { y: 0, opacity: 1 }
// // //   };

// // //   return (
// // //     <section className="py-20 bg-white overflow-hidden">
// // //       <div className="max-w-7xl mx-auto px-6 md:px-20">
        
// // //         {/* Section Heading */}
// // //         <div className="text-center mb-16">
// // //           <motion.span 
// // //             initial={{ opacity: 0, y: -10 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             className="text-emerald-600 font-bold tracking-widest uppercase text-sm"
// // //           >
// // //             Efficiency & Trust
// // //           </motion.span>
// // //           <motion.h2 
// // //             initial={{ opacity: 0, y: 10 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             className="text-4xl md:text-5xl font-black text-slate-900 mt-3"
// // //           >
// // //             Why Choose <span className="text-emerald-600">eTuitionBd</span>?
// // //           </motion.h2>
// // //           <div className="w-20 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
// // //         </div>

// // //         {/* Features Grid */}
// // //         <motion.div 
// // //           variants={containerVariants}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true }}
// // //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// // //         >
// // //           {features.map((feature) => (
// // //             <motion.div
// // //               key={feature.id}
// // //               variants={cardVariants}
// // //               whileHover={{ scale: 1.03 }}
// // //               className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-300 group"
// // //             >
// // //               <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:rotate-6 transition-all duration-300">
// // //                 <span className="group-hover:text-white transition-colors">
// // //                   {feature.icon}
// // //                 </span>
// // //               </div>
// // //               <h3 className="text-2xl font-bold text-slate-800 mb-4">
// // //                 {feature.title}
// // //               </h3>
// // //               <p className="text-gray-600 leading-relaxed text-lg">
// // //                 {feature.description}
// // //               </p>
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>

// // //         {/* Bottom CTA or Stat (Optional) */}
// // //         <motion.div 
// // //           initial={{ opacity: 0, scale: 0.9 }}
// // //           whileInView={{ opacity: 1, scale: 1 }}
// // //           className="mt-16 bg-slate-900 rounded-[40px] p-10 flex flex-col md:flex-row items-center justify-between gap-8"
// // //         >
// // //           <div className="text-center md:text-left">
// // //             <h4 className="text-white text-2xl md:text-3xl font-bold mb-2">Ready to find your perfect tutor?</h4>
// // //             <p className="text-gray-400">Join 5000+ students who already started their journey.</p>
// // //           </div>
// // //           <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-emerald-900/20">
// // //             Get Started Now
// // //           </button>
// // //         </motion.div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default WhyChooseUs;

// // import React from "react";
// // import { FaChalkboardTeacher, FaRegMoneyBillAlt, FaUsers, FaLaptopCode } from "react-icons/fa";

// // const features = [
// //   {
// //     icon: <FaChalkboardTeacher size={40} className="text-emerald-600" />,
// //     title: "Qualified Tutors",
// //     desc: "All tutors are verified, experienced, and qualified to ensure top-notch learning for students.",
// //   },
// //   {
// //     icon: <FaRegMoneyBillAlt size={40} className="text-emerald-600" />,
// //     title: "Transparent Payments",
// //     desc: "Secure and transparent payment system with instant tracking of tuition fees.",
// //   },
// //   {
// //     icon: <FaUsers size={40} className="text-emerald-600" />,
// //     title: "Student-Tutor Matching",
// //     desc: "Easily find the best tutors based on subject, location, and schedule preferences.",
// //   },
// //   {
// //     icon: <FaLaptopCode size={40} className="text-emerald-600" />,
// //     title: "Digital Class Management",
// //     desc: "Track classes, payments, and progress online with a simple dashboard interface.",
// //   },
// // ];

// // const WhyChooseUs = () => {
// //   return (
// //     <section className="py-16 bg-gradient-to-r from-emerald-50 to-white">
// //       <div className="max-w-7xl mx-auto px-6 text-center">
// //         <h2 className="text-4xl font-bold text-emerald-600 mb-4">
// //           Why Choose <span className="text-emerald-600">Us</span>?
// //         </h2>
// //         <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
// //           We provide a trusted, transparent, and fully digital tuition management platform for students, tutors, and admins.
// //         </p>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {features.map((feature, index) => (
// //             <div
// //               key={index}
// //               className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
// //             >
// //               <div className="mb-4 flex justify-center">{feature.icon}</div>
// //               <h3 className="text-xl font-semibold text-emerald-700 mb-2">{feature.title}</h3>
// //               <p className="text-gray-600">{feature.desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default WhyChooseUs;


// import React from "react";
// import { motion } from "framer-motion";
// import { ShieldCheck, Zap, CreditCard, Award, Users, Headset } from "lucide-react";

// const WhyChooseUs = () => {
//   const features = [
//     {
//       id: 1,
//       icon: <ShieldCheck size={36} />,
//       title: "Verified Tutors",
//       description: "Every tutor on our platform undergoes a strict NID and document verification process.",
//       color: "from-emerald-400 to-cyan-500",
//     },
//     {
//       id: 2,
//       icon: <Zap size={36} />,
//       title: "Quick Response",
//       description: "Get tutor applications within hours of posting. No more waiting for days.",
//       color: "from-amber-400 to-orange-500",
//     },
//     {
//       id: 3,
//       icon: <CreditCard size={36} />,
//       title: "Secure Payments",
//       description: "Integrated Stripe payment ensures your transactions are 100% safe and transparent.",
//       color: "from-blue-400 to-indigo-600",
//     },
//     {
//       id: 4,
//       icon: <Award size={36} />,
//       title: "Quality Education",
//       description: "Our tutors are from top-rated universities with proven academic excellence.",
//       color: "from-rose-400 to-pink-600",
//     },
//     {
//       id: 5,
//       icon: <Users size={36} />,
//       title: "Large Community",
//       description: "Join a growing network of 5000+ students and tutors across the country.",
//       color: "from-violet-400 to-purple-600",
//     },
//     {
//       id: 6,
//       icon: <Headset size={36} />,
//       title: "24/7 Support",
//       description: "Our dedicated support team is always ready to help you with any issues or disputes.",
//       color: "from-teal-400 to-emerald-600",
//     },
//   ];

//   return (
//     <section className="py-24 bg-white relative overflow-hidden">
//       {/* Background Subtle Elements */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />

//       <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <motion.h4
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-emerald-600 font-extrabold uppercase tracking-widest text-sm mb-3"
//           >
//             Efficiency & Trust
//           </motion.h4>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight"
//           >
//             Why Choose <span className="text-emerald-500">eTuitionBd</span>?
//           </motion.h2>
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "100px" }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="h-2 bg-emerald-500 mx-auto mt-6 rounded-full"
//           />
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="group p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-emerald-200/30 transition-all duration-300"
//             >
//               {/* Icon with Dynamic Gradient */}
//               <div
//                 className={`w-20 h-20 mb-8 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-0`}
//               >
//                 {feature.icon}
//               </div>

//               <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">
//                 {feature.title}
//               </h3>
//               <p className="text-slate-600 text-lg leading-relaxed">
//                 {feature.description}
//               </p>

//               {/* Decorative Circle in Card */}
//               <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity">
//                  <ShieldCheck size={80} className="text-emerald-900" />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Stats Bottom Bar */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="mt-20 p-10 bg-slate-900 rounded-[3rem] flex flex-wrap justify-around items-center gap-8 shadow-2xl"
//         >
//           <div className="text-center">
//             <h5 className="text-white text-4xl font-black mb-1">99%</h5>
//             <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Client Satisfaction</p>
//           </div>
//           <div className="hidden md:block w-px h-12 bg-slate-700" />
//           <div className="text-center">
//             <h5 className="text-emerald-400 text-4xl font-black mb-1">15k+</h5>
//             <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Total Tuitions</p>
//           </div>
//           <div className="hidden md:block w-px h-12 bg-slate-700" />
//           <div className="text-center">
//             <h5 className="text-white text-4xl font-black mb-1">5k+</h5>
//             <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Expert Tutors</p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, CreditCard, Award, Users, Headset } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <ShieldCheck size={38} />,
      title: "Verified Tutors",
      description: "Every tutor on our platform undergoes a strict NID and document verification process.",
      color: "from-emerald-400 to-cyan-500",
      shadow: "shadow-emerald-200/50"
    },
    {
      id: 2,
      icon: <Zap size={38} />,
      title: "Quick Response",
      description: "Get tutor applications within hours of posting. No more waiting for days.",
      color: "from-amber-400 to-orange-500",
      shadow: "shadow-orange-200/50"
    },
    {
      id: 3,
      icon: <CreditCard size={38} />,
      title: "Secure Payments",
      description: "Integrated Stripe payment ensures your transactions are 100% safe and transparent.",
      color: "from-blue-400 to-indigo-600",
      shadow: "shadow-blue-200/50"
    },
    {
      id: 4,
      icon: <Award size={38} />,
      title: "Quality Education",
      description: "Our tutors are from top-rated universities with proven academic excellence.",
      color: "from-rose-400 to-pink-600",
      shadow: "shadow-rose-200/50"
    },
    {
      id: 5,
      icon: <Users size={38} />,
      title: "Large Community",
      description: "Join a growing network of 5000+ students and tutors across the country.",
      color: "from-violet-400 to-purple-600",
      shadow: "shadow-purple-200/50"
    },
    {
      id: 6,
      icon: <Headset size={38} />,
      title: "24/7 Support",
      description: "Our dedicated support team is always ready to help you with any issues or disputes.",
      color: "from-teal-400 to-emerald-600",
      shadow: "shadow-teal-200/50"
    },
  ];

  return (
    <section className="py-28 bg-[#FDFDFF] relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50 rounded-full -mr-40 -mt-40 blur-[100px] opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full -ml-40 -mb-40 blur-[100px] opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold uppercase tracking-[0.2em] text-[10px]"
          >
            Efficiency & Trust
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-[1000] text-slate-900 leading-tight tracking-tight"
          >
            Why Choose <span className="text-emerald-500">eTuitionBd</span>?
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1.5 bg-emerald-500/20 mx-auto mt-8 rounded-full relative overflow-hidden"
          >
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 w-1/2 bg-emerald-500 rounded-full"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative p-10 bg-white rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(16,185,129,0.12)] transition-all duration-500"
            >
              {/* Icon Container */}
              <div
                className={`w-20 h-20 mb-8 rounded-[2rem] bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-xl ${feature.shadow} transform group-hover:rotate-[10deg] transition-all duration-500`}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors tracking-tight">
                {feature.title}
              </h3>
              
              <p className="text-slate-500 text-lg leading-relaxed font-medium mb-6">
                {feature.description}
              </p>

              {/* Decorative Accent Line */}
              <div className="w-12 h-1.5 bg-gray-100 group-hover:w-full group-hover:bg-emerald-500 transition-all duration-500 rounded-full" />

              {/* Hidden Large Background Icon for Gorgeous Look */}
              <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none">
                 {React.cloneElement(feature.icon, { size: 120 })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
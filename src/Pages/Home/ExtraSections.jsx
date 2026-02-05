// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaUserPlus, FaSearchLocation, FaCheckDouble, FaShieldAlt, FaClock, FaHandHoldingHeart } from 'react-icons/fa';

// const ExtraSections = () => {
//   return (
//     <div className="bg-base-100 py-20 space-y-32">
      
//       {/* 1. How the Platform Works (3 Steps Visual Grid) */}
//       <section className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold text-gray-800"
//           >
//             How the Platform <span className="text-emerald-600">Works</span>
//           </motion.h2>
//           <p className="text-gray-500 mt-4">Follow these simple steps to get started</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
//           {/* Connector Line (Hidden on Mobile) */}
//           <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-dashed bg-emerald-100 -z-10"></div>

//           {/* Step 1 */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="flex flex-col items-center text-center group"
//           >
//             <div className="w-20 h-20 bg-white shadow-lg rounded-2xl flex items-center justify-center text-emerald-600 text-3xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
//               <FaUserPlus />
//             </div>
//             <h3 className="text-xl font-bold mb-2 text-gray-800">1. Register Account</h3>
//             <p className="text-sm text-gray-600 px-4">Create your profile as a Student or Tutor to access our personalized dashboard.</p>
//           </motion.div>

//           {/* Step 2 */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="flex flex-col items-center text-center group"
//           >
//             <div className="w-20 h-20 bg-white shadow-lg rounded-2xl flex items-center justify-center text-emerald-600 text-3xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
//               <FaSearchLocation />
//             </div>
//             <h3 className="text-xl font-bold mb-2 text-gray-800">2. Post or Browse</h3>
//             <p className="text-sm text-gray-600 px-4">Students post requirements, while Tutors browse and apply for their preferred tuitions.</p>
//           </motion.div>

//           {/* Step 3 */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//             className="flex flex-col items-center text-center group"
//           >
//             <div className="w-20 h-20 bg-white shadow-lg rounded-2xl flex items-center justify-center text-emerald-600 text-3xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
//               <FaCheckDouble />
//             </div>
//             <h3 className="text-xl font-bold mb-2 text-gray-800">3. Connect & Learn</h3>
//             <p className="text-sm text-gray-600 px-4">After secure payment, get approved and start your educational journey together.</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* 2. Why Choose Us (Features Section) */}
//       <section className="bg-gray-900 py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
            
//             <div className="lg:w-1/2 text-left">
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//                 Why Choose <span className="text-emerald-500">eTuitionBd?</span>
//               </h2>
//               <p className="text-gray-400 mb-8">
//                 We bridge the gap between education and opportunity with a system built on trust and transparency.
//               </p>
//               <div className="space-y-4">
//                 {[
//                   { icon: <FaShieldAlt />, title: "Verified Tutors", desc: "Every tutor is manually reviewed by our admin team." },
//                   { icon: <FaClock />, title: "Instant Tracking", desc: "Real-time application status and class tracking system." },
//                   { icon: <FaHandHoldingHeart />, title: "Secure Payments", desc: "Safe transactions via Stripe for complete peace of mind." }
//                 ].map((item, index) => (
//                   <motion.div 
//                     key={index}
//                     whileHover={{ x: 10 }}
//                     className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700"
//                   >
//                     <div className="text-2xl text-emerald-500 mt-1">{item.icon}</div>
//                     <div>
//                       <h4 className="font-bold text-white">{item.title}</h4>
//                       <p className="text-sm text-gray-400">{item.desc}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             <motion.div 
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="lg:w-1/2 relative"
//             >
//               <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl">
//                 <img 
//                   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
//                   alt="Students learning" 
//                   className="w-full h-auto"
//                 />
//               </div>
//               {/* Decorative Element */}
//               <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-emerald-500/20 blur-3xl -z-10"></div>
//               <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-500/20 blur-3xl -z-10"></div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default ExtraSections;


import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaClock, FaHandHoldingHeart, FaUserEdit, FaSearchPlus, FaRocket } from 'react-icons/fa';

const ExtraSections = () => {
  return (
    <div className="bg-base-100 overflow-hidden">
      
      {/* 1. How the Platform Works (Visual Step Guide) */}
       <section className="max-w-7xl mx-auto px-6 py-28 relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest"
          >
            Workflow
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            How it <span className="text-emerald-600 italic">Works</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
            A seamless bridge between knowledge seekers and expert educators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              icon: <FaUserEdit />, 
              title: "Post & Register", 
              desc: "Students post their tuition needs, while tutors register with their expertise and credentials.",
              accent: "from-blue-500 to-cyan-400"
            },
            { 
              icon: <FaSearchPlus />, 
              title: "Apply & Match", 
              desc: "Qualified tutors browse and apply for tuition posts that fit their teaching style and location.",
              accent: "from-emerald-500 to-teal-400"
            },
            { 
              icon: <FaRocket />, 
              title: "Admin Approval", 
              desc: "Our team verifies applications to ensure quality. Once approved, the learning journey begins!",
              accent: "from-orange-500 to-yellow-400"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative p-10 rounded-[40px] bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 group hover:border-emerald-200 transition-all"
            >
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white text-3xl mb-8 shadow-lg group-hover:rotate-6 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
              <div className="absolute top-10 right-10 text-6xl font-black text-gray-50 -z-10 group-hover:text-emerald-50 transition-colors">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 2. Why Choose Us (Modern Feature Section) */}
      <section className="bg-slate-900 py-24 rounded-[3rem] mx-4 mb-12 overflow-hidden relative">
        {/* Glow Effect */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Why thousands trust <br />
                <span className="text-emerald-400 font-serif italic">eTuitionBd</span>
              </h2>
              
              <div className="grid gap-6">
                {[
                  { icon: <FaShieldAlt />, title: "Verified Tutors", desc: "Rigorous manual verification for every profile.", color: "bg-emerald-500" },
                  { icon: <FaClock />, title: "Real-time Tracking", desc: "Monitor your applications and class schedules live.", color: "bg-blue-500" },
                  { icon: <FaHandHoldingHeart />, title: "Secure Payments", desc: "Encrypted transactions via Stripe for peace of mind.", color: "bg-rose-500" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                    className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/0 transition-all cursor-default"
                  >
                    <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center text-white text-xl shadow-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              {/* Glass Card Overlay */}
              <div className="absolute -top-10 -left-10 bg-emerald-500/20 backdrop-blur-lg border border-white/10 p-6 rounded-3xl hidden md:block z-20">
                <p className="text-white font-bold text-lg">100% Secure</p>
                <p className="text-emerald-300 text-xs tracking-wider">Manual Verification</p>
              </div>

              <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Quality Education" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ExtraSections;
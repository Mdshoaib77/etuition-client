// import React from 'react'

// const About = () => {
//   return (
//     <div>
//       <h1>Alhamdulliah</h1>
//     </div>
//   )
// }

// export default About


// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaGraduationCap, FaUserTie, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

// const About = () => {
//   return (
//     <div className="bg-base-100 min-h-screen">
//       {/* Hero Section */}
//       <div className="bg-emerald-600 py-20 text-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <motion.h1 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-bold mb-4"
//           >
//             About eTuition<span className="text-gray-900">Bd</span>
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-lg opacity-90 max-w-2xl mx-auto"
//           >
//             Revolutionizing the way students and tutors connect in Bangladesh. Our goal is to ensure quality education and trusted tuition management.
//           </motion.p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-16">
//         {/* Purpose Section */}
//         <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Purpose</h2>
//             <p className="text-gray-600 mb-4 leading-relaxed">
//               Finding a qualified tutor or a verified tuition post is often a stressful task. 
//               <strong> eTuitionBd</strong> was developed to solve this real-world problem. 
//               We provide a transparent platform where students can post requirements and tutors can apply with ease.
//             </p>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500"/> Reducing friction between students & tutors</li>
//               <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500"/> Transparent payment system with Stripe</li>
//               <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500"/> Real-time application tracking</li>
//             </ul>
//           </motion.div>
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="bg-emerald-100 h-64 rounded-2xl flex items-center justify-center border-2 border-dashed border-emerald-400"
//           >
//             <FaGraduationCap className="text-9xl text-emerald-600 opacity-50" />
//           </motion.div>
//         </div>

//         {/* Workflow Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold mb-10">How It Works</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { icon: <FaUserTie />, title: "Student Posts", desc: "Student registers and posts a tuition requirement with details." },
//               { icon: <FaCheckCircle />, title: "Tutor Applies", desc: "Verified tutors browse and apply to suitable tuition posts." },
//               { icon: <FaShieldAlt />, title: "Admin Verification", desc: "Admin reviews applications and approves tutors for quality." }
//             ].map((step, index) => (
//               <motion.div 
//                 key={index}
//                 whileHover={{ y: -10 }}
//                 className="p-8 bg-base-200 rounded-xl shadow-sm border border-base-300"
//               >
//                 <div className="text-4xl text-emerald-600 mb-4 flex justify-center">{step.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{step.title}</h3>
//                 <p className="text-gray-600 text-sm">{step.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Extra Section: Why Choose Us */}
//         <div className="bg-gray-900 rounded-3xl p-10 text-white text-center">
//           <h2 className="text-3xl font-bold mb-6 italic text-emerald-400">Alhamdulillah! Our Vision & Impact</h2>
//           <p className="max-w-3xl mx-auto opacity-80 mb-8">
//           We are dedicated to maintaining the quality of education by ensuring tutors receive fair recognition for their expertise while students gain reliable, verified guidance.
//           </p>
//           <div className="flex flex-wrap justify-center gap-6">
//             <span className="bg-gray-800 px-4 py-2 rounded-full border border-gray-700 text-sm">#EmpoweringEducation</span>
//             <span className="bg-gray-800 px-4 py-2 rounded-full border border-gray-700 text-sm">#SecureLearning</span>
//             <span className="bg-gray-800 px-4 py-2 rounded-full border border-gray-700 text-sm">#VerifiedTutors</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserTie, FaCheckCircle, FaShieldAlt, FaRocket, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-white min-h-screen overflow-hidden text-slate-900">
      
      {/* --- Modern Hero Section --- */}
      <div className="relative bg-slate-900 py-28 md:py-40 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -ml-32 -mb-32"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]"
          >
            Since 2024
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            About eTuition<span className="text-emerald-500">Bd</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            We are bridging the gap between expert educators and ambitious students. 
            A platform built on <span className="text-white font-semibold">trust, transparency, and quality education.</span>
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        
        {/* --- Purpose Section with Visual Polish --- */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 text-emerald-500/5 text-9xl font-black -z-10 uppercase">Mission</div>
            <h2 className="text-4xl font-black mb-8 text-slate-900">Our Core <span className="text-emerald-600">Purpose</span></h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Developing <strong>eTuitionBd</strong> was a response to the challenges of finding 
              reliable educational support. We believe that every student deserves access to 
              verified mentors, and every tutor deserves a fair, professional environment to showcase their skills.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Verified Tutor Network", 
                "Secure Stripe Payments", 
                "Live Application Tracking", 
                "Direct Student Communication"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <FaCheckCircle className="text-emerald-500 shrink-0"/>
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-emerald-500 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl flex flex-col items-center justify-center aspect-square">
              <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <FaGraduationCap className="text-6xl text-emerald-600" />
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-slate-900">500+</p>
                <p className="text-slate-500 font-medium">Verified Tutors</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Workflow Section (Refined Cards) --- */}
        <div className="text-center mb-32">
          <h2 className="text-4xl font-black mb-4">How It Works</h2>
          <div className="h-1.5 w-20 bg-emerald-500 mx-auto rounded-full mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaUserTie />, title: "Student Posts", desc: "Students list their specific tuition needs, subjects, and budget." },
              { icon: <FaRocket />, title: "Tutor Applies", desc: "Expert tutors apply with their credentials and teaching experience." },
              { icon: <FaShieldAlt />, title: "Admin Review", desc: "We manually verify documents to ensure the highest quality match." }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-emerald-200 transition-all text-center"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl text-emerald-600 mb-6 mx-auto shadow-inner">
                  {step.icon}
                </div>
                <h3 className="text-xl font-black mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- CTA / Impact Section (Gorgeous Gradient) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[100px]"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <FaAward className="text-5xl text-emerald-400 mb-8" />
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight italic">
              Alhamdulillah! <br /> <span className="text-emerald-400 not-italic">Our Vision & Impact</span>
            </h2>
            <p className="max-w-3xl mx-auto text-slate-400 text-lg mb-12 leading-relaxed">
              We are dedicated to maintaining the quality of education by ensuring tutors receive fair 
              recognition for their expertise while students gain reliable, verified guidance. 
              Together, we are building a smarter Bangladesh.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["#EmpoweringEducation", "#SecureLearning", "#VerifiedTutors"].map((tag, i) => (
                <span key={i} className="bg-white/5 px-6 py-2 rounded-full border border-white/10 text-sm font-semibold tracking-wide hover:bg-emerald-500 hover:text-white transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}

export default About;
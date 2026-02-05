// import React from 'react'

// const About = () => {
//   return (
//     <div>
//       <h1>Alhamdulliah</h1>
//     </div>
//   )
// }

// export default About


import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserTie, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-emerald-600 py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About eTuition<span className="text-gray-900">Bd</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg opacity-90 max-w-2xl mx-auto"
          >
            Revolutionizing the way students and tutors connect in Bangladesh. Our goal is to ensure quality education and trusted tuition management.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Purpose Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Purpose</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Finding a qualified tutor or a verified tuition post is often a stressful task. 
              <strong> eTuitionBd</strong> was developed to solve this real-world problem. 
              We provide a transparent platform where students can post requirements and tutors can apply with ease.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500"/> Reducing friction between students & tutors</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500"/> Transparent payment system with Stripe</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500"/> Real-time application tracking</li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-emerald-100 h-64 rounded-2xl flex items-center justify-center border-2 border-dashed border-emerald-400"
          >
            <FaGraduationCap className="text-9xl text-emerald-600 opacity-50" />
          </motion.div>
        </div>

        {/* Workflow Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaUserTie />, title: "Student Posts", desc: "Student registers and posts a tuition requirement with details." },
              { icon: <FaCheckCircle />, title: "Tutor Applies", desc: "Verified tutors browse and apply to suitable tuition posts." },
              { icon: <FaShieldAlt />, title: "Admin Verification", desc: "Admin reviews applications and approves tutors for quality." }
            ].map((step, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 bg-base-200 rounded-xl shadow-sm border border-base-300"
              >
                <div className="text-4xl text-emerald-600 mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extra Section: Why Choose Us */}
        <div className="bg-gray-900 rounded-3xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-6 italic text-emerald-400">Alhamdulillah! Our Vision & Impact</h2>
          <p className="max-w-3xl mx-auto opacity-80 mb-8">
          We are dedicated to maintaining the quality of education by ensuring tutors receive fair recognition for their expertise while students gain reliable, verified guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="bg-gray-800 px-4 py-2 rounded-full border border-gray-700 text-sm">#EmpoweringEducation</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full border border-gray-700 text-sm">#SecureLearning</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full border border-gray-700 text-sm">#VerifiedTutors</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
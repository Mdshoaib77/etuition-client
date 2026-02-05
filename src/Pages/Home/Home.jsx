// import React from 'react';
// import { motion } from 'framer-motion';
// import hero from '../../assets/Hero-section-Image.webp'; 

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 md:p-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
//         {/* Text Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-8">
//             <span className="text-emerald-600 font-bold text-sm bg-emerald-50 px-2 py-0.5 rounded-md">E Tuition Bd</span>
//             <span className="text-gray-400 text-sm">• Tutor matching, streamlined</span>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
//             Find the right tutor. <br />
//             <span className="text-slate-900">Faster. Smarter.</span>
//           </h1>

//           <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
//             A modern platform for students and parents to discover verified tutors, and for tutors to grow careers—backed by manual verification and secure contact sharing.
//           </p>

//           <div className="flex flex-wrap gap-4 mb-12">
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-[#10a34a] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-green-100"
//             >
//               Looking for Tutor
//             </motion.button>
            
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white text-slate-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm"
//             >
//               Become a Tutor
//             </motion.button>
//           </div>

//           {/* Trust Avatars */}
//           <div className="flex items-center gap-4">
//             <div className="flex -space-x-3">
//               <div className="w-10 h-10 rounded-full bg-green-200 border-2 border-white flex items-center justify-center font-bold">A</div>
//               <div className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center font-bold">B</div>
//               <div className="w-10 h-10 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center font-bold">C</div>
//               <div className="w-10 h-10 rounded-full bg-pink-200 border-2 border-white flex items-center justify-center font-bold">D</div>
//             </div>
//             <p className="text-gray-500 font-medium">Trusted by students and tutors across Bangladesh</p>
//           </div>
//         </motion.div>

//         {/* Image Section */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="relative"
//         >
//           <div className="bg-white p-6 md:p-12 rounded-[50px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50">
//             <img 
//               src={hero} 
//               alt="Hero Illustration" 
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { motion } from 'framer-motion';
import hero from '../../assets/Hero-section-Image.webp'; 
// আপনার তৈরি করা ExtraSections ফাইলটি ইম্পোর্ট করা হলো
import ExtraSections from './ExtraSections'; 

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* --- HERO SECTION --- */}
      <div className="min-h-screen flex items-center justify-center p-6 md:p-20 overflow-hidden">
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

      {/* --- EXTRA SECTIONS --- */}
      {/* এখানে আপনার তৈরি করা কম্পোনেন্টটি বসে গেল */}
      <ExtraSections />

    </div>
  );
};

export default Home;
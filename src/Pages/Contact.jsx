// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       <h1>Alhamdulliah</h1>
//     </div>
//   )
// }

// export default Contact



import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert("Message sent successfully! Alhamdulillah.");
  };

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-gray-900 py-20 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Get In <span className="text-emerald-500">Touch</span>
        </motion.h1>
        <p className="text-gray-400 max-w-lg mx-auto px-6">
          Have questions about our platform? We're here to help students and tutors connect seamlessly.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white shadow-xl rounded-3xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Call Us</h4>
                  <p className="text-sm text-gray-600">+880 1700-000000</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white shadow-xl rounded-3xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email Us</h4>
                  <p className="text-sm text-gray-600">support@etuitionbd.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white shadow-xl rounded-3xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Visit Us</h4>
                  <p className="text-sm text-gray-600">Dhanmondi, Dhaka, Bangladesh</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 shadow-2xl rounded-3xl border border-gray-50"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label-text font-semibold mb-2 ml-1">Your Name:</label>
                    <input type="text" placeholder="John Doe" className="input input-bordered focus:ring-2 focus:ring-emerald-500 outline-none rounded-xl" required />
                  </div>
                  <div className="form-control">
                    <label className="label-text font-semibold mb-2 ml-1">Email Address:</label>
                    <input type="email" placeholder="john@example.com" className="input input-bordered focus:ring-2 focus:ring-emerald-500 outline-none rounded-xl" required />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label-text font-semibold mb-2 ml-1">Subject:</label>
                  <input type="text" placeholder="How can we help?" className="input input-bordered focus:ring-2 focus:ring-emerald-500 outline-none rounded-xl ml-1" required />
                </div>
                <div className="form-control">
                  <label className="label-text font-semibold mb-2 ml-1">Message:</label>
                  <textarea className="textarea textarea-bordered h-32 focus:ring-2 focus:ring-emerald-500 outline-none rounded-xl ml-1" placeholder="Type your message here..."></textarea>
                </div>
                <button type="submit" className="btn bg-emerald-600 hover:bg-emerald-700 text-white w-full md:w-auto px-10 rounded-xl border-none gap-2">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </motion.div>
          </div>

        </div>

        {/* Optional: Map Placeholder or Extra Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-emerald-50 p-12 rounded-3xl text-center border border-emerald-100"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Join our community!</h2>
          <p className="text-gray-600 mb-6">Whether you're a student seeking knowledge or a tutor ready to inspire.</p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-emerald rounded-xl">Register as Tutor</button>
            <button className="btn btn-outline btn-emerald rounded-xl">Post a Tuition</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
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
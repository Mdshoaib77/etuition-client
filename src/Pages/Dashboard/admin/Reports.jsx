// import React from 'react'

// const Reports = () => {
//   return (
//     <div>
//       <h1>Alhamdulliah rep</h1>
//     </div>
//   )
// }

// export default Reports


import React, { useEffect, useState } from 'react';
import { DollarSign, Users, BookOpen, CreditCard, ArrowUpRight } from 'lucide-react';

const Reports = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ব্যাকএন্ড থেকে অ্যানালিটিক্স ডাটা ফেচ করা
    fetch('http://localhost:5000/admin/analytics', {
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching reports:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-800">
          Reports & <span className="text-emerald-600">Analytics</span>
        </h1>
        <p className="text-gray-500 mt-2">Monitor platform earnings and transaction history.</p>
      </div>

      {/* --- উপরের কার্ড সেকশন (Stats) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          title="Total Earnings" 
          value={`$${data?.totalEarnings || 0}`} 
          icon={<DollarSign />} 
          color="bg-emerald-500" 
        />
        <StatCard 
          title="Total Users" 
          value={data?.totalUsers || 0} 
          icon={<Users />} 
          color="bg-blue-500" 
        />
        <StatCard 
          title="Total Tuitions" 
          value={data?.totalTuitions || 0} 
          icon={<BookOpen />} 
          color="bg-purple-500" 
        />
        <StatCard 
          title="Successful Payments" 
          value={data?.successfulPayments || 0} 
          icon={<CreditCard />} 
          color="bg-orange-500" 
        />
      </div>

      {/* --- ট্রানজেকশন টেবিল সেকশন --- */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-white">
          <h2 className="font-bold text-xl text-gray-800">Successful Transaction History</h2>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Verified Records
          </span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-400 text-[10px] uppercase font-black tracking-widest">
              <tr>
                <th className="p-5">Transaction ID</th>
                <th className="p-5">Student (Payer)</th>
                <th className="p-5">Tutor (Receiver)</th>
                <th className="p-5">Amount</th>
                <th className="p-5">Date</th>
                <th className="p-5">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-50">
              {data?.transactionHistory?.map((trx) => (
                <tr key={trx._id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5 font-mono text-xs text-gray-400">
                    {trx._id.toUpperCase()}
                  </td>
                  <td className="p-5">
                    <p className="font-bold text-gray-700">{trx.studentEmail}</p>
                  </td>
                  <td className="p-5 text-gray-600">
                    {trx.tutorEmail}
                  </td>
                  <td className="p-5">
                    <span className="font-black text-emerald-600 text-base">
                      ${trx.salary}
                    </span>
                  </td>
                  <td className="p-5 text-gray-500">
                    {new Date(trx.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-1.5 text-emerald-500 font-black text-[10px] uppercase">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      Completed
                    </div>
                  </td>
                </tr>
              ))}
              {data?.transactionHistory?.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-10 text-center text-gray-400 font-medium">
                    No transactions found yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// ডাটা কার্ডের জন্য একটি ছোট কম্পোনেন্ট
const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow">
    <div className={`${color} p-4 rounded-2xl text-white shadow-lg`}>
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <div>
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">{title}</p>
      <h3 className="text-2xl font-black text-gray-800">{value}</h3>
    </div>
  </div>
);

export default Reports;
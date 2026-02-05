import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, GraduationCap, Calendar, Clock, BookOpen, UserCircle2, Briefcase, DollarSign } from 'lucide-react';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';

const TuitionDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [tuition, setTuition] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/tuition/${id}`)
            .then(res => res.json())
            .then(data => setTuition(data));
    }, [id]);

    const handleApply = async (e) => {
        e.preventDefault();
        const form = e.target;
        
        const applicationData = {
            tuitionId: id,
            tuitionTitle: tuition.title,
            studentEmail: tuition.studentEmail,
            studentName: tuition.studentName,
            tutorName: user?.displayName,
            tutorEmail: user?.email,
            tutorImage: user?.photoURL,
            qualifications: form.qualifications.value,
            experience: form.experience.value,
            expectedSalary: form.expectedSalary.value,
            status: 'pending',
            appliedAt: new Date()
        };

        const response = await fetch('http://localhost:5000/applications', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(applicationData)
        });

        const data = await response.json();
        if (data.insertedId) {
            Swal.fire("Applied!", "Your application sent to the student.", "success");
            setShowModal(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-emerald-50">
                
                {/* Header Banner */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-8 sm:p-12 text-white text-center">
                    <h1 className="text-3xl sm:text-5xl font-black mb-4">{tuition.title}</h1>
                    <div className="flex flex-wrap justify-center gap-4 opacity-90">
                        <span className="bg-white/20 px-4 py-1 rounded-full text-sm">ID: {id.slice(-6).toUpperCase()}</span>
                        <span className="bg-white/20 px-4 py-1 rounded-full text-sm">Posted by: {tuition.studentName}</span>
                    </div>
                </div>

                <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Side: Main Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Briefcase className="text-emerald-600" /> Job Description
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {tuition.description || "No additional description provided."}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <InfoCard icon={<BookOpen />} label="Subject" value={tuition.subject} color="indigo" />
                            <InfoCard icon={<GraduationCap />} label="Class" value={tuition.className} color="purple" />
                            <InfoCard icon={<Calendar />} label="Schedule" value={tuition.daysPerWeek} color="pink" />
                            <InfoCard icon={<Clock />} label="Time" value={tuition.teachingTime} color="cyan" />
                            <InfoCard icon={<MapPin />} label="Location" value={tuition.location} color="blue" />
                            <InfoCard icon={<UserCircle2 />} label="Student Gender" value={tuition.studentGender} color="orange" />
                        </div>
                    </div>

                    {/* Right Side: Action Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 bg-emerald-50 p-8 rounded-3xl border border-emerald-100 text-center">
                            <p className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-2">Monthly Budget</p>
                            <h3 className="text-4xl font-black text-emerald-700 mb-6">৳ {tuition.salary}</h3>
                            
                            <button 
                                onClick={() => setShowModal(true)}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-200 transition-all active:scale-95"
                            >
                                Apply to This Tuition
                            </button>
                            <p className="text-gray-400 text-xs mt-4 italic text-center">Application will be sent directly to the student.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Application Modal --- */}
            {showModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                        <div className="bg-emerald-600 p-6 text-white flex justify-between items-center">
                            <h3 className="text-xl font-bold">Tutor Application Form</h3>
                            <button onClick={() => setShowModal(false)} className="text-2xl font-bold">&times;</button>
                        </div>
                        <form onSubmit={handleApply} className="p-8 space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name (Read-only)</label>
                                <input type="text" defaultValue={user?.displayName} readOnly className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Qualifications</label>
                                <input name="qualifications" type="text" placeholder="e.g. BSc in Physics, DU" className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Years of Experience</label>
                                <input name="experience" type="text" placeholder="e.g. 2 Years" className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Expected Salary</label>
                                <input name="expectedSalary" type="number" placeholder="Enter Amount" className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none" required />
                            </div>
                            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

const InfoCard = ({ icon, label, value, color }) => (
    <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white">
        <div className={`p-3 bg-${color}-50 text-${color}-600 rounded-xl`}>{icon}</div>
        <div>
            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{label}</p>
            <p className="text-base font-bold text-gray-700">{value}</p>
        </div>
    </div>
);

export default TuitionDetails;
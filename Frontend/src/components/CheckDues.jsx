import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CheckDues = () => {
  const [dues, setDues] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDues = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/student/dues', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setDues(response.data.dues);
      } catch (err) {
        console.error('Error fetching dues:', err);
        setError('Failed to load dues.');
      } finally {
        setLoading(false);
      }
    };

    fetchDues();
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#C0D9E6] via-[#F5EFE8] to-[#C0D9E6] flex justify-center items-center p-8">
      <div className="relative w-full max-w-md p-8 rounded-3xl bg-white/30 backdrop-blur-md border border-[#C0D9E6] shadow-2xl text-center">
        {/* Glowing border animation */}
        <div className="absolute inset-0 rounded-3xl border border-white/40 blur-md animate-pulse opacity-30 z-0"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-[#2F4156] mb-6 drop-shadow">
            💰 Check Dues
          </h2>

          {loading ? (
            <p className="text-[#576C8D] font-medium">Checking dues...</p>
          ) : error ? (
            <p className="text-red-600 font-medium">{error}</p>
          ) : dues > 0 ? (
            <p className="text-lg font-semibold text-red-700">
              ❗ You have a pending fine of ₹{dues}
            </p>
          ) : (
            <p className="text-lg font-semibold text-green-700">
              ✅ No pending dues. You're all clear! 🎉
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckDues;

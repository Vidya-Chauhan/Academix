import React, { useState } from 'react';
import axios from 'axios';

const ReturnBook = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [isbn, setIsbn] = useState('');
  const [message, setMessage] = useState('');
  const [fine, setFine] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setFine(null);
    setLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:5000/admin/return',
        { rollNo: rollNumber, isbn },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.message) setMessage(response.data.message);
      if (response.data.fine !== undefined) setFine(response.data.fine);
    } catch (error) {
      const errMsg = error.response?.data?.message || '❌ Error returning book';
      setMessage(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5EFE8] via-[#C0D9E6] to-[#F5EFE8] px-6 py-12">
      <div className="w-full max-w-md p-8 bg-white/50 backdrop-blur-xl border border-[#C0D9E6] rounded-3xl shadow-xl shadow-teal-200">
        <h2 className="text-3xl font-bold text-[#2F4156] text-center mb-8 drop-shadow">
          📘 Return Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#2F4156] font-medium mb-1">Student Roll Number</label>
            <input
              type="text"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              placeholder="Enter Roll Number"
              className="w-full px-4 py-3 border border-[#C0D9E6] rounded-xl text-[#2F4156] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#576C8D]"
              required
            />
          </div>

          <div>
            <label className="block text-[#2F4156] font-medium mb-1">Book ISBN</label>
            <input
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              placeholder="Enter Book ISBN"
              className="w-full px-4 py-3 border border-[#C0D9E6] rounded-xl text-[#2F4156] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#576C8D]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#576C8D] hover:bg-[#2F4156] text-white font-semibold rounded-xl transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Processing...' : '🔄 Return Book'}
          </button>
        </form>

        {message && (
          <div className="mt-6 p-4 rounded-xl bg-white text-[#2F4156] shadow-inner">
            <p>{message}</p>
            {fine !== null && <p className="text-red-600 font-semibold mt-2">Fine: ₹{fine}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReturnBook;

import { useState } from 'react';
import axios from 'axios';

const IssueBook = () => {
  const [details, setDetails] = useState({ rollNo: '', isbn: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');

  const handleIssue = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:5000/admin/issue',
        {
          studentRollNo: details.rollNo,
          isbn: details.isbn
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(response.data.message || '✅ Book issued successfully!');
    } catch (error) {
      console.error("❌ Error:", error);
      setMessage(error.response?.data?.message || '❌ Error issuing book');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EFE8] via-[#C0D9E6] to-[#F5EFE8] flex justify-center items-center p-8">
      <div className="w-full max-w-md bg-white/40 backdrop-blur-lg border border-[#C0D9E6] rounded-3xl p-8 shadow-xl shadow-[#C0D9E6]/60">
        <h2 className="text-3xl font-bold text-[#2F4156] text-center mb-8 drop-shadow">
          📥 Issue Book
        </h2>

        <div className="space-y-6">
          <div>
            <label htmlFor="rollNo" className="block text-[#2F4156] font-medium mb-1">
              Student Roll Number
            </label>
            <input
              id="rollNo"
              type="text"
              placeholder="Enter Roll Number"
              value={details.rollNo}
              onChange={(e) => setDetails({ ...details, rollNo: e.target.value })}
              className="w-full px-4 py-3 border border-[#C0D9E6] rounded-xl text-[#2F4156] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#576C8D]"
            />
          </div>

          <div>
            <label htmlFor="isbn" className="block text-[#2F4156] font-medium mb-1">
              Book ISBN
            </label>
            <input
              id="isbn"
              type="text"
              placeholder="Enter Book ISBN"
              value={details.isbn}
              onChange={(e) => setDetails({ ...details, isbn: e.target.value })}
              className="w-full px-4 py-3 border border-[#C0D9E6] rounded-xl text-[#2F4156] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#576C8D]"
            />
          </div>

          <button
            onClick={handleIssue}
            className="w-full py-3 bg-[#576C8D] hover:bg-[#2F4156] text-white font-semibold rounded-xl transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
            disabled={loading || !details.rollNo || !details.isbn}
          >
            {loading ? 'Issuing...' : '📤 Issue Book'}
          </button>

          {message && (
            <p className={`text-center mt-4 font-semibold ${message.includes('❌') ? 'text-red-600' : 'text-green-700'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default IssueBook;

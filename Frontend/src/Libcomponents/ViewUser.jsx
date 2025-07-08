import { useState } from 'react';
import axios from 'axios';

const ViewUser = () => {
  const [rollNo, setRollNo] = useState('');
  const [studentName, setStudentName] = useState('');
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');

      const res = await axios.post(
        'http://localhost:5000/admin/user',
        { rollNo, name: studentName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProfile(res.data.user);
    } catch (error) {
      alert('❌ Failed to fetch user');
      console.error(error);
    }
  };

  const formatDate = (date) => {
    const newDate = new Date(date);
    if (newDate.toString() === 'Invalid Date') return 'Invalid Date';
    return newDate.toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EFE8] via-[#C0D9E6] to-[#F5EFE8] px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-lg border border-[#C0D9E6] p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-[#2F4156] mb-8">
          👤 View Student Profile
        </h2>

        {/* Input Fields */}
        <div className="space-y-5">
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="🎓 Roll Number"
            className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#C0D9E6] text-[#2F4156] placeholder:text-[#576C8D] focus:outline-none focus:ring-2 focus:ring-[#576C8D] transition-all duration-200"
          />
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="📝 Student Name"
            className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#C0D9E6] text-[#2F4156] placeholder:text-[#576C8D] focus:outline-none focus:ring-2 focus:ring-[#576C8D] transition-all duration-200"
          />
          <button
            onClick={fetchProfile}
            disabled={!rollNo || !studentName}
            className="w-full bg-[#576C8D] hover:bg-[#2F4156] text-white font-semibold py-3 rounded-xl transition duration-300 disabled:opacity-50"
          >
            🔍 View Profile
          </button>
        </div>

        {/* Profile Display */}
        {profile && (
          <div className="mt-10 bg-white/50 backdrop-blur-xl border border-[#C0D9E6] p-6 rounded-2xl shadow-md space-y-3">
            <p className="text-lg text-[#2F4156]"><strong>Name:</strong> {profile.name}</p>
            <p className="text-lg text-[#2F4156]"><strong>Email:</strong> {profile.email}</p>
            <p className="text-lg text-[#2F4156]"><strong>Roll No:</strong> {profile.rollNo}</p>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-[#2F4156] mb-2">📚 Borrowed Books</h3>
              <ul className="max-h-64 overflow-y-auto space-y-4 pr-2">
                {profile.borrowedBooks && profile.borrowedBooks.length > 0 ? (
                  profile.borrowedBooks.map((entry, index) => (
                    <li key={index} className="bg-white/70 border border-[#C0D9E6] p-4 rounded-xl shadow-sm">
                      <p className="font-semibold text-[#2F4156]">
                        {entry.book?.title || 'Unknown Title'}
                      </p>
                      <p className="text-sm text-[#2F4156]">
                        📅 Borrowed: {formatDate(entry.borrowDate)}<br />
                        📆 Due: {formatDate(entry.dueDate)}<br />
                        ✅ Returned: {entry.returnDate && entry.returnDate !== 'null' ? formatDate(entry.returnDate) : 'Not returned'}<br />
                        💸 Fine: ₹{entry.fine}
                      </p>
                    </li>
                  ))
                ) : (
                  <li className="text-[#2F4156]">No borrowed books</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewUser;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentProfile = () => {
  const [student, setStudent] = useState(null);
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const checkOverdue = (dueDate) => {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date();
  };

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/student/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setStudent(response.data.user);
        setIssuedBooks(response.data.user.borrowedBooks || []);
      } catch (err) {
        console.error('Error fetching student data:', err);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  if (loading) return <div className="text-center text-lg text-[#2F4156]">Loading...</div>;
  if (error) return <div className="text-center text-lg text-red-500">{error}</div>;
  if (!student) return <div className="text-center text-lg text-red-500">No student data found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EFE8] via-[#C0D9E6] to-[#F5EFE8] p-8">
      <h2 className="text-4xl font-bold text-center text-[#2F4156] mb-12 drop-shadow">
        👤 Student Profile
      </h2>

      {/* Student Info */}
      <div className="max-w-3xl mx-auto bg-white/40 backdrop-blur-lg border border-[#C0D9E6] p-8 rounded-3xl shadow-lg mb-12">
        <p className="text-lg text-[#2F4156] mb-2">
          <strong>Name:</strong> {student.name}
        </p>
        <p className="text-lg text-[#2F4156] mb-2">
          <strong>Email:</strong> {student.email}
        </p>
        <p className="text-lg text-[#2F4156] mb-2">
          <strong>Roll Number:</strong> {student.rollNo || 'N/A'}
        </p>
        <p className="text-lg text-[#2F4156] mb-2">
          <strong>Department:</strong> {student.department || 'N/A'}
        </p>
      </div>

      {/* Issued Books */}
      <h3 className="text-3xl font-bold text-center text-[#2F4156] mb-8 drop-shadow">
        📚 Issued Books
      </h3>

      {issuedBooks.length === 0 ? (
        <p className="text-center text-lg text-[#2F4156]">No books issued yet.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {issuedBooks.map((borrowed, index) => (
            <li
              key={index}
              className="bg-white/60 backdrop-blur-md border border-[#C0D9E6] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-[#2F4156] mb-3">
                {borrowed.book?.title || 'Unknown Title'}
              </h3>
              <p className="text-[#2F4156] mb-1">
                <strong>Genre:</strong> {borrowed.book?.genre || 'No Genre'}
              </p>
              <p className="text-[#2F4156] mb-1">
                📅 <strong>Issued:</strong> {borrowed.borrowDate ? new Date(borrowed.borrowDate).toLocaleDateString() : 'N/A'}
              </p>
              <p className="text-[#2F4156] mb-1">
                📆 <strong>Due:</strong> {borrowed.dueDate ? new Date(borrowed.dueDate).toLocaleDateString() : 'N/A'}
              </p>
              {checkOverdue(borrowed.dueDate) ? (
                <p className="text-red-600 font-semibold mt-2">
                  ⚠ Overdue! Fine: ₹{borrowed.fine || 0}
                </p>
              ) : (
                <p className="text-green-600 font-semibold mt-2">✅ On time</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentProfile;

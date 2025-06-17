import { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    totalCopies: ''
  });
  const [isbnInput, setIsbnInput] = useState('');

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const total = parseInt(book.totalCopies);
    const isbnArray = isbnInput.split(',').map(s => s.trim()).filter(Boolean);

    if (isbnArray.length !== total) {
      alert(`❌ Enter exactly ${total} ISBNs separated by commas`);
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('❌ No token found. Please log in first.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/admin/add',
        {
          ...book,
          totalCopies: total,
          isbn: isbnArray
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert('✅ Book added successfully');
      setBook({ title: '', author: '', genre: '', totalCopies: '' });
      setIsbnInput('');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('❌ Unauthorized: Please log in again');
      } else {
        alert('❌ Error adding book');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#F5EFE8] via-[#C0D9E6] to-[#F5EFE8] py-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-10 rounded-3xl shadow-2xl border border-[#C0D9E6] bg-white/80 backdrop-blur-md relative overflow-hidden"
      >
        {/* Ring-like glow */}
        <div className="absolute -inset-1 rounded-[2rem] border-2 border-[#C0D9E6] blur-[3px] opacity-40 animate-pulse"></div>

        <h2 className="relative z-10 text-3xl font-bold text-center text-[#2F4156] mb-10">
          📘 Add New Book
        </h2>

        <div className="relative z-10 space-y-5">
          {['title', 'author', 'genre', 'totalCopies'].map((field) => (
            <input
              key={field}
              name={field}
              type={field === 'totalCopies' ? 'number' : 'text'}
              placeholder={
                field === 'totalCopies' ? 'Total Copies' : field.charAt(0).toUpperCase() + field.slice(1)
              }
              value={book[field]}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/90 shadow-md border border-[#C0D9E6] text-[#2F4156] focus:outline-none focus:ring-4 focus:ring-[#576C8D] transition"
            />
          ))}

          <textarea
            placeholder="Enter ISBNs (comma separated)"
            value={isbnInput}
            onChange={(e) => setIsbnInput(e.target.value)}
            rows={3}
            className="w-full p-4 rounded-xl bg-white/90 shadow-md border border-[#C0D9E6] text-[#2F4156] focus:outline-none focus:ring-4 focus:ring-[#576C8D] transition"
          />

          <button
            type="submit"
            className="w-full bg-[#576C8D] text-white py-3 rounded-xl font-semibold shadow-xl hover:bg-[#2F4156] transition duration-300"
          >
            ➕ Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;

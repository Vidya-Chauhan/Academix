import { useState } from 'react';
import axios from 'axios';

const UpdateBook = () => {
  const [form, setForm] = useState({
    isbn: '',
    title: '',
    author: '',
    genre: ''
  });

  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const { isbn, title, author, genre } = form;

    if (!isbn || !title || !author || !genre) {
      alert("❗ Please fill in all fields");
      return;
    }

    try {
      const response = await axios.put(
        'http://localhost:5000/admin/update',
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );

      alert(`✅ ${response.data.message || 'Book updated successfully'}`);
      setForm({ isbn: '', title: '', author: '', genre: '' });
    } catch (error) {
      alert('❌ Update failed');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5EFE8] via-[#C0D9E6] to-[#F5EFE8] px-4 py-10">
      <div className="w-full max-w-xl bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-[#C0D9E6]">
        <h2 className="text-3xl font-bold text-center text-[#2F4156] mb-8 drop-shadow">
          🔄 Update Book Details
        </h2>

        <div className="space-y-5">
          <input
            name="isbn"
            value={form.isbn}
            onChange={handleChange}
            placeholder="Enter ISBN"
            className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#C0D9E6] text-[#2F4156] placeholder:text-[#576C8D] focus:outline-none focus:ring-2 focus:ring-[#576C8D] transition-all duration-200"
          />
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="New Title"
            className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#C0D9E6] text-[#2F4156] placeholder:text-[#576C8D] focus:outline-none focus:ring-2 focus:ring-[#576C8D] transition-all duration-200"
          />
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="New Author"
            className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#C0D9E6] text-[#2F4156] placeholder:text-[#576C8D] focus:outline-none focus:ring-2 focus:ring-[#576C8D] transition-all duration-200"
          />
          <input
            name="genre"
            value={form.genre}
            onChange={handleChange}
            placeholder="New Genre"
            className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#C0D9E6] text-[#2F4156] placeholder:text-[#576C8D] focus:outline-none focus:ring-2 focus:ring-[#576C8D] transition-all duration-200"
          />
        </div>

        <button
          onClick={handleUpdate}
          className="mt-6 w-full py-3 bg-[#576C8D] hover:bg-[#2F4156] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
        >
          🔁 Update Book
        </button>
      </div>
    </div>
  );
};

export default UpdateBook;

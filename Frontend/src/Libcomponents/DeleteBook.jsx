import { useState } from 'react';
import axios from 'axios';

const DeleteBook = () => {
  const [isbn, setIsbn] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const token = localStorage.getItem('token');

  const handleDelete = async () => {
    if (!isbn || !title || !author) {
      alert('❗Please fill in all fields: ISBN, Title, and Author');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:5000/admin/delete/${isbn}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: {
          title,
          author,
        },
      });

      alert(`✅ ${response.data.message}`);
      setIsbn('');
      setTitle('');
      setAuthor('');
    } catch (error) {
      alert('❌ Failed to delete book');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5EFE8] via-[#C0D9E6] to-[#F5EFE8] px-6 py-12">
      <div className="w-full max-w-md p-8 bg-white/70 backdrop-blur-md rounded-3xl border border-[#C0D9E6] shadow-2xl shadow-teal-200">
        <h2 className="text-3xl font-bold text-center text-[#2F4156] mb-8 drop-shadow-sm">
          🗑️ Delete Book
        </h2>

        <div className="space-y-6">
          <div>
            <label htmlFor="isbn" className="block text-[#2F4156] font-medium mb-1">ISBN</label>
            <input
              id="isbn"
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              placeholder="Enter ISBN"
              className="w-full px-4 py-3 border border-[#C0D9E6] rounded-lg text-[#2F4156] focus:outline-none focus:ring-2 focus:ring-[#576C8D] bg-white/90"
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-[#2F4156] font-medium mb-1">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title"
              className="w-full px-4 py-3 border border-[#C0D9E6] rounded-lg text-[#2F4156] focus:outline-none focus:ring-2 focus:ring-[#576C8D] bg-white/90"
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-[#2F4156] font-medium mb-1">Author</label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter Author"
              className="w-full px-4 py-3 border border-[#C0D9E6] rounded-lg text-[#2F4156] focus:outline-none focus:ring-2 focus:ring-[#576C8D] bg-white/90"
            />
          </div>

          <button
            onClick={handleDelete}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-red-300"
          >
            ❌ Delete Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;

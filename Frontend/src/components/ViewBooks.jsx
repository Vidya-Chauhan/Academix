import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/admin/view-books', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache',
          },
        });

        setBooks(response.data.books || []);
      } catch (error) {
        console.error('Error fetching books:', error);
        setBooks([]);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EFE8] via-[#C0D9E6] to-[#F5EFE8] px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-[#2F4156] mb-12">
        📖 All Books in Library
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.length === 0 ? (
          <li className="col-span-full text-center text-lg text-[#576C8D]">
            No books available.
          </li>
        ) : (
          books.map((book) => (
            <li
              key={book._id}
              className="bg-white/70 border border-[#C0D9E6] backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-[#2F4156] mb-3">
                {book.title}
              </h3>
              <p className="text-[#2F4156]"><strong>Author:</strong> {book.author}</p>
              <p className="text-[#2F4156]"><strong>Genre:</strong> {book.genre}</p>
              <p className="text-[#2F4156]"><strong>ISBN:</strong> {book.isbn?.join(', ')}</p>
              <p className="text-[#2F4156]"><strong>Total Copies:</strong> {book.totalCopies}</p>
              <p className="text-[#2F4156]"><strong>Available:</strong> {book.availableCopies}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ViewBooks;

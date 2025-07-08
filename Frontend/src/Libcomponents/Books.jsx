import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books', {
          headers: {
            'Cache-Control': 'no-cache',
          },
        });
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
        setBooks([]);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen py-12 px-6 bg-gradient-to-br from-[#F5EFE8] via-[#C0D9E6] to-[#F5EFE8]">
      <h1 className="text-4xl font-bold text-center text-[#2F4156] mb-12 drop-shadow-md">
        📚 Library Books
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-[#C0D9E6] transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-[#2F4156] mb-2">
              {book.title}
            </h2>
            <p className="text-[#576C8D]">
              <strong>Author:</strong> {book.author}
            </p>
            <p className="text-[#576C8D]">
              <strong>Genre:</strong> {book.genre}
            </p>
            <p className="text-[#576C8D]">
              <strong>Total Copies:</strong> {book.totalCopies}
            </p>
            <p className="text-[#576C8D]">
              <strong>Available:</strong> {book.availableCopies}
            </p>

            <p
              className={`mt-3 text-lg font-bold ${
                book.availableCopies > 0
                  ? 'text-green-600 drop-shadow-sm'
                  : 'text-red-600 drop-shadow-sm'
              }`}
            >
              {book.availableCopies > 0 ? '✅ Available' : '❌ Not Available'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

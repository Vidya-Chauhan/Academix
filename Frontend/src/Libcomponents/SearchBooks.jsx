import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const SearchBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [userRole, setUserRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm.trim());
    }, 400);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserRole(decoded?.role);
      } catch (err) {
        console.error('Error decoding token:', err);
        setUserRole('');
      }
    }
  }, []);

  useEffect(() => {
    if (!userRole) return;

    const fetchAllBooks = async () => {
      try {
        const token = localStorage.getItem('token');
        const url =
          userRole === 'admin'
            ? 'http://localhost:5000/admin/search'
            : 'http://localhost:5000/student/search';

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
          },
        });

        const allFetchedBooks = response.data.books || [];
        setAllBooks(allFetchedBooks);
        setBooks(allFetchedBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
        setAllBooks([]);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBooks();
  }, [userRole]);

  useEffect(() => {
    if (!debouncedSearchTerm) {
      setBooks(allBooks);
      return;
    }

    const term = debouncedSearchTerm.toLowerCase();

    const sortedBooks = [...allBooks].sort((a, b) => {
      const aMatch =
        a.title?.toLowerCase().includes(term) ||
        a.author?.toLowerCase().includes(term) ||
        a.genre?.toLowerCase().includes(term);

      const bMatch =
        b.title?.toLowerCase().includes(term) ||
        b.author?.toLowerCase().includes(term) ||
        b.genre?.toLowerCase().includes(term);

      if (aMatch && !bMatch) return -1;
      if (!aMatch && bMatch) return 1;
      return 0;
    });

    setBooks(sortedBooks);
  }, [debouncedSearchTerm, allBooks]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#C0D9E6] to-[#F5EFE8] p-8">
      <h2 className="text-4xl font-extrabold text-center text-[#2F4156] mb-10">
        📚 Search Books
      </h2>

      <div className="flex justify-center items-center mb-10">
        <input
          type="text"
          placeholder="Search by title, author, genre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-6 py-3 rounded-2xl border-2 border-[#576C8D] text-[#2F4156] bg-white/60 backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-[#2F4156] shadow-md transition duration-300"
        />
      </div>

      {loading ? (
        <p className="text-center text-[#576C8D] text-lg">Loading books...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.length === 0 ? (
            <li className="col-span-full text-center text-lg text-[#2F4156] font-medium">
              No books found. Try a different search!
            </li>
          ) : (
            books.map((book) => (
              <li
                key={book._id}
                className="bg-white/80 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition duration-300"
              >
                <h3 className="text-2xl font-bold text-[#2F4156] mb-2">{book.title}</h3>
                <p className="text-[#576C8D]"><strong>Author:</strong> {book.author}</p>
                <p className="text-[#576C8D]"><strong>Genre:</strong> {book.genre}</p>
                <p className="text-[#576C8D]"><strong>ISBN:</strong> {book.isbn?.join(', ')}</p>
                <p className="text-[#576C8D]"><strong>Total Copies:</strong> {book.totalCopies}</p>
                <p className="text-[#576C8D]"><strong>Available:</strong> {book.availableCopies}</p>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBooks;

import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import AddBook from './AddBook';
import DeleteBook from './DeleteBook';
import UpdateBook from './UpdateBook';
import ViewUser from './ViewUser';
import SearchBooks from './SearchBooks';
import IssueBook from './IssueBook';
import ReturnBook from './ReturnBook';
import ViewBooks from './ViewBooks';

const AdminDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-[#F5EFE8] via-[#C0D9E6] to-[#F5EFE8] text-[#2F4156]">
      {/* Sidebar */}
      <aside className="w-1/4 bg-[#2F4156] p-6 space-y-6 shadow-2xl rounded-r-3xl">
        <h2 className="text-3xl font-extrabold text-white tracking-wide mb-4">📚 Admin Panel</h2>
        <ul className="space-y-4">
          {[
            { path: 'add-book', label: '➕ Add Book' },
            { path: 'delete-book', label: '🗑️ Delete Book' },
            { path: 'update-book', label: '✏️ Update Book' },
            { path: 'search-books', label: '🔍 Search Books' },
            { path: 'books', label: '📘 View All Books' },
            { path: 'view-user', label: '👤 View Users' },
            { path: 'issue-book', label: '📤 Issue Book' },
            { path: 'return-book', label: '📥 Return Book' }
          ].map(({ path, label }) => (
            <li key={path}>
              <Link
                to={`/admin-dashboard/${path}`}
                className="block w-full px-5 py-3 bg-[#576C8D] text-white rounded-xl text-sm font-semibold shadow-md hover:bg-[#435a78] transition-all duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={handleLogout}
          className="mt-8 w-full py-2 px-4 bg-red-500 text-white rounded-xl font-semibold shadow hover:bg-red-600 transition"
        >
          🚪 Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-8 overflow-y-auto bg-white rounded-l-3xl shadow-inner">
        <h3 className="text-3xl font-bold text-[#2F4156] mb-6">📖 Admin Dashboard</h3>
        <div className="bg-white border border-[#C0D9E6] shadow-xl rounded-2xl p-6">
          <Routes>
            <Route path="add-book" element={<AddBook />} />
            <Route path="delete-book" element={<DeleteBook />} />
            <Route path="update-book" element={<UpdateBook />} />
            <Route path="search-books" element={<SearchBooks />} />
            <Route path="books" element={<ViewBooks />} />
            <Route path="view-user" element={<ViewUser />} />
            <Route path="issue-book" element={<IssueBook />} />
            <Route path="return-book" element={<ReturnBook />} />
            <Route
              path="/"
              element={
                <h2 className="text-xl text-[#576C8D]">
                  Welcome to the Admin Dashboard!
                </h2>
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

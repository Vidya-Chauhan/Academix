import { Link, Outlet } from "react-router-dom";

const StudentDashboard = ({ onLogout }) => {
  return (
    <div className="flex h-screen w-screen bg-gradient-to-br from-[#C0D9E6] to-[#F5EFE8] text-[#2F4156] font-sans">

      {/* Sidebar */}
      <div className="w-1/5 bg-white/10 backdrop-blur-md p-6 shadow-xl border-r border-white/20 flex flex-col justify-between rounded-r-2xl">
        <div>
          <h2 className="text-3xl font-extrabold font-serif text-center text-[#2F4156] mb-8 tracking-wide">
            📚 Library Portal
          </h2>
          <nav className="space-y-5">
            <Link 
              to="/student-dashboard/search-books"
              className="block px-4 py-3 rounded-lg bg-[#576C8D] text-white hover:bg-[#6f84a5] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              🔍 Search Books
            </Link>
            <Link 
              to="/student-dashboard/profile"
              className="block px-4 py-3 rounded-lg bg-[#2F4156] text-white hover:bg-[#3a516f] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              👤 Profile
            </Link>
            <Link 
              to="/student-dashboard/dues"
              className="block px-4 py-3 rounded-lg bg-[#FFC107] text-[#2F4156] hover:bg-[#ffca28] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              💰 Check Dues
            </Link>
          </nav>
        </div>

        <button
          onClick={onLogout}
          className="w-full mt-6 bg-[#d32f2f] text-white py-3 rounded-lg hover:bg-[#c62828] transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
        >
          🚪 Logout
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-4/5 p-8 overflow-y-auto">
        <div className="animate-fadeIn h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

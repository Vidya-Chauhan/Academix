// import React, { useEffect, useState } from 'react';
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 p-4 flex justify-between items-center transition-all duration-500 ${
//         isScrolled
//           ? "bg-white text-green-900 shadow-md py-2"
//           : "bg-gradient-to-r from-[#14532d] to-[#4d5f28] text-white py-3"
//       }`}
//     >
//       {/* Logo */}
//       <div className="flex items-center">
//         <img
//           src="src/assets/NitLogo.webp"
//           alt="Library Logo"
//           className="h-16 w-28 mr-3 transition-transform duration-300 hover:scale-105 rounded-lg shadow-md"
//         />
//         <div>
//           <h1 className="text-2xl font-semibold tracking-wide">NIT Uttarakhand</h1>
//           <p className="text-md font-medium italic">Welcome to NITUK Library 📖</p>
//         </div>
//       </div>

//       {/* Nav Links */}
//       <div className="space-x-6 text-base flex items-center font-medium">
//         {["Home", "About", "Others", "Contact"].map((item) => (
//           <NavLink
//     key={item}
//     to={`/${item.toLowerCase()}`}
//     className={({ isActive }) =>
//       `relative group px-1 transition-colors duration-300 ${
//         isActive ? "text-lime-100 underline" : ""
//       }`
//     }
//   >
//     <span className="group-hover:text-lime-100">{item}</span>
//   </NavLink>
//         ))}

//         {/* Login Button */}
//         <Link
//           to="/login"
//           className="bg-white text-green-800 font-semibold px-4 py-2 rounded-xl shadow-md hover:bg-green-100 transition duration-300 transform hover:scale-105"
//         >
//           Login
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-3 flex justify-between items-center transition-all duration-500 ${
        isScrolled
          ? "bg-white text-[#2F4156] shadow-md py-2"
          : "bg-[#2F4156] text-white"
      }`}
    >
      {/* Logo + Text */}
      <div className="flex items-center gap-3">
        <img
          src="src/assets/NitLogo.webp"
          alt="Library Logo"
          className="h-14 w-24 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-[#C0D9E6]">NIT Uttarakhand</h1>
          <p className="text-sm md:text-base text-[#F5EEEB] italic">Welcome to NITUK Library 📖</p>
        </div>
      </div>

      {/* Nav Links */}
      <div className="space-x-5 text-sm md:text-base flex items-center font-medium">
        {["Home", "About", "Others", "Contact"].map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `relative group px-1 transition duration-300 ${
                isActive ? "text-[#C0D9E6] underline underline-offset-4" : "text-white"
              }`
            }
          >
            <span className="group-hover:text-[#C0D9E6]">{item}</span>
          </NavLink>
        ))}

        {/* Login Button */}
        <Link
          to="/login"
          className="bg-[#C0D9E6] text-[#2F4156] px-4 py-2 rounded-xl shadow-md font-semibold hover:bg-[#A7CDE3] transition duration-300 transform hover:scale-105"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../compo/Navbar";
import Footer from "../compo/Footer";
import bookShelves from "../assets/book-shelves.jpg";
import { Link } from "react-router-dom";


export default function Library() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section with Gradient Overlay */}
      <div
        className="relative h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center text-white px-4"
        style={{ backgroundImage: `url(${bookShelves})` }}
      >
        <div className="bg-gradient-to-r from-[#2F4156]/90 via-[#2F4156]/60 to-transparent p-8 rounded-xl shadow-2xl backdrop-blur-md border border-[#576C8D]/30">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#F5EFE8] drop-shadow-xl tracking-wide">
            About NIT Uttarakhand Library
          </h1>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="-mt-1">
        <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
          <path
            fill="#C0D9E6"
            d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

 {/* Login Button */}
<div
  className="flex justify-center items-center py-16 bg-[#F5EFE8]"
  data-aos="zoom-in"
>
  <div className="backdrop-blur-md bg-white/20 border border-[#C0D9E6]/30 shadow-2xl rounded-3xl p-8 w-[320px] text-center space-y-4">
    <h2 className="text-xl font-bold text-[#2F4156]">🔐 Members Only</h2>
    <p className="text-[#2F4156] text-sm">
      Login to access exclusive library content, your prifile & dues.
    </p>
    <Link
      to="/login"
      className="inline-block bg-[#2F4156] text-white px-6 py-3 rounded-full font-semibold tracking-wide shadow-md hover:bg-[#3a5770] hover:scale-105 transition-all duration-300"
    >
      Login Now
    </Link>
  </div>
</div>


      {/* Main Content Container */}
      <div className="bg-[#F5EFE8] px-6 pt-12 pb-20 text-[#2F4156]">

        {/* 📚 Overview */}
        <section
          className="bg-white rounded-2xl p-10 mb-16 max-w-5xl mx-auto shadow-lg border border-[#C0D9E6]/60 hover:shadow-xl transition-all"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-[#2F4156] mb-4 border-b-2 border-[#C0D9E6] w-fit pb-1">
            📚 Overview
          </h2>
          <p className="leading-relaxed text-[#2F4156] text-lg">
            The Central Library of <strong>NIT Uttarakhand</strong> plays a vital role in academic enrichment,
            offering access to a diverse collection of technical, scientific, and general literature. 
            It supports students, faculty, and researchers through journals, books, digital resources, 
            and a calm space for learning.
            <br /><br />
            With structured policies and extended hours, the library fosters an accessible 
            and disciplined knowledge space for the institute community.
          </p>
        </section>

        {/* 📖 Borrowing Rules */}
        <section
          className="bg-white rounded-2xl p-10 mb-16 max-w-5xl mx-auto shadow-lg border border-[#C0D9E6]/60 hover:shadow-xl transition-all"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-[#2F4156] mb-4 border-b-2 border-[#C0D9E6] w-fit pb-1">
            📖 Borrowing Rules
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Return unused books to the corridor table.</li>
            <li>Inspect books before borrowing – users are liable for damage.</li>
            <li>Late returns attract fines; return books in original condition.</li>
            <li>ID card is mandatory for borrowing.</li>
            <li>Dues must be cleared each semester.</li>
            <li>Fiction books are issued for 7 days only.</li>
          </ul>
        </section>

        {/* ⏰ Library Hours */}
        <section
          className="bg-white rounded-2xl p-10 mb-16 max-w-5xl mx-auto shadow-lg border border-[#C0D9E6]/60 hover:shadow-xl transition-all"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-[#2F4156] mb-4 border-b-2 border-[#C0D9E6] w-fit pb-1">
            ⏰ Library Hours
          </h2>
          <p className="text-lg leading-relaxed">
            Open on all weekdays except national/social holidays like Holi, Diwali, Republic Day, etc.
            <br /><br />
            <strong>Timings:</strong><br />
            🗓 Monday to Friday: 08:00 AM – 08:00 PM<br />
            🗓 Saturday & Sunday: 09:00 AM – 06:00 PM
          </p>
        </section>

        {/* 🧾 Membership */}
        <section
          className="bg-white rounded-2xl p-10 mb-10 max-w-5xl mx-auto shadow-lg border border-[#C0D9E6]/60 hover:shadow-xl transition-all"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-[#2F4156] mb-4 border-b-2 border-[#C0D9E6] w-fit pb-1">
            🧾 Membership Details
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-[#C0D9E6]">
              <thead className="bg-[#576C8D] text-white">
                <tr>
                  <th className="py-3 px-4">Members</th>
                  <th className="py-3 px-4">Books</th>
                  <th className="py-3 px-4">Duration</th>
                </tr>
              </thead>
              <tbody className="bg-[#F5EFE8] text-[#2F4156]">
                <tr className="border-t border-[#C0D9E6]">
                  <td className="py-3 px-4">Faculty</td>
                  <td className="py-3 px-4">10</td>
                  <td className="py-3 px-4">1 Semester</td>
                </tr>
                <tr className="border-t border-[#C0D9E6] bg-white">
                  <td className="py-3 px-4">Students</td>
                  <td className="py-3 px-4">5</td>
                  <td className="py-3 px-4">15 Days</td>
                </tr>
                <tr className="border-t border-[#C0D9E6]">
                  <td className="py-3 px-4">Scholars</td>
                  <td className="py-3 px-4">4</td>
                  <td className="py-3 px-4">1 Month</td>
                </tr>
                <tr className="border-t border-[#C0D9E6] bg-white">
                  <td className="py-3 px-4">Staff</td>
                  <td className="py-3 px-4">2</td>
                  <td className="py-3 px-4">1 Month</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm mt-3 text-[#576C8D]">
              * Reference books: Faculty can issue for 15 days.<br />
              ** Student count excludes book bank books.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

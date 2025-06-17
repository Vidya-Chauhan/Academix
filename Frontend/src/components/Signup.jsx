import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/Auth-Bg.webp.jpg";
import NITLogo from "../assets/NIT.jpg";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const studentPattern = /^(bt|mt|phd)\d{2}(cse|ece|eee|mech|civ)\d{3}@nituk\.ac\.in$/;
    const librarianPattern = /^librarian\d+@nituk\.ac\.in$/;
    return studentPattern.test(email.toLowerCase()) || librarianPattern.test(email.toLowerCase());
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("❌ Invalid email! Use your official college mail ID.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password
      });

      setSuccess("✅ Account created successfully! Redirecting to login...");
      setName("");
      setEmail("");
      setPassword("");

      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError("❌ " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative w-[400px] bg-white/30 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 pt-24">
        {/* Header with Logo */}
        <div className="absolute top-0 left-0 w-full bg-[#C0D9E6] rounded-t-3xl p-4 shadow-md">
          <img src={NITLogo} alt="NIT Logo" className="w-32 mx-auto rounded-xl" />
        </div>

        <h2 className="text-2xl font-bold text-center text-[#2F4156] font-serif mb-2">
          📝 Library Signup Portal
        </h2>

        {/* Alerts */}
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        {success && <p className="text-green-600 text-sm text-center mt-2">{success}</p>}

        {/* Form */}
        <form onSubmit={handleSignup} className="mt-6 space-y-5">
          <input
            type="text"
            placeholder="👤 Full Name"
            className="w-full px-4 py-3 rounded-xl bg-white text-[#2F4156] border border-[#C0D9E6] placeholder:text-[#576C8D] focus:outline-none focus:ring-2 focus:ring-[#576C8D] transition-all duration-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="📧 College Email"
            className="w-full px-4 py-3 rounded-xl bg-white text-[#2F4156] border border-[#C0D9E6] placeholder:text-[#576C8D] focus:outline-none focus:ring-2 focus:ring-[#576C8D] transition-all duration-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="🔒 Password"
            className="w-full px-4 py-3 rounded-xl bg-white text-[#2F4156] border border-[#C0D9E6] placeholder:text-[#576C8D] focus:outline-none focus:ring-2 focus:ring-[#576C8D] transition-all duration-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-[#2F4156] text-white font-semibold rounded-xl hover:bg-[#576C8D] transition-transform transform hover:scale-105 shadow-md"
          >
            🚀 Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-[#2F4156] mt-6 text-center">
          Already registered?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 font-medium hover:underline"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;

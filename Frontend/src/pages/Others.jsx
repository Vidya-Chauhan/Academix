
// import { useState } from "react";
// import Navbar from "../compo/Navbar";
// import Footer from "../compo/Footer";

// export default function Others() {
//   const [suggestions, setSuggestions] = useState([]);
//   const [formData, setFormData] = useState({ bookName: "", author: "", genre: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSuggestions([...suggestions, formData]);
//     setFormData({ bookName: "", author: "", genre: "" }); // Reset form
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="p-8">
//         {/* Online Resources */}
//         <section className="my-12 p-6 border-2 border-green-500 rounded-lg bg-green-50" data-aos="fade-up">
//           <h2 className="text-4xl font-bold mb-6 border-b-4 border-green-300 inline-block text-shadow-md">🌐 Online Resources</h2>
//           <ul className="list-disc ml-8 mt-4 space-y-2">
//             <li><a className="hover:underline text-green-300 text-lg transition-all duration-300 hover:text-green-500" href="https://www.gutenberg.org/" target="_blank">Project Gutenberg</a></li>
//             <li><a className="hover:underline text-green-300 text-lg transition-all duration-300 hover:text-green-500" href="https://openlibrary.org/" target="_blank">Open Library</a></li>
//             <li><a className="hover:underline text-green-300 text-lg transition-all duration-300 hover:text-green-500" href="https://books.google.com/" target="_blank">Google Books</a></li>
//             <li><a className="hover:underline text-green-300 text-lg transition-all duration-300 hover:text-green-500" href="https://www.pdfdrive.com/" target="_blank">PDF Drive</a></li>
//             <li><a className="hover:underline text-green-300 text-lg transition-all duration-300 hover:text-green-500" href="https://scholar.google.com/" target="_blank">Google Scholar</a></li>
//           </ul>
//         </section>

//         {/* Study Resources */}
//         <section className="my-12 p-6 border-2 border-green-500 rounded-lg bg-green-50" data-aos="fade-up">
//           <h2 className="text-4xl font-bold mb-6 border-b-4 border-green-300 inline-block text-shadow-md">🎓 Study Resources</h2>
//           <ul className="list-disc ml-8 mt-4 space-y-3 text-lg">
//             <li>📖 Practice active reading — highlight important ideas and take quick notes.</li>
//             <li>⏰ Use Pomodoro Technique — 25 mins focus + 5 mins short break = 1 cycle.</li>
//             <li>🧠 Summarize each chapter in your own words after reading.</li>
//             <li>📅 Plan a simple weekly reading schedule — consistency beats cramming.</li>
//             <li>🎯 Set small achievable goals: "Finish 30 pages today" instead of "Read whole book."</li>
//             <li>📝 Try making flashcards for important terms or facts.</li>
//             <li>🤝 Discuss what you learned with friends to reinforce memory.</li>
//             <li>📚 Read a mix of textbooks + real-world application books for deeper understanding.</li>
//             <li>🎧 Try audiobooks for revision when you're on a walk or resting.</li>
//           </ul>
//         </section>

//         {/* Suggest a Book */}
//         <section className="my-12 p-6 border-2 border-green-500 rounded-lg bg-green-50" data-aos="fade-up">
//           <h2 className="text-4xl font-bold mb-6 border-b-4 border-green-300 inline-block text-shadow-md">📝 Suggest a Book</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Book Name"
//               className="border border-green-400 bg-white text-green-800 p-4 w-full rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
//               value={formData.bookName}
//               onChange={(e) => setFormData({ ...formData, bookName: e.target.value })}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Author Name"
//               className="border border-green-400 bg-white text-green-800 p-4 w-full rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
//               value={formData.author}
//               onChange={(e) => setFormData({ ...formData, author: e.target.value })}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Genre"
//               className="border border-green-400 bg-white text-green-800 p-4 w-full rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
//               value={formData.genre}
//               onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
//               required
//             />
//             <button
//               type="submit"
//               className="bg-green-400 text-black px-8 py-3 rounded-full hover:bg-green-500 font-semibold transition duration-500 shadow-md hover:shadow-lg"
//             >
//               Submit
//             </button>
//           </form>

//           {/* Show all suggestions */}
//           <div className="mt-8">
//             <h3 className="text-3xl font-semibold mb-4 text-shadow-md">📚 Books Suggested by Others</h3>
//             {suggestions.length === 0 ? (
//               <p className="text-xl">No suggestions yet! Be the first to suggest 📖.</p>
//             ) : (
//               <ul className="list-disc ml-8 space-y-2 text-lg">
//                 {suggestions.map((suggestion, index) => (
//                   <li key={index} className="hover:text-green-400 transition-all duration-300">
//                     <strong>{suggestion.bookName}</strong> by {suggestion.author} <em>({suggestion.genre})</em>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </section>

//         {/* Developed By */}
//         <section className="text-center my-16 p-6 border-2 border-green-500 rounded-lg bg-green-50" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4 border-b-4 border-green-300 inline-block text-shadow-md">💻 Project Developed By</h2>
//           <p className="text-xl mt-2">Vidya | Kajal | Lisha</p>
//         </section>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }


import { useState } from "react";
import Navbar from "../compo/Navbar";
import Footer from "../compo/Footer";

export default function Others() {
  const [suggestions, setSuggestions] = useState([]);
  const [formData, setFormData] = useState({ bookName: "", author: "", genre: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuggestions([...suggestions, formData]);
    setFormData({ bookName: "", author: "", genre: "" });
  };

  return (
    <div className="min-h-screen bg-[#F5EFE8] text-[#2F4156]">
      <Navbar />

      <div className="p-6 md:p-12 max-w-5xl mx-auto">
        {/* Online Resources */}
        <section className="my-12 p-8 rounded-2xl bg-white border border-[#C0D9E6]/50 shadow-md hover:shadow-xl transition-all" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-[#C0D9E6] w-fit pb-1">🌐 Online Resources</h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            {[
              ["Project Gutenberg", "https://www.gutenberg.org/"],
              ["Open Library", "https://openlibrary.org/"],
              ["Google Books", "https://books.google.com/"],
              ["PDF Drive", "https://www.pdfdrive.com/"],
              ["Google Scholar", "https://scholar.google.com/"]
            ].map(([text, link], i) => (
              <li key={i}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#576C8D] hover:text-[#2F4156] hover:underline transition"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Study Resources */}
        <section className="my-12 p-8 rounded-2xl bg-white border border-[#C0D9E6]/50 shadow-md hover:shadow-xl transition-all" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-[#C0D9E6] w-fit pb-1">🎓 Study Resources</h2>
          <ul className="list-disc ml-6 space-y-3 text-lg">
            <li>📖 Practice active reading — highlight important ideas and take quick notes.</li>
            <li>⏰ Use Pomodoro Technique — 25 mins focus + 5 mins short break = 1 cycle.</li>
            <li>🧠 Summarize each chapter in your own words after reading.</li>
            <li>📅 Plan a simple weekly reading schedule — consistency beats cramming.</li>
            <li>🎯 Set small achievable goals like "Finish 30 pages today".</li>
            <li>📝 Use flashcards for key terms or facts.</li>
            <li>🤝 Discuss with friends to reinforce memory.</li>
            <li>📚 Mix textbooks with real-world books for deeper insights.</li>
            <li>🎧 Try audiobooks while walking or relaxing.</li>
          </ul>
        </section>

        {/* Suggest a Book */}
        <section className="my-12 p-8 rounded-2xl bg-white border border-[#C0D9E6]/50 shadow-md hover:shadow-xl transition-all" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-[#C0D9E6] w-fit pb-1">📝 Suggest a Book</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {["Book Name", "Author Name", "Genre"].map((placeholder, index) => (
              <input
                key={index}
                type="text"
                placeholder={placeholder}
                value={formData[placeholder.toLowerCase().replace(" ", "")]}
                onChange={(e) => setFormData({ ...formData, [placeholder.toLowerCase().replace(" ", "")]: e.target.value })}
                required
                className="w-full p-4 rounded-xl border border-[#C0D9E6] bg-[#F5EFE8] text-[#2F4156] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#576C8D] transition"
              />
            ))}
            <button
              type="submit"
              className="bg-[#C0D9E6] text-[#2F4156] font-semibold py-3 px-8 rounded-full hover:bg-[#A4C2D8] transition duration-300 shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </form>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">📚 Books Suggested by Others</h3>
            {suggestions.length === 0 ? (
              <p className="text-lg">No suggestions yet! Be the first 📖</p>
            ) : (
              <ul className="list-disc ml-6 space-y-2 text-lg">
                {suggestions.map((s, i) => (
                  <li key={i}>
                    <strong>{s.bookName}</strong> by {s.author} <em>({s.genre})</em>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Credits */}
        <section className="text-center mt-20 mb-10 p-6 bg-white border border-[#C0D9E6]/50 rounded-2xl shadow hover:shadow-lg transition" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2 border-b border-[#C0D9E6] w-fit mx-auto">💻 Project Developed By</h2>
          <p className="text-lg mt-2">Vidya | Kajal | Lisha</p>
        </section>
      </div>

      <Footer />
    </div>
  );
}

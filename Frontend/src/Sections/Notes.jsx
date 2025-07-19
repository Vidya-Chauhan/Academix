import React, { useState, useEffect } from "react";
import axios from "axios";

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [uploadedNotes, setUploadedNotes] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    uploadedBy: "",
    file: null,
  });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notes");
      setUploadedNotes(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const { title, subject, uploadedBy, file } = formData;
    if (!title || !subject || !uploadedBy || !file) {
      alert("Please fill all fields.");
      return;
    }

    const uploadData = new FormData();
    uploadData.append("title", title);
    uploadData.append("subject", subject);
    uploadData.append("uploadedBy", uploadedBy);
    uploadData.append("file", file); // ✅ Must match multer field

    try {
      await axios.post("http://localhost:5000/api/notes/upload", uploadData);
      setFormData({ title: "", subject: "", uploadedBy: "", file: null });
      document.getElementById("fileInput").value = "";
      fetchNotes();
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload note.");
    }
  };

  const filteredNotes = uploadedNotes.filter((note) =>
    note.subject.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#f5efe8] flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 mb-6">
        <h1 className="text-3xl font-bold text-[#2f4156] mb-4 text-center">Notes</h1>
        <p className="text-gray-700 mb-6 text-center">
          Upload your class notes or previous year papers and share them with your peers.
        </p>

        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter note title"
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Enter subject"
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="text"
            name="uploadedBy"
            value={formData.uploadedBy}
            onChange={handleInputChange}
            placeholder="Your name or email"
            className="w-full border rounded-lg px-4 py-2"
          />

          <div className="flex items-center justify-between">
            <label className="relative cursor-pointer bg-[#2f4156] text-white px-4 py-2 rounded-lg hover:bg-[#1f2f46] transition">
              Choose File
              <input
                type="file"
                name="file"
                id="fileInput"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleInputChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </label>
            <span className="ml-4 text-sm text-gray-600 truncate w-2/3 overflow-hidden">
              {formData.file ? formData.file.name : "No file chosen"}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2f4156] text-white py-2 rounded-lg hover:bg-[#1f2f46] transition"
          >
            Upload Note
          </button>
        </form>
      </div>

      {/* Search bar */}
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-4 mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search notes by subject or topic"
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      {/* Notes display */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div
              key={note._id}
              className="bg-white p-4 rounded-lg shadow border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-[#2f4156]">
                {note.title || note.subject}
              </h2>
              <p className="text-sm text-gray-600">Subject: {note.subject}</p>
              <p className="text-sm text-gray-500">Uploaded by: {note.uploadedBy}</p>
             <button
  onClick={() => window.open(`http://localhost:5000/api/notes/view/${note._id}`, "_blank")}
  className="bg-blue-400 text-white px-3 py-1 rounded mr-2"
>
  View
</button>

              <a
                href={`http://localhost:5000/api/notes/download/${note._id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm mt-2 inline-block"
              >
                Download File
              </a>
              
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">No notes found.</p>
        )}
      </div>
    </div>
  );
};

export default Notes;

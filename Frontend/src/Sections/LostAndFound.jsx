import React, { useState, useEffect } from "react";
import axios from "axios";

const LostAndFound = () => {
  const [formData, setFormData] = useState({
    type: "Lost",
    description: "",
    contact: "",
    image: null,
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:5000/api/lostfound");
    setPosts(res.data);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("type", formData.type);
    data.append("description", formData.description);
    data.append("contact", formData.contact);
    if (formData.image) data.append("image", formData.image);

    await axios.post("http://localhost:5000/api/lostfound", data);
    fetchPosts();
    setFormData({ type: "Lost", description: "", contact: "", image: null });
  };

  return (
    <div className="min-h-screen bg-[#F5EFE8] p-6 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-3xl font-bold text-[#2F4156] mb-6 text-center">
          Lost & Found
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 mb-10">
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#C9D9E6] text-[#2F4156] focus:outline-none"
          >
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
          </select>

          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact info (email / phone)"
            className="w-full p-3 rounded-md bg-[#C9D9E6] text-[#2F4156] focus:outline-none"
          />

          <label className="block w-full cursor-pointer">
  <span className="block mb-1 text-gray-700 font-medium">Upload Image</span>
  <div className="flex items-center gap-4">
    <span className="bg-gray-200 px-4 py-2 rounded text-sm text-gray-700">
      {formData.image ? formData.image.name : "No file chosen"}
    </span>
    <span className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
      Choose File
    </span>
  </div>
  <input
    type="file"
    name="image"
    accept="image/*"
    onChange={handleChange}
    className="hidden"
  />
</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the item"
            className="w-full p-3 h-28 rounded-md bg-[#C9D9E6] text-[#2F4156] focus:outline-none resize-none"
          />

          <button
            type="submit"
            className="bg-[#5E7C8D] hover:bg-[#4b6677] text-white py-2 px-6 rounded-md transition"
          >
            Submit
          </button>
        </form>

        <div className="grid gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-[#ffffff] border border-[#C9D9E6] p-4 rounded-md shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-[#2F4156]">{post.type}</p>
                <p className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleString()}
                </p>
              </div>
              <p className="text-[#2F4156] mb-2">{post.description}</p>
              {post.image && (
                <img
                  src={`http://localhost:5000${post.image}`}
                  alt=""
                  className="rounded-md mt-2 max-h-60 object-contain"
                />
              )}
              <p className="text-sm text-[#5E7C8D] mt-2">
                Contact: {post.contact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LostAndFound;

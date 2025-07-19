import React from "react";
import axios from "axios";

const SellItemForm = ({ onItemPosted }) => {
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    price: "",
    contactInfo: "",
    category: "",
    images: [],
  });

const handleChange = (e) => {
  const { name, value, type, files } = e.target;

  if (type === "file") {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...Array.from(files)], // append new files
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        if (key === "images") val.forEach((img) => data.append("images", img));
        else data.append(key, val);
      });

      const response = await axios.post("http://localhost:5000/api/items", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      onItemPosted(response.data.item);
      setFormData({ title: "", description: "", price: "", contactInfo: "", category: "", images: [] });
      alert("Item posted successfully!");
    } catch (error) {
      console.error("Error posting item:", error);
      alert("Failed to post item. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FDFBFA] p-8 rounded-2xl shadow-xl mb-10 max-w-3xl mx-auto border border-[#C0D9E6]/40 transition-all"
    >
      <h2 className="text-3xl font-bold mb-6 text-[#2F4156] tracking-tight">🛍️ Sell an Item</h2>

      {/* Section: Item Info */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#2F4156] mb-2 border-b pb-1 border-[#C0D9E6]">
          Item Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <input
            type="text"
            name="title"
            placeholder="Item Title"
            required
            value={formData.title}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C0D9E6] bg-white placeholder:text-gray-500"
          />
          <input
            type="text"
            name="category"
            placeholder="Category (e.g., Book, Lab Coat)"
            value={formData.category}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C0D9E6] bg-white placeholder:text-gray-500"
          />
          <input
            type="text"
            name="price"
            placeholder="Price (e.g., 500)"
            value={formData.price}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C0D9E6] bg-white placeholder:text-gray-500"
          />
        </div>

        <textarea
          name="description"
          placeholder="Item Description"
          value={formData.description}
          onChange={handleChange}
          className="mt-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C0D9E6] w-full bg-white placeholder:text-gray-500"
          rows={4}
        />

        <label className="block mt-4 text-sm text-[#2F4156] font-medium">
          Upload Images
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#C0D9E6] file:text-[#2F4156] hover:file:bg-[#A7CDE3] cursor-pointer"
          />
        </label>
      </div>

      {/* Section: Seller Info */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-[#2F4156] mb-2 border-b pb-1 border-[#C0D9E6]">
          Seller Information
        </h3>
        <input
          type="text"
          name="contactInfo"
          placeholder="Contact Info (e.g., 9876543210)"
          required
          value={formData.contactInfo}
          onChange={handleChange}
          className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C0D9E6] w-full bg-white placeholder:text-gray-500"
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-[#2F4156] hover:bg-[#1f2e3e] text-white py-3 rounded-xl font-semibold shadow-md transition"
      >
        🚀 Post Your Item
      </button>
    </form>
  );
};

export default SellItemForm;

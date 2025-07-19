import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../MarketComponents/ItemCard';
import SellItemForm from '../MarketComponents/SellItemForm';
const BookMarket = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '', description: '', price: '', contactInfo: '', category: '', images: [],
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(res => setItems(res.data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? Array.from(files) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (key === 'images') val.forEach(img => data.append('images', img));
      else data.append(key, val);
    });
    try {
      const res = await axios.post('http://localhost:5000/api/items', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setItems([...items, res.data.item]);
      setFormData({ title: '', description: '', price: '', contactInfo: '', category: '', images: [] });
      setShowForm(false);
    } catch (err) {
      console.error('Post error:', err);
      alert('Failed to post item.');
    }
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-[#E9DFD1] to-[#F5EFE8] min-h-screen py-10 text-[#2F4156]">
  <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-4xl font-extrabold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#2F4156] to-[#5E8AA6]">
      Book Market
    </h1>
    <p className="text-md text-[#576C8D] mb-8 italic">Buy or sell anything — from books to lab kits.</p>

    {/* Search Bar */}
    <input
      type="text"
      placeholder="🔍 Search your needs..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full max-w-xl p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C0D9E6] bg-white/60 backdrop-blur-sm shadow-sm mb-8 placeholder:text-[#9ca3af]"
    />

    {/* Sell Button */}
    <div className="mb-8">
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-[#C0D9E6] hover:bg-[#99c5e0] text-[#2F4156] px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105"
      >
        {showForm ? 'Close Form' : 'Want to sell something?'}
      </button>
    </div>

  {/* Form */}
{showForm && <SellItemForm onItemPosted={(newItem) => setItems([...items, newItem])} />}


    {/* Items Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
  <ItemCard key={item._id} item={item} />
))}

    </div>
  </div>
</div>

  );
};

export default BookMarket;

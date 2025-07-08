import { useState } from "react";

const BookMarket = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([
        { title: "Book 1", author: "Author 1", price: "$10" },
        { title: "Book 2", author: "Author 2", price: "$15" },
        { title: "Book 3", author: "Author 3", price: "$20" },
    ]);
    
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">📚 Book Market</h2>
        <input
            type="text"
            placeholder="Search for books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <ul className="space-y-4">
            {filteredBooks.map((book, index) => (
            <li key={index} className="border-b pb-2">
                <h3 className="font-semibold">{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Price: {book.price}</p>
            </li>
            ))}
        </ul>
        </div>
    );
    }
export default BookMarket;

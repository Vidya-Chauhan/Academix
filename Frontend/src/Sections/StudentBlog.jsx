import React from "react";

const StudentBlog = () => {
   return (
        <div className="min-h-screen bg-[#f5efe8] flex items-center justify-center p-6">
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg
            p-8">
                <h1 className="text-3xl font-bold text-[#2f4156] mb-6 text-center">Student Blog</h1>
                <p className="text-gray-700 mb-4">
                    Welcome to the Student Blog section! Here, you can share your thoughts, experiences, and insights with fellow students.
                </p>
                <p className="text-gray-700 mb-4">
                    If you have a blog post to share or want to read others' posts, please fill out the form below.
                </p>
                {/* Form can be added here */}
            </div>
        </div>
    );
}
export default StudentBlog;
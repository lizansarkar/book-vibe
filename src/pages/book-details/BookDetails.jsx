import React from "react";
import { useLoaderData, useParams } from "react-router";
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';

const BookDetails = () => {
  const { id } = useParams();
  const singleBookId = parseInt(id);

  const data = useLoaderData();
  
  if (!data) {
    return <div className="text-center p-10 text-xl font-semibold">Loading book details...</div>;
  }

  const singleBookDetails = data.find((book) => book.bookId === singleBookId);
  
  if (!singleBookDetails) {
    return <div className="text-center p-10 text-xl font-semibold text-red-600">Book not found for ID: {id}</div>;
  }

  const {
    bookName,
    author,
    image,
    rating,
    yearOfPublishing,
    category,
    tags,
    description,
    totalPages, 
    publisher, 
    price = 650,
  } = singleBookDetails;

  return (
    <div className="container mx-auto p-4 lg:p-10 my-10 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* === Left Column: Book Image === */}
        <div className="lg:w-5/12 flex justify-center items-center p-6 bg-gray-50 rounded-lg shadow-inner">
          <div className="w-full max-w-sm overflow-hidden transform transition-transform duration-500 hover:scale-105">
            <img 
              src={image} 
              alt={bookName} 
              className="w-full h-auto object-cover rounded-md shadow-xl" 
            />
          </div>
        </div>
        
        {/* === Right Column: Details and Purchase === */}
        <div className="lg:w-7/12 p-2">
          
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 border-b-2 pb-2">
            {bookName}
          </h1>
          <p className="text-xl text-gray-600 mb-4 italic">
            By: <span className="font-semibold text-blue-600">{author}</span>
          </p>

          {/* Tags Section */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags && tags.map((tag, index) => (
              <div key={index} className="badge badge-lg bg-green-100 text-green-700 border-green-300">
                {tag}
              </div>
            ))}
          </div>

          {/* Rating & Category Section */}
          <div className="flex items-center space-x-4 text-lg mb-6">
            <div className="flex items-center text-yellow-500 font-bold">
                <FaStar className="mr-1" />
                <span>{rating ? rating.toFixed(2) : 'N/A'}</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-gray-700 font-medium">{category || 'Category Unknown'}</span>
          </div>
          
          {/* Divider */}
          <hr className="my-6 border-t border-gray-200" />
          
          {/* Description */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Description
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {description}
          </p>

          {/* Technical Details / Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-sm text-gray-600 mb-8">
            <div>
              <span className="font-semibold text-gray-800">Publisher:</span> {publisher || 'N/A'}
            </div>
            <div>
              <span className="font-semibold text-gray-800">Published:</span> {yearOfPublishing}
            </div>
            <div>
              <span className="font-semibold text-gray-800">Pages:</span> {totalPages || 'N/A'}
            </div>
          </div>
          
          {/* Price & Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t pt-4">
              <div className="text-4xl font-bold text-red-600 mb-4 sm:mb-0">
                ₹{price.toFixed(2)}
              </div>
              <div className="flex space-x-3">
                <button className="btn btn-lg btn-success flex items-center gap-2 text-white">
                  <FaShoppingCart className="w-5 h-5" />
                  Buy Now
                </button>
                <button className="btn btn-lg btn-outline btn-error flex items-center gap-2">
                  <FaHeart className="w-5 h-5" />
                  Wishlist
                </button>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

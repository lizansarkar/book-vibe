import React, { Suspense } from "react";
import Book from "./Book";

const Books = ({ data }) => {
//   const [books, setBooks] = useState([]);
  return (
    <div className="py-4 max-w-[1200px] mx-auto px-4">
      <h2 className="text-4xl font-bold text-center my-8 text-gray-800">
        Books
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <Suspense fallback={<div>Loading books...</div>}>
          {data.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;

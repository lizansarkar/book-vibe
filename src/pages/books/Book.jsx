import { FaStar } from "react-icons/fa";

const Book = ({ book }) => {
  console.log(book);

  return (
    <div>
      {
        <div
          key={book.bookId}
          className="card bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
        >

          {/* Book Image Section */}
          <figure className="px-5 pt-5 pb-2 bg-[#eeeeee] rounded-t-xl">
            {/* ছবির সাইজ ঠিক রাখার জন্য w-full h-48 object-contain ক্লাস ব্যবহার করা হয়েছে */}
            <img
              src={
                book.image ||
                "https://img.daisyui.com/images/stock/photo-1606107555195-edc2d2da24d0.webp"
              }
              alt={book.bookName}
              className="w-full h-48 object-contain rounded-xl"
            />
          </figure>

          {/* Card Body / Content */}
          <div className="card-body p-4 text-left">
            {/* Tags/Badges */}
            <div className="flex flex-wrap gap-1 mb-2">
              {book.tags.map((tags, index) => (
                <div
                  key={index}
                  className="badge badge-outline badge-sm text-xs bg-green-100 text-green-700 border-green-300"
                >
                  {tags}
                </div>
              ))}
            </div>

            {/* Book Title */}
            <h3 className="card-title text-base font-semibold text-gray-900 leading-tight">
              {book.bookName}
            </h3>

            {/* Author */}
            <p className="text-sm text-gray-500 my-1">By: {book.author}</p>

            {/* Genre and Rating */}
            <div className="flex justify-between items-center mt-1">
              <p className="text-xs text-gray-400">{book.category}</p>
              <div className="flex items-center text-yellow-500 text-sm">
                {book.rating.toFixed(2)}
                <FaStar className=""></FaStar>
              </div>
            </div>
          </div>

        </div>
      }
    </div>
  );
};

export default Book;

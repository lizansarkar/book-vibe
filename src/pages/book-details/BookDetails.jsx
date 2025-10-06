import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const singleBookId = parseInt(id);
    
    const data = useLoaderData();
    console.log(id, data);
    const singleBookDetails = data.find(book => book.bookId === singleBookId);
    console.log(singleBookDetails);
    const {bookName, author, image, rating, yearOfPublishing, category, tags, description} = singleBookDetails || {};
    return (
        <div>
            
        </div>
    );
};

export default BookDetails;
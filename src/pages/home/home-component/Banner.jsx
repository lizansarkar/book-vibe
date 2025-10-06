import React from 'react';

const Banner = () => {
    return (
        <div className='banner flex justify-between items-center md:items-start px-2 py-2 md:py-20 md:px-10 bg-[#FAFAFA] flex-col lg:flex-row text-[#FAFAFA] gap-5'>
            <div className="banner-left w-full md:w-1/2 flex flex-col items-center md:items-start gap-7">
                <h1 className="text-3xl font-bold text-center md:text-start md:text-5xl pr-5 md:pr-40 text-[#1e2939]">Books to freshen up your bookshelf</h1>
                <button className='btn text-[#FAFAFA] bg-[#F05454]'>View The List</button>
            </div>
            <div className="banner-right w-full md:w-1/2">
                <img className='rounded-3xl' src="/books.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;
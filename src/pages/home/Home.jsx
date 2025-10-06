
import Banner from './home-component/Banner';
import Books from '../books/Books';
import Book from '../books/Book';
import { useLoaderData } from 'react-router';
import { Suspense } from 'react';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<div>Loading books...</div>}>
                <Books data={data}></Books>
            </Suspense>
        </div>
    );
};

export default Home;
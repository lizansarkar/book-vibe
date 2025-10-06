
import Banner from './home-component/Banner';
import Books from '../books/Books';
import Book from '../books/Book';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;
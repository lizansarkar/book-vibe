import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/root/Root';
import ErrorPage from '../pages/error-page/ErrorPage';
import Home from '../pages/home/Home';
import About from '../components/About';
import Shop from '../components/Shop';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import BookDetails from '../pages/book-details/BookDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader: () => fetch('booksData.json'),
            path: '/',
            Component: Home
        },
        {
          path:'/about',
          Component: About
        },
        {
          path:'/shop',
          Component: Shop
        },
        {
          path:'/blog',
          Component: Blog
        },
        {
          path:'contact',
          Component: Contact
        },
        {
          path:'/bookdetails/:id',
          loader: () => fetch('booksData.json'),
          Component: BookDetails
        }
    ]
  },
]);
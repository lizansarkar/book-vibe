import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/root/Root';
import ErrorPage from '../pages/error-page/ErrorPage';
import Home from '../pages/home/Home';


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
        }
    ]
  },
]);
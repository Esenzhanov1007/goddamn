import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUsPage from '../pages/AboutUsPage';
import AdminPage from '../pages/AdminPage';
import AuthPage from '../pages/AuthPage';
import CartPage from '../pages/CartPage';
import ContactUsPage from '../pages/ContactUsPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ProductsPage from '../pages/ProductsPage';
import EditProductPage from '../pages/EditProductPage';
import Payment from '../components/Payment/Payment';

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: '/',
      element: <HomePage />,
      id: 1,
    },
    {
      link: '/auth',
      element: <AuthPage />,
      id: 2,
    },
    {
      link: '/about',
      element: <AboutUsPage />,
      id: 3,
    },
    {
      link: '/products',
      element: <ProductsPage />,
      id: 4,
    },
    {
      link: '/products/:id',
      element: <ProductDetailsPage />,
      id: 5,
    },
    {
      link: '/cart',
      element: <CartPage />,
      id: 6,
    },
    {
      link: '/contacts',
      element: <ContactUsPage />,
      id: 7,
    },
    {
      link: '*',
      element: <NotFoundPage />,
      id: 8,
    },
    {
      link: '/admin',
      element: <AdminPage />,
      id: 9,
    },
    {
      link: '/edit/:id',
      element: <EditProductPage />,
      id: 10,
    },
    {
      link: '/payment',
      element: <Payment />,
      id: 11,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;

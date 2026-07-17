import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '@/components';
import { lazy } from 'react';

const HomePage = lazy(() => import('@/pages/HomePage/HomePage.jsx'));
const ProductsPage = lazy(() => import('./pages/ProductsPage/ProductsPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

import { AppWrapper } from './App.styled';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;

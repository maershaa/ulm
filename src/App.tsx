import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '@/components';
import { lazy } from 'react';
import 'normalize.css';

const HomePage = lazy(() => import('@/pages/HomePage'));
const ProductsPage = lazy(() => import('@/pages/ProductsPage'));
const ContactsPage = lazy(() => import('@/pages/ContactsPage'));
const PrivacyPolicyPage = lazy(() =>
  import('@/pages/PrivacyPolicyPage/PrivacyPolicyPage')
);
const ErrorPage = lazy(() => import('@/pages/ErrorPage/ErrorPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;

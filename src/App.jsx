import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage/AboutUsPage'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage/FeaturesPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage/ProductsPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

import { AppWrapper } from './App.styled';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route path="/aboutUs" element={<AboutUsPage />}>
            {/* <Route path=":half" element={<HalfPage />} /> */}
          </Route>

          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;

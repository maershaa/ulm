import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer, Container } from '@/components';
import { LayoutWrapper } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <LayoutWrapper>
      <Container>
        <Header />
      </Container>
      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Container>
        <Footer />
      </Container>
    </LayoutWrapper>
  );
};

export { SharedLayout };

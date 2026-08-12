import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer, Container } from '@/components';
import { Glow } from '@/assets/styles/Glow.styled';
import { LayoutWrapper } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <LayoutWrapper>
      {/* блик по центру */}
      <Glow $size={450} $opacity={1} $top="50%" $left="50%" $centered />
      {/* блик — верхний левый угол */}
      <Glow $size={450} $opacity={0.8} $top="5%" $left="-150px" />
      {/* блик — нижний правый угол */}
      <Glow $size={450} $opacity={0.9} $bottom="10%" $right="-150px" />

      <Header />
      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </LayoutWrapper>
  );
};

export { SharedLayout };

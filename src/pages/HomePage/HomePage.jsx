import { Hero, AboutUsSection, FeaturesSection } from '@/features';

const HomePage = () => {
  return (
    <div>
      <div>
        <Hero />
        <div id="aboutUs">
          <AboutUsSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// pages/about.js or pages/about.tsx
import NavBar from "../component/navbar";
import Fotter from '../component/Foter';
import Subsscribe from "../component/subscribe";
import MainBanner from "../component/MainBanner";
import Team from "../component/Team";
import AboutTop from "../component/AboutTop"
import AboutValueSection from "../component/AboutValueSection"
const About = () => {
  return (
    <div>
      <NavBar />
      <MainBanner title="About Us" />
      <AboutTop />
      <Team />
      <AboutValueSection />

      <Subsscribe />
      <Fotter />
    </div>
  );
};
export default About;

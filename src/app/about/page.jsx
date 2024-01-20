// pages/about.js or pages/about.tsx
import NavBar from "../component/navbar";
import Fotter from '../component/Foter';
import Subsscribe from "../component/subscribe";
import MainBanner from "../component/MainBanner";
import Team from "../component/Team";
import AboutTop from "../component/AboutTop"
import AboutValueSection from "../component/AboutValueSection"
import Programs from "../component/Programs";
import BlogCard from "../component/BlogCard";
import BlogData from "../component/BlogData";
const About = () => {
  return (
    <div>
      <NavBar />
      <MainBanner title="About Us" />
      <AboutTop />
      <Programs />
      <Team />
      <AboutValueSection />
      <BlogData />
      <Subsscribe />
      <Fotter />
    </div>
  );
};
export default About;

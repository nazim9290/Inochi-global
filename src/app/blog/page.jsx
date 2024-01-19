import NavBar from "../component/navbar";
import Testmonial from '../component/testmonial'
import Fotter from '../component/Foter';
import BlogData from "../component/BlogData";
import axios from 'axios'
const About = () => {
    return (
        <div>
            <NavBar />
            <BlogData page="final"/>
            <Fotter/>
        </div>
    );
}

export default About;

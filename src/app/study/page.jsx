import NavBar from "../component/navbar";
import BlogData from '../component/BlogData'
import Fotter from '../component/Foter';
import Service from "../component/Service";
import Subsscribe from "../component/subscribe";
import StudyJapan from '../component/StudyJapan'
import MainBanner from "../component/MainBanner";
const Study = () => {
    return (
        <div>
            <NavBar />
            <MainBanner title="STUDY-SETTLE-JAPAN"  />
            <StudyJapan /> 
            <BlogData/>      
            <Subsscribe/>
            <Fotter/>
        </div>
    );
}

export default Study;

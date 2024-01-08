import NavBar from "../component/navbar";
import StudyData from '../component/StudyData'
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
            <StudyData/>      
            <Subsscribe/>
            <Fotter/>
        </div>
    );
}

export default Study;

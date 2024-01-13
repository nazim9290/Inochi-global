import NavBar from "../component/navbar";
import StudyData from '../component/StudyData'
import Fotter from '../component/Foter';
import Service from "../component/Service";
import Subsscribe from "../component/subscribe";
import StudyJapan from '../component/StudyJapan'
import MainBanner from "../component/MainBanner";
import SeminarSection from "../component/SeminarSection";
const Seminar = () => {
    return (
        <div>
            <NavBar />
            <MainBanner title="Seminar Booking"  />
            <SeminarSection />
            <Subsscribe/>
            <Fotter/>
        </div>
    );
}

export default Seminar;

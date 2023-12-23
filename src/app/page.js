// Make sure the path to the CSS file is correct
import NavBar from './component/navbar';
import MainCarusel from './component/mainCarusel';
import Subsscribe from './component/subscribe';
import Service from './component/Service';
import Rapper from './component/Rapper';
import Tutorila from './component/Tutorrial';
import Team from './component/Team';
import WellStarter from './component/WellStarter'
import Testmonial from './component/testmonial'
import Fotter from './component/Foter';
import './globals.css'

const HOME = () => {
  return (
    <div>
      <div >
        <NavBar />
        <MainCarusel />
        <Rapper />
        <Service />
        <WellStarter/>
        <Subsscribe />
        <Tutorila />
        <Team />
        <Testmonial/>
        <Fotter />
      </div>
    </div>
  );
};

export default HOME;

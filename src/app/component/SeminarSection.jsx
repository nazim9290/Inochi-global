import logo from "../../../public/imgages/LOGO.png"
import Image from 'next/image';

const SeminarSection = () => {
    return (
        <>
        <div className="wrapper">
  <h3 className=" my-5" style={{marginTop: '7%'}}><b className="my-5">JOIN FREE SEMINAR</b></h3>
  <div className="row my-lg-4">
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="card  shadow rounded">
        <div className="card-body text-center">
          <Image src={logo} alt="Bootstrap" width={300} height={350} /><br />
          <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
          <p className="text-center mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="row">
            <div className="col">
              {/* <i className="fa fa-clock-o" style={{fontSize: 24}} /><span>10:00AM-6:00PM </span> */}
            </div>
            <div className="col">
              {/* <i className="fa fa-area-chart" style={{fontSize: 24}} /><span>10:00AM-6:00PM </span> */}
            </div>
          </div>
          <button type="button" className="btn btn-primary me-2" style={{width: '100%', backgroundColor: '#4f46e5'}}>Book now</button>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="card  shadow rounded">
        <div className="card-body text-center">
          <Image src={logo} alt="Bootstrap" width={300} height={350} /><br />
          <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
          <p className="text-center mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="row">
            <div className="col">
              <i className="fa fa-clock-o" style={{fontSize: 24}} /><span>10:00AM-6:00PM </span>
            </div>
            <div className="col">
              <i className="fa fa-area-chart" style={{fontSize: 24}} /><span>10:00AM-6:00PM </span>
            </div>
          </div>
          <button type="button" className="btn btn-primary me-2" style={{width: '100%', backgroundColor: '#4f46e5'}}>Book now</button>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="card  shadow rounded">
        <div className="card-body text-center">
          <Image src={logo} alt="Bootstrap" width={300} height={350} /><br />
          <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
          <p className="text-center mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="row">
            <div className="col">
              <i className="fa fa-clock-o" style={{fontSize: 24}} /><span>10:00AM-6:00PM </span>
            </div>
            <div className="col">
              <i className="fa fa-area-chart" style={{fontSize: 24}} /><span>10:00AM-6:00PM </span>
            </div>
          </div>
          <button type="button" className="btn btn-primary me-2" style={{width: '100%', backgroundColor: '#4f46e5'}}>Book now</button>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
}

export default SeminarSection;

import Image from "next/image"
import logo from "../../../public/imgages/LOGO.png"
const Rapper = () => {
  return (<>
    <div className="wrapper">
      <div className="row mb-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                  <Image src={logo} alt="Bootstrap" width={30} height={30} /><br />
                </div>
                <div className="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                  <h4><b>UK-EUROPE-USA</b></h4>
                  <p>The U.K presents an amazing opportunity for students who are looking for UG and PG courses abroad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                  <Image src={logo} alt="Bootstrap" width={30} height={30} /><br />

                </div>
                <div className="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                  <h4><b>JAPAN</b></h4>
                  <p>popularity, stable economy, and a wide array of schools and universities providing career opportunities, and a settlement circumstance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                  <Image src={logo} alt="Bootstrap" width={30} height={30} /><br />

                </div>
                <div className="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                  <h4><b>Canada</b></h4>
                  <p>Study in Canada as an international student, extend your study permit and find out about working while you study or after you graduate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>)
}
export default Rapper
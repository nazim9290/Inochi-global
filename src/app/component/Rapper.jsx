import Image from "next/image"
import logo from "../../../public/imgages/LOGO.png"
const Rapper = () => {
  return (
  <div className="componentStyle">
    <div className="wrapper  text-center">
      <div className="row mb-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 ">
          <div className="card">
            <div className="card-body text-center">
              <div className="row">
                <div  className="text-center">
                  <Image src={logo} alt="Bootstrap" width={30} height={30} /><br />
                </div>
                <div className="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8 col-xxl-8 rapperMain">
                  <h4><b className="text-center ">UK-EUROPE-USA</b></h4>
                  <p className="text-center ">The U.K presents an amazing opportunity for students who are looking for UG and PG courses abroad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="row">
                <div className="text-center">
                  <Image src={logo} alt="Bootstrap" width={30} height={30} /><br />

                </div>
                <div className="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8 col-xxl-8 rapperMain">
                  <h4><b>JAPAN</b></h4>
                  <p>popularity, stable economy, and a wide array of schools and
                   universities providing career opportunities,
                    and a settlement </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="row">
                <div className="text-center">
                  <Image src={logo} alt="Bootstrap" width={30} height={30} /><br />

                </div>
                <div className="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8 col-xxl-8 rapperMain">
                  <h4 >Canada</h4>
                  <p>Study in Canada as an international student,
                   extend your study permit and find out about
                    working while you study</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>)
}
export default Rapper
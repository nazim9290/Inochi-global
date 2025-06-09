import Image from "next/image"
import logo from "../../../public/imgages/LOGO.png"
// /seminar
const WellStarter=()=>{
    return (
      <>
        <div className="my-5 componentStyle">
          <div className="card shadow rounded my-5">
            <div className="card-body ">
              <div className="row wellStart">
                <div className=" text-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <Image src={logo} alt="...." width={200} heigh={200} />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <h3>
                    <b>WELCOME TO Inochi Global Education Institute</b>
                  </h3>
                  <h4>Empowering Students for a Global Future</h4>
                  <p>
                    At Inochi Global Education Institute, we believe education
                    can transform lives. More than just a study abroad
                    consultancy in Dhaka, we are a passionate team dedicated to
                    guiding students toward global opportunities and academic
                    success. Our journey began with a simple mission: To help
                    students achieve their dreams of studying abroad and
                    experiencing new cultures. Since then, we’ve helped
                    thousands of students reach new heights—academically,
                    professionally, and personally.
                  </p>
                  <a href="/seminar">
                    <button type="button" className="btn btn-warning">
                      GET START NOW
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default WellStarter
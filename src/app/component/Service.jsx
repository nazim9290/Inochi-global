import Image from "next/image";
import japaneseCourse from "../../../public/imgages/services/Beginner to Advanced Japanese Courses.png";
import jlptPreparation from "../../../public/imgages/services/NAT Test & JLPT Preparation.png";
import onlineClasses from "../../../public/imgages/services/Interactive Online & Offline Classes.png";
import training from "../../../public/imgages/services/Cultural & Conversational Training.png";
import service from "../../../public/imgages/services/Expert Counselling Services.png";
import countrySelection from "../../../public/imgages/services/University, Course & Country Selection.png";
import application from "../../../public/imgages/services/Admission Process Counselling.png";
import recommendProcess from "../../../public/imgages/services/Recommendation Process.png";
import statment from "../../../public/imgages/services/Personal Statement Support.png";
import profile from "../../../public/imgages/services/Profile Building.png";
import mockInterview from "../../../public/imgages/services/Mock Interview Sessions.png";
import departure from "../../../public/imgages/services/Pre-Departure Counselling.png";

const Service = () => {
  return (
    <div className="componentStyle">
      <div>
        {/* OUR SERVICE */}
        <h3 className="text-danger text-center">
          <b>OUR SERVICE</b>
        </h3>
        <p className="text-center">The top reasons for you to join us</p>
        <div className="my-5 container ">
          <div className="row my-lg-4">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <div className="card shadow rounded h-100">
                <div className="card-body text-center">
                  <Image
                    src={japaneseCourse}
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                  <h6>Beginner to Advanced Japanese Courses (N5–N4)</h6>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <div className="card programs shadow rounded h-100">
                <div className="card-body text-center">
                  <Image
                    src={jlptPreparation}
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                  <h6>NAT Test & JLPT Preparation</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <div className="card programs shadow rounded h-100">
                <div className="card-body text-center">
                  <Image
                    src={onlineClasses}
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                  <h6>Interactive Online & Offline Classes</h6>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <div className="card programs shadow rounded h-100">
                <div className="card-body text-center">
                  <Image
                    src={training}
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                  <h6>Cultural & Conversational Training</h6>
                  <br />
                </div>
              </div>
            </div>
            <div className="row my-lg-4">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <div className="card programs shadow rounded h-100">
                  <div className="card-body text-center">
                    <Image
                      src={service}
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                    <h6>Expert Counselling Services</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <div className="card programs shadow rounded h-100">
                  <div className="card-body text-center">
                    <Image
                      src={countrySelection}
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                    <h6>
                      Language school, University, Course & Country Selection
                    </h6>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <div className="card programs  shadow rounded h-100">
                  <div className="card-body text-center">
                    <Image
                      src={application}
                      width={30}
                      height={30}
                      alt="Application & Documentation Support"
                    />
                    <h6>Application & Documentation Support</h6>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <div className="card shadow rounded h-100">
                  <div className="card-body text-center">
                    <Image
                      src={recommendProcess}
                      width={30}
                      height={30}
                      alt="Admission Process Counselling"
                    />
                    <h6>Admission Process Counselling</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <div className="card shadow rounded h-100">
                <div className="card-body text-center">
                  <Image
                    src={recommendProcess}
                    width={30}
                    height={30}
                    alt="Recommendation Process"
                  />
                  <h6>Recommendation Process</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <div className="card shadow rounded h-100">
                <div className="card-body text-center">
                  <Image
                    src={statment}
                    width={30}
                    height={30}
                    alt="Personal Statement Support"
                  />
                  <h6>Personal Statement Support</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <div className="card shadow rounded h-100">
                <div className="card-body text-center">
                  <Image
                    src={profile}
                    width={30}
                    height={30}
                    alt="Profile Building"
                  />
                  <h6>Profile Building</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <div className="card shadow rounded h-100">
                <div className="card-body text-center">
                  <Image
                    src={mockInterview}
                    width={30}
                    height={30}
                    alt="Profile Building"
                  />
                  <h6>Mock Interview Sessions</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

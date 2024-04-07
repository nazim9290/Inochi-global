import se from "../../../public/imgages/se.jpg"
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PodcastsIcon from '@mui/icons-material/Podcasts';
const Programs = () => {
    return ( 

        <div className="progmain componentStyle">
            <div>
                <h3 className=" text-center my-5" style={{ marginTop: '7%', color: "white",  padding:"5px"}}
                ><b className="my-5 ">What We do</b></h3>
                <p className="text-center mb-5" style={{ color: "white" }}>
                    The top reasons for you to join us
                </p>
                <div className="my-5 container ">
                    <div className="row my-lg-4 programs">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card programs   shadow rounded" style={{ background: 'rgba(255, 255, 255, 0.7)', color: "white" }}>
                                <div className="card-body text-center">
                                    <SupervisedUserCircleRoundedIcon />
                                    <h4>BEST COUNSELLING SERVICE</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card programs shadow rounded"
                                style={{ background: 'rgba(255, 255, 255, 0.7)', color: "white" }}>
                                <div className="card-body text-center">
                                    <SchoolRoundedIcon />
                                    <h4>IDENTIFY COURSE COUNTRY & UNIVERSITY</h4>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card programs shadow rounded"
                                style={{ background: 'rgba(255, 255, 255, 0.7)', color: "white" }}>
                                <div className="card-body text-center">
                                    <AssignmentIcon />
                                    <h4>APPLICATION & DOCUMENTATION</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card programs shadow rounded"
                                style={{ background: 'rgba(255, 255, 255, 0.7)', color: "white" }}>

                                <div className="card-body text-center">
                                    <AssignmentIcon />
                                    <h4>TEST/INTERVIEW PREPARATION</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-lg-4">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card programs shadow rounded"
                                style={{ background: 'rgba(255, 255, 255, 0.7)', color: "white" }}>
                                <div className="card-body text-center">
                                    <QuestionAnswerIcon />
                                    <h4>FINANCE MANAGEMENT SERVICES
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card programs shadow rounded"
                                style={{ background: 'rgba(255, 255, 255, 0.7)', color: "white" }}>
                                <div className="card-body text-center">
                                    <HandshakeIcon />
                                    <h4>PRE DEPARTURE PREPARATIONS
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card programs  shadow rounded"
                                style={{ background: 'rgba(255, 255, 255, 0.7)', color: "white" }}
                            >
                                <div className="card-body text-center">
                                    <VolunteerActivismIcon />
                                    <h4>ON-CAMPUS LIVING SUPPORT
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card  shadow rounded programs"
                                style={{ background: 'rgba(255, 255, 255, 0.7)', color: "white" }}
                            >
                                <div className="card-body text-center">
                                    <PodcastsIcon />
                                    <h4>CAREER DEVELOPMENT SERVICES</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Programs;
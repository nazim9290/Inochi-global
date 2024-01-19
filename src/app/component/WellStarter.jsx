import Image from "next/image"
import logo from "../../../public/imgages/LOGO.png"
// /seminar
const WellStarter=()=>{
    return(
        <>
<div className="my-5">
  <div className="card shadow rounded my-5">
    <div className="card-body ">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

          <Image src={logo} className="d-block w-100 " alt="..." style={{height: '66vh'}} />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <h3><b>WELCOME TO OASIS EDUCATION</b></h3>
          <h4>Lorem Ipsum is simply dummy text of the printing and typesetting</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
            <a href="/seminar"  >
            <button type="button" className="btn btn-warning">GET START NOW</button>
                </a>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default WellStarter
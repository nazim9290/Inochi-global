import Image from "next/image"
import logo from "../../../public/imgages/logos.png"
const Fotter=()=>{
    return(
<footer>
  <div className="footer">
     <div className="ft-l container">
    <div className="row mb-4">
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
        <Image src={logo} alt="Bootstrap" style={{marginLeft: '2vw'}} width={60} height={60} className="mt-3 mb-3" /><br />
        <p className="text-start mt-4 ms-1" style={{marginLeft: '2vw !important'}}>Inochi Global <br />
        Education since 2019</p>
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 ftTitle">
        <p><b className="text-uppercase ">service</b></p>
        <a href="#" className="text-decoration-none text-reset">Branding</a><br />
        <a href="#" className="text-decoration-none text-reset">Design</a><br />
        <a href="#" className="text-decoration-none text-reset">Marketing</a><br />
        <a href="#" className="text-decoration-none text-reset">Advisment</a><br />
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 ftTitle">
        <p><b className="text-uppercase">company</b></p>
        <a href="#" className="text-decoration-none text-reset">About us</a><br />
        <a href="#" className="text-decoration-none text-reset">Contact</a><br />
        <a href="#" className="text-decoration-none text-reset">Jobs</a><br />
        <a href="#" className="text-decoration-none text-reset">Press kit</a><br />
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 ftTitle">
        <p><b className="text-uppercase">legal</b></p>
        <a href="/terms" className="text-decoration-none text-reset">Terms of use</a><br />
        <a href="/privecy" className="text-decoration-none text-reset">Privacy policy</a><br />
        <a href="/policy" className="text-decoration-none text-reset">Cookie policy</a><br />
      </div>
    </div>
    <p className="text-center">Copyright © 2023-All right reserved by  Inochi Global Education</p>
    </div>
  </div>
</footer>
    )
}
export default Fotter ;
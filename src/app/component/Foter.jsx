import Image from "next/image"
import logo from "../../../public/imgages/LOGO.png"
const Fotter=()=>{
    return(
        <footer>
  <div className="footer">
    <div className="row mb-4">
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-center">
        <Image src={logo} alt="Bootstrap" width={30} height={30} className="mt-3 mb-3" /><br />
        <p className="text-start mx-4">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
        <p><b className="text-uppercase">service</b></p><br />
        <a href="#" className="text-decoration-none text-reset">Branding</a><br />
        <a href="#" className="text-decoration-none text-reset">Design</a><br />
        <a href="#" className="text-decoration-none text-reset">Marketing</a><br />
        <a href="#" className="text-decoration-none text-reset">Advisment</a><br />
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
        <p><b className="text-uppercase">company</b></p><br />
        <a href="#" className="text-decoration-none text-reset">About us</a><br />
        <a href="#" className="text-decoration-none text-reset">Contact</a><br />
        <a href="#" className="text-decoration-none text-reset">Jobs</a><br />
        <a href="#" className="text-decoration-none text-reset">Press kit</a><br />
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
        <p><b className="text-uppercase">legal</b></p><br />
        <a href="#" className="text-decoration-none text-reset">Terms of use</a><br />
        <a href="#" className="text-decoration-none text-reset">Privacy policy</a><br />
        <a href="#" className="text-decoration-none text-reset">Cookie policy</a><br />
      </div>
    </div>
    <p className="text-center">Copyright © 2023-All right reserved by ACME industry LTD.</p>
  </div>
</footer>
    )
}
export default Fotter ;
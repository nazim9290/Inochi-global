import Image from "next/image"
import logo from "../../../public/imgages/LOGO.png"
const Rapper=()=>{
    return(<>
        <div className="wrapper">
  <div className="row mb-5">
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <Image src={logo}alt="Bootstrap" width={30} height={30} /><br />
            </div>
            <div className="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
              <h4><b>UK-EUROPE-USA</b></h4>
              <p>Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
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
            <Image src={logo}alt="Bootstrap" width={30} height={30} /><br />

            </div>
            <div className="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
              <h4><b>UK-EUROPE-USA</b></h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting indus
              try. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
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
            <Image src={logo}alt="Bootstrap" width={30} height={30} /><br />

            </div>
            <div className="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
              <h4><b>UK-EUROPE-USA</b></h4>
              <p>Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
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
import Image from "next/image"
import teams from "../../../public/imgages/teams.png"
const Team=()=>{
    return(
<div className="mb-5" style={{marginTop: '7%'}}>
  <h3 className="text-danger text-center my-5"><b className="my-5">OUR TEAM</b></h3>
  <div className="row mb-4">
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="image-container mb-3">
        <Image  src={teams} alt="Sample Image" className="w-100" />
        <div className="text-overlay">
          <p>This is some text on top of an image.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="image-container mb-3">
      <Image  src={teams} alt="Sample Image" className="w-100" />

        <div className="text-overlay">
          <p>This is some text on top of an image.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="image-container mb-3">
      <Image  src={teams} alt="Sample Image" className="w-100" />

        <div className="text-overlay">
          <p>This is some text on top of an image.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="image-container mb-3">
      <Image  src={teams} alt="Sample Image" className="w-100" />

        <div className="text-overlay">
          <p>This is some text on top of an image.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="image-container mb-3">
      <Image  src={teams} alt="Sample Image" className="w-100" />

        <div className="text-overlay">
          <p>This is some text on top of an image.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="image-container mb-3">

      <Image  src={teams} alt="Sample Image" className="w-100" />
        <div className="text-overlay">
          <p>This is some text on top of an image.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default Team
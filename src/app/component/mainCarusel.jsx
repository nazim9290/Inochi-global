import Image from "next/image"
import teams1 from "../../../public/imgages/1.jpg"
import teams2  from "../../../public/imgages/2.jpg"
import teams3 from "../../../public/imgages/3.jpg"
import bright from "../../../public/imgages/bright.jpg" ;
const mainCarusel=()=>{
  return(<>
          {/* carousel starts */}
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={teams1} className="d-block w-100 cur-height" alt="..." />
    </div>
    <div className="carousel-item">
      <Image src={teams3} className="d-block w-100 cur-height" alt="..." />
    </div>
    <div className="carousel-item">
      <Image src={teams2} className="d-block w-100 cur-height" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


   </>)
}
export default mainCarusel
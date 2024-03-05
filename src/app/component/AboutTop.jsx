import React from 'react';
import b2 from "../../../public/imgages/b2.png";
import Image from 'next/image';

const AboutTop = () => {
    return (
        <>
           <div className="wrapper">
  <div className="my-5">
    <div className="card shadow rounded my-5">
      <div className="card-body ">
        <div className="row">
          <div className="  col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <Image  src={b2}
             className="d-block w-100 "
             width={0} 
             height={720}
            alt="..."  />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h3><b>ABOUT US</b></h3>
            <p>The country of first choice for migration immediately after COVID-19 is, undoubtedly Japan, especially,
              with its current popularity, stable economy, and a wide array of schools and universities providing career
              opportunities, and a settlement circumstance, thereafter. Japan is a culturally rich and technologically 
              advanced nation is a desirable destination for international students. 
              Japan offers a once-in-a-lifetime opportunity for students from India, Sri Lanka, and other countries, as well.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
}

export default AboutTop;
// style={{height: '66vh'}}
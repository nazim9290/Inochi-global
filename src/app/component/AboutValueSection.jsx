import b3 from "../../../public/imgages/b3.png";
import b4 from "../../../public/imgages/b4.png";

import Image from 'next/image';

const AboutValueSection=()=>{
    return(
        <>
<div className="wrapper">
  <div className="mb-5" style={{marginTop: '7%'}}>
    <h3 className="text-danger text-center my-5"><b className="my-5">OUR CORE VALUES</b></h3>
    <div className="my-5">
      <div className=" my-5">
        <div className>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <h3><b>WHO WE ARE</b></h3>
              <p>We are a team of professionals who experienced challenges in the overseas education industry and we wanted to 
                bring something which is transparent and trustworthy. We have started Inochi after realizing that, how many 
                students are struggling during the course and after completion of the course because of the wrong information 
                provided by some agents. We have taken this seriously because we wanted to support the students to accomplish 
                their desire by providing them with the right information. We have worked out the complete process for a students
                life journey when they study abroad. We also have special experienced talent in every process to make sure
                that we are providing adequate information to students with which they can choose the right country and
                university.</p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <Image src={b3} className="d-block w-100 " alt="..." 
              width={0}
              height={720}
               />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="my-5">
      <div className=" my-5">
        <div className>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <Image src={b4} className="d-block w-100 " alt="..." 
              width={0}
              height={720}
               />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
              <h3><b>WHY INOCHI</b></h3>
              <p>Our Founder Mr.Saji Samuel has gone through all the admission process personally when he sent his elder son 
                for medical admission in the Philippines. Because we have undergone this for our children, we know the worries
                of the parents. How much they are concerned about the country, university, course, safety, financial protection.
                Etc. We have also seen how some agents are misleading the students with false information and fake promises. 
                We have joined together as Inochi to give clarity on all the mentioned challenges to the parents and give
                desired future for the students by supporting all the professional knowledge what we have. Here we are 
                not recommending a university or a country which 
                we have not experienced, but Inochi is sending the students to study where we entrusted our own children’s future.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default AboutValueSection
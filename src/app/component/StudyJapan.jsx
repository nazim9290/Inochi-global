import Image from "next/image"

import about1 from "../../../public/imgages/about1.png"
const StudyJapan = () => {
    return (
        <>
            <div className="my-5">
                <div className="card shadow rounded my-5" style={{ backgroundColor: '#7E1C1C', color: 'azure' }}>
                    <div className="card-body ">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <Image src={about1} className="d-block w-100 " alt="..." style={{ height: '55vh', objectFit: 'contain' }} />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <h3><b>STUDY -WORK - SETTLE IN JAPAN</b></h3>
                                <p>
                                    The country of first choice for migration immediately after COVID-19 is, undoubtedly Japan, especially, with its current popularity, stable economy, and a wide array of schools and universities providing career opportunities, and a settlement circumstance, thereafter. Japan is a culturally rich and technologically advanced nation is a desirable destination for international students. Japan offers a once-in-a-lifetime opportunity for students from India, Sri Lanka, and other countries, as well.
                                    International experiences are exhilarating and when it comes to academics and career, a few countries are rich in culture and technology and provide top-notch education and career opportunities. Getting a chance to study abroad while earning college credit parallelly, is extraordinary and worth a fortune. Several countries provide course options at various prestigious universities that complement your study with a for-credit internship, as well as matchless career opportunities later on. Not only does it let you attain a deeper insight into academics and career opportunities but it also gets you to clap your eyes on the professional and personal culture and language of the specific country.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default StudyJapan
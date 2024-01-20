
import Link from 'next/link';
import { useRouter } from 'next/navigation'

import "./FullLeson.css"
const FullLeasonDesh = () => {
  
  return (
    <div>
      <h1 className='text-center'>Japanese Lesson</h1>
      <div className="leson container">
        <p>Here all about Japanese Course and Resources.</p>
        <p>You can select and learn your Japanese course.</p>
      </div>

      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-sm-6">
            <div className="card mb-3">
              <div className="card-body">
                <h4><b> Character</b></h4>
                <ul className="">
                  <li style={{ cursor: 'pointer' }}>
                  <Link href="/dashbord/hirangana">
                    <span><b>Hiragana</b></span>
                    </Link>
                  </li>
                  <div className="d-flex justify-content-between">
                    <Link href="/dashbord/kanji">
                    <span><b>Kanji</b></span>
                    </Link>
                    <butun type="button" className="btn btn-primary btn-sm" style={{ fontSize: 'small' }}>{`More >>`}</butun>
                  </div>
                  <li>
                    <div className="d-flex justify-content-between align-items-center">
                      <Link href="/dashbord/katakanta">
                      <span><b>Katakana</b></span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="card mb-3">
              <div className="card-body">
                <h4><b> Resources</b></h4>

                <ul className="">
                  <li className=""><b>Exam</b></li>
                  <li className=""><b>PDF</b></li>
                  <li className="">
                    <div className="d-flex justify-content-between align-items-center">
                      <span><b>Kanji</b></span>
                      <butun type="button" className="btn btn-primary btn-sm" style={{ fontSize: 'small' }}>{`More >>`}</butun>
                    </div>
                  </li>
                  <li className=""><b>About japan</b></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-sm-6">
            <div className="card mb-3">
              <div className="card-body">
                <h4><b> Courses</b></h4>

                <ul className="">
                  <li className=""><b>Hiragana Course</b></li>
                  <li className=""><b>Katakana Course</b></li>
                  <li className="">
                    <div className="d-flex justify-content-between align-items-center">
                      <span><b>N5 Course</b></span>
                      <butun type="button" className="btn btn-primary btn-sm" style={{ fontSize: 'small' }}>{`More >>`}</butun>
                    </div>
                  </li>
                  <li className=""><b>N4 Course</b></li>

                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="card mb-3">
              <div className="card-body">
                <h4><b>Vocabuary</b></h4>
                <ul className="">
                  <li className=""><b>Numbers</b></li>
                  <li className=""><b>Date</b></li>
                  <li className="">
                    <div className="d-flex justify-content-between align-items-center">
                      <span><b>Time</b></span>
                      <butun type="button" className="btn btn-primary btn-sm" style={{ fontSize: 'small' }}>{`More >>`}</butun>
                    </div>
                  </li>
                  <li className=""><b>Nations</b></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullLeasonDesh;

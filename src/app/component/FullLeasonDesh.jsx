

// const FullLeasonDesh = () => {
//   return (
//     <div className="d-flex">
//       <h1 className='text-center'>Japanese Lesson</h1>
    
//       <div className="">
//         <div className="row mb-5">
//         <div className="leson container">
//         <p>Here all about Japanese Course and Resources.</p>
//         <p>You can select and learn your Japanese course.</p>
//       </div>
//       <br />
//       <br />

//           <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
//             <div className="card">
//               <div className="card-body">
//                 <div className="row">
//                     <p>Character</p>
//                     <h3>Hiragana</h3>
//                     <h3>Katakana</h3>
//                     <h3>Kanji</h3>

                    
                    
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//      <div className="card" style={{width: '18rem'}}>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// <div className="card" style={{width: '18rem'}}>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//   );
// }

// export default FullLeasonDesh;

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
                {/* <ul className="list-group list-group-flush">
    <li className="">. Cras justo odio</li>
    <li className="d-flex justify-content-between align-items-last">
    Dapibus ac facilisis in
              <butun type="button" className="btn btn-primary btn-sm" style={{ fontSize: 'small' }}>{`More >>`}</butun>
            </li>
    <li className="">Vestibulum at eros
     
     </li>
  </ul> */}
  <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Vestibulum at eros
              <butun type="button" className="btn btn-primary btn-sm" style={{ fontSize: 'small' }}>{`More >>`}</butun>
            </li>
          </ul>
                </div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="card mb-3">
              <div className="card-body">
                <h4><b>Card 2</b></h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
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
               
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="card mb-3">
              <div className="card-body">
                <h4><b>Card 2</b></h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullLeasonDesh;

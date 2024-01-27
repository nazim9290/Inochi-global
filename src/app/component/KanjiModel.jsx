
// import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// const KanjiModel = ({   selectedItem,  }) => {
// console.log(selectedItem)

// function disableRightClick(event) {
//   event.preventDefault();
// }

// document.addEventListener('contextmenu', disableRightClick);

//   return (
//     < >
//       <>
//       <div className='row'>
//         <div className='col-3'>
//      <h1 style={{color:"#9cae83"}}>Kanji</h1>
//     <p style={{fontSize:"150px"}}>{selectedItem.character}</p>
// <SkipNextIcon/> <PlayArrowIcon/> <SkipPreviousIcon/>
//         </div>
//         <div className='col-3'>
//         <p style={{color:"#9cae83"}}>Meaning</p>
//         <p>{selectedItem.meaning}</p>
// <p  style={{color:"#9cae83"}}>Onyomi</p>
// <p>{selectedItem.onyomi}</p>
// <p style={{color:"#9cae83"}}>kunyomi</p>
// <p>{selectedItem.kunyomi}</p>
// <hr />
// <p style={{color:"#9cae83"}}>Redical</p>

//           </div>
//           <div className='col-3'>
//           <p>Test</p>

//           </div>
//           <div className='col-3'>
//           <p>Test</p>

//           </div>
//       </div>
        
//       </>
      
//     </>
//   );
// };

// export default KanjiModel;
"use client"
import React, { useEffect } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import kanji from "../../../public/imgages/kanji.png"
import Image from 'next/image';
const KanjiModel = ({ selectedItem }) => {

  useEffect(() => {
    function disableRightClick(event) {
      event.preventDefault();
    }

    // Add event listeners to all images to disable right-click
    const images = document.querySelectorAll('img');
    images.forEach(img => img.addEventListener('contextmenu', disableRightClick));

    // Cleanup: remove event listeners when component unmounts
    return () => {
      images.forEach(img => img.removeEventListener('contextmenu', disableRightClick));
    };
  }, []);

  return (
    <>
      <div className='row'>
        <div className='col-3'>
          <h1 style={{color:"#9cae83"}}>Kanji</h1>
          <p style={{fontSize:"150px"}}>{selectedItem.character}</p>
          <SkipNextIcon/> <PlayArrowIcon/> <SkipPreviousIcon/>
        </div>
        <div className='col-3'>
          <p style={{color:"#9cae83"}}>Meaning</p>
          <p>{selectedItem.meaning}</p>
          <p style={{color:"#9cae83"}}>Onyomi</p>
          <p>{selectedItem.onyomi}</p>
          <p style={{color:"#9cae83"}}>kunyomi</p>
          <p>{selectedItem.kunyomi}</p>
          <hr />
          <p style={{color:"#9cae83"}}>Radical</p>
        </div>
        <div className='col-3'>
         <Image width={400} height={300} src={kanji} alt='14'/>
        </div>
      </div>
    </>
  );
};

export default KanjiModel;

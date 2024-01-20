"use client"
import React, { useEffect, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ModelChar from './ModelChar'; // Assuming you have a ModalExample component

const ChartTable = ({ jsonData ,page}) => {
  const itemsPerLine = 5;
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);


const handleItemClick = (item, index) => {
  setSelectedItemIndex(index);
  setSelectedItem(item);
};

const nextItem = () => {
  if (selectedItemIndex !== null && selectedItemIndex < jsonData.length - 1) {
    const newIndex = selectedItemIndex + 1;
    setSelectedItemIndex(newIndex);
    setSelectedItem(jsonData[newIndex]);
  }
};

const previousItem = () => {
  if (selectedItemIndex > 0) {
    const newIndex = selectedItemIndex - 1;
    setSelectedItemIndex(newIndex);
    setSelectedItem(jsonData[newIndex]);
  }
};
 
  const closeModal = () => {
    setSelectedItemIndex(null);
  setSelectedItem(null);
  };
  
  const rotateStyle = {
    color: "#ff8600",
    transform: 'rotate(270deg)', // You can change the angle as needed
    display: 'inline-block', // Set display to inline-block or block
  }
  const icon = (
    <b style={rotateStyle}>
      <PlayArrowIcon sx={{ fontSize: 40 }} />
    </b>
  );
 
  return (

    <div>
      <h2 className="text-center">alphabet chart</h2>
      <table className="table text-center" style={{ width: '60%' ,margin: "auto"}}>
        <thead>
          <tr>
            <th scope="col">{icon}</th>
            <th scope="col">{icon}</th>
            <th scope="col">{icon}</th>
            <th scope="col">{icon}</th>
            <th scope="col">{icon}</th>
            <th scope="col">{icon}</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item, index) => (
            <React.Fragment key={index}>
            {page==="Hiragana" ?(
              <td onClick={() => handleItemClick(item,index)}>{item.HIRAGANA} <br/>
              {item.Bangla}  {item.ROMAJI}
              
              </td>
            ):(<>
              <td onClick={() => handleItemClick(item,index)}>{item.Katakana} <br/>
              {item.Bangla}  {item.ROMAJI}
              
              </td>
            </>)}
             
              {(index + 1) % itemsPerLine === 0 && (
                <>
                  <td style={{ color: "white" }} >
                    <b style={{ color: "#ff8600" }}>
                    <PlayArrowIcon sx={{ fontSize: 40 }} />
                    </b>
                  </td>
                  <tr />
                </>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {selectedItemIndex !== null && (
        <ModelChar
          isOpen={true}
          toggle={closeModal}
          selectedItem={selectedItem}
          page={page}
          onNext={nextItem}
          onPrevious={previousItem}
        />
      )}
    </div>
  );
};

export default ChartTable;

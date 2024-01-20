"use client"
import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ModelChar from './ModelChar'; // Assuming you have a ModalExample component

const ChartTable = ({ jsonData }) => {
  const itemsPerLine = 5;
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <h2 className="text-center">alphabet chart</h2>
      <table className="table text-center" style={{ width: '60%' ,margin: "auto"}}>
        {/* <thead>
          <tr>
            <th scope="col">Column 1</th>
            <th scope="col">Column 2</th>
            <th scope="col">Column 3</th>
            <th scope="col">Column 4</th>
            <th scope="col">Column 5</th>
            <th scope="col">Play all</th>
          </tr>
        </thead> */}
        <tbody>
          {jsonData.map((item, index) => (
            <React.Fragment key={index}>
              <td onClick={() => handleItemClick(item)}>{item.HIRAGANA} <br/>
              {item.Katakana}  {item.ROMAJI}
              
              </td>
              {(index + 1) % itemsPerLine === 0 && (
                <>
                  {/* <td>
                    <PlayArrowIcon sx={{ fontSize: 40 }} />
                  </td> */}
                  <tr />
                </>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {selectedItem && (
        <ModelChar
          isOpen={true} // Pass a prop to control the modal visibility
          toggle={closeModal}
          selectedItem={selectedItem}
        />
      )}
    </div>
  );
};

export default ChartTable;

"use client"
import React, { useState, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const ChartTable = ({ jsonData }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTdClick = (item) => {
    console.log(item)
   
  };
 
  const itemsPerLine = 5; // 5 items + 1 'arefin'
 
  return (
    <div>
      <h2 className="text-center">alphabet chart</h2>
      <table className="table text-center" style={{ width: '60%' }}>
      
        <thead>
          <tr>
            <th scope="col">Column 1</th>
            <th scope="col">Column 2</th>
            <th scope="col">Column 3</th>
            <th scope="col">Column 4</th>
            <th scope="col">Column 5</th>
            <th scope="col">Play all</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item, index) => (
            <React.Fragment key={index}>
              <td onClick={() => handleTdClick(item)}>
                {item.HIRAGANA} <br />
                {item.Bangla} {item.ROMAJI}
              </td>
              {(index + 1) % itemsPerLine === 0 && (
                <>
                  <td>
                    <PlayArrowIcon sx={{ fontSize: 40 }} />
                  </td>
                  <tr />
                </>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default ChartTable;

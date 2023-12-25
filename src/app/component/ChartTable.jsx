"use client"
import React, { useState, useEffect } from 'react';

const ChartTable = ({ jsonData }) => {
  const itemsPerLine = 5;
  const itemsPerRow = 3




  return (
    <div>
      <table className="table text-center" style={{ width: '60%' }}>
        <thead>
          <tr>
            <th scope="col">Column 1</th>
            <th scope="col">Column 2</th>
            <th scope="col">Column 3</th>
            <th scope="col">Column 4</th>
            <th scope="col">Column 5</th>
            <th scope="col">Column 6</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item, index) => (
            <React.Fragment key={index}>
              <td>{item.HIRAGANA}</td>
              {(index + 1) % itemsPerLine === 0 && <tr />}

            </React.Fragment>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default ChartTable;

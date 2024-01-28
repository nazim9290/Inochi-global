"use client "
import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';


const ModelChar = ({ isOpen, toggle, selectedItem, page, onNext, onPrevious }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalBody>
        {selectedItem && (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <p style={{ marginLeft: '10px' ,fontSize:"40px"}}>{selectedItem.ROMAJI}</p>
            {page === "Hiragana" ? (
             <>
             <p style={{ marginLeft: '10px' ,fontSize:"100px" }}>{selectedItem.HIRAGANA}</p>
              <p style={{ marginLeft: '10px',fontSize:"40px" }}>{selectedItem.Bangla}</p>
             </>
            ) : (
             <>
             <p style={{ marginLeft: '10px' ,fontSize:"100px"}}>{selectedItem.Katakana}</p>
              <p style={{ marginLeft: '10px' ,fontSize:"40px"}}>{selectedItem.Bangla}</p>
             </>

            )}

          </div>
        )}
        {/* Add more information as needed */}
        <Button color="primary" onClick={onNext}>
          Next
        </Button>{' '}
        <Button color="primary" onClick={onPrevious}>
        previousItem
        </Button>{' '}
        <Button color="secondary" onClick={() => toggle(false)}>
          Cancel
        </Button>
      </ModalBody>
      
    </Modal>
  );
};

export default ModelChar;

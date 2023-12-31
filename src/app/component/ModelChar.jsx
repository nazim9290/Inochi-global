"use client "
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModelChar = ({ isOpen, toggle, selectedItem }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalBody>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p style={{ marginLeft: '10px' }}>
            {selectedItem.ROMAJI} 
          </p>        
          <p style={{ marginLeft: '10px' }}>
            {selectedItem.HIRAGANA}
          </p>
          <p style={{ marginLeft: '10px' }}>
            {selectedItem.Katakana}
          </p>
        </div>
        {/* Add more information as needed */}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Do Something
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModelChar;

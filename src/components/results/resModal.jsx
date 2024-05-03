import React, { useState, useEffect } from 'react';
import { Button} from 'antd';
import Modal from 'react-modal';
import {data} from './resArray';

function ResModal(props) {    
  const [modalData, setModalData] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalData(data[props.id]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalData('');
    setModalIsOpen(false);
  };

  return (
      <>      
        <Button type ='text' onClick={openModal}>Результаты тестирования</Button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <>
        <h1>{modalData.name}</h1>
        <p>Текст модального окна</p>
        <button onClick={closeModal}>Закрыть</button>
        </>
        </Modal>
      </>
    );
};
  
export default ResModal;
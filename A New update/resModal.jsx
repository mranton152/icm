import React, {useState} from 'react';
import {Button} from 'antd';
import Modal from 'react-modal';
import {data} from './resArray';
import { Input } from 'antd';

function ResModal(props) {    
  const [modalData, setModalData] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState(modalData.email);

  const openModal = () => {
    setModalData(data[props.id]);
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalData('');
    setModalIsOpen(false);
    document.body.style.overflow = "";
  };

 const downloadFile = () => { 
  const blob = new Blob([modalData.result], { type: "text/plain"});
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = modalData.name + " " + modalData.date + ".docx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);    
  };
  
  return (
      <>      
        <Button type ='text' onClick={openModal}>Результаты тестирования</Button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <>
        <h1 style = {{color: 'black', textAlign: 'left', textIndent: '25px', display: 'inline-block'}}>{modalData.name}</h1> 
        <Button type ='text' style = {{color: 'black', float: 'right'}} onClick={closeModal}>X</Button>  
                
        <form style = {{
          border: '1px solid black', 
          padding: '5px 10px', 
          width: 'auto', 
          height: '60%', 
          marginTop: '20px',
          marginLeft: '25px', 
          marginRight: '25px',
          borderRadius: '15px'}}>{modalData.result}</form>

          <div style={{textAlign: "center", margin: "10px"}}>
          <Button type ='text' style ={{background: '#036', color: '#fff',width: "20%"}} onClick={downloadFile}>Выгрузить в Word</Button>
          </div>
          
          <Input type = "text"           
            style = {{marginTop: '20px'}} 
            placeholder="Введите email" 
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='on'
            />
          
          <div style={{textAlign: "right", margin: "10px"}}>
          <Button type ='text' style ={{background: '#036', color: '#fff', width: "20%"}}>Отправить результат</Button>   
          </div>                
        </>
        </Modal>
      </>
    );
};
  
export default ResModal;
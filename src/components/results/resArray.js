import React, {useState} from 'react';
import ResModal from './resModal';

const data = [
    {
        key: '1',
        name: 'Иванов Иван',
        date: '25.03.2024',
        // results: <ResModal id = '0'/>      
    },
    {
        key: '2',
        name: 'Петров Петр',
        date: '20.03.2024',
        // results: <ResModal id = '1'/>       
    },
    {
        key: '3',
        name: 'Смирнова Ксения',
        date: '12.03.2024',
        // results: <ResModal id = '2'/>         
    },
    {
        key: '4',
        name: 'Романов Данил',
        date: '04.04.2024',
        // results: <ResModal id = '3'/>        
    },  
    {
        key: '5',
        name: 'Андреев Андрей',
        date: '06.04.2024',
        // results: <ResModal id = '4'/>        
    }    
  ];
    
  const columns = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Время',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '',
      dataIndex: 'results',
      key: 'results',
    },
  ];
  
  export {data, columns};
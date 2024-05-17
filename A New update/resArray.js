const data = [
    {
        key: '1',
        name: 'Иванов Иван',
        date: '25.03.2024', 
        result: "результат",
        email: "почта"
    },
    {
        key: '2',
        name: 'Петров Петр',
        date: '20.03.2024', 
        result: "результат",
        email: "почта"   
    },
    {
        key: '3',
        name: 'Смирнова Ксения',
        date: '12.03.2024', 
        result: "результат",
        email: "почта"    
    },
    {
        key: '4',
        name: 'Романов Данил',
        date: '04.04.2024',     
        result: "результат",
        email: "почта"  
    },  
    {
        key: '5',
        name: 'Андреев Андрей',
        date: '06.04.2024',  
        result: "результат",
        email: "почта"       
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
      dataIndex: 'resultColumn',
      key: 'resultColumn',
    },
  ];
  
  export {data, columns};
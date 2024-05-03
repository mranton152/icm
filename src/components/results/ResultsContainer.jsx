import React, {useState, useEffect} from 'react';
import { Input } from 'antd';
import { Space, Table, Tag } from 'antd';
import {columns, data} from './resArray';
import ResModal from './resModal';

const ResultsContainer = () => {
    const [userList, setUserList] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);

    const getData = () => {  
        const values = data.map((el, ind) =>{
            const val = {...el, results: <ResModal id = {ind}/>}
            console.log(val);
            return val;
        })
        setUserList(values);
        setFilter(values);
    }

    useEffect(() => {            
        const result = userList.filter((user) => {           
            return user.name.toLowerCase().includes(search.toLowerCase());
        })
        if (!search)
            getData();
        else
            setFilter(result);    
    }, [search]);
   
    return (
        <>        
            <h1 style = {{color: 'black', textAlign: 'left'}}>
                Результаты тестирования
            </h1> 
            <Input type = "text"           
            style = {{margin: '10px'}} 
            placeholder="Найти участника" 
            value = {search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <Table style = {{margin: '10px'}} dataSource={filter} columns={columns}/>
    </>  
    )    
}

export default ResultsContainer;
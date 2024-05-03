import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const testData = [
    { title: "Профиль", link: "/profile" },
    { title: "Профессиональный тип", link: "/proftype" },
    { title: "Тип мышления", link: "/typem" },
    { title: "Темперамент", link: "/test-4" },
    { title: "Социальный интеллект", link: "/test-5" },
    { title: "Мотивы труда", link: "/test-6" },
    { title: "Иерархия мотивов труда", link: "/test-7" },
    { title: "Психотип", link: "/test-8" },
    { title: "Типы профессий", link: "/test-9" }
];

const TestCard = ({ test }) => {

    // const history = useHistory();

    // const handleClick = () => {
    //   history.push(test.link);
    //     // Здесь можно добавить код для перехода на страницу с вопросами по ссылке
    //     // console.log(`Переход на ${test.link}`);
    // };

    return (
      <Link to={test.link} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{fontWeight: 'normal', fontSize: '22px',  color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0',  height: '70px', width: '333px', borderRadius: '10px', margin: '5px', cursor: 'pointer', border: '2px solid black' }}>
            {test.title} 
        </div>
      </Link>
    );
};

const TestContainer = () => {
    return (
        <div style={{ fontFamily: 'Magistral', textAlign: 'center' }}>
            <h2 style={{fontWeight: 'bold', fontSize: '26px', }}>Прохождение тестирования</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {testData.map((test, index) => (
                    <TestCard key={index} test={test} />
                ))}
            </div>
        </div>
    );
};

export default TestContainer;
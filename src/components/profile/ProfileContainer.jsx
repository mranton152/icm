import React from "react";

class QuestionMenu extends React.Component {
  render() {
    const { questions, handleQuestionClick } = this.props;
    const buttonStyle = {
      fontSize: "1em",
      width: "35px",
      height: "35px",
      justifyContent: "center",
      alignItems: "center",
    };

    const selectedButtonStyle = {
      ...buttonStyle,
      backgroundColor: "#FFD30A",
    };

    return (
      <div className="rounded-border-menu" style={{ float: "right"}}>
        <ul className="question-column">
          {questions.reduce((columns, q, index) => {
            const columnIndex = Math.floor(index / 5);
            
            if (!columns[columnIndex]) {
              columns[columnIndex] = []; 
            }
    
            columns[columnIndex].push(
              <li key={q.id}>
                <button
                  className="menu-button"
                  style={q.selected ? selectedButtonStyle : buttonStyle}
                  onClick={() => handleQuestionClick(q.id)}
                >
                  {q.id}
                </button>
              </li>
            );
    
            return columns;
          }, []).map((column, index) => (
            <div key={index} style={{ float: 'left' }}>
              <ul className="question-row">{column}</ul>
            </div>
          ))
          }
        </ul>
      </div>
    );

  }
}
class ProfileContainer extends React.Component {
  state = {
    questions: [
      { id: 1, question: "1.  Узнавать об открытиях в области физики и  математики." , buttons: [ { id: "btn1", response: "+" }, { id: "btn2", response: "–" } ] },
      { id: 2, question: "2.  Смотреть передачи о жизни растений и животных." , buttons: [ { id: "btn3", response: "+" }, { id: "btn4", response: "–" } ] },
      { id: 3, question: "3.  Выяснять устройство электроприборов." ,buttons: [ { id: "btn5", response: "+" }, { id: "btn6", response: "–" } ] },
      { id: 4, question: "4.  Читать научно-популярные технические журналы." , buttons: [ { id: "btn7", response: "+" }, { id: "btn8", response: "–" } ] },
      { id: 5, question: "5.  Смотреть передачи о  жизни людей в разных странах." ,buttons: [ { id: "btn9", response: "+" }, { id: "btn10", response: "–" } ] },
      { id: 6, question: "6.  Бывать на выставках, концертах, спектаклях." , buttons: [ { id: "btn11", response: "+" }, { id: "btn12", response: "–" } ] },
      { id: 7, question: "7.  Обсуждать и анализировать  события в стране и за рубежом." ,buttons: [ { id: "btn13", response: "+" }, { id: "btn14", response: "–" } ] },
      { id: 8, question: "8.   Наблюдать за работой  медсестры, врача." ,buttons: [ { id: "btn15", response: "+" }, { id: "btn16", response: "–" } ] },
      { id: 9, question: "9.  Создавать уют и порядок в доме, классе, школе." ,buttons: [ { id: "btn17", response: "+" }, { id: "btn18", response: "–" } ] },
      { id: 10, question: "10. Читать книги и смотреть фильмы о войнах и сражениях. " ,buttons: [ { id: "btn19", response: "+" }, { id: "btn20", response: "–" } ] },
      { id: 11, question: "11. Заниматься математическими  расчетами и вычислениями." ,buttons: [ { id: "btn21", response: "+" }, { id: "btn22", response: "–" } ] },
      { id: 12, question: "12. Узнавать  об открытиях в области  химии и биологии." ,buttons: [ { id: "btn23", response: "+" }, { id: "btn24", response: "–" } ] },
      { id: 13, question: "13. Ремонтировать бытовые электроприборы." ,buttons: [ { id: "btn25", response: "+" }, { id: "btn26", response: "–" } ] },
      { id: 14, question: "14. Посещать технические выставки, знакомиться с достижениями науки  и техники." ,buttons: [ { id: "btn27", response: "+" }, { id: "btn28", response: "–" } ] },
      { id: 15, question: "15. Ходить в походы, бывать в новых неизведанных местах." ,buttons: [ { id: "btn29", response: "+" }, { id: "btn30", response: "–" } ] },
      { id: 16, question: "16. Читать отзывы и  статьи о книгах, фильмах, концертах." ,buttons: [ { id: "btn31", response: "+" }, { id: "btn32", response: "–" } ] },
      { id: 17, question: "17. Участвовать в общественной  жизни школы, города." ,buttons: [ { id: "btn33", response: "+" }, { id: "btn34", response: "–" } ] },
      { id: 18, question: "18. Объяснять одноклассникам учебный материал." ,buttons: [ { id: "btn35", response: "+" }, { id: "btn36", response: "–" } ] },
      { id: 19, question: "19. Самостоятельно выполнять работу по хозяйству." ,buttons: [ { id: "btn37", response: "+" }, { id: "btn38", response: "–" } ] },
      { id: 20, question: "20. Соблюдать режим, вести здоровый образ жизни." ,buttons: [ { id: "btn39", response: "+" }, { id: "btn40", response: "–" } ] },
      { id: 21, question: "21. Проводить опыты по физике." ,buttons: [ { id: "btn41", response: "+" }, { id: "btn42", response: "–" } ] },
      { id: 22, question: "22. Ухаживать за животными  растениями." ,buttons: [ { id: "btn43", response: "+" }, { id: "btn44", response: "–" } ] },
      { id: 23, question: "23. Читать статьи об электронике и радиотехнике." ,buttons: [ { id: "btn45", response: "+" }, { id: "btn46", response: "–" } ] },
      { id: 24, question: "24. Собирать и ремонтировать  часы, замки, велосипеды. " ,buttons: [ { id: "btn47", response: "+" }, { id: "btn48", response: "–" } ] },
      { id: 25, question: "25. Коллекционировать камни, минералы." ,buttons: [ { id: "btn49", response: "+" }, { id: "btn50", response: "–" } ] },
      { id: 26, question: "26. Вести дневник, сочинять стихи и рассказы." ,buttons: [ { id: "btn51", response: "+" }, { id: "btn52", response: "–" } ] },
      { id: 27, question: "27. Читать биографии известных политиков, книги по истории." ,buttons: [ { id: "btn53", response: "+" }, { id: "btn54", response: "–" } ] },
      { id: 28, question: "28. Играть с детьми, помогать делать уроки младшим." ,buttons: [ { id: "btn55", response: "+" }, { id: "btn56", response: "–" } ] },
      { id: 29, question: "29. Закупать продукты для дома, вести учет расходов." ,buttons: [ { id: "btn57", response: "+" }, { id: "btn58", response: "–" } ] },
      { id: 30, question: "30. Участвовать в военных играх, походах." ,buttons: [ { id: "btn59", response: "+" }, { id: "btn60", response: "–" } ] },
      { id: 31, question: "31. Заниматься   физикой и математикой сверх школьной программы." ,buttons: [ { id: "btn61", response: "+" }, { id: "btn62", response: "–" } ] },
      { id: 32, question: "32. Замечать и объяснять природные явления." ,buttons: [ { id: "btn63", response: "+" }, { id: "btn64", response: "–" } ] },
      { id: 33, question: "33. Собирать и ремонтировать компьютеры." ,buttons: [ { id: "btn65", response: "+" }, { id: "btn66", response: "–" } ] },
      { id: 34, question: "34. Строить чертежи, схемы, графики, в том числе на компьютере." ,buttons: [ { id: "btn67", response: "+" }, { id: "btn68", response: "–" } ] },
      { id: 35, question: "35. Участвовать в географических, геологических экспедициях." ,buttons: [ { id: "btn69", response: "+" }, { id: "btn70", response: "–" } ] },
      { id: 36, question: "36. Рассказывать  друзьям о прочитанных книгах, увиденных фильмах и спектаклях." ,buttons: [ { id: "btn71", response: "+" }, { id: "btn72", response: "–" } ] },
      { id: 37, question: "37. Следить за политической жизнью в стране и за рубежом" ,buttons: [ { id: "btn73", response: "+" }, { id: "btn74", response: "–" } ] },
      { id: 38, question: "38. Ухаживать за маленькими детьми или близкими, если они заболели." ,buttons: [ { id: "btn75", response: "+" }, { id: "btn76", response: "–" } ] },
      { id: 39, question: "39. Искать и находить способы зарабатывания денег." ,buttons: [ { id: "btn77", response: "+" }, { id: "btn78", response: "–" } ] },
      { id: 40, question: "40. Заниматься физической культурой и спортом." ,buttons: [ { id: "btn79", response: "+" }, { id: "btn80", response: "–" } ] },
      { id: 41, question: "41. Участвовать в физико-математических олимпиадах." ,buttons: [ { id: "btn81", response: "+" }, { id: "btn82", response: "–" } ] },
      { id: 42, question: "42. Выполнять лабораторные опыты по химии и биологии." ,buttons: [ { id: "btn83", response: "+" }, { id: "btn84", response: "–" } ] },
      { id: 43, question: "43. Разбираться в принципах работы электроприборов." ,buttons: [ { id: "btn85", response: "+" }, { id: "btn86", response: "–" } ] },
      { id: 44, question: "44. Разбираться в принципах работы различных механизмов." ,buttons: [ { id: "btn87", response: "+" }, { id: "btn88", response: "–" } ] },
      { id: 45, question: "45. “Читать”  географические и геологические карты." ,buttons: [ { id: "btn89", response: "+" }, { id: "btn90", response: "–" } ] },
      { id: 46, question: "46. Участвовать в спектаклях, концертах." ,buttons: [ { id: "btn91", response: "+" }, { id: "btn92", response: "–" } ] },
      { id: 47, question: "47. Изучать политику и экономику других стран." ,buttons: [ { id: "btn93", response: "+" }, { id: "btn94", response: "–" } ] },
      { id: 48, question: "48. Изучать причины поведения людей, строение человеческого организма." ,buttons: [ { id: "btn95", response: "+" }, { id: "btn96", response: "–" } ] },
      { id: 49, question: "49. Вкладывать заработанные деньги в домашний бюджет." ,buttons: [ { id: "btn97", response: "+" }, { id: "btn98", response: "–" } ] },
      { id: 50, question: "50. Участвовать в спортивных соревнованиях." ,buttons: [ { id: "btn99", response: "+" }, { id: "btn100", response: "–" } ] },
    ],
    displayedSetIndex: 0,
    answeredQuestions: {},
  };

  handleResponse = (id, response) => {
    const updatedQuestions = this.state.questions.map((q) =>
      q.id === id ? { ...q, selected: response } : q
    );
    this.setState({ questions: updatedQuestions });

    const updatedAnswers = { ...this.state.answeredQuestions, [id]: response };
    this.setState({ answeredQuestions: updatedAnswers });

    console.log(`Question ${id}: ${response}`);
  };

  handleSetChange = (index) => {
    this.setState({
      displayedSetIndex: index,
    });
  };
  handleQuestionClick = (questionId) => {
    const setIndex = Math.floor((questionId - 1) / 5);
    this.setState({
      displayedSetIndex: setIndex,
    });
  };
  render() {
    const { questions, displayedSetIndex, answeredQuestions } = this.state;
    const questionsToShow = questions.slice(displayedSetIndex * 5, displayedSetIndex * 5 + 5);
    const buttonStyle = {
      fontSize: "1em",
      width: "35px",
      height: "35px",
      justifyContent: "center",
      alignItems: "center",
    };

    const selectedButtonStyle = {
      ...buttonStyle,
      backgroundColor: "#63C97A",
    };

    return (
      <div className="rounded-border1" style={{ fontFamily: "Magistral", float: "left" }}>
        <h2 style={{ fontSize: "28px" }}>Тест "Профиль"</h2>
        <QuestionMenu questions={questions} handleQuestionClick={this.handleQuestionClick} />
        <h2 style={{ fontSize: "16px", paddingLeft: "20px" }}>
          Нравится ли вам делать то, о чем говориться в приведенных ниже утверждениях? Если да, то
          <br />
          в выберете плюс (+), если не нравится – минус (-).
        </h2>
        <br />
        <ul>
          {questionsToShow.map((q) => (
            <div style={{ float: "left" }} className="rounded-border-question" key={q.id}>
              <h2>
                {q.question}
                <div style={{ float: "right" }}>
                  {q.buttons.map((button) => (
                    <button 
                      className="menu-button"
                      key={button.id}
                      style={answeredQuestions[q.id] === button.response ? selectedButtonStyle : buttonStyle}
                      onClick={() => this.handleResponse(q.id, button.response)}
                    >
                      {button.response}
                    </button>
                  ))}
                </div>
              </h2>
            </div>
          ))}
        </ul>
        <div style={{ marginTop: "20px" }}>
        {displayedSetIndex < Math.ceil(questions.length / 5) - 1 && (
            <button
              className="rounded-border-next"
              onClick={() => this.handleSetChange(displayedSetIndex + 1)}
            >
              Следующая страница
            </button>
           )}
          {displayedSetIndex > 0 && (
            <button
              className="rounded-border-next"
              onClick={() => this.handleSetChange(displayedSetIndex - 1)}
            >
              Предыдущая страница
            </button>
          )}
        </div>
      </div>
    );
  }
}
export default ProfileContainer;
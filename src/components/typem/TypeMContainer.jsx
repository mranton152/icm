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
class TypeMContainer extends React.Component {
  state = {
    questions: [
        { id: 1, question: "1. Мне легче что-либо сделать самому, чем объяснить другому.", buttons: [ { id: "btn1", response: "+" }, { id: "btn2", response: "–" } ] },
        { id: 2, question: "2. Мне интересно составлять компьютерные программы.", buttons: [ { id: "btn3", response: "+" }, { id: "btn4", response: "–" } ] },
        { id: 3, question: "3. Я люблю читать книги.", buttons: [ { id: "btn5", response: "+" }, { id: "btn6", response: "–" } ] },
        { id: 4, question: "4. Мне нравится живопись, скульптура, архитектура.", buttons: [ { id: "btn7", response: "+" }, { id: "btn8", response: "–" } ] },
        { id: 5, question: "5. Даже в отлаженном деле я стараюсь что-то улучшить.", buttons: [ { id: "btn9", response: "+" }, { id: "btn10", response: "–" } ] },
        { id: 6, question: "6. Я лучше понимаю, если мне объясняют на предметах или рисунках.", buttons: [ { id: "btn11", response: "+" }, { id: "btn12", response: "–" } ] },
        { id: 7, question: "7. Я люблю играть в шахматы.", buttons: [ { id: "btn13", response: "+" }, { id: "btn14", response: "–" } ] },
        { id: 8, question: "8. Я легко излагаю свои мысли как в устной, так и в письменной форме.", buttons: [ { id: "btn15", response: "+" }, { id: "btn16", response: "–" } ] },
        { id: 9, question: "9. Когда я читаю книгу, я четко вижу ее героев и описываемые события.", buttons: [ { id: "btn17", response: "+" }, { id: "btn18", response: "–" } ] },
        { id: 10, question: "10. Я предпочитаю самостоятельно планировать свою работу.", buttons: [ { id: "btn19", response: "+" }, { id: "btn20", response: "–" } ] },
        { id: 11, question: "11. Мне нравится все делать своими руками.", buttons: [ { id: "btn21", response: "+" }, { id: "btn22", response: "–" } ] },
        { id: 12, question: "12. В детстве я создавал (а) свой шифр для переписки с друзьями.", buttons: [ { id: "btn23", response: "+" }, { id: "btn24", response: "–" } ] },
        { id: 13, question: "13. Я придаю большое значение сказанному слову.", buttons: [ { id: "btn25", response: "+" }, { id: "btn26", response: "–" } ] },
        { id: 14, question: "14. Знакомые мелодии вызывают у меня в голове определенные картины.", buttons: [ { id: "btn27", response: "+" }, { id: "btn28", response: "–" } ] },
        { id: 15, question: "15. Разнообразные увлечения делают жизнь человека богаче и ярче.", buttons: [ { id: "btn29", response: "+" }, { id: "btn30", response: "–" } ] },
        { id: 16, question: "16. При решении задачи мне легче идти методом проб и ошибок.", buttons: [ { id: "btn31", response: "+" }, { id: "btn32", response: "–" } ] },
        { id: 17, question: "17. Мне интересно разбираться в природе физических явлений.", buttons: [ { id: "btn33", response: "+" }, { id: "btn34", response: "–" } ] },
        { id: 18, question: "18. Мне интересна работа ведущего теле-радиопрограмм, журналиста.", buttons: [ { id: "btn35", response: "+" }, { id: "btn36", response: "–" } ] },
        { id: 19, question: "19. Мне легко представить предмет или животное, которых нет в природе.", buttons: [ { id: "btn37", response: "+" }, { id: "btn38", response: "–" } ] },
        { id: 20, question: "20. Мне больше нравится процесс деятельности, чем сам результат.", buttons: [ { id: "btn39", response: "+" }, { id: "btn40", response: "–" } ] },
        { id: 21, question: "21. Мне нравилось в детстве собирать конструктор из деталей, лего.", buttons: [ { id: "btn41", response: "+" }, { id: "btn42", response: "–" } ] },
        { id: 22, question: "22. Я предпочитаю точные науки (математику, физику).", buttons: [ { id: "btn43", response: "+" }, { id: "btn44", response: "–" } ] },
        { id: 23, question: "23. Меня восхищает точность и глубина некоторых стихов.", buttons: [ { id: "btn45", response: "+" }, { id: "btn46", response: "–" } ] },
        { id: 24, question: "24. Знакомый запах вызывает в моей памяти прошлые события.", buttons: [ { id: "btn47", response: "+" }, { id: "btn48", response: "–" } ] },
        { id: 25, question: "25. Я не хотел (а) бы подчинять свою жизнь определенной системе.", buttons: [ { id: "btn49", response: "+" }, { id: "btn50", response: "–" } ] },
        { id: 26, question: "26. Когда я слышу музыку, мне хочется танцевать.", buttons: [ { id: "btn51", response: "+" }, { id: "btn52", response: "–" } ] },
        { id: 27, question: "27. Я понимаю красоту математических формул.", buttons: [ { id: "btn53", response: "+" }, { id: "btn54", response: "–" } ] },
        { id: 28, question: "28. Мне легко говорить перед любой аудиторией.", buttons: [ { id: "btn55", response: "+" }, { id: "btn56", response: "–" } ] },
        { id: 29, question: "29. Я люблю посещать выставки, спектакли, концерты.", buttons: [ { id: "btn57", response: "+" }, { id: "btn58", response: "–" } ] },
        { id: 30, question: "30. Я сомневаюсь даже в том, что для других очевидно.", buttons: [ { id: "btn59", response: "+" }, { id: "btn60", response: "–" } ] },
        { id: 31, question: "31. Я люблю заниматься рукоделием, что-то мастерить.", buttons: [ { id: "btn61", response: "+" }, { id: "btn62", response: "–" } ] },
        { id: 32, question: "32. Мне интересно было бы расшифровать древние тексты.", buttons: [ { id: "btn63", response: "+" }, { id: "btn64", response: "–" } ] },
        { id: 33, question: "33. Я легко усваиваю грамматические конструкции языка.", buttons: [ { id: "btn65", response: "+" }, { id: "btn66", response: "–" } ] },
        { id: 34, question: "34. Красота для меня важнее, чем польза.", buttons: [ { id: "btn67", response: "+" }, { id: "btn68", response: "–" } ] },
        { id: 35, question: "35. Не люблю ходить одним и тем же путем.", buttons: [ { id: "btn69", response: "+" }, { id: "btn70", response: "–" } ] },
        { id: 36, question: "36. Истинно только то, что можно потрогать руками.", buttons: [ { id: "btn71", response: "+" }, { id: "btn72", response: "–" } ] },
        { id: 37, question: "37. Я легко запоминаю формулы, символы, условные обозначения.", buttons: [ { id: "btn73", response: "+" }, { id: "btn74", response: "–" } ] },
        { id: 38, question: "38. Друзья любят слушать, когда я им что-то рассказываю.", buttons: [ { id: "btn75", response: "+" }, { id: "btn76", response: "–" } ] },
        { id: 39, question: "39. Я легко могу представить в образах содержание рассказа или фильма.", buttons: [ { id: "btn77", response: "+" }, { id: "btn78", response: "–" } ] },
        { id: 40, question: "40. Я не могу успокоиться, пока не доведу свою работу до совершенства.", buttons: [ { id: "btn79", response: "+" }, { id: "btn80", response: "–" } ] },
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
        <h2 style={{ fontSize: "28px" }}>Тест "Тип мышления"</h2>
        <QuestionMenu questions={questions} handleQuestionClick={this.handleQuestionClick} />
        <h2 style={{ fontSize: "16px", paddingLeft: "20px" }}>
        Если согласны с высказыванием, то рядом, справа от номера высказывания, поставьте плюс (+), если нет – минус (-).
          <br />
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
export default TypeMContainer;
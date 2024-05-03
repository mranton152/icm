import React from "react";

class QuestionMenu extends React.Component {
  render() {
    const { questions, handleQuestionClick, answeredQuestions } = this.props;
    const buttonStyle = {
      fontSize: "1em",
      width: "35px",
      height: "35px",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "10px", // Расстояние между вопросами в колонке
    };

    const selectedButtonStyle = {
      ...buttonStyle,
      backgroundColor: "#FFD30A",
    };

    const gridStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridTemplateRows: 'repeat(6, 1fr)',
      gap: '5px',
      padding: "10px",
      margin: "10px",
    };

    return (
      <div className="rounded-border-menu" style={{ float: "right" }}>
        <div style={{ float: "left" }}>
          <div style={gridStyle}>
            {questions.map((q) => (
              <button
                key={q.id}
                className="menu-button"
                style={
                  answeredQuestions[q.id] ? selectedButtonStyle : buttonStyle
                }
                onClick={() => handleQuestionClick(q.id)}
              >
                {q.answeredId !== undefined
                  ? q.questionsPair.find((pair) => pair.id === q.answeredId).buttons.response
                  : q.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

class ProfTypeContainer extends React.Component {
  state = {
    questions: [
        {
        id: 1, 
        questionsPair: [
          { question: "Автомеханик (Р)",buttons:  { id: "btn1", response: "+" } },
          { question: "Физиотерапевт (С)",buttons:  { id: "btn2", response: "+" }  }
        ],
      },
      { 
        id: 2, 
        questionsPair: [
          { question: "Специалист по защите информации (И)",buttons:  { id: "btn3", response: "+" }  },
          { question: "Логистик (П)",buttons:  { id: "btn4", response: "+" }  }
        ],
      },
      { 
        id: 3, 
        questionsPair: [
          { question: "Оператор связи (О)",buttons:  { id: "btn5", response: "+" }  },
          { question: "Кинооператор (А)",buttons:  { id: "btn6", response: "+" }  }
        ],
      },
      { 
        id: 4, 
        questionsPair: [
          { question: "Водитель (Р)",buttons:  { id: "btn7", response: "+" }  },
          { question: "Продавец (С)",buttons:  { id: "btn8", response: "+" }  }
        ],
      },
      { 
        id: 5, 
        questionsPair: [
          { question: "Инженер-конструктор (И)",buttons:  { id: "btn9", response: "+" }  },
          { question: "Менеджер по продажам (П)",buttons:  { id: "btn10", response: "+" }  }
        ],
      },
      { 
        id: 6, 
        questionsPair: [
          { question: "Диспетчер (О)",buttons:  { id: "btn11", response: "+" }  },
          { question: "Дизайнер компьютерных программ (А)",buttons:  { id: "btn12", response: "+" }  }
        ],
      },
      { 
        id: 7, 
        questionsPair: [
          { question: "Ветеринар (Р)",buttons:  { id: "btn3", response: "+" }  },
          { question: "Эколог (С)",buttons:  { id: "btn14", response: "+" }  }
        ],
      },
      { 
        id: 8, 
        questionsPair: [
          { question: "Биолог-исследователь (И)",buttons:  { id: "btn15", response: "+" }  },
          { question: "Фермер (П)",buttons:  { id: "btn16", response: "+" }  }
        ],
      },
      { 
        id: 9, 
        questionsPair: [
          { question: "Лаборант (О)",buttons:  { id: "btn17", response: "+" }  },
          { question: "Дрессировщик (А)" ,buttons:  { id: "btn18", response: "+" } }
        ],
      },
      { 
        id: 10, 
        questionsPair: [
          { question: "Агроном (Р)" ,buttons:  { id: "btn19", response: "+" } },
          { question: "Санитарный врач (С)",buttons:  { id: "btn20", response: "+" }  }
        ],
      },
      { 
        id: 11, 
        questionsPair: [
          { question: "Селекционер (И)",buttons:  { id: "btn21", response: "+" }  },
          { question: "Заготовитель сельхозпродуктов (П)",buttons:  { id: "btn22", response: "+" }  }
        ],
      },
      { 
        id: 12, 
        questionsPair: [
          { question: "Микробиолог (О)",buttons:  { id: "btn23", response: "+" }  },
          { question: "Ландшафтный дизайнер (А)",buttons:  { id: "btn24", response: "+" }  }
        ],
      },
      { 
        id: 13, 
        questionsPair: [
          { question: "Массажист (Р)",buttons:  { id: "btn25", response: "+" }  },
          { question: "Воспитатель (С)",buttons:  { id: "btn26", response: "+" }  }
        ],
      },
      { 
        id: 14, 
        questionsPair: [
          { question: "Преподаватель (И)",buttons:  { id: "btn27", response: "+" }  },
          { question: "Предприниматель (П)",buttons:  { id: "btn28", response: "+" }  }
        ],
      },
      { 
        id: 15, 
        questionsPair: [
          { question: "Администратор (О)",buttons:  { id: "btn29", response: "+" }  },
          { question: "Режиссер театра и кино (А)",buttons:  { id: "btn30", response: "+" }  }
        ],
      },
      { 
        id: 16, 
        questionsPair: [
          { question: "Официант (Р)",buttons:  { id: "btn31", response: "+" }  },
          { question: "Врач (С)",buttons:  { id: "btn32", response: "+" }  }
        ],
      },
      { 
        id: 17, 
        questionsPair: [
          { question: "Психолог (И)",buttons:  { id: "btn33", response: "+" }  },
          { question: "Торговый агент (П)",buttons:  { id: "btn34", response: "+" }  }
        ],
      },
      { 
        id: 18, 
        questionsPair: [
          { question: "Страховой агент (О)",buttons:  { id: "btn35", response: "+" }  },
          { question: "Хореограф (А)",buttons:  { id: "btn36", response: "+" }  }
        ],
      },
      { 
        id: 19, 
        questionsPair: [
          { question: "Ювелир-гравер (Р)",buttons:  { id: "btn37", response: "+" }  },
          { question: "Журналист (С)",buttons:  { id: "btn38", response: "+" }  }
        ],
      },
      { 
        id: 20, 
        questionsPair: [
          { question: "Искусствовед (И)",buttons:  { id: "btn39", response: "+" }  },
          { question: "Продюсер (П)",buttons:  { id: "btn40", response: "+" }  }
        ],
      },
      { 
        id: 21, 
        questionsPair: [
          { question: "Редактор (О)",buttons:  { id: "btn41", response: "+" }  },
          { question: "Музыкант (А)",buttons:  { id: "btn42", response: "+" }  }
        ],
      },
      { 
        id: 22, 
        questionsPair: [
          { question: "Дизайнер интерьера (Р)",buttons:  { id: "btn43", response: "+" }  },
          { question: "Экскурсовод (С)",buttons:  { id: "btn44", response: "+" }  }
        ],
      },
      { 
        id: 23, 
        questionsPair: [
          { question: "Композитор (И)",buttons:  { id: "btn45", response: "+" }  },
          { question: "Арт-директор (П)",buttons:  { id: "btn46", response: "+" }  }
        ],
      },
      { 
        id: 24, 
        questionsPair: [
          { question: "Музейный работник (О)",buttons:  { id: "btn47", response: "+" }  },
          { question: "Актер театра и кино (А)",buttons:  { id: "btn48", response: "+" }  }
        ],
      },
      { 
        id: 25, 
        questionsPair: [
          { question: "Верстальщик (Р)",buttons:  { id: "btn49", response: "+" }  },
          { question: "Гид-переводчик (С)" ,buttons:  { id: "btn50", response: "+" } }
        ],
      },
      { 
        id: 26, 
        questionsPair: [
          { question: "Лингвист (И)",buttons:  { id: "btn51", response: "+" }  },
          { question: "Антикризисный управляющий (П)",buttons:  { id: "btn52", response: "+" }  }
        ],
      },
      { 
        id: 27, 
        questionsPair: [
          { question: "Корректор (О)",buttons:  { id: "btn53", response: "+" }  },
          { question: "Художественный редактор (А)",buttons:  { id: "btn54", response: "+" }  }
        ],
      },
      { 
        id: 28, 
        questionsPair: [
          { question: "Наборщик текстов (Р)",buttons:  { id: "btn55", response: "+" }  },
          { question: "Юрисконсульт (С)",buttons:  { id: "btn56", response: "+" }  }
        ],
      },
      { 
        id: 29, 
        questionsPair: [
          { question: "Программист (И)",buttons:  { id: "btn57", response: "+" }  },
          { question: "Брокер (П)",buttons:  { id: "btn58", response: "+" }  }
        ],
      },
      { 
        id: 30, 
        questionsPair: [
          { question: "Бухгалтер (О)",buttons:  { id: "btn59", response: "+" }  },
          { question: "Литературный переводчик (А)",buttons:  { id: "btn60", response: "+" }  }
        ],
      },
    ],
    displayedSetIndex: 0,
    answeredQuestions: {},
  };

  handleResponse = (id, selectedId) => {
    const updatedQuestions = this.state.questions.map((q) => {
      if (q.id === id) {
        const updatedQuestionsPair = q.questionsPair.map((questionPair) => {
          if (questionPair.buttons.id === selectedId) {
            return {
              ...questionPair,
              selected: true,
            };
          } else {
            return {
              ...questionPair,
              selected: false,
            };
          }
        });
        return {
          ...q,
          questionsPair: updatedQuestionsPair,
        };
      }
      return q;
    });

    this.setState({ questions: updatedQuestions });

    const updatedAnswers = { ...this.state.answeredQuestions, [id]: selectedId };
    this.setState({ answeredQuestions: updatedAnswers });

    console.log(`Question ${id}: Selected button ID - ${selectedId}`);
};

  handleQuestionClick = (questionId) => {
    const setIndex = Math.floor((questionId - 1) / 5);
    this.setState({
      displayedSetIndex: setIndex,
    });
  };
  handleSetChange = (index) => {
    this.setState({
      displayedSetIndex: index,
    });
  };
  render() {
    const { questions, displayedSetIndex, answeredQuestions } = this.state;
    const pairToShow = questions[displayedSetIndex];
    const pairsToShow = questions.slice(displayedSetIndex * 5, displayedSetIndex * 5 + 5);

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
          <h2 style={{ fontSize: "28px" }}>Тест "Профессиональный тип"</h2>
          <QuestionMenu questions={questions} answeredQuestions={answeredQuestions} handleQuestionClick={this.handleQuestionClick}/>
          <h2 style={{ fontSize: "16px", paddingLeft: "20px" }}>
              Из каждой пары профессий надо выбрать более привлекательную, и в бланке ответов рядом с ее кодом поставить «+».
          </h2>
          <br />
          {pairsToShow.map(pairToShow => (
              <div style={{ float: "left" }} className="rounded-border-question" key={pairToShow.id}>
                  {pairToShow.questionsPair.map((q, index) => (
                      <div key={q.question}>
                          <h2>{q.question}</h2>
                          {q.buttons && (
    <button
        key={q.buttons.id}
        className="menu-button"
        style={
        q.selected
            ? selectedButtonStyle
            : buttonStyle
        }
        onClick={() => this.handleResponse(pairToShow.id, q.buttons.id)}
        >
        {q.buttons.response}
    </button>
                          )}
                      </div>
                  ))}
              </div>
          ))}
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
export default ProfTypeContainer;
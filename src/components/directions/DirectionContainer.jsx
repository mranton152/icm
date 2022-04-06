import React from "react";
import "antd/dist/antd.css";
import { Collapse, Icon, List, Avatar } from "antd";
import { directions, standards, disciplines, courses } from "./array";
const { Panel } = Collapse;

class DirectionContainer extends React.Component {
  state = {
    activeDirection: null,
    activeStandard: null,
    activeDiscipline: null,
    activeCourse: null,
  };

  ChangeActiveDirection = (el) => {
    this.setState({ activeDirection: el });
  };

  ChangeActiveStandard = (el) => {
    this.setState({ activeStandard: el });
  };

  ChangeActiveDiscipline = (el) => {
    this.setState({ activeDiscipline: el });
  };

  ChangeActiveCourse = (el) => {
    this.setState({ activeCourse: el });
  };

  render() {
    return (
      <Collapse
        expandIcon={({ isActive }) => (
          <Icon type="double-right" rotate={isActive ? 90 : 0} />
        )}
        onChange={this.ChangeActiveDirection}
        accordion
        activeKey={this.state.activeDirection}
        className="mt-12 w-600"
      >
        {directions.map((direction) => (
          <Panel forceRender header={direction.name} key={direction.id}>
            Стандарты
            <Collapse
              expandIcon={({ isActive }) => (
                <Icon type="double-right" rotate={isActive ? 90 : 0} />
              )}
              onChange={this.ChangeActiveStandard}
              accordion
              activeKey={this.state.activeStandard}
              className="mt-12 w-500"
            >
              {standards
                .filter(
                  (standard) => standard.directions.indexOf(direction.id) !== -1
                )
                .map((stand) => (
                  <Panel forceRender header={stand.name} key={stand.id}>
                    <List
                      dataSource={stand.description}
                      renderItem={(item) => (
                        <List.Item key={item}>
                          <List.Item.Meta
                            // avatar={
                            // <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            // <Icon type="crown" />
                            // }
                            title={<Icon type="crown" />}
                            description={item}
                          />
                          <div></div>
                        </List.Item>
                      )}
                    ></List>
                    Дисциплины
                    <Collapse
                      expandIcon={({ isActive }) => (
                        <Icon type="double-right" rotate={isActive ? 90 : 0} />
                      )}
                      onChange={this.ChangeActiveDiscipline}
                      accordion
                      activeKey={this.state.activeDiscipline}
                      className="mt-12 w-400"
                    >
                      {disciplines
                        .filter(
                          (discipline) =>
                            discipline.standards.indexOf(stand.id) !== -1
                        )
                        .map((discipline) => (
                          <Panel header={discipline.name} key={discipline.id}>
                            Обучающие курсы
                            <Collapse
                              expandIcon={({ isActive }) => (
                                <Icon
                                  type="double-right"
                                  rotate={isActive ? 90 : 0}
                                />
                              )}
                              onChange={this.ChangeActiveCourse}
                              accordion
                              activeKey={this.state.activeCourse}
                              className="mt-12 w-400"
                            >
                              {courses
                                .filter(
                                  (course) =>
                                    course.disciplines.indexOf(
                                      discipline.id
                                    ) !== -1
                                )
                                .map((course) => (
                                  <Panel header={course.name} key={course.id}>
                                    <div>
                                      <ul>
                                        <li>
                                          <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={course.link}
                                          >
                                            Перейти{" "}
                                          </a>
                                        </li>
                                        <li>Цена: {course.price}</li>
                                      </ul>
                                    </div>
                                  </Panel>
                                ))}
                            </Collapse>
                          </Panel>
                        ))}
                    </Collapse>
                  </Panel>
                ))}
            </Collapse>
          </Panel>
        ))}
      </Collapse>
    );
  }
}
export default DirectionContainer;

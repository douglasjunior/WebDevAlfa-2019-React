import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';

const TASKS = [
  {
    id: 1,
    title: 'Aprender React JS',
    description: 'Aprenderemos na primeira aula'
  },
  {
    id: 2,
    title: 'Aprender React Router',
    description: 'Aprenderemos na segunda aula'
  },
  {
    id: 3,
    title: 'Aprender a ficar rico',
    description: 'Fazer medicina'
  }
]

class Tasks extends Component {

  /*
    const tasksItems = TASKS.map(task => <li>{task.title}</li>);

    const tasksItems = [];
    for (let index in TASKS) {
      const task = TASKS[index]
      tasksItems.push(
        <li>{task.title}</li>
      )
    }
  */

  // /tasks/1
  // /tasks/2
  // /tasks/3
  renderTasks = () => {
    const tasksItems = TASKS.map((task) => {
      return (
        <li>
          <Link to={'/tasks/' + task.id}>
            {task.title}
          </Link>
        </li>
      )
    });
    return tasksItems;
  }

  renderTaskDescription = (routeProps) => {
    const taskId = parseInt(routeProps.match.params.taskId);
    const task = TASKS.find((task) => {
      return task.id === taskId;
    })

    if (!task) {
      return (
        <p>Tarefa não encontrada</p>
      )
    }

    return(
      <p>
        {task.description}
      </p>
    )
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderTasks()}
        </ul>

        <br />

        <div>
          <Route
            path="/tasks/:taskId"
            render={this.renderTaskDescription}
          />
        </div>
      </div>
    )
  }
}

export default Tasks;

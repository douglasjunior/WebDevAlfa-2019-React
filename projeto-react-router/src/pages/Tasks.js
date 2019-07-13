import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import axios from 'axios';

import fakeAuth from '../helpers/fake-auth';

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

  state = {
    tasks: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        const { data } = response;
        this.setState({
          tasks: data
        })
      })
      .catch(err => {
        console.warn(err);
        alert(err.message)
      })
  }

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
    const { tasks } = this.state;
    const tasksItems = tasks.map((task) => {
      return (
        <tr>
          <td>{task.id}</td>
          <td>
            <Link to={'/tasks/' + task.id}>
              {task.title}
            </Link>
          </td>
          <td>{task.userId}</td>
          <td>{task.completed ? 'Sim' : 'Não'}</td>
        </tr>
      )
    });
    return tasksItems;
  }

  renderTaskDescription = (routeProps) => {
    const { tasks } = this.state;
    const taskId = parseInt(routeProps.match.params.taskId);
    const task = tasks.find((task) => {
      return task.id === taskId;
    })
    if (!task) {
      return (
        <p>Tarefa não encontrada</p>
      )
    }
    return (
      <p>
        {task.id} - {task.title} - {task.completed ? 'Sim' : 'Não'}
      </p>
    )
  }

  onSairClick = () => {
    fakeAuth.setAuthenticated(false)
    this.props.history.push('/login')
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.onSairClick}>
          Sair
        </Button>

        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
              <th>Usuário</th>
              <th>Concluída</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTasks()}
          </tbody>
        </Table>

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

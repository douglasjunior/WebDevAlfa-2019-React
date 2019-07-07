import React from 'react';
import './App.css';

// import { Alert } from 'reactstrap'
// import Relogio from './Relogio'
import Form from './Form'

class App extends React.Component {

  // state = {
  //   dateTime: new Date()
  // }

  // componentDidMount() {
  //   setInterval(this.atualizarRelogio, 1000)
  // }

  // atualizarRelogio = () => {
  //   const newState = {
  //     dateTime: new Date()
  //   }
  //   this.setState(newState)
  // }

  render() {
    // const date = this.state.dateTime
    return (
      <div className="App">
        <Form />
        
        {/* <Relogio interval={400} />
        <Relogio interval={1000} />
        <Relogio interval={1250} />

        <Alert color="primary">
          Este é um alert do boostrap 4
        </Alert>
        <Alert color="success">
          Este é um alert do boostrap 4
        </Alert> */}

        {/* <button onClick={this.atualizarRelogio}>Atualizar</button> */}
      </div>
    );
  }
}

export default App;

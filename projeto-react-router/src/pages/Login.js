import React, { Component } from 'react';

import { Button } from 'reactstrap';

import fakeAuth from '../helpers/fake-auth';

class Login extends Component {

  onEntrarClick = () => {
    fakeAuth.setAuthenticated(true)
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        Efetue login para continuar
        <br />
        <Button color="primary" onClick={this.onEntrarClick}>
          Entrar
        </Button>
      </div>
    )
  }
}

export default Login;

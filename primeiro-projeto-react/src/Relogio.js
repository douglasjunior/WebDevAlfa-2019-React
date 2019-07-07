import React from 'react'

class Relogio extends React.Component {

  state = {
    dateTime: new Date()
  }
  
  componentDidMount() {
    this.relogioInterval = setInterval(this.atualizarRelogio, this.props.interval)
  }

  componentWillUnmount() {
    clearInterval(this.relogioInterval)
  }

  atualizarRelogio = () => {
    const newState = {
      dateTime: new Date()
    }
    this.setState(newState)
  }

  render() {
    return (
      <div className="relogio">
        <span>Hora atual: </span>
        <span>
          {this.state.dateTime.toISOString()}
        </span>
      </div>
    )
  }
}

export default Relogio;

import React, {Component} from 'react'
import Mycars from './components/Mycars'
import './App.css'


class App extends Component {

  state = {
    titre : 'Find Your Car'
  }

  changeTitle = (e) =>{
    this.setState({
      titre : 'Your Car Will Find You'
    })
  }

  changeViaParam = (titre) => {
    this.setState({
      titre : titre
    })
  }

  changeViaBind = (param) => {
    this.setState({
      titre : param
    })
  }

  changeViaInput = (e) => {
    this.setState({
      titre : e.target.value
    })
  }


  render(){
      return (
        <div className="App">
          <Mycars title={this.state.titre}/>

          <button className='btn_title' onClick={this.changeTitle}>Changer le titre de votre catalogue</button>
          <button className='btn_title' onClick={() => this.changeViaParam("Find Your Dream")}>Voulez-vous encore le modifier ?</button>
          <button className='btn_title' onClick={() => this.changeViaBind.bind(this, 'Find Your Pleasure')}>Encore une fois ?</button>
          <input type="text" onChange={this.changeViaInput} value={this.state.titre}/>
        </div>
     )
  }

}

export default App


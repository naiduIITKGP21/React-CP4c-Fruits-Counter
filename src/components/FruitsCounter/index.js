// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {
    mangos: 0,
    bananas: 0,
  }

  addMangos = () => {
    this.setState(prevState => ({
      mangos: prevState.mangos + 1,
      bananas: prevState.bananas,
    }))
  }

  addBananas = () => {
    this.setState(prevState => ({
      mangos: prevState.mangos,
      bananas: prevState.bananas + 1,
    }))
  }

  render() {
    const {mangos, bananas} = this.state
    return (
      <div className="fc-bg">
        <div className="fc-container">
          <h1 className="fc-main-heading">
            Bob ate <span className="fc-count">{mangos}</span> mangoes
            <span className="fc-count"> {bananas}</span> bananas
          </h1>
          <div className="fc-fruits-div">
            <div className="fc-fruit-container">
              <img
                className="fc-img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                onClick={this.addMangos}
                className="fc-button"
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="fc-fruit-container">
              <img
                className="fc-img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                onClick={this.addBananas}
                className="fc-button"
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

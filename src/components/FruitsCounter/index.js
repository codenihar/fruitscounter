// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state: {
    mangoes: 0,
    bananas: 0,
  }

  onClickEatMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="container">
        <div className="inner-container">
          <h1>
            Bob ate <span>{mangoes}</span> mangoes <span>{bananas}</span>{' '}
            bananas
          </h1>
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" onClick={this.onClickEatMango}>
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" onClick={this.onClickEatBanana}>
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

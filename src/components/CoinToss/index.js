// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    Heads: 0,
    Tails: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onToss = () => {
    const Toss = Math.ceil(Math.random() * 2)
    if (Toss > 1) {
      this.setState(prevState => ({
        Heads: prevState.Heads + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else if (Toss <= 1) {
      this.setState(prevState => ({
        Tails: prevState.Tails + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {Heads, Tails, image} = this.state
    return (
      <div className="Cont">
        <div className="content-cont">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="passage">Heads (or) Tails</p>
          <img className="image" src={image} alt="toss result" />
          <button className="button" type="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="count-cont">
            <p>Total:{Heads + Tails}</p>
            <p>Heads:{Heads}</p>
            <p>Tails:{Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss

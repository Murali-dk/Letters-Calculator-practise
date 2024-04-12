import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  change = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-cont">
        <div>
          <img
            className="img"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
        <div className="card-2">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="label">Enter the phrase</label>
          <input
            type="text"
            placeholder="Enter the phrase"
            onChange={this.change}
          />
          <div className="last">
            <p className="result">No.of letters: {count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

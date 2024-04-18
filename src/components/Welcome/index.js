// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  changeStatus = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {isClicked} = this.state
    // console.log(isClicked)
    const renderButton = () => (isClicked ? 'Subscribed' : 'Subscribe')
    return (
      <div className="bgContainer">
        <h1 className="mainHeading">Welcome</h1>
        <p className="para">Thank You! Happy Learning</p>
        <button type="button" className="button" onClick={this.changeStatus}>
          {renderButton()}
        </button>
      </div>
    )
  }
}

export default Welcome

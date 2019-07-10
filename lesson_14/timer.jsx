import React from 'react';

export default class Timer extends React.Component{
constructor (props) {
    super(props)
    this.state = {
		count: 0,
		start: 0,
		pause: 0,
	}
  }
 
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  tick () {
    this.setState({count: (this.state.count + 1)})
  }
  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
	this.setState({
		start: 1
	})
  }
  pauseTimer () {
    clearInterval(this.timer)
	this.setState({
		pause: 1
	})
  }
  stopTimer(){
	  clearInterval(this.timer)
	  this.setState({count: 0})
  }
  render () {
    return (
      <div className='timer'>
        <center>
<button onClick={this.startTimer.bind(this)} style={{marginLeft:"5px"}}>Start</button>
<button onClick={this.pauseTimer.bind(this)} style={{marginLeft:"5px"}}>Pause</button>
<button onClick={this.stopTimer.bind(this)} style={{marginLeft:"5px"}}>Stop</button></center>
<h3>Timer:{this.state.count}</h3>
      </div>
    )
  }
}



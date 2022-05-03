import React from "react"
class Clock extends React.Component {
  render() {
    return <h1>Look at the time: {this.props.time}</h1>
  }
}
export default Clock
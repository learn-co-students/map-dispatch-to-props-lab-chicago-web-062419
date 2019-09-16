import React, { Component } from "react"
import { addRestaurant } from "../actions/restaurants"
import { connect } from "react-redux"

export class RestaurantInput extends Component {
  state = {
    name: "",
    location: ""
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    // add missing code
    // debugger
    this.props.addRestaurant(this.state)
  }

  render() {
    // console.log(this.props)
    return (
      <form onSubmit={event => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={event => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={event => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location"
          />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

//connect this component by wrapping RestaurantInput below
// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: restaurant => {
//       dispatch(addRestaurant(restaurant))
//     }
//   }
// }
export default connect(null, {addRestaurant})(RestaurantInput)
// export default connect({addRestaurant})(RestaurantInput)

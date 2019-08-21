import React, { Component } from 'react'

export default class DogsList extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>
  }

  render() {
    const { dogBreeds } = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        { dogBreeds === null && 'Loading...' }

        { 
          dogBreeds !== null &&
          <ul>{ dogBreeds.map(this.renderDogBreed)} </ul> 
          }
      </div>
    )
  }
}


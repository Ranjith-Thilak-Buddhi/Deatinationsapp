import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  addInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const {destinationsList} = this.props

    const searchInputn = searchInput.toLowerCase()
    console.log(searchInputn)

    const searchResults = destinationsList.filter(destination =>
      destination.name.includes(searchInputn),
    )

    return (
      <div className="main-bg">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="input"
            onChange={this.addInput}
            value={searchInput}
            placeholder="search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="img"
            alt="search icon"
          />
        </div>
        <ul className="destinations-container">
          {searchResults.map(destination => (
            <DestinationItem
              destinationItem={destination}
              key={destination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

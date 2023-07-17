import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem

  return (
    <li className="item-container">
      <img className="item-img" src={imgUrl} alt={name} />
      <p className="item-name">{name}</p>
    </li>
  )
}

export default DestinationItem

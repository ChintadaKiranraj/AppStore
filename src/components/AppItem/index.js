import './index.css'

const AppItem = props => {
  const {eachAppItem} = props

  const {appName, imageUrl} = eachAppItem

  return (
    <li className="eachAppCArd">
      <img src={imageUrl} className="eachIconImage" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem

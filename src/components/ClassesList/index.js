import './index.css'

const ClassesList = props => {
  const {classInfo} = props
  const {title, description, thumbnail} = classInfo

  return (
    <li className="classes-item">
      <img src={thumbnail} className="vedio-thumbnail" alt="thumbnail" />
      <div className="vedio-info">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <button type="button" className="practice-button">
          Practice
        </button>
      </div>
    </li>
  )
}

export default ClassesList

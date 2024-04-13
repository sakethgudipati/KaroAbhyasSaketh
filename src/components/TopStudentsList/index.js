import './index.css'

const TopStudentsList = props => {
  const {studentInfo} = props
  const {name, imgUrl, review} = studentInfo

  return (
    <li className="top-student-item">
      <img src={imgUrl} className="top-student-image" alt="student" />
      <div className="info">
        <h1 className="student-name">{name}</h1>
        <p className="student-review">"{review}"</p>
      </div>
    </li>
  )
}

export default TopStudentsList

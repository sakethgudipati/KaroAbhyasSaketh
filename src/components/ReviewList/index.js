import './index.css'

const ReviewList = props => {
  const {reviewInfo} = props
  const {name, review} = reviewInfo

  return (
    <li className="review-item">
      <h1 className="review-name">{name}</h1>
      <hr color="silver" />
      <p className="review-para">"{review}"</p>
    </li>
  )
}

export default ReviewList

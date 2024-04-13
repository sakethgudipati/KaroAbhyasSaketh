import Navbar from '../Navbar/index'
import TopStudentsList from '../TopStudentsList/index'
import ReviewList from '../ReviewList/index'
import './index.css'

const topStudentsList = [
  {
    id: 0,
    name: 'Jon Watts',
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712985381/photo-1633332755192-727a05c4013d_abilil.avif',
    review:
      'Exceptional GATE coaching with personalized attention; boosted my problem-solving skills remarkably.',
  },
  {
    id: 1,
    name: 'Lony Pan',
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712985452/photo-1527980965255-d3b416303d12_fbspdg.avif',
    review:
      'KaroAbhyaas provided top-tier GATE coaching with excellent personalized attention, significantly enhancing my skills.',
  },
  {
    id: 2,
    name: 'Edward Lamp',
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712985519/photo-1599566150163-29194dcaad36_rdcbqf.avif',
    review:
      'KaroAbhyaas offers in-depth IAS preparation, though their online platform could use some updates.',
  },
  {
    id: 3,
    name: 'Raghu Varma',
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712985404/premium_photo-1689568126014-06fea9d5d341_r8qys5.avif',
    review:
      'KaroAbhyaas offers in-depth IAS preparation, though their online platform could use some updates.',
  },
  {
    id: 4,
    name: 'Emilia Watson',
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712985559/photo-1438761681033-6461ffad8d80_fmunwv.avif',
    review:
      'KaroAbhyaas spoken English program dramatically improved my communication skills, thanks to engaging trainers.',
  },
  {
    id: 5,
    name: 'Frank Quin',
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712985502/photo-1500648767791-00dcc994a43e_llb0qi.avif',
    review:
      'Transformative spoken English program with engaging and patient trainers.',
  },
]

const reviewList = [
  {
    id: 0,
    name: 'Aarav Jain',
    review:
      'KaroAbhyaas delivered an exceptional CAT preparation course that was deeply analytical and highly tailored.',
  },
  {
    id: 1,
    name: 'Tanya M.',
    review:
      'Comprehensive GRE prep at KaroAbhyaas with resourceful materials and tutors, though more practice tests would be beneficial.',
  },
  {
    id: 2,
    name: 'Aarav Jain',
    review:
      'KaroAbhyaas delivered an exceptional CAT preparation course that was deeply analytical and highly tailored.',
  },
  {
    id: 3,
    name: 'Vivek B.',
    review:
      "KaroAbhyaas's UPSC coaching is solid, but class sizes are too large which hinders personalized interaction.",
  },
  {
    id: 4,
    name: 'Ishita Reddy',
    review:
      'GMAT prep with KaroAbhyaas was a transformative experience, featuring expert guidance and rigorous practice sessions.',
  },
  {
    id: 5,
    name: 'Jay S.',
    review:
      'KaroAbhyaas offers a decent TOEFL program but the teaching methods felt outdated compared to competitors.',
  },
]

const Base = () => (
  <>
    <Navbar />
    <div className="base-bg-container">
      <img
        src="https://res.cloudinary.com/defacaof3/image/upload/v1712985154/1_38SjI3gyUfOkMOEVttlkKw_yugdda.webp"
        className="banner-image"
        alt="banner"
      />
      <h1 className="base-head">Top Students</h1>
      <ul className="top-student-list">
        {topStudentsList.map(eachStudent => (
          <TopStudentsList key={eachStudent.id} studentInfo={eachStudent} />
        ))}
      </ul>
      <h1 className="base-head">Reviews</h1>
      <ul className="review-list">
        {reviewList.map(eachReview => (
          <ReviewList id={eachReview.id} reviewInfo={eachReview} />
        ))}
      </ul>
    </div>
    <div className="footer-container">
      <p className="footer-address">
        KARO ABHAYAAS <br /> 112, ELECTRONIC CITY <br /> BANGALORE, INDIA
      </p>
      <div>
        <p className="footer-para">
          Still Have Queries? <br /> We Are Here To Help You
        </p>
        <div className="footer-button-container">
          <button type="button" className="footer-button">
            Chat With Us
          </button>
          <button type="button" className="footer-button">
            Call Us
          </button>
        </div>
      </div>
    </div>
  </>
)

export default Base

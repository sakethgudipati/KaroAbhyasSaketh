import {Component} from 'react'
import {IoIosSearch} from 'react-icons/io'
import Navbar from '../Navbar/index'
import ProductsList from '../ProductsList/index'
import './index.css'

const productsList = [
  {
    id: 21,
    name: 'Mastering Calculus Online Course',
    description:
      'Dive deep into calculus with this comprehensive online course. Covering topics from limits to differential equations, this course includes video lectures, interactive quizzes, and downloadable study materials.',
    price: '₹3,499',
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712998121/3795502_f765_2_t7llel.jpg',
  },
  {
    id: 22,
    name: 'SAT Math Prep Book',
    description:
      'Get ready for the SAT math section with this comprehensive prep book. Packed with practice questions, detailed explanations, and test-taking strategies, this book is your key to scoring high on the SAT.',
    price: '₹2,199',
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712998166/2_35_1100x_bwkvlu.webp',
  },
  {
    id: 23,
    name: 'Live GMAT Tutoring Sessions',
    description:
      'Ace the GMAT with personalized tutoring sessions from expert instructors. Tailored to your learning needs, these live sessions cover all sections of the GMAT, including quant, verbal, and analytical writing.',
    price: '₹7,999/hour',
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712998202/GMAT-LIVE-Prep-DP_innroj.png',
  },
  {
    id: 24,
    name: 'MCAT Practice Tests Bundle',
    description:
      'Prepare for the MCAT with this bundle of full-length practice tests. Mimicking the real exam format, these tests come with detailed score reports and performance analytics to track your progress.',
    price: '₹5,999',
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712998232/51o4cYoIeYL_q1uln0.jpg',
  },
  {
    id: 25,
    name: 'Python Programming E-book',
    description:
      'Learn Python programming from scratch with this comprehensive e-book. From basic syntax to advanced topics like data analysis and web scraping, this e-book covers everything you need to know to become proficient in Python.',
    price: '₹1,499',
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712998238/51peAwmNI-L_nvz7eb.jpg',
  },
  {
    id: 26,
    name: 'Project Management Certification Course',
    description:
      'Earn your project management certification with this online course. Covering the PMBOK guide and industry best practices, this course prepares you for the PMP exam and equips you with essential project management skills.',
    price: '₹10,999',
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712998292/project-managemenr-goals_osajfe.jpg',
  },
]

class Products extends Component {
  state = {
    searchInput: '',
    initialProductList: productsList,
  }

  onSearchProduct = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, initialProductList} = this.state
    const searchResults = initialProductList.filter(eachProd =>
      eachProd.name.includes(searchInput),
    )
    return (
      <>
        <Navbar />
        <div className="products-container">
          <div className="search-container">
            <IoIosSearch className="search-icon" />
            <input
              type="search"
              className="search-input"
              placeholder="Find a product"
              onChange={this.onSearchProduct}
            />
          </div>
          <ul className="products-list">
            {searchResults.map(eachProduct => (
              <ProductsList key={eachProduct.id} productInfo={eachProduct} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default Products

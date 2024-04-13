import {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaUserAlt, FaShoppingCart} from 'react-icons/fa'
import './index.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button className="hamburger" type="button" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`header-list ${isOpen ? 'open' : ''}`}>
        <Link to="/login" className="link-element">
          <li>
            <button className="join-us-button" type="button">
              JOIN US
            </button>
          </li>
        </Link>
        <Link to="/classes" className="link-element">
          <li className="header-item">Classes</li>
        </Link>
        <Link to="/products" className="link-element">
          <li className="header-item">Products</li>
        </Link>
        <Link to="/login" className="link-element">
          <li className="header-item">
            <FaUserAlt className="header-icon" />
          </li>
        </Link>
        <Link to="/login" className="link-element">
          <li className="header-item">
            <FaShoppingCart className="header-icon" />
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Header

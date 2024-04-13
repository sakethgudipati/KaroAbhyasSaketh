import {Link} from 'react-router-dom'
import Header from '../Header/index'
import './index.css'

const Navbar = () => (
  <nav className="nav-bar">
    <Link to="/" className="link-element">
      <h1 className="logo">Karo Abhayaas</h1>
    </Link>
    <Header />
  </nav>
)

export default Navbar

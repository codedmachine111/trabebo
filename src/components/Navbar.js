import './Navbar.css'
import { Link } from "react-router-dom"

export const Navbar = () => {
  

  return (
    <nav>
      <div className="logo">
        <Link to="/"><span>T</span> rabebo</Link>
        <p>Travel made easy</p>
      </div>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fa fa-bars"></i>
      </label>

      <ul className="list">
        <li id="active"><Link to="/" id="homeli">Home</Link></li>
        <li><Link to="/book" id="d">Book</Link></li>
        <li id="drop">
        <Link to="/book" id="d">Domestic</Link>
          <ul>
            <li><Link to="/locations/goa" id="d">Goa</Link></li>
            <li>
            <Link to="/book" id="d">Uttarakhand</Link>
            </li>
            <li>
            <Link to="/book" id="d">Kerala</Link>
            </li>
            <li>
            <Link to="/book" id="d">Chennai</Link>
            </li>
            <li>
            <Link to="/book" id="d">Delhi</Link>
            </li>
            <li>
            <Link to="/book" id="d">Rajasthan</Link>
            </li>
            <li>
            <Link to="/packages" id="d">View all..</Link>
            </li>
          </ul>
        </li>
        <li id="drop">
        <Link to="/book" id="d">International</Link>
          <ul>
            <li><a href="./locations/dubai/dubai.html" id="d">Dubai</a></li>
            <li><Link to="/book" id="d">Europe</Link></li>
            <li><Link to="/book" id="d">SriLanka</Link></li>
            <li><Link to="/book" id="d">Thailand</Link></li>
            <li><Link to="/book" id="d">Maldives</Link></li>
            <li><Link to="/book" id="d">View all..</Link></li>
          </ul>
        </li>
        <li><Link to="/packages" id="d">Packages</Link></li>
        <li><Link to="/contact" id="d">Contact</Link></li>
      </ul>
    </nav>
  )
}
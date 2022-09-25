import './Navbar.css'
import { Link } from "react-router-dom"

export const Navbar = () => {
  

  return (
    <nav>
      <div className="logo">
        <Link to="/"><span>T</span>rabebo</Link>
        <p>Travel made easy</p>
      </div>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fa fa-bars"></i>
      </label>

      <ul className="list">
        <li id="active"><Link to="/">Home</Link></li>
        <li><Link to="/book" id="d">Book</Link></li>
        <li id="drop">
        <Link to="/locations" id="d">Domestic</Link>
          <ul>
            <li><Link to="/locations/goa" id="d">Goa</Link></li>
            <li>
            <Link to="/locations/uttarakhand" id="d">Uttarakhand</Link>
            </li>
            <li>
            <Link to="/locations/kerala" id="d">Kerala</Link>
            </li>
            <li>
            <Link to="/locations/chennai" id="d">Chennai</Link>
            </li>
            <li>
            <Link to="/locations/delhi" id="d">Delhi</Link>
            </li>
            <li>
            <Link to="/locations/rajasthan" id="d">Rajasthan</Link>
            </li>
            <li>
            <Link to="/locations" id="d">View all..</Link>
            </li>
          </ul>
        </li>
        <li id="drop">
        <Link to="/locations" id="d">International</Link>
          <ul>
            <li><Link to="/locations/dubai" id="d">Dubai</Link></li>
            <li><Link to="/locations/europe" id="d">Europe</Link></li>
            <li><Link to="/locations/srilanka" id="d">SriLanka</Link></li>
            <li><Link to="/locations/thailand" id="d">Thailand</Link></li>
            <li><Link to="/locations/maldives" id="d">Maldives</Link></li>
            <li><Link to="/locations" id="d">View all..</Link></li>
          </ul>
        </li>
        <li><Link to="/locations" id="d">Locations</Link></li>
        <li><Link to="/contact" id="d">Contact</Link></li>
      </ul>
    </nav>
  )
}
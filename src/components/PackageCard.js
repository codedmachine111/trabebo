import './PackageCard.css'
import {Link} from "react-router-dom"

export const PackageCard =(props)=>{
    return (
        <>
        <div className="card module">
            <div className="img">
              <img src={props.img} id="placeimg" alt={props.placeName}/>
            </div>
            <div className="cont">
              <div className="name">
                <i className="fas fa-map-marker-alt"></i> {props.placeName}
              </div>
              <div className="abt">
                {props.info}
              </div>
              <div className="price">{props.price}</div>
              <div className="go-btn">
                <Link to={`/locations/${props.location}`}>
                <button className="gobtn">View plans</button>
                </Link>
              </div>
            </div>
          </div>
        </>
    )
}
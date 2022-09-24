import './PackageCard.css'
import {Link} from "react-router-dom"

export const PackageCard =(props)=>{
    return (
        <>
        <div class="card module">
            <div class="img">
              <img src={props.img} id="placeimg" alt={props.placeName}/>
            </div>
            <div class="cont">
              <div class="name">
                <i class="fas fa-map-marker-alt"></i> {props.placeName}
              </div>
              <div class="abt">
                {props.info}
              </div>
              <div class="price">{props.price}</div>
              <div class="go-btn">
                <Link to={`/locations/${props.location}`}>
                <button class="gobtn">View plans</button>
                </Link>
              </div>
            </div>
          </div>
        </>
    )
}
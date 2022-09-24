import React from "react";
import { Link } from "react-router-dom";
import "./PackCard.css";

export default function PackCard(props) {
  return (
    <>
      <div class="card">
        <div class="t-img">
          <img src={props.img} alt={""} id="placeimg" />
        </div>
        <div class="cont">
          <div class="name">
            <i class="fas fa-map-marker-alt"></i> {props.loc}
          </div>
          <div class="abt">{props.desc}</div>
          <div class="price">{props.price}</div>
          <Link to="/book">
            <div class="go-btn">
              <button class="gobtn">Book now</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

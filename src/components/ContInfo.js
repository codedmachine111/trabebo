import "./ContInfo.css";
import contact from "../media/Contact.png";
import { Link } from "react-router-dom";

export const ContInfo = () => {
  return (
    <>
      <div className="container5">
        <section className="contact" id="contact">
          <h1>Get in touch with us.</h1>
          <div className="rowlast">
            <div className="contimg">
              <img src={contact} id="contimg" alt="Contact"/>
            </div>

            <div className="box">
              <h2>
                Contact us
                <hr />
              </h2>
              <p>Write to us and we will get back to you shortly.</p>
              <Link to="/contact">
                <div className="btn">
                  <button className="cont-btn">Contact</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

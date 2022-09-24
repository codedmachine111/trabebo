import './BookSection.css'
import bookingimg from '../media/booking.png'

import {Link} from "react-router-dom"

export const BookSection=()=>{
    return (
        <>
            <div className="container2">
            <section className="book" id="book">
              <h1>Book your tickets now!</h1>
        
              <div className="row">
                <div className="image">
                  <img src={bookingimg} id="flyimg" alt={"Bookings"} />
                </div>
                <div className="box">
                  <h2>
                    Book Your tickets
                    <hr />
                  </h2>
                  <p>
                    One step away from  your trip! What are you waiting for?
                  </p>
                  <Link to="/contact">
                        <div class="btn">
                        <button class="book-btn">Book now</button>
                        </div>
                </Link>
                </div>
              </div>
            </section>
          </div>
        </>
    )
}
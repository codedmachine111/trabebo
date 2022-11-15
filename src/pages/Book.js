import "./Book.css";
import bookImg from '../media/booking.png'
import { BookForm } from "../components/BookForm";

export const Book = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h2>
          Book your tickets
          <hr />
        </h2>
        <div className="book-info">
          <p>( Fill out the form below and we will get back to you with a confirmation as soon as possible. )</p>  
        </div>
        <div className="row">
          <div className="img">
            <img src={bookImg} id="contactimg" alt={""}/>
          </div>
           <BookForm />
        </div>
      </section>
    </>
  );
};

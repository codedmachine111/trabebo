import "./Book.css";
import bookImg from '../media/booking.png'
import { BookForm } from "../components/BookForm";

export const Book = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h2>
          Book your tickets
          <hr />
        </h2>
        <div class="row">
          <div class="img">
            <img src={bookImg} id="contactimg" alt={""}/>
          </div>
          <BookForm />
        </div>
      </section>
    </>
  );
};

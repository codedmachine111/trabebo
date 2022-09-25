import Form from "../components/Form";
import contactbg from "../media/contactus.png";
import "./Contact.css";

export const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h2>
          Contact us for ticket bookings
          <hr />
        </h2>
        <section class="how" id="how">
          <div class="contbox"></div>
        </section>
        <div class="row">
          <div class="img">
            <img src={contactbg} id="contactimg" alt={""} />
          </div>
          <Form />
        </div>
      </section>
      <hr id="line" />

      <div class="callbox">
        <i class="fas fa-phone"></i> +91-7654772728
      </div>
      <div class="callbox">
        <i class="fas fa-briefcase"></i> 0836-5556765
      </div>
      <div class="callbox">
        <i class="fas fa-envelope"></i> info.trabebo@gmail.com
      </div>
    </>
  );
};

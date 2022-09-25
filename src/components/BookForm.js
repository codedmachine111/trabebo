import "./Bookform.css";
import emailjs from "@emailjs/browser";

export const BookForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ovl2n1s",
        "template_ctlgwz2",
        e.target,
        "QT5ltA7BuoH7IMiRu"
      )
      .then(
        (result) => {
          alert("Booking request placed! We will contact you shortly.");
        },
        (error) => {
          alert("An error occurred! Please try again later.");
        }
      );
    e.target.reset();
  };
  return (
    <>
      <form class="form" onSubmit={handleOnSubmit}>
        <div class="inputbox">
          <h3>Your Name*</h3>
          <input type="text" placeholder="Name" required name="name" />
        </div>
        <div class="inputbox">
          <h3>Email Address*</h3>
          <input
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            name="email"
          />
        </div>
        <div class="inputbox">
          <h3>Contact Number*</h3>
          <input
            type="tel"
            placeholder="Number"
            required
            maxlength="10"
            pattern="[0-9]{10}"
            name="contact"
          />
        </div>
        <div class="inputbox">
          <h3>Enter Your destination*</h3>
          <input
            type="text"
            placeholder="destination"
            required
            name="destination"
          />
        </div>

        <div class="inputbox">
          <h3>Enter the number of people</h3>
          <input
            type="number"
            min="1"
            max="15"
            placeholder="number"
            required
            name="people"
          />
        </div>
        <div class="inputbox">
          <h3>Arrival</h3>
          <input type="date" id="cap" required name="arrival" />
        </div>
        <div class="inputbox">
          <h3>Departure</h3>
          <input type="date" id="cap" required name="dept" />
        </div>
        <div class="sub-btn">
          <button type="submit" class="subbtn">
            Book now
          </button>
        </div>
      </form>
    </>
  );
};

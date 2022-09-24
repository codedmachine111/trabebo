import './Thailand.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { ThailandImages } from "../../../media/thailand/ThailandImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Thailand=()=>{
    const placeInfo = [
        {
          placeName: "Thailand",
          tagline: "Same Same, But Different",
          desc: "Discover Thailand, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
        },
      ];
      const packageInfo = [
        {
          img: ThailandImages.dp1,
          location: "Dubai",
          price: "INR 4999",
          desc: "Discover Dubai, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: ThailandImages.dp2,
          location: "Dubai",
          price: "INR 4999",
          desc: "Discover Dubai, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: ThailandImages.dp3,
          location: "Dubai",
          price: "INR 4999",
          desc: "Discover Dubai, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: ThailandImages.dp4,
          location: "Dubai",
          price: "INR 4999",
          desc: "Discover Dubai, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
      ];
    return(
        <>
            <div class="t-container">
        {placeInfo.map((place) => {
          return (
            <TravelCard
              name={place.placeName}
              tagline={place.tagline}
              desc={place.desc}
            />
          );
        })}
      </div>

      <div class="t-info">
        <h2>
          <span id="diff">E</span>verything you need to know
          <hr />
        </h2>
        <div class="t-row">
          <div class="infobox module">
            <div class="box">
              <div class="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Trip!
                  <hr />
                </h2>
                <p>
                  Abu Dhabi is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div class="images module">
            <div class="img1">
              <img src={ThailandImages.d1} alt={""} id="port1" />
            </div>
            <div class="img2">
              <img src={ThailandImages.d2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 class="heading" id="beaches">
          <span id="fdiff">T</span>hailand
          <hr />
        </h2>
        <div class="t-row">
          <div class="infobox module">
            <div class="box">
              <div class="title">
                <h2>
                  <span id="fdiff">M</span>ost visited temples
                  <hr />
                </h2>
                <p>
                  Abu Dhabi is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div class="images module">
            <div class="img1">
              <img src={ThailandImages.db1} alt={""} id="port1" />
            </div>
            <div class="img2">
              <img src={ThailandImages.db2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 class="heading" id="hotels">
          <span id="fdiff">H</span>otels
          <hr />
        </h2>
        <div class="t-row">
          <div class="images module">
            <div class="img1">
              <img src={ThailandImages.dh1} alt={""} id="port1" />
            </div>
            <div class="img2">
              <img src={ThailandImages.dh2} alt={""} id="port2" />
            </div>
          </div>
          <div class="infobox module">
            <div class="box">
              <div class="title">
                <h2>
                  <span id="fdiff">T</span>op hotels for you
                  <hr />
                </h2>
                <p>
                  Abu Dhabi is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 class="heading" id="indubai">
          <span id="fdiff">O</span>nly in Thailand
          <hr />
        </h2>
        <div class="t-row">
          <div class="infobox module">
            <div class="box">
              <div class="title">
                <h2>
                  <span id="fdiff">I</span>nteresting things to do
                  <hr />
                </h2>
                <p>
                  Abu Dhabi is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div class="images module">
            <div class="img1">
              <img src={ThailandImages.do1} alt={""} id="port1" />
            </div>
            <div class="img2">
              <img src={ThailandImages.do2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <div class="more">
          <h2 class="heading">
            What's included
            <hr id="line" />
          </h2>

          <div class="cont">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, asperiores.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              labore, ullam molestiae possimus obcaecati placeat odio, nemo, est
              dolor facilis temporibus aspernatur excepturi atque! Qui magni
              temporibus culpa reprehenderit labore eveniet veniam iusto non.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              molestias nostrum quae ipsum unde omnis minima, placeat excepturi
              soluta atque, asperiores qui, autem doloribus! Numquam culpa ullam
              facere, ratione enim quo laudantium eos suscipit blanditiis,
              magnam incidunt expedita recusandae exercitationem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              nostrum doloremque adipisci libero odio. Porro laboriosam
              voluptatem sequi fugit repellendus? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quos quam eius debitis ea aliquam
              veritatis. Laudantium, maxime.
            </p>
          </div>
        </div>
      </div>
      <hr id="line" />
      <div class="container3" id="packages">
        <section class="packages">
          <h2>Best deals for you</h2>
          <div class="outerbox">
            <div class="row1">
              {packageInfo.map((pack) => {
                return (
                  <PackCard
                    img={pack.img}
                    loc={pack.location}
                    price={pack.price}
                    desc={pack.desc}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <hr id="line" />

      <div class="container5" id="contact">
        <section class="t-contact">
          <h1>Book Your tickets</h1>
          <div class="rowlast">
            <div class="contimg">
              <img src={contactimg} alt={""} id="contimg" />
            </div>

            <div class="box">
              <h2>
                Book your tickets
                <hr />
              </h2>

              <p>
                One step away from booking your trip! What are you waiting for?
              </p>
              <Link to="/book">
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
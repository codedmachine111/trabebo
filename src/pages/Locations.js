import "./Locations.css";
import himachal from "../media/himachalbg.jpg";
import dubai from "../media/dubai.jpg";
import europe from "../media/europebg.jpg";
import kerala from "../media/keralabg.jpg";
import maldives from "../media/himachalbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";
import { PackageCard } from "../components/PackageCard";
import {Searchbox} from '../components/Searchbox'
import {useState, useEffect} from "react"

export const Locations = () => {

  const packageInfoRow1 = [
    {
      place: "himachal",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: himachal,
      price: "4000-5000 INR",
    },
    {
      place: "goa",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: goa,
      price: "4000-5000 INR",
    },
    {
      place: "Kerala",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: kerala,
      price: "4000-5000 INR",
    },
    {
      place: "Rajasthan",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: rajasthan,
      price: "4000-5000 INR",
    },
    {
        place: "Himachal",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
        img: himachal,
        price: "4000-5000 INR",
      },
      {
        place: "Goa",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
        img: goa,
        price: "4000-5000 INR",
      },
      {
        place: "Kerala",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
        img: kerala,
        price: "4000-5000 INR",
      },
      {
        place: "Rajasthan",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
        img: rajasthan,
        price: "4000-5000 INR",
      },
      {
        place: "Kerala",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
        img: kerala,
        price: "4000-5000 INR",
      },
      {
        place: "Rajasthan",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
        img: rajasthan,
        price: "4000-5000 INR",
      },
  ];
  const packageInfoRow2 = [
    {
      place: "dubai",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: dubai,
      price: "4000-5000 INR",
    },
    {
      place: "Europe",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: europe,
      price: "4000-5000 INR",
    },
    {
      place: "Thailand",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: thailand,
      price: "4000-5000 INR",
    },
    {
      place: "Maldives",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: maldives,
      price: "4000-5000 INR",
    },
    {
        place: "Thailand",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
        img: thailand,
        price: "4000-5000 INR",
      },
      {
        place: "Maldives",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
        img: maldives,
        price: "4000-5000 INR",
      },
  ];

  const [searchField, setSearchField] = useState("")
  const [places, setPlaces] = useState(packageInfoRow1);
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  useEffect(() => {
    const newfilteredPlaces = places.filter((place) => {
      return place.place.toLocaleLowerCase().includes(searchField);
    });

    setFilteredPlaces(newfilteredPlaces);
  }, [places, searchField]);

  const handleOnChange=(e)=>{
    const search = e.target.value.toLocaleLowerCase();
    setSearchField(search)
  }
  return (
    <>
      <section class="packages">
        <Searchbox handleOnChange={handleOnChange}/>
        <div className="package-container">
            <h2>
              Domestic
              <hr />
            </h2>
            <div className="row1">
              {filteredPlaces.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                );
              })}
            </div>
            <h2>
              International
              <hr />
            </h2>
            <div className="row2">
              {packageInfoRow2.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                );
              })}
            </div>
        </div>
      </section>
    </>
  );
};

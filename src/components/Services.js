import "./Services.css";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const serviceInfoRow1 = [
    {
      header: "Best Flights",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maioresquis ullam possimus, maxime rerum aspernatur!",
      icon: "fas fa-plane-departure",
    },
    {
      header: "Best deals",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maioresquis ullam possimus, maxime rerum aspernatur!",
      icon: "fas fa-rupee-sign",
    },
    {
      header: "Railway Bookings",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maioresquis ullam possimus, maxime rerum aspernatur!",
      icon: "fas fa-subway",
    },
  ];
  const serviceInfoRow2 = [
    {
      header: "Food And Drinks",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maioresquis ullam possimus, maxime rerum aspernatur!",
      icon: "fas fa-utensils",
    },
    {
      header: "Hotels",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maioresquis ullam possimus, maxime rerum aspernatur!",
      icon: "fas fa-hotel",
    },
    {
      header: "Safe Travels",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maioresquis ullam possimus, maxime rerum aspernatur!",
      icon: "fas fa-clinic-medical",
    },
  ];

  return (
    <>
      <div class="container4">
        <section class="service" id="services">
          <h1>Have a look at our services!</h1>
          <div class="row2">
            {serviceInfoRow1.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
          <div class="row1">
            {serviceInfoRow2.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

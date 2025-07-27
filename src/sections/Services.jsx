import { services } from "../Constants";
import ServiceCard from "../Components/ServiceCard";

const Services = () => {
     return (
          <section className="max-container flex justify-center flex-wrap gap-9">
               {services.map((service) => (
                    // open all the properties in service object and give them to props of SeviceCard
                    <ServiceCard key={service.label} {...service} />
               ))}
          </section>
     );
};

export default Services;

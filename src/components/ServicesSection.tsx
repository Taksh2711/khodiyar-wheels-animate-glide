
import { Car, Briefcase, MapPin, Calendar, Clock, Shield } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const services = [
  {
    icon: <Car className="h-10 w-10 text-khodiyar-light-blue" />,
    title: "Airport Transfers",
    description: "Punctual and comfortable rides to and from the airport, ensuring you never miss your flight."
  },
  {
    icon: <Briefcase className="h-10 w-10 text-khodiyar-light-blue" />,
    title: "Corporate Travel",
    description: "Professional car rental services for business trips, meetings, and conferences."
  },
  {
    icon: <MapPin className="h-10 w-10 text-khodiyar-light-blue" />,
    title: "Outstation Travel",
    description: "Comfortable and safe journeys for your outstation trips with experienced drivers."
  },
  {
    icon: <Calendar className="h-10 w-10 text-khodiyar-light-blue" />,
    title: "Wedding & Events",
    description: "Make your special day even more memorable with our premium car rental services."
  },
  {
    icon: <Clock className="h-10 w-10 text-khodiyar-light-blue" />,
    title: "Hourly Rentals",
    description: "Flexible hourly rental options for short trips and meetings around the city."
  },
  {
    icon: <Shield className="h-10 w-10 text-khodiyar-light-blue" />,
    title: "Safe & Secure",
    description: "Well-maintained vehicles with safety features and professional drivers for secure journeys."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-khodiyar-light-blue font-medium mb-2">WHAT WE OFFER</p>
          <h2 className="section-title mb-4 mx-auto">Our Services</h2>
          <p className="text-khodiyar-gray max-w-2xl mx-auto">
            We provide a range of car rental services to meet all your transportation needs with comfort and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedCard 
              key={index}
              hoverEffect="lift"
              className="p-6 h-full border border-gray-100 group"
            >
              <div className="mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-khodiyar-blue">{service.title}</h3>
              <p className="text-khodiyar-gray">{service.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


import { useState } from 'react';
import AnimatedCard from './AnimatedCard';
import { Car as CarIcon, Users, Fuel, ShieldCheck } from 'lucide-react';

type CarCategory = 'all' | 'sedan' | 'suv';

interface Car {
  id: number;
  name: string;
  category: string;
  image: string;
  passengers: number;
  price: number;
  pricePerKm: number;
  features: string[];
}

const cars: Car[] = [
  {
    id: 1,
    name: "Swift Dzire",
    category: "sedan",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    passengers: 4,
    price: 1200,
    pricePerKm: 20,
    features: ["Air Conditioning", "Music System", "Driver"]
  },
  {
    id: 2,
    name: "Toyota Innova Crysta",
    category: "suv",
    image: "https://images.unsplash.com/photo-1622095815908-3e22ced74bab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    passengers: 7,
    price: 2800,
    pricePerKm: 25,
    features: ["Air Conditioning", "Music System", "Driver", "GPS"]
  }
];

const FleetSection = () => {
  const [activeCategory, setActiveCategory] = useState<CarCategory>('all');
  
  const filteredCars = activeCategory === 'all' 
    ? cars 
    : cars.filter(car => car.category === activeCategory);

  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-khodiyar-light-blue font-medium mb-2">LUXURY TRANSPORTATION</p>
          <h2 className="section-title mb-4 mx-auto">Our Premium Fleet</h2>
          <p className="text-khodiyar-gray max-w-2xl mx-auto">
            Choose from our well-maintained vehicles to suit your needs and budget.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'sedan', 'suv'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as CarCategory)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-khodiyar-light-blue text-white'
                  : 'bg-white text-khodiyar-gray hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredCars.map((car) => (
            <AnimatedCard 
              key={car.id}
              hoverEffect="glow"
              className="overflow-hidden h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
                <div className="absolute top-3 right-3 bg-khodiyar-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                  ₹{car.pricePerKm}/km
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2 text-khodiyar-blue">{car.name}</h3>
                
                <div className="flex items-center mb-4">
                  <span className="bg-khodiyar-light-blue/10 text-khodiyar-light-blue text-xs px-3 py-1 rounded-full">
                    {car.category.toUpperCase()}
                  </span>
                </div>
                
                <div className="flex items-center mb-4 text-khodiyar-gray">
                  <Users size={18} className="mr-2 text-khodiyar-light-blue" />
                  <span>{car.passengers} Passengers</span>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h4 className="text-sm font-semibold mb-2 text-khodiyar-blue">Features</h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {car.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-khodiyar-gray">
                        <ShieldCheck size={14} className="mr-1 text-khodiyar-light-blue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="#contact" 
                  className="block text-center mt-6 bg-khodiyar-light-blue text-white py-2 rounded-md hover:bg-khodiyar-blue transition-colors"
                >
                  Book Now
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;

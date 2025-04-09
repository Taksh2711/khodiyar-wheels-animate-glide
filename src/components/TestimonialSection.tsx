
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    position: "Business Traveler",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The service provided by AAI Shree Khodiyar Car Rental was exceptional. The car was clean, the driver was professional, and the overall experience was very comfortable.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Tourist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "I booked a car for my family trip and was impressed by the quality of service. The vehicle was in excellent condition and the driver was knowledgeable about all the routes.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Singh",
    position: "Corporate Client",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    quote: "We use AAI Shree Khodiyar for all our corporate transport needs. Their service is reliable, professional, and always punctual. Highly recommended!",
    rating: 4
  },
  {
    id: 4,
    name: "Sneha Verma",
    position: "Wedding Planner",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    quote: "Booked multiple cars for a wedding ceremony and the service was impeccable. The luxury vehicles added an extra touch of elegance to the occasion.",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonial-bg py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-khodiyar-gold font-medium mb-2">CLIENT FEEDBACK</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading">What Our Clients Say</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with our car rental service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Large Quote Icon */}
            <div className="absolute -top-10 left-0 opacity-20">
              <Quote size={80} />
            </div>
            
            {/* Testimonial */}
            <div className="relative z-10 p-8">
              <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
                <div className="md:w-1/3">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-khodiyar-light-blue to-khodiyar-gold opacity-70 blur-lg animate-pulse"></div>
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover rounded-full border-4 border-white relative z-10"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-heading text-xl font-bold">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-white/70 text-sm">{testimonials[currentTestimonial].position}</p>
                    <div className="flex justify-center md:justify-start mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < testimonials[currentTestimonial].rating ? "text-khodiyar-gold fill-khodiyar-gold" : "text-gray-400"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-lg italic relative">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-center mt-10 gap-3">
                <button 
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              {/* Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === i ? 'bg-khodiyar-gold w-6' : 'bg-white/30'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

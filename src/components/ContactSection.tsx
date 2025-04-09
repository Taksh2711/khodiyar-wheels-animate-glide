
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-khodiyar-light-blue font-medium mb-2">GET IN TOUCH</p>
          <h2 className="section-title mb-4 mx-auto">Contact Us</h2>
          <p className="text-khodiyar-gray max-w-2xl mx-auto">
            Have questions or ready to book? Contact us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            {/* Map */}
            <div className="rounded-lg overflow-hidden h-[400px] shadow-lg mb-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74843729606!2d72.43965913952944!3d23.02049776419565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1681238357348!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimatedCard hoverEffect="glow" className="p-4 flex items-start">
                <div className="bg-khodiyar-light-blue/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-khodiyar-light-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-khodiyar-blue mb-1">Our Location</h3>
                  <p className="text-sm text-khodiyar-gray">
                    I/9, Vanraj Flat, Shakti School Road,
                    Near Chandlodia Overbridge, 
                    Chandlodia, Ahmedabad 382481
                  </p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard hoverEffect="glow" className="p-4 flex items-start">
                <div className="bg-khodiyar-light-blue/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-khodiyar-light-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-khodiyar-blue mb-1">Phone Number</h3>
                  <p className="text-sm text-khodiyar-gray">+91 98985 66575</p>
                </div>
              </AnimatedCard>

              <AnimatedCard hoverEffect="glow" className="p-4 flex items-start">
                <div className="bg-khodiyar-light-blue/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-khodiyar-light-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-khodiyar-blue mb-1">Owner Name</h3>
                  <p className="text-sm text-khodiyar-gray">Yogesh Patel</p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard hoverEffect="glow" className="p-4 flex items-start">
                <div className="bg-khodiyar-light-blue/10 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-khodiyar-light-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-khodiyar-blue mb-1">Working Hours</h3>
                  <p className="text-sm text-khodiyar-gray">Monday-Saturday: 9AM - 8PM</p>
                  <p className="text-sm text-khodiyar-gray">Sunday: 10AM - 6PM</p>
                </div>
              </AnimatedCard>
            </div>
          </div>

          <div>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

import BookingForm from './BookingForm';

export default ContactSection;

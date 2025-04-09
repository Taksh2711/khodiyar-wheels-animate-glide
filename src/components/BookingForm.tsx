
import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffLocation: '',
    carType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Received",
      description: "We'll contact you shortly to confirm your booking details.",
    });
    console.log("Form submitted with data:", formData);
    // Reset form after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      pickupLocation: '',
      pickupDate: '',
      pickupTime: '',
      dropoffLocation: '',
      carType: '',
      message: ''
    });
  };

  return (
    <Card className="shadow-lg border-0 overflow-hidden bg-white">
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold font-heading text-khodiyar-blue mb-6">Book Your Ride</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input 
                placeholder="Your Name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-50 border-gray-100"
              />
            </div>
            <div>
              <Input 
                placeholder="Phone Number" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-gray-50 border-gray-100"
              />
            </div>
          </div>

          <Input 
            placeholder="Email Address" 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-gray-50 border-gray-100"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-khodiyar-gray h-4 w-4" />
              <Input 
                placeholder="Pickup Location" 
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                required
                className="bg-gray-50 border-gray-100 pl-10"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-khodiyar-gray h-4 w-4" />
              <Input 
                placeholder="Drop-off Location" 
                name="dropoffLocation"
                value={formData.dropoffLocation}
                onChange={handleChange}
                required
                className="bg-gray-50 border-gray-100 pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-khodiyar-gray h-4 w-4" />
              <Input 
                type="date" 
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                required
                className="bg-gray-50 border-gray-100 pl-10"
              />
            </div>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-khodiyar-gray h-4 w-4" />
              <Input 
                type="time" 
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
                required
                className="bg-gray-50 border-gray-100 pl-10"
              />
            </div>
          </div>

          <div className="relative">
            <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-khodiyar-gray h-4 w-4" />
            <Select onValueChange={(value) => handleSelectChange('carType', value)}>
              <SelectTrigger className="bg-gray-50 border-gray-100 pl-10">
                <SelectValue placeholder="Select Car Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economy">Economy</SelectItem>
                <SelectItem value="sedan">Sedan</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <textarea 
            placeholder="Special Requirements (Optional)" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3} 
            className="w-full p-3 rounded-md bg-gray-50 border border-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-khodiyar-light-blue"
          ></textarea>

          <Button type="submit" className="w-full py-6 bg-khodiyar-light-blue hover:bg-khodiyar-blue">
            Book Now
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default BookingForm;

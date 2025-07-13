import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Calendar, Phone, Mail } from "lucide-react";
import heroVilla from "@/assets/hero-villa.jpg";
import villaInterior from "@/assets/villa-interior.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";
import villaBedroom from "@/assets/villa-bedroom.jpg";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroVilla})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-luxury-gold text-luxury-gold-foreground px-4 py-2 text-sm font-medium animate-fade-in">
            Pan India Luxury Villas
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-slide-up">
            <span className="bg-gradient-gold bg-clip-text text-transparent font-extrabold">
              THE VILLA
            </span>
            <span className="block bg-gradient-gold bg-clip-text text-transparent font-extrabold">
              COMPANY
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Discover extraordinary luxury villas across India. Experience unparalleled comfort and elegance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <div className="flex items-center gap-2 text-foreground">
              <Star className="w-5 h-5 fill-golden-yellow text-golden-yellow" />
              <span className="text-lg font-semibold">Starting at ₹5,000/night</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="w-5 h-5 text-golden-yellow" />
              <span className="text-lg">Available Pan India</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="golden" size="lg" className="text-lg px-8 py-6">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Stay
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8 py-6">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Coming Soon Notice */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-golden-yellow text-golden-yellow-foreground px-6 py-2 text-base animate-glow">
            Coming Soon
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Website Under Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We're crafting an exceptional digital experience to showcase our luxury villa collection. 
            Stay tuned for the grand launch of our booking platform.
          </p>
        </div>

        {/* Villa Preview Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="overflow-hidden shadow-luxury group hover:shadow-warm transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={villaInterior} 
                alt="Luxury Villa Interior" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Luxury Interiors</h3>
                <p className="text-sm opacity-90">Premium furnishing & design</p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden shadow-luxury group hover:shadow-warm transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={villaExterior} 
                alt="Luxury Villa Exterior" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Beautiful Exteriors</h3>
                <p className="text-sm opacity-90">Stunning architecture & pools</p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden shadow-luxury group hover:shadow-warm transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={villaBedroom} 
                alt="Luxury Villa Bedroom" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Comfort & Elegance</h3>
                <p className="text-sm opacity-90">Luxurious bedrooms & amenities</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="max-w-2xl mx-auto p-8 shadow-luxury">
          <h3 className="text-2xl font-bold text-center mb-6">Get Early Access</h3>
          <p className="text-center text-muted-foreground mb-8">
            Be the first to know when we launch. Contact us for exclusive preview bookings.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Phone className="w-6 h-6 mx-auto mb-2 text-golden-yellow" />
              <p className="font-semibold">Call Us</p>
              <p className="text-muted-foreground">+91 98765 43210</p>
            </div>
            <div className="text-center">
              <Mail className="w-6 h-6 mx-auto mb-2 text-golden-yellow" />
              <p className="font-semibold">Email Us</p>
              <p className="text-muted-foreground">info@thevillacompany.in</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="golden" size="lg" className="px-8">
              <Mail className="w-5 h-5 mr-2" />
              Notify Me When Ready
            </Button>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold mb-2 bg-gradient-gold bg-clip-text text-transparent">
            THE VILLA COMPANY
          </h4>
          <p className="text-muted-foreground mb-4">
            Premium luxury villas across India • Starting at ₹5,000/night
          </p>
          <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-golden-yellow" />
            <span>Pan India Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
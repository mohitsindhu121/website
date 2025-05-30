import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero for Contact Page */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-poppins font-bold text-4xl mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto">
            Get in touch with us for any inquiries
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            
            <div>
              <Card className="bg-white p-8 rounded-lg shadow-md mb-8">
                <CardContent className="p-0">
                  <h3 className="font-poppins font-bold text-xl mb-6">Store Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-primary text-xl mt-1 mr-4">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <h4 className="font-poppins font-semibold">Address</h4>
                        <p className="text-gray-600">Shop No. 82, New Anaaj Mandi<br/>Kalanaur, Rohtak, Haryana</p>
                        <a href="https://maps.app.goo.gl/7QY6MTh4RhhobBCh7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm mt-1 inline-block">
                          View on Google Maps
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-primary text-xl mt-1 mr-4">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div>
                        <h4 className="font-poppins font-semibold">Phone</h4>
                        <p className="text-gray-600">+91 9992264440</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-primary text-xl mt-1 mr-4">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <h4 className="font-poppins font-semibold">Email</h4>
                        <p className="text-gray-600">mohitsindhu121@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-primary text-xl mt-1 mr-4">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div>
                        <h4 className="font-poppins font-semibold">Business Hours</h4>
                        <p className="text-gray-600">Monday - Saturday: 10:00 AM - 8:00 PM<br/>Sunday: 11:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="rounded-lg overflow-hidden shadow-md h-80">
                {/* Google Map Embed - Precise Location */}
                <div className="relative h-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.9158179820075!2d76.39937799999999!3d28.981057399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d84ab51df8ebf%3A0xb5f4118fa6cf3abb!2sMr%20Sindhu%20Furniture%20%26%20electronics!5e0!3m2!1sen!2sin!4v1716060002809!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Mr Sindhu Furniture and Electronics - New Anaaj Mandi, Kalanaur, Rohtak, Haryana"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <a 
                    href="https://maps.app.goo.gl/7QY6MTh4RhhobBCh7"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="absolute bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-lg mb-2">Do you offer delivery services?</h3>
                  <p className="text-gray-700">
                    Yes, we offer free delivery within city limits. For locations outside the city, 
                    a nominal delivery fee applies based on the distance.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-lg mb-2">What is your return policy?</h3>
                  <p className="text-gray-700">
                    We accept returns within 7 days of purchase for furniture and 10 days for electronics, 
                    provided the items are in their original condition and packaging.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-lg mb-2">Do you provide installation services?</h3>
                  <p className="text-gray-700">
                    Yes, we offer professional installation services for all our furniture and electronic products. 
                    The installation is free for purchases above ₹10,000.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-lg mb-2">What warranty do you offer on your products?</h3>
                  <p className="text-gray-700">
                    We offer manufacturer's warranty on all our products. Furniture typically comes with 
                    1-3 years warranty, while electronics have 1-2 years warranty depending on the product.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

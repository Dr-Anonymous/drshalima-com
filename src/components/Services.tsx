
import { Stethoscope, Heart, Users, Activity, Shield, Pill } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Check-ups",
      description: "Comprehensive annual physical examinations and routine health screenings"
    },
    {
      icon: Heart,
      title: "Cardiovascular Care",
      description: "Heart health monitoring, blood pressure management, and cholesterol screening"
    },
    {
      icon: Activity,
      title: "Chronic Disease Management",
      description: "Ongoing care for diabetes, hypertension, arthritis, and other chronic conditions"
    },
    {
      icon: Users,
      title: "Women's Health",
      description: "Preventive care, reproductive health, and wellness programs for women"
    },
    {
      icon: Shield,
      title: "Preventive Medicine",
      description: "Vaccinations, health screenings, and lifestyle counseling for disease prevention"
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Prescription monitoring, drug interactions, and therapy optimization"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Medical Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to keep you healthy and address 
            your medical needs with personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

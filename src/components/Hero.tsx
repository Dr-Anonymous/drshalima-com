
import { Phone, Mail, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Dr. Shalima Pinnamaneni
              </h1>
              <p className="text-xl text-blue-600 font-medium mt-2">
                General Physician & Internal Medicine Specialist
              </p>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Providing comprehensive, compassionate healthcare with over two decades of experience. 
              Dedicated to promoting wellness and treating a wide range of medical conditions with 
              personalized care for each patient.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Schedule Appointment
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">9177 43 44 55</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">info@drshalima.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">
                  OrthoLife, Road No. 3, R.R.Nagar, Kakinada.
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <img
                src="https://vqskeanwpnvuyxorymib.supabase.co/storage/v1/object/public/post_images/shalima.jpeg"
                alt="Dr. Shalima Pinnamaneni"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-blue-200 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};


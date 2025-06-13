
import { Award, Users, Clock, Heart } from "lucide-react";

export const About = () => {
  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: "Patients Treated"
    },
    {
      icon: Clock,
      number: "20+",
      label: "Years Experience"
    },
    {
      icon: Award,
      number: "15+",
      label: "Certifications"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Patient Satisfaction"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Dr. Pinnamaneni
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Committed to providing exceptional healthcare with a focus on preventive medicine, 
            chronic disease management, and patient education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Dedicated to Your Health & Wellness
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Dr. Shalima Pinnamaneni is a board-certified general physician with extensive 
                experience in internal medicine. She completed her medical degree and has been 
                practicing for over two decades, specializing in comprehensive primary care.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Her approach to medicine emphasizes preventive care, early detection of diseases, 
                and building strong doctor-patient relationships. She believes in treating the 
                whole person, not just the symptoms, and takes time to understand each patient's 
                unique needs and concerns.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Dr. Pinnamaneni is particularly interested in chronic disease management, 
                women's health, and geriatric care. She stays current with the latest medical 
                advances and treatment protocols to provide the best possible care for her patients.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Philosophy of Care</h4>
              <p className="text-gray-600 italic">
                "I believe in empowering my patients through education and involving them in 
                their healthcare decisions. Every patient deserves compassionate, comprehensive 
                care tailored to their individual needs."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


import { GraduationCap, Award, BookOpen } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Doctor of Medicine (M.D.)",
      institution: "Medical College",
      year: "1998",
      description: "Comprehensive medical education with focus on internal medicine"
    },
    {
      degree: "Bachelor of Medicine & Surgery",
      institution: "University Medical School",
      year: "1994",
      description: "Foundation in medical sciences and clinical practice"
    }
  ];

  const certifications = [
    "Board Certified in Internal Medicine",
    "Basic Life Support (BLS) Certified",
    "Advanced Cardiovascular Life Support (ACLS)",
    "Certified in Diabetes Management",
    "Women's Health Specialist Certification"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Education & Credentials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Extensive medical education and ongoing professional development to provide 
            the highest quality of care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    {edu.year}
                  </p>
                  <p className="text-gray-600">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{cert}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Continuing Education</h4>
              </div>
              <p className="text-gray-600">
                Dr. Pinnamaneni regularly attends medical conferences, workshops, and 
                continuing education programs to stay current with the latest medical 
                advances and treatment protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

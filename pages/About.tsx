import React from 'react';
import { TEAM, COMPANY_NAME, ISO_CERT, LOCATIONS } from '../constants';
import { Award, History, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About {COMPANY_NAME}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering scientific discovery through reliable supply chains since 1995.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              To be the most trusted partner for laboratories across India by providing high-quality instruments, chemicals, and consumables with unmatched speed and service.
            </p>
            <div className="flex items-center space-x-4 text-brand-700 font-medium">
              <Award className="h-6 w-6" />
              <span>{ISO_CERT}</span>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-100 flex items-center justify-center mt-1">
                  <span className="text-brand-600 font-bold text-sm">1</span>
                </div>
                <p className="ml-4 text-gray-600">Quality Assurance on every product we ship.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-100 flex items-center justify-center mt-1">
                  <span className="text-brand-600 font-bold text-sm">2</span>
                </div>
                <p className="ml-4 text-gray-600">Dedicated technical support for complex instruments.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-100 flex items-center justify-center mt-1">
                  <span className="text-brand-600 font-bold text-sm">3</span>
                </div>
                <p className="ml-4 text-gray-600">Nationwide logistics network covering {LOCATIONS.length} major hubs.</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/id/180/800/800" 
              alt="Laboratory work" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Leadership Team</h2>
            <p className="mt-4 text-gray-600">Meet the experts behind our operations.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow text-center">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-brand-600 font-medium text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History / Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-brand-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-700">
                <div className="p-4">
                    <History className="h-10 w-10 mx-auto mb-4 text-brand-300" />
                    <div className="text-4xl font-bold mb-2">28+</div>
                    <div className="text-brand-200">Years of Excellence</div>
                </div>
                <div className="p-4">
                    <Users className="h-10 w-10 mx-auto mb-4 text-brand-300" />
                    <div className="text-4xl font-bold mb-2">5000+</div>
                    <div className="text-brand-200">Happy Clients</div>
                </div>
                <div className="p-4">
                   <div className="text-5xl font-bold mb-2 text-brand-300">4</div>
                   <div className="text-brand-200">Major Warehouses</div>
                   <p className="text-xs mt-2 opacity-70">(Mumbai, Delhi, Bangalore, Hyderabad)</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;

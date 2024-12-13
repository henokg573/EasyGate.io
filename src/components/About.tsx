import React from 'react';
import { CheckCircle } from 'lucide-react';
import { companyFeatures } from '../constants/companyFeatures';

export default function About() {
  return (
    <div id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About EasyGate
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              EasyGate is your trusted partner in navigating the complexities of international education,
              business, and travel. With years of experience and a dedicated team of professionals,
              we provide comprehensive solutions tailored to your needs.
            </p>

            <div className="mt-8">
              <div className="flex flex-col space-y-4">
                {companyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-2 text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team collaboration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
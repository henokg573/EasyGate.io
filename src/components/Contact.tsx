import React from 'react';
import ContactForm from './ui/ContactForm';
import ContactInfo from './ui/ContactInfo';

export default function Contact() {
  return (
    <div id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Get in touch with our team for personalized assistance
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-gray-50 rounded-lg p-8">
            <ContactForm />
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
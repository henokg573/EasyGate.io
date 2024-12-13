import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

function ContactInfoItem({ icon, title, content }: ContactInfoItemProps) {
  return (
    <div className="flex items-start">
      {icon}
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <div className="mt-1 text-gray-500">{content}</div>
      </div>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <ContactInfoItem
        icon={<Mail className="h-6 w-6 text-blue-600" />}
        title="Email"
        content="info@easygate.com"
      />
      <ContactInfoItem
        icon={<Phone className="h-6 w-6 text-blue-600" />}
        title="Phone"
        content="+1 (555) 123-4567"
      />
      <ContactInfoItem
        icon={<MapPin className="h-6 w-6 text-blue-600" />}
        title="Location"
        content={
          <>
            123 Business Avenue, Suite 100<br />
            New York, NY 10001
          </>
        }
      />
    </div>
  );
}
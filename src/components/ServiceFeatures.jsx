import React from 'react';
import { FaWrench, FaDownload } from 'react-icons/fa';
import { IoTimerOutline } from 'react-icons/io5';

const iconColor = '#9370DB';
const iconSize = 48;

const featureData = [
  {
    icon: FaWrench,
    title: 'Free Installations & Setup',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
  },
  {
    icon: FaDownload,
    title: 'Up to 1 Gpbs Download Speed',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
  },
  {
    icon: IoTimerOutline,
    title: '24/7 Customer Support',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
  },
];

const ServiceFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {featureData.map((feature, index) => (
              <FeatureCard 
                key={index}
                IconComponent={feature.icon} 
                title={feature.title} 
                description={feature.description}
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ IconComponent, title, description }) => (
  <div className="flex flex-col items-center p-4">
    
    <div className={`mb-6 p-3 ${iconColor}`}>
      <IconComponent size={iconSize} style={{ color: iconColor }} className="mx-auto" />
    </div>

    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

    <div className="w-12 h-0.5 bg-teal-400 mx-auto mb-4"></div>

    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{description}</p>
  </div>
);

export default ServiceFeatures;
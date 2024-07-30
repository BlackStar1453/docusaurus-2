import React from 'react';
import { Activity, LightbulbIcon, User } from 'lucide-react';
import 'tailwindcss/tailwind.css';

interface Feature {
    icon: React.ElementType; // Lucide icon component
    title: string;
    description: string;
  }
  
  interface FeatureCardProps {
    feature: Feature;
  }
  

const features: Feature[] = [
  { icon: Activity, title: "AI-Powered Insights", description: "Leverage artificial intelligence to gain deep insights and make data-driven decisions." },
  { icon: LightbulbIcon, title: "Seamless Integration", description: "Easily integrate our solutions into your existing workflows for maximum efficiency." },
  { icon: User, title: "User-Friendly Interface", description: "Enjoy a smooth and intuitive user experience designed for ease of use." }
];

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <div className="p-4 shadow-lg rounded-lg text-center">
      <Icon className="w-12 h-12 mx-auto mb-4" />
      <h3 className="font-semibold text-lg">{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
      {features.map(feature => <FeatureCard key={feature.title} feature={feature} />)}
    </div>
  );
};

export default Features;

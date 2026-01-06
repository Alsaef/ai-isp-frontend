import React from 'react';
import usePackageServices from '../Hook/usePackageServices';


const highlightColor = 'text-[#3498db]';
const buttonColor = 'bg-[#40bfae] hover:bg-[#349c8c]';

const PricingPackages = () => {
  const [packages,isLoading,isError,error,refetch]=usePackageServices()
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Choose Affordable Packages
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages?.map((data, index) => (
            <PricingCard key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ data }) => {
  const { pack, userType, priceBDT, download, lock, isPopular,bandWidth } = data;

  return (
    <div 
      className={`relative bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl ${isPopular ? 'border-teal-400' : ''}`}
    >
      
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#40bfae] text-white text-xs font-semibold py-1 px-4 rounded-full shadow-lg whitespace-nowrap">
          MOST POPULAR PACKAGE
        </div>
      )}

      <div className="p-8 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{pack}</h3>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6 border-b pb-4">
          {userType}
        </p>
        
        <ul className="list-none space-y-3 text-gray-600 mb-8 text-sm">
          <li>Free installation</li>
          <li className="font-medium">
            Up to <span className={highlightColor}>{download}</span> download speed
          </li>
          <li>Unlimited data usages</li>
          <li className="font-medium">
            <span className={highlightColor}>{lock}</span> pricing lock guarantee
          </li>
          <li>{bandWidth}</li>
        </ul>
        
        <div className="mb-8">
          <p className="text-3xl font-extrabold text-gray-800">
            {priceBDT}
          </p>
          <span className="text-sm text-gray-500">/MONTHLY</span>
        </div>
        
        <button 
          className={`w-full py-3 rounded-md text-white font-semibold transition ${buttonColor}`}
        >
          Order This Plan
        </button>
      </div>
    </div>
  );
};

export default PricingPackages;
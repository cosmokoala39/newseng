import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GastronomyFeature: React.FC = () => {
  return (
    <div className='sticky top-24'>
    <div className=" mt-5 prose max-w-none bg-white p-6 ">
      <h2 className="text-2xl font-semibold text-amber-600 mb-4">
        Food: recipes, advice, and culinary events
      </h2>

      <div className="mb-4">
        <Image
          src="/images/sidebarad3.png"
          alt="Gastronomie"
          width={300}
          height={192}
          className="rounded-md"
        />
      </div>

      <p className="text-gray-700">
        Discover in our{' '}
        <Link href="#" className="text-blue-600 hover:underline">
         
            Gastronomy special report
       
        </Link>{' '}
        Featuring recipes by chefs from the Centre-Val de Loire and Poitou regions, food-related events, and in-depth reports on wine and winemaking.
      </p>
    </div>
    </div>
  );
};

export default GastronomyFeature;

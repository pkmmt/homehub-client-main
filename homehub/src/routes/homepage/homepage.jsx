import React from 'react';
import { Search, MapPin, Home, Building, ArrowRight } from 'lucide-react';
import NavBar from '../../components/navbar/nabar';
import '../../index.css';
import { Link } from 'react-router-dom';
import LocationsGrid from '../../components/locations/location';
import SoonHome from '../../components/availliablesoon/sonn';
import Footer from '../../components/footer/footer';

const HomePage = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NavBar />
      
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                    Welcome to HomeHub
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    Find Your Perfect Place to Call Home
                  </h1>
                  <p className="text-lg text-gray-600 max-w-2xl">
                    Discover thousands of properties across South Africa. From cozy apartments 
                    to luxury estates, find exactly what you're looking for.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 p-3 bg-white rounded-2xl shadow-lg">
                  <div className="flex-1">
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        placeholder="Enter location or property type..."
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <button className="bg-orange-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-colors flex items-center gap-2 font-medium">
                    <Search size={20} />
                    <span>Search Properties</span>
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-8 pt-8">
                  {[
                    { number: '6M+', label: 'Monthly Visits' },
                    { number: '#1', label: 'Property Platform' },
                    { number: '22yrs', label: 'Experience' }
                  ].map(({ number, label }) => (
                    <div key={label} className="text-center p-4 rounded-xl bg-white shadow-sm">
                      <h3 className="text-2xl font-bold text-blue-600">{number}</h3>
                      <p className="mt-1 text-sm text-gray-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full max-w-lg">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="./building.png"
                    alt="Modern home interior"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
          <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
            View All Categories
            <ArrowRight size={20} />
          </button>
        </div>
        
        <Link to ="/list">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Apartments', icon: Building, properties: '2,156' },
            { name: 'Houses', icon: Home, properties: '3,658' },
            { name: 'Luxury Homes', icon: Home, properties: '892' }
          ].map(({ name, icon: Icon, properties }) => (
            <div
              key={name}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={24} />
                  </div>
                  <span className="text-sm text-gray-500">{properties} properties</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        </Link>
      </div>
    </div>
    <LocationsGrid/>
    <SoonHome/>
    <Footer/>
    </>
  );
};

export default HomePage;
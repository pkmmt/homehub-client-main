import React from 'react';
import NavBar from '../../components/navbar/nabar';
import Footer from "../../components/footer/footer";
import { AgentInfo } from "../../data/dummydata";
import AgentCard from '../../components/agents card/agentcard';
import { Link } from 'react-router-dom';


const Agents = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow px-4 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Agents</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AgentInfo.map((agent) => (
              <div key={agent.id} className="transform hover:scale-105 transition-transform duration-200">
                <AgentCard item={agent} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Agents;
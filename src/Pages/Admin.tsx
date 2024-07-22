import  { useState } from 'react';
import { Users,Bus, TableProperties, ClipboardPenLine,Contact, LogOut, } from "lucide-react"
import Vehicles from './Vehicles';
import Dashboard from '../Components/Dashboard';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Profile from './Profile';
import User from './Users';
import Projects from './Projects';
import { Link } from 'react-router-dom';


function AdminPage ()  {
  const [activeContent, setActiveContent] = useState('Dashboard');

  const renderContent = () => {
    switch (activeContent) {
      case 'Dashboard':
        return <div className="overflow-auto"><Dashboard /></div>;
      case 'Team':
        return <div className="overflow-auto"><User/></div>;
      case 'Projects':
        return <div className="overflow-auto"><Projects/></div>;
      case 'Logout':
        return <div className="overflow-auto"></div>;
      case 'Documents':
        return <div className="overflow-auto"><Vehicles /></div>;
      case 'Reports':
        return <div className="overflow-auto"><Profile/></div>;
      default:
        return <div className="overflow-auto">Select a menu item</div>;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <div className="w-64 bg-gray-900 text-white flex flex-col">
          <div className="flex-shrink-0 flex border-t border-gray-700 p-4">
            <button className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <img className="inline-block h-10 w-10 rounded-full" src="https://i.pinimg.com/474x/7c/7e/3b/7c7e3b4c241545c2821e6c4842f7b982.jpg" alt="User Avatar" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">Liutenant Croch</p>
                </div>
              </div>
            </button>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-2 overflow-auto">
            <button
              onClick={() => setActiveContent('Dashboard')}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${activeContent === 'Dashboard' ? 'bg-gray-800' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            >
            
             
             <Contact/> Management
              
            </button>
            <button
              onClick={() => setActiveContent('Team')}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${activeContent === 'Team' ? 'bg-gray-800' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            >
              
               
             
                <Users/> Users
            </button>
            <button
              onClick={() => setActiveContent('Projects')}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${activeContent === 'Projects' ? 'bg-gray-800' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            >
              
             <TableProperties/> Projects
              <span className="ml-auto text-xs bg-gray-700 rounded-full px-2 py-1">12</span>
            </button>
           
            <button
              onClick={() => setActiveContent('Documents')}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${activeContent === 'Documents' ? 'bg-gray-800' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            >
             
              <Bus/>Vehicles
            </button>
            <button
              onClick={() => setActiveContent('Reports')}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${activeContent === 'Reports' ? 'bg-gray-800' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            >
             
              <ClipboardPenLine/> Reports<span className="ml-auto text-xs bg-gray-700 rounded-full px-2 py-1">23</span>
            </button>
            <button
              onClick={() => setActiveContent('Logout')}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${activeContent === 'Logout' ? 'bg-gray-800' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            >
             
              <LogOut/> 
              <Link to="/">Logout</Link>
            </button>
          </nav>
          <div className="px-2 py-4">
            <h3 className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Your teams</h3>
            <div className="mt-2 space-y-2">
              <button className="group flex items-center px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
                <span className="w-6 h-6 mr-3 bg-gray-600 rounded-full text-center text-xs font-semibold text-white">T</span>
                Teach2Give
              </button>
              <button className="group flex items-center px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
                <span className="w-6 h-6 mr-3 bg-gray-600 rounded-full text-center text-xs font-semibold text-white">C</span>
                Cohort29
              </button>
              <button className="group flex items-center px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
                <span className="w-6 h-6 mr-3 bg-gray-600 rounded-full text-center text-xs font-semibold text-white">J</span>
                Jitu
              </button>
              <Link to="/">
          <button className="group flex items-center px-2 py-2 text-sm font-medium text-gray-300 hover:bg-red-700 hover:text-white rounded-md">
          <LogOut/> Logout
          </button>
        </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white p-4 overflow-auto">
          {renderContent()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;

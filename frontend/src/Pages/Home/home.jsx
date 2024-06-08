/* eslint-disable no-unused-vars */
import React from 'react';
import SideBar from '../../Components/SideBar';
import ChatBox from '../../Components/ChatBox';

const Home = () => {
  return (
    <div className="flex flex-1 h-fit gap-6">
      <SideBar className="w-1/4" />
      <div className="flex-grow flex flex-col h-full">
        <ChatBox className="w-full" />
      </div>
    </div>
  );
};

export default Home;

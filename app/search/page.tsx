import React from "react";
import Header from "./components/Header";

export const metadata = {
  title:'OpenTable|Search Restaurants'
}

import Sidebar from "./components/Sidebar";
import RestaurantCard from "./components/RestaurantCard";


export default function SearchPage() {
  return (
    <>
      
      {/* HEADER */}
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        {/* SEARCH SIDE BAR */}
        <Sidebar />
        {/* SEARCH SIDE BAR */}
        <div className='w-5/6'>
          {/* RESTAURANT CARD */}
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}

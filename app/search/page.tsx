import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RestaurantCard from "./components/RestaurantCard";

export default function Page() {
  return (
   <>
        {/* HEADER */}
        <Header />
        <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
          {/* SEARCH SIDE BAR */}
          <Sidebar />
          {/* SEARCH SIDE BAR */}
          <div className='w-5/6'>
            {/* RESAURANT CARD */}
            <RestaurantCard />
          </div>
        </div>
      </>
  );
}

import React from "react";
import NavBar from "./../../components/NavBar";
import Header from "./components/Header";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Rating from "./components/Rating";
import Title from "./components/Title";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

export default function Page() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        {/* NAVBAR */}
        <NavBar />
        {/* HEADER */}
        <Header />
        {/* HEADER */}
        {/* DESCRIPTION PORTION */}
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
          <div className='bg-white w-[70%] rounded p-3 shadow'>
            {/* RESTAURANT NAVBAR */}
            <RestaurantNavbar />
            {/* TITLE */}
            <Title />
            {/* RATING */}
            <Rating />
            {/* DESCRIPTION */}
            <Description />
            {/* IMAGES */}
            <Images />
            {/* REVIEWS */}
            <Reviews />
          </div>
          <div className='w-[27%] relative text-reg'>
            {/* RESERVATION CARD PORTION */}
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  );
}

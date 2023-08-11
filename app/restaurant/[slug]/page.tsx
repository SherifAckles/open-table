import RestaurantNavbar from "./components/RestaurantNavbar";
import Rating from "./components/Rating";
import Title from "./components/Title";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";



export const metadata = {
  title:'restaurants'
}

export default function Page() {
  return (
    <>
  

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
    </>
  );
}

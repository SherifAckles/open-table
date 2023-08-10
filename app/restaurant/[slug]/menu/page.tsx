
import Header from "./../components/Header";
import RestaurantNavbar from "./../components/RestaurantNavbar";
import MenuComponent from "./../components/MenuComponent";

export default function Menu() {
  return (
    <>
        {/* HEADER */}
        <Header />
        {/* DESCRIPTION PORTION */}
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
          <div className='bg-white w-[100%] rounded p-3 shadow'>
            {/* RESAURANT NAVBAR */}
            <RestaurantNavbar />
            {/* MENU */}
            <MenuComponent />
          </div>
        </div>
        
      </>
  );
}

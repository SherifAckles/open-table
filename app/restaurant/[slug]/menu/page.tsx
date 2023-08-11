import RestaurantNavbar from "./../components/RestaurantNavbar";
import MenuComponent from "./../components/MenuComponent";



export default function Menu() {
  return (
    <>
     
     
      <div className='bg-white w-[100%] rounded p-3 shadow'>
        {/* RESTAURANT NAVBAR */}
        <RestaurantNavbar />
        {/* MENU */}
        <MenuComponent />
      </div>
    </>
  );
}

import SearchBar from "./SearchBar";

const backgroundImageUrl = "/images/restaurant2-img.jpg";

export default function Header() {
  return (
    <div
      className='h-64 bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className='bg-opacity-40 bg-black h-full p-2'>
        <div className='text-center mt-10'>
          <h1 className='text-white text-5xl font-bold mb-2'>
            Find your table for any occasion
          </h1>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

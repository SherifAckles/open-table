import SearchBar from "./SearchBar";

const backgroundImageUrl =
  "https://opentable.github.io/design-tokens/static/handoverBanner-4bc0b987ea5b879a3095152bb0bd555f.png";

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

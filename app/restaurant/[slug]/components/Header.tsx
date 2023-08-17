const backgroundImageUrl = "/images/restaurant1-img.jpg";

export default function Header({ name }: { name: string }) {
  const renderTitle = () => {
    const nameArray = name.split("-");
    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`;
    return nameArray.join(" ");
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover", // Adjust these properties as needed
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className='h-96 overflow-hidden' style={backgroundImageStyle}>
      <div className='bg-opacity-40 bg-black bg-center h-full flex justify-center items-center'>
        <h1 className='text-7xl capitalize text-white text-shadow text-center'>
          {renderTitle()}
        </h1>
      </div>
    </div>
  );
}

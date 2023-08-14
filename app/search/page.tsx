
export const metadata = {
  title: "OpenTable|Search Restaurants",
};

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const fetchRestaurantByCity = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!city) return prisma.restaurant.findMany({ select });

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};



export default async function SearchPage({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantByCity(searchParams.city);

  return (
    <>
      {/* HEADER */}
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        {/* SEARCH SIDE BAR */}
        <Sidebar />
        {/* RESTAURANT LIST */}
        <div className='w-5/6'>
          {restaurants.length ? (
            <RestaurantCard />
          ) : (
            <p>No restaurants found in this area</p>
          )}
        </div>
      </div>
    </>
  );
}

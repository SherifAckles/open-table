

import { PrismaClient, Cuisine, Location, PRICE, Review } from "@prisma/client";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Reviews from "./restaurant/[slug]/components/Reviews";

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
  reviews: Review[];
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
      reviews: true,
    },
  });
  return restaurants;
};

export default async function HomePage() {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <main>
        <Header />
        <div className='flex py-3 px-36 mt-10  flex-wrap justify-center '>
          {restaurants.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} />
          ))}
        </div>
      </main>
    </>
  );
}

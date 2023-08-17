import RestaurantNavbar from "./components/RestaurantNavbar";
import Rating from "./components/Rating";
import Title from "./components/Title";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import { PrismaClient, Review } from "@prisma/client";

export const metadata = {
  title: "Restaurants",
};

const prisma = new PrismaClient()
//fetchRestaurantBySlug will always return a restaurant,if not exist then
// we do something else
interface Restaurant{
    id: number;
    name: string;
    images : string[];
    description: string;
  slug: string;
  reviews:Review[]
}
//fetchRestaurantBySlug will always return a promise  resolves to a Restaurant
const fetchRestaurantBySlug = async (slug:string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select:{
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews:true
    }
  })
  if (!restaurant) {
    throw new Error("Restaurant not found");
  }
  return restaurant;
}


export default async function RestaurantDetails({params}: {params:{slug:string}}) {

  const restaurant = await fetchRestaurantBySlug(params.slug)
  console.log(restaurant)
  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        {/* RESTAURANT NAVBAR */}
        <RestaurantNavbar slug={restaurant.slug} />
        {/* TITLE */}
        <Title name={restaurant.name} />
        {/* RATING */}
        <Rating reviews={restaurant.reviews} />
        {/* DESCRIPTION */}
        <Description description={restaurant.description} />
        {/* IMAGES */}
        <Images images={restaurant.images} />
        {/* REVIEWS */}
        <Reviews reviews={restaurant.reviews} />
      </div>
      <div className='w-[27%] relative text-reg'>
        {/* RESERVATION CARD PORTION */}
        <ReservationCard />
      </div>
    </>
  );
}

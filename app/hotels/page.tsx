import { getAllHotels } from "@/lib/api";
import ContentfulImage from "../../lib/contentful-image";
import Link from "next/link";

export default async function HotelsPage() {
  const hotels = await getAllHotels(false);

  return (
    <div className="container mx-auto px-5">
      <h1>Hotels</h1>
      <div className="flex">
        {hotels.map((hotel) => (
          <Link
            key={hotel.id}
            href={`/hotels/${hotel.slug}`}
            className="w-1/3 p-4"
          >
            <span>
              {hotel.city.cityName}, {hotel.country.title}
            </span>
            <span>{hotel.starRating}</span>
            <ContentfulImage
              alt={`Cover Image for ${hotel.hotelName}`}
              priority
              width={600}
              height={400}
              src={hotel.coverImage.url}
            />
            <h2>{hotel.hotelName}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

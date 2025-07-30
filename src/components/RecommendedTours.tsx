import { RecommendedTour } from "./RecommendedTour";
import { storyblokEditable } from "@storyblok/react";

interface Tour {
  content: {
    _uid: string;
    main_image: {
      filename: string;
      alt?: string;
    };
    name: string;
    price: number | string;
    location: string;
    [key: string]: any;
  };
  full_slug: string;
  [key: string]: any;
}

interface RecommendedToursProps {
  blok: {
    headline: string;
    tours?: Tour[];
  };
}

export const RecommendedTours = ({ blok }: RecommendedToursProps) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className="py-16 container mx-auto px-4 w-full">
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        {blok.headline}
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {blok.tours?.map((tour: Tour) => (
          <RecommendedTour story={tour} key={tour.content._uid} />
        ))}
      </div>
    </section>
  );
};

import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { RecommendedTour } from "@/components/RecommendedTour";
import { draftMode } from "next/headers";

interface MainImage {
  filename: string;
  alt?: string;
}

interface TourContent {
  main_image: MainImage;
  name: string;
  price: number | string;
  location: string;
  [key: string]: any;
}

interface Tour {
  content: TourContent;
  full_slug: string;
  _uid: string;
  [key: string]: any;
}

export const dynamic = 'force-dynamic';

const fetchToursPage = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.story;
};

const fetchAllTours = async (): Promise<Tour[]> => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "production" ? "published" : "draft",
  });
  // Map the response to include _uid from the story's uuid or id
  return response.data.stories.map((story: any) => ({
    ...story,
    _uid: story.uuid || story.id || '',
  }));
};

const ToursPage = async () => {
  const toursRaw = await fetchAllTours();
  const story = await fetchToursPage();

  // Map tours to expected shape for RecommendedTour component
  const tours: Tour[] = toursRaw.map((tour) => ({
    ...tour,
    content: {
      ...tour.content,
      main_image: tour.content.main_image || { filename: "/placeholder.jpg", alt: "Placeholder image" },
      name: tour.content.name || "Unnamed Tour",
      price: tour.content.price || "N/A",
      location: tour.content.location || "Unknown Location",
    },
  }));

  return (
    <div>
      <StoryblokStory story={story} />
      <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16">
        {tours.map((tour) => (
          <RecommendedTour story={tour} key={tour._uid} />
        ))}
      </div>
    </div>
  );
};

export default ToursPage;

import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export const dynamic = 'force-dynamic';

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory("home", {
    version: process.env.NODE_ENV === "production" ? "published" : "draft",
    resolve_relations: "recommended_tours.tours",
  });
  return response.data.story;
};

const HomePage = async () => {
  const story = await fetchHomePage();

  return <StoryblokStory story={story} />;
};

export default HomePage;

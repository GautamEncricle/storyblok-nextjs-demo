import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchTourStory } from "@/lib/Storyblok";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const TourPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const story = await fetchTourStory(resolvedParams.slug);
  return <StoryblokStory story={story} />;
};

export default TourPage;

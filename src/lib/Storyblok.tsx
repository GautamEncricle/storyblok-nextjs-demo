import { getStoryblokApi } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

export const fetchTourStory = async (slug: string) => {
  const draft = await draftMode();
  const version =
    process.env.NODE_ENV === "development" || draft.isEnabled
      ? "draft"
      : "published";

  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`, { version });
  return response.data.story;
};

import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

interface PageProps {
  blok: {
    blocks: any[];
  };
}

export const Page = ({ blok }: PageProps) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.blocks.map((blokItem: any) => (
        <StoryblokComponent blok={blokItem} key={blokItem._uid} />
      ))}
    </main>
  );
};

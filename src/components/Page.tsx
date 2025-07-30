import { StoryblokComponent } from "@storyblok/react";

interface PageProps {
  blok: {
    blocks: any[];
  };
}

export const Page = ({ blok }: PageProps) => {
  return (
    <main>
      {blok.blocks.map((blokItem: any) => (
        <StoryblokComponent blok={blokItem} key={blokItem._uid} />
      ))}
    </main>
  );
};

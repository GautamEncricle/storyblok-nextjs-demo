import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

interface GridProps {
  blok: {
    headline: string;
    items?: any[];
  };
}

export const Grid = ({ blok }: GridProps) => {
  return (
    <section  {...storyblokEditable(blok)} className="bg-blue-100">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-amber-300xl text-center md:text-6xl font-semibold">
          {blok.headline}
        </h2>
        <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-8">
          {blok.items?.map((blokItem: any) => (
            <StoryblokComponent blok={blokItem} key={blokItem._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};

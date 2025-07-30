import { storyblokEditable } from "@storyblok/react";

interface HeroProps {
  blok: {
    headline: string;
    content: string;
  };
}

export const Hero = ({ blok }: HeroProps) => {
  return (
    <section {...storyblokEditable(blok)} className="text-center container mx-auto px-4 w-full pt-32 pb-16" >
      <h1 className="text-4xl md:text-6xl font-semibold">{blok.headline}</h1>
      <p className="text-center text-xl mt-4">{blok.content}</p>
    </section>
  );
};

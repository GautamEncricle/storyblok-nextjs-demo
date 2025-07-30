import { storyblokEditable } from "@storyblok/react/rsc";

interface FeatureProps {
  blok: {
    headline: string;
    content: string;
  };
}

export const Feature = ({ blok }: FeatureProps) => {
  return (
    <div {...storyblokEditable(blok)} className="bg-white p-8 rounded-sm shadow">
      <h3 className="text-3xl semibold">{blok.headline}</h3>
      <p className="mt-6 text-lg">{blok.content}</p>
    </div>
  );
};

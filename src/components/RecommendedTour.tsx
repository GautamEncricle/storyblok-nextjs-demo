import Link from "next/link";

interface MainImage {
  filename: string;
  alt?: string;
}

interface StoryContent {
  main_image: MainImage;
  name: string;
  price: number | string;
  location: string;
}

interface Story {
  content: StoryContent;
  full_slug: string;
}

interface RecommendedTourProps {
  story: Story;
}

export const RecommendedTour = (props: RecommendedTourProps) => {
  return (
    <div className="bg-white rounded-sm shadow">
      {props.story.content.main_image?.filename ? (
        <img
          className="aspect-video w-full object-cover"
          src={props.story.content.main_image.filename}
          alt={props.story.content.main_image.alt || props.story.content.name}
        />
      ) : (
        <div className="aspect-video w-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No image available</span>
        </div>
      )}
      <div className="p-8">
        <div className="flex flex-col gap-2 justify-between text-lg font-semibold">
          <h3>{props.story.content.name}</h3>
          <p>
            {Number(props.story.content.price).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            })}
          </p>
          <p className="text-gray-700 uppercase font-semibold mt-2 text-sm tracking-wide">{props.story.content.location}, Taiwan</p>
          <Link className="font-bold text-base mt-8 block underline" href={`/${props.story.full_slug}`}>See more</Link>
        </div>
      </div>
    </div>
  );
};

import { renderRichText, storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

// interface MainImage {
//   filename: string;
//   alt?: string;
// }

// interface Blok {
//   name: string;
//   main_image?: MainImage;
//   introduction?: string;
//   body?: any; // rich text, could be typed more specifically if known
// }

export const Tour = (props: any) => {
  return (
    <main
      {...storyblokEditable(props.blok)}
      className="container mx-auto w-full px-4 pt-32 pb-16">
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
        {props.blok.name}
      </h1>

      {/* Main Image */}
      {props.blok.main_image?.filename && (
        <Image
          src={props.blok.main_image.filename}
          alt={props.blok.main_image.alt || props.blok.name}
          width={800}
          height={450}
          className="mt-10 w-full max-w-4xl mx-auto rounded-2xl shadow-md object-cover"
        />
      )}

      {/* Introduction */}
      {props.blok.introduction && (
        <p className="mt-10 text-lg md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          {props.blok.introduction}
        </p>
      )}

      {/* Rich Text Body */}
      {props.blok.body && (
        <div
          className="prose md:prose-lg lg:prose-xl prose-gray mt-12 mx-auto"
          dangerouslySetInnerHTML={{
            __html: renderRichText(props.blok.body) as string,
          }}
        />
      )}
    </main>
  );
};

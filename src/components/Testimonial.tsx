
interface TestimonialProps {
  blok: {
    comment: string;
    name: string;
  };
}

export const Testimonial = (params: TestimonialProps) => {
  return (
    <div className="bg-white p-8 rounded-sm shadow">
      <p className="text-xl leading-relaxed text-gray-700">{params.blok.comment}</p>
      <p className="mt-6 text-lg font-semibold text-gray-900">{params.blok.name}</p>
    </div>
  );
};

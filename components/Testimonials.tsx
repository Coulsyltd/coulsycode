import Link from "next/link";

const testimonials = [
  {
    quote:
      "The attention to detail was spot on. The site feels professional, loads quickly, and we started getting better enquiries once the local pages were in place.",
    author: "Owner",
    company: "York-based service business",
    rating: 5,
  },
  {
    quote:
      "What I liked most was how hands-on it felt. No fluff — just clear advice, fast delivery, and a site that actually turns visitors into calls.",
    author: "Director",
    company: "Yorkshire trades business",
    rating: 5,
  },
  {
    quote:
      "He understood the commercial side: ranking is great, but conversions matter. The improvements to structure and messaging made a noticeable difference.",
    author: "Manager",
    company: "Property services (Yorkshire)",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Founder-led builds — focused on enquiries, revenue, and less admin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 font-semibold hover:underline"
            >
              Want references? Ask me →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


import carUser from "../../assets/images/caruser.jpg";
import author1 from "../../assets/images/author1.jpg";
import BlogCard from "../../components/BlogCard";
import logistics from "../../assets/images/logistics.jpg";
import car from "../../assets/images/car.jpg";
import road from "../../assets/images/road.jpg";

const blogData = [
  {
    image: carUser,
    title: "How can you make money using your car in Nigeria?",
    date: "June 01, 2024",
    content:
      "Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.",
    authorImage: author1,
    authorName: "Janet Jackson",
    authorRole: "Product Manager",
  },
  {
    image: logistics,
    title: "The Future of Logistics in Nigeria",
    date: "July 15, 2024",
    content:
      "Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.",
    authorImage: author1,
    authorName: "Janet Jackson",
    authorRole: "Product Manager",
  },
  {
    image: car,
    title: "Maximizing Your Car's Potential",
    date: "August 05, 2024",
    content:
      "Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.",
    authorImage: author1,
    authorName: "Janet Jackson",
    authorRole: "Product Manager",
  },
  {
    image: road,
    title: "What you should know about our road system",
    date: "August 19, 2024",
    content:
      "Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.",
    authorImage: author1,
    authorName: "Janet Jackson",
    authorRole: "Product Manager",
  },
];

const Blog = () => {
  return (
    <div>
      <div className="clip-path mx-auto w-full flex justify-center items-center text-3xl text-white">
        Blog
      </div>
      <div className="w-[80%] mx-auto">
        <div className="">
          <h1 className="text-left font-bold text-xl mb-4 mt-8">
            Latest & Trending Blog Post
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[60%] relative overflow-hidden">
              <img
                src={carUser}
                alt="Blog car user"
                className="md:h-[350px] w-full object-cover transition-transform duration-200 transform hover:translate-x-2"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-4 md:w-[40%] py-6 ">
              {" "}
              <div className="flex mb-2">
                <p className="text-base font-bold text-gray-100">
                  Logistics -{" "}
                </p>
                <p className="text-gray-100 text-base"> June 01, 2024</p>
              </div>
              <h2 className="text-base font-extrabold text-left text-gray-200 text-wrap">
                How can you make money using your car in Nigeria?
              </h2>
              <p className="text-ellipsis text-gray-100 text-base py-2 text-left">
                Objectively pursue diverse catalysts for change for
                interoperable meta-services. Distinctively re-engineer
                revolutionary meta-services and premium architectures.
                Intrinsically incubate intuitive opportunities and real-time
                potentialities. Appropriately communicate one-to-one technology.
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src={author1}
                  alt="Author 1"
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-400"
                />
                <div className="ml-4">
                  <p className="text-base font-semibold text-gray-800">
                    Janet Jackson
                  </p>
                  <p className="text-sm text-gray-600">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-left font-bold text-xl mb-4 mt-8">
            All Blog Post
          </h1>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogData.map((blog, index) => (
              <BlogCard
                key={index}
                image={blog.image}
                title={blog.title}
                date={blog.date}
                content={blog.content}
                authorImage={blog.authorImage}
                authorName={blog.authorName}
                authorRole={blog.authorRole}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

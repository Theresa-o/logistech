import { BlogCardProps } from "../types/types";

const BlogCard = ({
  image,
  title,
  date,
  content,
  authorImage,
  authorName,
  authorRole,
}: BlogCardProps) => {
  return (
    <div className="mb-6">
      <section>
        <div>
          <div className="relative overflow-hidden h-80">
            <img
              src={image}
              alt="Blog post"
              className=" w-70 object-cover transition-transform duration-200 transform hover:translate-x-2"
            />
          </div>
          <div className="my-6">
            <div className="flex mb-2">
              <p className="text-base font-bold text-gray-100">Logistics - </p>
              <p className="text-gray-100 text-base">{date}</p>
            </div>
            <h2 className="text-base font-extrabold text-left text-gray-200">
              {title}
            </h2>
            <p className="text-ellipsis text-gray-100 text-base py-2 text-left">
              {content}
            </p>
            <div className="mt-4 flex items-center">
              <img
                src={authorImage}
                alt="Author"
                className="w-14 h-14 rounded-full object-cover border-2 border-gray-400"
              />
              <div className="ml-4">
                <p className="text-base font-semibold text-gray-800">
                  {authorName}
                </p>
                <p className="text-sm text-gray-600">{authorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogCard;

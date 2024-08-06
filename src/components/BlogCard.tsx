interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  content: string;
  authorImage: string;
  authorName: string;
  authorRole: string;
}

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
        <div className="">
          <div>
            <img
              src={image}
              alt="Blog post"
              className="h-50 w-70 object-cover"
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
                className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
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

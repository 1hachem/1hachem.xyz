import Block from "@/components/Block";
import { getBlogsWithMeta } from "@/utils/getBlogs";

export const getStaticProps = () => {
  const { slugs, blogsMeta } = getBlogsWithMeta();
  return {
    props: {
      slugs,
      blogsMeta,
    },
  };
};

export default function Blogs({
  slugs,
  blogsMeta,
}: {
  slugs: string[];
  blogsMeta: {
    author: string;
    title: string;
    description: string;
    className: string;
    publish: boolean;
  }[];
}) {
  return (
    <div className="p-5 grid md:grid-cols-3 gap-x-8 gap-y-5 ">
      {blogsMeta.map((meta, index) =>
        meta.publish ? (
          <Block
            key={meta.title}
            name={meta.title}
            description={meta.description}
            link={`content/${slugs[index]}`}
            className="bg-blue-300 dark:bg-gray-500"
          />
        ) : (
          <></>
        )
      )}
    </div>
  );
}

import Block from "@/components/Block";
import { getContentWithMeta } from "@/utils/getContent";

export const getStaticProps = () => {
  const { slugs, contentMeta } = getContentWithMeta();
  return {
    props: {
      slugs,
      contentMeta,
    },
  };
};

export default function Content({
  slugs,
  contentMeta,
}: {
  slugs: string[];
  contentMeta: {
    author: string;
    title: string;
    description: string;
    className: string;
    publish: boolean;
  }[];
}) {
  return (
    <div className="p-5 grid md:grid-cols-3 gap-x-8 gap-y-5 ">
      {contentMeta.map((meta, index) =>
        meta.publish ? (
          <Block
            key={meta.title}
            name={meta.title}
            description={meta.description}
            link={`content/${slugs[index]}`}
            className={meta.className}
          />
        ) : (
          <></>
        )
      )}
    </div>
  );
}

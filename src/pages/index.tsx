import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Introduction from "@/components/Introduction";
import Meta from "@/components/Meta";
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

export default function Grid({
  slugs,
  contentMeta,
}: {
  slugs: string[];
  contentMeta: {
    title: string;
    description: string;
    publish: boolean;
  }[];
}) {
  return (
    <>
      <Meta
        title="1hachem"
        description="welcome to 1hachem.xyz, my online space !"
      />
      <div className="grid gap-y-10">
        <Introduction />
        <About />
        <Blogs slugs={slugs} contentMeta={contentMeta} />
      </div>
    </>
  );
}

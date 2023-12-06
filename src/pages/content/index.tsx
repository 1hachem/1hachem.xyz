import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getContentWithMeta } from "@/utils/getContent";
import Link from "next/link";

export const getStaticProps = () => {
  const { slugs, contentMeta } = getContentWithMeta();
  return {
    props: {
      slugs,
      contentMeta,
    },
  };
};

export default function Blogs({
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
          <Link href={`content/${slugs[index]}`}>
            <Card className="hover:scale-105 shadow-md">
              <CardHeader>
                <CardTitle>{meta.title}</CardTitle>
                <CardDescription>{meta.description}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </Link>
        ) : (
          <></>
        )
      )}
    </div>
  );
}

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Blogs({
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
    <div className="p-5 md:columns-3 gap-x-4">
      {contentMeta.map((meta, index) =>
        meta.publish ? (
          <Link href={`content/${slugs[index]}`}>
            <Card className="my-3 hover:scale-105 shadow-md break-inside-avoid-column">
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

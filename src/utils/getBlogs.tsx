import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

export function getFiles(dataType: string) {
  return fs.readdirSync(path.join(root, "public/content", dataType));
}

export const getBlogs = () => {
  const fileNames = getFiles("blogs");
  const filenamesWithoutExtension = fileNames.map((fileName) =>
    fileName.replace(".mdx", "")
  );
  return filenamesWithoutExtension;
};

export const getBlogsWithMeta = () => {
  const slugs = getBlogs();
  const blogsMeta = slugs.map((slug) => {
    return getBlogBySlug(slug).meta;
  });

  return { slugs, blogsMeta };
};

export function getBlogBySlug(slug: string) {
  const source = fs.readFileSync(
    path.join(root, "public/content/blogs", `${slug}.mdx`)
  );

  const { data, content } = matter(source);

  return {
    meta: data,
    content: content,
  };
}

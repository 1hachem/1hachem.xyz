import fs from "fs";
import matter from "gray-matter";
import path from "path";

const root = process.cwd();

export function getFiles(dataType: string) {
	return fs.readdirSync(path.join(root, "public/content", dataType));
}

export const getContent = () => {
	const fileNames = getFiles("");
	const filenamesWithoutExtension = fileNames.map((fileName) =>
		fileName.replace(".mdx", ""),
	);
	return filenamesWithoutExtension;
};

export const getContentWithMeta = () => {
	const slugs = getContent();
	const contentMeta = slugs.map((slug) => {
		return getContentBySlug(slug).meta;
	});

	return { slugs, contentMeta };
};

export function getContentBySlug(slug: string) {
	const source = fs.readFileSync(
		path.join(root, "public/content/", `${slug}.mdx`),
	);

	const { data, content } = matter(source);

	return {
		meta: data,
		content: content,
	};
}

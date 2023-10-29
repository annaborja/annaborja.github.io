import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export interface BlogPostFrontmatter {
  draft?: boolean;
  posted_on: string;
  tags?: string[];
  title: string;
}

const blogPostModifierNameMap = new Map([["PlayStation 4", "PS4"]]);

export const blogPostModifierTagSet = new Set(["PlayStation 4"]);
export const blogPostSeriesTagSet = new Set([
  "Game Design Breakdown",
  "What I’m Playing",
]);

export function formatBlogPostDate(frontmatter: BlogPostFrontmatter): string {
  return dayjs.utc(frontmatter.posted_on).format("MMMM D, YYYY");
}

export function getBlogPostFullTitle(frontmatter: BlogPostFrontmatter): string {
  const tags = frontmatter.tags || [];
  const titleSegments = [frontmatter.title];

  const blogPostModifierTag = tags.find((tag) =>
    blogPostModifierTagSet.has(tag)
  );
  const blogPostSeriesTag = tags.find((tag) => blogPostSeriesTagSet.has(tag));

  if (blogPostSeriesTag) {
    titleSegments.unshift(`${blogPostSeriesTag}:`);
  }

  if (blogPostModifierTag) {
    titleSegments.push(
      `(${
        blogPostModifierNameMap.get(blogPostModifierTag) || blogPostModifierTag
      })`
    );
  }

  return titleSegments.join(" ");
}

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export interface BlogPostFrontmatter {
  posted_on: string;
  tags?: string[];
  title: string;
}

const videoGameConsoleNameMap = new Map([["PlayStation 4", "PS4"]]);

export const videoGameConsoleTagSet = new Set(["PlayStation 4"]);
export const whatImXTagSet = new Set(["What I’m Playing"]);

export function formatBlogPostDate(frontmatter: BlogPostFrontmatter): string {
  return dayjs.utc(frontmatter.posted_on).format("MMMM D, YYYY");
}

export function getBlogPostFullTitle(frontmatter: BlogPostFrontmatter): string {
  const tags = frontmatter.tags || [];
  const titleSegments = [frontmatter.title];

  const videoGameConsoleTag = tags.find((tag) =>
    videoGameConsoleTagSet.has(tag)
  );
  const whatImXTag = tags.find((tag) => whatImXTagSet.has(tag));

  if (whatImXTag) {
    titleSegments.unshift(`${whatImXTag}:`);
  }

  if (videoGameConsoleTag) {
    titleSegments.push(
      `(${
        videoGameConsoleNameMap.get(videoGameConsoleTag) || videoGameConsoleTag
      })`
    );
  }

  return titleSegments.join(" ");
}

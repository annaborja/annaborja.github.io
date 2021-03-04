import { FunctionComponent } from "react";
import * as ReactMarkdown from "react-markdown";

interface Article {
  paragraphs?: string[];
  title: string;
}

interface Section {
  articles?: Article[];
  title: string;
}

interface Data {
  sections?: Section[];
  subtitle?: string;
  title: string;
}

export const Page: FunctionComponent<{ data: Data }> = ({
  data: { sections, title },
}) => {
  return (
    <main>
      <h1>{title}</h1>

      {sections?.map(({ articles, title }) => (
        <section key={title}>
          <h1>{title}</h1>

          {articles?.map(({ paragraphs, title }) => (
            <article key={title}>
              <h1>{title}</h1>

              {paragraphs?.map((paragraph, idx) => (
                <ReactMarkdown key={idx} source={paragraph} />
              ))}
            </article>
          ))}
        </section>
      ))}
    </main>
  );
};

import { FunctionComponent } from "react";
import * as ReactMarkdown from "react-markdown";

import { CalisthenicsData } from "@data";

const { sections, title } = CalisthenicsData;

export const CalisthenicsPage: FunctionComponent = () => {
  return (
    <main>
      <h1>{title}</h1>

      {sections.map(({ articles, title }) => (
        <section key={title}>
          <h1>{title}</h1>

          {articles.map(({ paragraphs, title }) => (
            <article key={title}>
              <h1>{title}</h1>

              {paragraphs.map((paragraph, idx) => (
                <ReactMarkdown key={idx}>{paragraph}</ReactMarkdown>
              ))}
            </article>
          ))}
        </section>
      ))}
    </main>
  );
};

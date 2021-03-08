import { FunctionComponent, useEffect } from "react";

import { Paragraph } from "./components";
import { PageData } from "./types";

export const Page: FunctionComponent<{ data: PageData }> = ({
  data: { paragraphs, sections, title },
}) => {
  useEffect(() => {
    document.title = ["Anna Borja", title].filter((str) => str).join(" - ");
  }, [title]);

  return (
    <main>
      <h1>{title}</h1>

      {paragraphs?.map((paragraph, idx) => (
        <Paragraph data={paragraph} key={`${paragraph.title || ""}_${idx}`} />
      ))}

      {sections?.map(({ articles, paragraphs, title }) => (
        <section key={title}>
          <h1>{title}</h1>

          {paragraphs?.map((paragraph, idx) => (
            <Paragraph
              data={paragraph}
              key={`${paragraph.title || ""}_${idx}`}
            />
          ))}

          {articles?.map(({ paragraphs, title }) => (
            <article key={title}>
              <h1>{title}</h1>

              {paragraphs?.map((paragraph, idx) => (
                <Paragraph
                  data={paragraph}
                  key={`${paragraph.title || ""}_${idx}`}
                />
              ))}
            </article>
          ))}
        </section>
      ))}
    </main>
  );
};

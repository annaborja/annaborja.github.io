import { FunctionComponent } from "react";
import * as ReactMarkdown from "react-markdown";

interface Article {
  paragraphs?: string[];
  title: string;
  ytPlaylistId?: string;
}

interface Section {
  articles?: Article[];
  title: string;
  ytPlaylistId?: string;
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

      {sections?.map(({ articles, title, ytPlaylistId }) => (
        <section key={title}>
          <h1>{title}</h1>

          {ytPlaylistId && (
            <iframe
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
              height="210"
              src={`https://www.youtube.com/embed/videoseries?list=${ytPlaylistId}`}
              width="373"
            ></iframe>
          )}

          {articles?.map(({ paragraphs, title, ytPlaylistId }) => (
            <article key={title}>
              <h1>{title}</h1>

              {ytPlaylistId && (
                <iframe
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  frameBorder="0"
                  height="210"
                  src={`https://www.youtube.com/embed/videoseries?list=${ytPlaylistId}`}
                  width="373"
                ></iframe>
              )}

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

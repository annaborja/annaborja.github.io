import { Fragment, FunctionComponent } from "react";
import * as ReactMarkdown from "react-markdown";

import { ParagraphData } from "../types";

export const Paragraph: FunctionComponent<{ data: ParagraphData }> = ({
  data: { text, title, ytPlaylistId },
}) => {
  return (
    <Fragment>
      {ytPlaylistId && (
        <iframe
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
          height="210"
          src={`https://www.youtube-nocookie.com/embed/videoseries?list=${ytPlaylistId}`}
          width="373"
        ></iframe>
      )}

      {title && <h2>{title}</h2>}

      <ReactMarkdown source={text} />
    </Fragment>
  );
};

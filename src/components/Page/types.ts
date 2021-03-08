interface ArticleData {
  paragraphs?: ParagraphData[];
  title: string;
}

interface SectionData {
  articles?: ArticleData[];
  paragraphs?: ParagraphData[];
  title: string;
}

export interface PageData {
  paragraphs?: ParagraphData[];
  sections?: SectionData[];
  subtitle?: string;
  title: string;
}

export interface ParagraphData {
  text: string;
  title?: string;
  ytPlaylistId?: string;
}

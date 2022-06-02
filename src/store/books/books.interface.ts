export interface IAuthor {
  name: string;
  birth_year: number;
  death_year: number;
}

export interface ITranslator {
  name: string;
  birth_year?: number;
  death_year?: number;
}

export interface IFormats {
  'text/plain; charset=utf-8': string;
  'image/jpeg': string;
  'text/html; charset=utf-8': string;
  'text/html': string;
  'application/x-mobipocket-ebook': string;
  'application/rdf+xml': string;
  'application/epub+zip': string;
  'application/zip': string;
  'application/octet-stream': string;
  'text/plain': string;
  'text/plain; charset=us-ascii': string;
  'text/html; charset=iso-8859-1': string;
  'text/plain; charset=iso-8859-1': string;
  'text/html; charset=us-ascii': string;
}

export interface IBook {
  id: number;
  title: string;
  authors: IAuthor[];
  translators: ITranslator[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: IFormats;
  download_count: number;
}

export interface IAPIRoot {
  count: number;
  next?: string;
  previous?: string;
  results: IBook[];
}

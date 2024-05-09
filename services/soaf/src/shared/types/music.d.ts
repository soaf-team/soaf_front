export interface MusicList {
  results: Music[];
}

export interface Music {
  "opensearch:Query": OpensearchQuery;
  "opensearch:totalResults": string;
  "opensearch:startIndex": string;
  "opensearch:itemsPerPage": string;
  albummatches: Albummatches;
  "@attr": Attr;
}

interface OpenSearchQuery {
  #text: string;
  role: string;
  searchTerms: string;
  startPage: string;
}

interface Albummatches {
  album: Album[];
}

interface Album {
  name: string;
  artist: string;
  url: string;
  image: AlbumImage[];
  streamable: string;
  mbid: string;
}

interface AlbumImage {
  "#text": string;
  size: string;
}

interface Attr {
  for: string;
}

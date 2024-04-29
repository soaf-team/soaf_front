export interface MusicList {
  musics: Music[];
}

export interface Music {
  url: string;
  name: string;
  artist: string;
  image: any;
  review?: string;
}

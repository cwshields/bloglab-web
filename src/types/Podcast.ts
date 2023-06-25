import Episode from "./Episode";

export default interface Podcast {
  name: string;
  description: string;
  avatar: string;
  episodes: Array<Episode>;
}
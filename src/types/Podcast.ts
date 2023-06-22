import Comment from "./Comment";

export default interface Podcast {
  name: string;
  description: string;
  avatar: string;
  date: string;
  comments: Array<Comment>;
}
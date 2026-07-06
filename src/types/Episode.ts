import Comment from "./Comment";

export default interface Episode {
  name: string;
  description: string;
  avatar: string;
  date: string;
  comments: Array<Comment>;
}
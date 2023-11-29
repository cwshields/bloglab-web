import { AxiosError } from "axios";
import Likes from "./Likes";
import User from "./User";

export default interface Blog {
  id: number;
  title: string;
  banner?: string;
  description: string;
  readTime: number;
  date: string;
  tags: Array<string>;
  user: User;
  likes?: Likes;
}

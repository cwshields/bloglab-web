import User from "./User";

export default interface Blog {
  id: number;
  title: string;
  description: string;
  readTime: number;
  date: string;
  tags: Array<string>;
  user: User;
}
import User from "./User";

export default interface BlogProps {
  id: number;
  title: string;
  description: string;
  readTime: number;
  date: string;
  tags: Array<string>;
  user: User;
}
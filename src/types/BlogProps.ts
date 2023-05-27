export default interface BlogProps {
  id: number;
  title: string;
  description: string;
  readTime: number;
  tags: Array<string>;
  date: string;
  user: string;
  avatar: string;
}
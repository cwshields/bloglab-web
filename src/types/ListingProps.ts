import User from "./User";

export default interface ListingProps {
  id: number;
  header: string;
  body: string;
  tags: Array<string>;
  user: User;
  date: string;
  category: string;
}

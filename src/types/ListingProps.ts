import User from "./User";

export default interface ListingProps {
  id: number;
  header: string;
  tags: Array<string>;
  body: string;
  user: User;
  date: string;
}

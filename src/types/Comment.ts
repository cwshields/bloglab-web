import User from "./User";

export default interface Comment {
  body: string;
  date: string;
  user: User;
}
export default interface User {
  name: string;
  avatar: string;
  email?: string;
  password?: string;
  bio?: string;
  admin?: boolean;
  employee?: boolean;
}
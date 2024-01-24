export default interface User {
  firstName: string;
  lastName: string;
  username?: string;
  email?: string;
  avatar?: string;
  password?: string;
  bio?: string;
  location?: string;
  education?: string;
  profession?: string;
  joined?: number;
  admin?: boolean;
  employee?: boolean;
}
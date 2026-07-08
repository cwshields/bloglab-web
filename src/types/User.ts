export default interface User {
  firstName: string;
  lastName: string;
  username?: string;
  email?: string;
  avatar?: string;
  password?: string;
  description?: string;
  location?: string;
  education?: string;
  work?: string;
  joined_date?: string;
  admin?: boolean;
  employee?: boolean;
}
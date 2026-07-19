import slugify from "./slugify";

export default function getUserKey(user: User): string {
  return user.username ?? user.id ?? slugify(`${user.firstName}-${user.lastName}`);
}

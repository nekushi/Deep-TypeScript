interface User {
  id: string;
  username: string;
  email: string;
  role: "ADMIN" | "USER";
  createdAt: Date;
}

type PublicUser = Omit<User, "id" | "createdAt">;
interface sda extends PublicUser {}
type CreateUser = Pick<User, "username" | "email" | "role">;
type UpdateUser = Partial<PublicUser>;

// interface User extends PublicUser, CreateUser {}

// type PublicUser = { id: string; createdAt: Date };
// type CreateUser = { username: string; email: string; role: "ADMIN" | "USER" };

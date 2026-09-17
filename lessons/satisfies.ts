type Config = {
  port: number;
  host: string;
};

const config = {
  port: 3000,
  host: "localhost",
  debug: true,
} satisfies Config;

// Verify that port is a number.
// Verify that host is a string.
// Reject debug because it isn't part of Config.
// Still let config.debug be known as a boolean.

// console.log(config.debug);

// type Roles = "ADMIN" | "USER" | "DRIVER"

// const roles = {
//   admin: "ADMIN" as Roles,
//   user: "USER",
// };

// roles.admin

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type Routes = {
  [key: string]: HttpMethod;
};

const routes = {
  getUsers: "GET",
  createUser: "POST",
  deleteUser: "DELETE",
} satisfies Routes;

routes.getUsers = "POST";

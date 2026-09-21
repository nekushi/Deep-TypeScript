import { z, ZodType } from "zod";

// interface User {
//   id: string;
//   username: string;
//   email: string;
//   role: "ADMIN" | "USER";
// }

type ApiResponse<T> =
  | SuccessResponse<T>
  | PaginatedSuccessResponse<T>
  | SuccessDeleteResponse
  | ErrorResponse;

type PaginatedSuccessResponse<T> = {
  status: true;
  type: "paginated";
  message: string;
  data: T;
  meta: {
    page: number;
    limit: number;
    total: number;
  };
};

type SuccessResponse<T> = {
  status: true;
  type: "data";
  message: string;
  data: T;
};

type SuccessDeleteResponse = {
  status: true;
  type: "message";
  message: string;
};

type ErrorResponse = {
  status: false;
  type: "error";
  message: string;
};

type UserResponse = ApiResponse<User>;
type CreateUserRequest = Omit<User, "id">;
type CreateUserResponse = UserResponse;
type DeleteUser = Pick<User, "id">;

type UpdateUserParams = Pick<User, "id">;
type UpdateUserRequest = Partial<Omit<User, "id">>;
type UpdateUserResponse = UserResponse;

// function forceTypeUser(data: unknown): asserts data is UserResponse {
//   if (!data) {
//     throw new Error(data.messae)
//   }
// }

// function isUserResponse(data: unknown) {
//   return (typeof data === "object" && data !== null)
// }

// async function updateUser(
//   params: UpdateUserParams,
//   body: UpdateUserRequest,
// ): Promise<UpdateUserResponse> {
//   const res = await fetch(`${BASE_URL}/${params.id}`, {
//     method: "PATCH",
//     body: JSON.stringify(body),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const data: unknown = await res.json();

//   forceTypeUser(data);

//   if (data.type === "message") {
//   }
//   if (data.type === "paginated") {
//   }
//   if (data.type === "data") {
//   }
//   if (data.type === "error") {
//   }

//   return data;
// }

const NumberSchema = z.number();
type dasdad = z.infer<typeof NumberSchema>;

const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.email(),
  role: z.union([z.literal("ADMIN"), z.literal("USER")]),
});

type User = z.infer<typeof UserSchema>;

// async function getUser(): Promise<User> {
//   const res = await fetch(`${BASE_URL}/${params.id}`);

//   const data: unknown = await res.json();

//   return UserSchema.parse(data);
// }

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
// export const getApiFunction = async <T extends z.ZodRawShape>(url: string, Schema: z.ZodObject<T>) => {
//   const res = await fetch(url)
//   const data: unknown = await res.json()
//   return Schema.safeParse(data)}
// export const getApiFunction = async <T extends z.ZodRawShape>(url: string, Schema: z.ZodObject<T>) => {
//   const res = await fetch(url)
//   const data: unknown = await res.json()
//   return Schema.parse(data)
// }
// export const getApiFunction = async <T extends ZodType<T>>(
//   url: string,
//   Schema: z.ZodType<T extends z.infer<typeof T> ? T : never>,
// ) => {
//   const res = await fetch(url);
//   const data: unknown = await res.json();
//   return Schema.parse(data);
// };
export const getApiFunction = async <T extends ZodType>(
  url: string,
  Schema: T,
): Promise<z.infer<T>> => {
  const res = await fetch(url);
  const data: unknown = await res.json();
  return Schema.parse(data);
};

await getApiFunction(`${BASE_URL}/${params.id}`, UserSchema);
await getApiFunction(`${BASE_URL}/${params.id}`, NumberSchema);

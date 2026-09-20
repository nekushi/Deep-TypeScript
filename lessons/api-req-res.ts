interface User {
  id: string;
  username: string;
  email: string;
  role: "ADMIN" | "USER";
}

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

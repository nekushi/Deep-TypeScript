"use strict";
// const data: unknown = JSON.parse(`
//   {
//     "id": 123,
//     "username": "Ivan",
//     "email": "ivan@gmail.com"
//   }
// `);
Object.defineProperty(exports, "__esModule", { value: true });
function isUser(value) {
    return (typeof value === "object" &&
        value !== null &&
        "id" in value &&
        "username" in value &&
        "email" in value &&
        typeof value.id === "number" &&
        typeof value.username === "string" &&
        typeof value.email === "string");
}
// let userResponse: ApiResponse<User>;
let messageResponse2;
let messageResponse;
// async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
//   const response: T = await fetch(url)
//   const result = await response.json()
//   return result
// }
// fetchData<User>("")
// async function fetchData<T>(
//   url: string,
//   validator: (value: unknown) => value is T,
// ): Promise<T> {
//   const response = await fetch(url)
//   const result: unknown = await response.json()
//   if (!response.ok) {
//     throw new Error(`Status code: ${response.status}`)
//   }
//   if (!validator(result)) {
//     throw new Error(`Invalid response.`)
//   }
//   return result
// }
// const userResponse: User = await fetchData<User>("/api/user", isUser);
const data = JSON.parse(`
  {
    "id": 123,
    "username": "Ivan",
    "email": "ivan@gmail.com"
  }
`);
function getId(value) {
    if (isUser(value))
        return value.id;
}
console.log(getId(data));
//# sourceMappingURL=index.js.map
// const data: unknown = JSON.parse(`
//   {
//     "id": 123,
//     "username": "Ivan",
//     "email": "ivan@gmail.com"
//   }
// `);

// function isUser(value: unknown): value is User {
//   return (
//     typeof value === "object" &&
//     value !== null &&
//     "id" in value &&
//     "username" in value &&
//     "email" in value &&
//     typeof value.id === "number" &&
//     typeof value.username === "string" &&
//     typeof value.email === "string"
//   );
// }

// if (isUser(data)) {
//   console.log("valid user");
// } else {
//   console.log("not user");
// }

// type User = {
//   id: number;
//   username: string;
//   email: string;
// };

// const strArr = ["first", "second", "third"];
// const numArr = [1, 2, 3];
// const boolArr = [true, false];

// function getFirst<T>(arr: T[]): T {
//   return arr[0];
// }

// console.log(getFirst(strArr));
// console.log(getFirst(numArr));
// console.log(getFirst(boolArr));

// function pair<T>(...args: T[]): T[] {
//   return args;
// }

// console.log(pair<string>("nice", "one"));
// console.log(pair(1, 8));

// function makePair<T, U>(key: T, value: U): [T, U] {
//   return [key, value];
// }

// console.log(makePair("nice", 1));
// console.log(makePair(true, 0));
// console.log(makePair(8, "eighteen"));

// type ApiResponse<T> = {
//   success: boolean;
//   data: T;
// };

// type User = {
//   id: number;
//   username: string;
//   email: string;
// };

// type asdasdad = (keyof User)[]
// type asdasdad = keyof User

// const ksafasd: asdasdad = ["id", "username", "id"]
// const ksafassd: asdasdad = "username"
// type asdadd = keyof asdasdad
// const asddasdad: keyof asdasdad = "big"

// type idk = keyof User

// const nicee: keyof User = "id"

// type Message = string;

// // let userResponse: ApiResponse<User>;
// let messageResponse2: ApiResponse<Message>;
// let messageResponse: ApiResponse<string>;

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

// const data: unknown = JSON.parse(`
//   {
//     "id": 123,
//     "username": "Ivan",
//     "email": "ivan@gmail.com"
//   }
// `);

// function getId<T extends { id: number }>(value: T) {
//   // return value.id;
//   return value.id;
// }

// const objId = getId(data);

// console.log(getId("dsfdsf"));
// console.log(getId(true));
// console.log(getId(1));
// console.log(getId({ id: 18 }));

// if (isUser(data)) console.log(getId(data));

// function printLength<T extends { length: number }>(value: T) {
//   return value.length;
// }

// console.log(printLength([1, 2, 3]));
// console.log(printLength(["1", "2", "3"]));
// console.log(printLength([]));
// console.log(printLength(123));
// console.log(printLength("nice one"));
// console.log(printLength("dasd"));
// console.log(printLength(["dsad", "dsad", "dsad", "dsad"]));
// console.log(printLength(["dsad", "dsad", "dsad", "dsd"]));

// Partial-
// Required-
// Pick-
// Omit-
// Readonly-
// Record-
// ReturnType
// Parameters
// Awaited

// function sum(a: number, b: number): number {
//   return a + b;
// }

// console.log(sum(6, 5));

// type ArithmeticOperator = (x: number, y: number) => number;

// const add: ArithmeticOperator = (a, b) => a + b;
// const subtract: ArithmeticOperator = (a, b) => a - b;
// const multiply: ArithmeticOperator = (a, b) => a * b;
// const divide: ArithmeticOperator = (a, b) => a / b;

// // console.log(add(3, 2));
// // console.log(subtract(3, 2));
// // console.log(multiply(3, 2));
// // console.log(divide(3, 2));

// function calculate(a: number, b: number, operator: ArithmeticOperator = add) {
//   return operator(a, b);
// }

// const result1 = calculate(3, 4);
// const result2 = calculate(3, 4, (x, y) => x / y);

// console.log(result1);
// console.log(result2);

// function passArr<T extends { length: number }>(args: T): number {
//   return args.length;
// }

// console.log(passArr([1, 2, 3]));
// console.log(passArr(["1", "2", "3"]));
// console.log(passArr("dasdasd"));
// console.log(passArr([true, false]));
// console.log(passArr({ length: 43 }));

// function passTups(...args: [string, number, boolean]) {
//   return {
//     name: args[0],
//     age: args[1],
//     isPogi: args[2],
//   };
// }

// const personDetails: ReturnType<typeof passTups> = passTups("Ivan", 22, true);

// console.log(personDetails);

// function getValue(value: number): number;
// function getValue(value: string): string;

// function getValue(value: string | number) {
//   return value;
// }

// getValue("dasda");
// getValue(324);
// getValue(123)

// function format(value: string): number;
// function format(value: number): string;

// function format(value: string | number) {
//   switch (typeof value) {
//     case "string":
//       return Number(value);
//     case "number":
//       return String(value);
//     default:
//       return "Invalid value";
//   }
// }

// console.log(format(123));
// console.log(format("123"));
// console.log(format("123"));
// console.log(format(123));

// function parse(value: string, type: "number"): number;
// function parse(value: number, type: "string"): string;

// function parse(value: string | number, type: "number" | "string") {
//   switch (type) {
//     case "string":
//       return Number(value);
//     case "number":
//       return String(value);
//   }
// }

// console.log(parse(123, "string"));
// console.log(parse("123", "number"))

// let value: string | number = "sdasd";

// console.log(value);

// function dasdasd(value: string | number) {
//   value.toUpperCase();
//   value.toFixed();
// }

// let name: string | undefined;
// type UserInfo = [number, string] | [number, undefined, boolean?];

// const arrr1: UserInfo = [123, "sdas"];
// const arrr2: UserInfo = [123, undefined, true];
// const arrr3: UserInfo = [123, undefined, false];
// const arrr4: UserInfo = [123, undefined];

// class OurUser {
//   public username: string;

//   private password: string;

//   protected age: number;

//   readonly bleh: boolean | null;

//   constructor(
//     username: string,
//     password: string,
//     age: number,
//     bleh?: boolean | null,
//   ) {
//     this.username = username;
//     this.password = password;
//     this.age = age;
//     this.bleh = null;
//   }

//   greet(): void {
//     console.log(`Hello, ${this.username}`);
//   }

//   checkPassword(input: string) {
//     return input === this.password;
//   }
// }

// class OurAdmin extends OurUser {
//   print(): void {
//     this.username;
//     this.age;
//   }
// }

// const user1 = new OurUser("Ivan", "just_ivan", 22);
// const user2 = new OurUser("Kriztel", "just_kriztel", 22);
// const admin1 = new OurAdmin("Pepper", "just_pepper", 4);

// user1.greet();
// user2.greet();
// admin1.greet();
// admin1.print();

// console.log(user1.checkPassword("justivan"));
// console.log(user2.checkPassword("just_kriztel"));
// console.log(admin1.checkPassword("just_pepper"));

// // console.log(user1.password);

// const asd: Readonly<asdasd> = {
//   id: 123,
//   username: "dasdasd",
// };

// type asdasd = {
//   id: number;
//   username: string;
// };

// interface IUser {
//   username: string;
//   age: number;
//   greet: () => string;
// }

// interface IAdmin extends IUser {
//   role: string;
// }

// class Person implements IUser {
//   username: string;
//   age: number;

//   constructor(username: string, age: number) {
//     this.username = username;
//     this.age = age;
//   }

//   greet() {
//     return "Hello";
//   }
// }

// class Admin extends Person implements IAdmin {
//   role: string;

//   constructor(role: string, ...args: ConstructorParameters<typeof Person>) {
//     super(...args);
//     this.role = role;
//   }
// }

// const dasda: IUser = new Person("Ivan", 22);
// console.log(dasda.greet());

// type IsString<T> = T extends string ? true : false;

// let namers: IsString<string>;
// let namers2: IsString<number>;
// let namers3: IsString<boolean>;

// type ToArray<T> = T extends unknown ? T[] : never;
// type IsArray<T> = T[]

// const nice: ToArray<string | number> = ["dasda", "dasdasd"];
// const nice2: ToArray<string | number> = [3, 123];

// const nice3: IsArray<string | number> = ["dsadsd", 2]

// const nice4: (string | number)[] = [32133, "sada"]

// console.log(nice);
// console.log(nice2);

// type ToArray<T> = T extends Array<infer U> ? U : never;

// const nice: ToArray<string[]> = "sda";
// console.log(typeof nice);

// type MyReturnType<T> = T extends (...args: any[]) => infer FnReturnType
//   ? FnReturnType
//   : never;

// function getUser() {
//   return {
//     id: 1,
//     username: "Ivan",
//   };
// }

// function add(a: number, b: number) {
//   return a + b;
// }

// let a: ReturnType<typeof getUser>;
// let b: ReturnType<typeof add>;
// let c: MyReturnType<typeof getUser>;
// let d: MyReturnType<typeof add>;
// let e: typeof getUser;
// let f: typeof add;

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// const user = {
//   id: 1,
//   username: "ivan",
//   age: 25,
//   active: true,
// };

// function pick<T, const K extends keyof T>(
//   obj: T,
//   keys: K[],
// ): {
//   [P in K]: T[P];
// } {
//   const result = {} as { [P in K]: T[P] };

//   for (const key of keys) {
//     result[key] = obj[key];
//   }

//   return result;
// }

// const result = pick(user, ["username", "age", "active"] as const);

// console.log(result);

// function getValues<T, const K extends keyof T>(obj: T, keys: K) {}
// function getValuess<T, const K extends readonly (keyof T)[]>(obj: T, keys: K) {}
//   const result: T[K][] = [];

//   for (const key of keys) {
//     result.push(obj[key]);
//   }

//   return result;
// }

// const keys = ["username", "age"] as const;
// const result = getValues(user, keys);
// const result = getValues(user, ["username", "age", "active"] as const);
// function getValues<T, const K extends readonly (keyof T)[]>(
//   obj: T,
//   keys: K,
// ): { [P in keyof K]: K[P] extends keyof T ? T[K[P]] : never } {
//   const result = [];

//   for (const key of keys) {
//     result.push(obj[key]);
//   }

//   return result as { [P in keyof K]: K[P] extends keyof T ? T[K[P]] : never };
// }

// const keys = ["username", "age"] as const;
// type ansda = typeof keys;
// // const result = getValues(user, keys);
// const result = getValues(user, ["username", "age", "active"] as const);

// console.log(result);

// // const arr = ["nice", "some", "curtain"]
// const arr = { one: "nice", two: "some", three: "curtain" };

// type something = (keyof typeof arr)[];

// const sdadsssdasd: something = ["one", "two", "three"];

// const product = {
//   name: "Laptop",
//   price: 1000,
//   inStock: true,
// };

// function update<T, K extends keyof T, V extends T[K]>(
//   obj: T,
//   key: K,
//   value: V,
// ) {
//   obj[key] = value;

//   return obj;
// }

// console.log(product);
// update(product, "name", "Desktop");
// console.log(product);
// update(product, "price", 1200);
// console.log(product);
// update(product, "inStock", false);

// console.log(product);

// const userss = {
//   name: "Ivan",
// };

// const stats = [25, 30, 23];

// function merge<T extends object, U extends object>(a: T, b: U): T & U {
//   return { ...a, ...b };
// }

// const result = merge(userss, stats);
// console.log(result);

// const user = {
//   username: "ivan",
//   active: true,
// };

// function mergeWithId<T extends object>(
//   obj: T,
//   id: number,
// ): {
//   id: number;
// } & T {
//   return { id, ...obj };
// }

// const result = mergeWithId(user, 123);
// console.log(result);

// type Result<T> =
//   | {
//       success: true;
//       data: T;
//     }
//   | {
//       success: false;
//       error: string;
//     };

// type SuccessData<T> =
//   T extends Result<{
//     success: true;
//     data: infer U;
//   }>
//     ? U
//     : never;

// type AA = SuccessData<Result<string>>;
// // string

// type BB = SuccessData<Result<number>>;
// // number

// type CC = SuccessData<{ success: false; error: string }>;
// // never

// const A: AA = "18";
// const B: BB = 18;
// const C: CC = {
//   success: false,
//   data: "Something went wrong.",
// };

// console.log(A);
// console.log(B);
// console.log(C);

// // type A = SuccessData<Result<string>>;
// // // string

// // type B = SuccessData<Result<number>>;
// // // number

// // type C = SuccessData<{ success: false; error: string }>;
// // never

// type MyReturnType<T> = T extends (...args: any) => infer U ? U : never;

// function getUser() {
//   return {
//     id: 1,
//     username: "Ivan",
//     active: true,
//   };
// }

// let myuserism1: ReturnType<typeof getUser>;
// let myuserism2: MyReturnType<typeof getUser>;

// type A = MyReturnType<(x: string) => string>;
// // string

// type B = MyReturnType<() => number>;
// // number

// type C = MyReturnType<
//   () => {
//     id: number;
//     username: string;
//   }
// >;
// // { id: number; username: string; }

// const asdgfga: A = getUser().username;
// const asdgfgb: B = getUser().id;
// const asdgfgc: C = { id: getUser().id, username: getUser().username };

// type MyParameters<T> = T extends (value: infer X, ...args: infer Y) => any ? Y : never;

// type A = MyParameters<(id: number, username: string, active: boolean) => void>;
// // [number, string, boolean]
// type B = MyParameters<(name: string, age: number) => string>;
// // [string, number]

// let a: MyParameters<(id: number, username: string, active: boolean) => void>;
// let b: MyParameters<(name: string, age: number) => string>;

// let c: Parameters<(id: number, username: string, active: boolean) => void>;
// let d: Parameters<(name: string, age: number) => string>;

// type Fn = (id: number, username: string, active: boolean) => void;

// type ApiResponse<T> = {
//   status: number;
//   data: T;
// };

// type ExtractData<T> = T extends {
//   status: number;
//   data: infer U;
// }
//   ? U
//   : never;

// type X = ExtractData<ApiResponse<string>>;
// // string

// type Y = ExtractData<
//   ApiResponse<{
//     id: number;
//     username: string;
//   }>
// >;
// // {
// //   id: number;
// //   username: string;
// // }

// type Z = ExtractData<ApiResponse<number[]>>;
// // number[]
//

// type ApiResponse<T> = SuccessMessage<T> | ErrorMessage;

// type User = {
//   id: string;
//   username: string;
// };

// type SuccessMessage<T> = {
//   data: T;
//   status: number;
// };

// type ErrorMessage = {
//   status: number;
//   message: string;
// };

// function isUser(obj: unknown): obj is User {
//   return (
//     typeof obj === "object" &&
//     obj !== null &&
//     "id" in obj &&
//     "username" in obj &&
//     typeof obj.id === "string" &&
//     typeof obj.username === "string"
//   );
// }

// async function getUsers(
//   validator: (obj: unknown) => obj is User[],
// ): Promise<ApiResponse<User[]>> {
//   const response = await fetch("/api/users");

//   const result: unknown = await response.json();

//   if (validator(result)) {
//     return { status: 200, data: result };
//   }

//   return { status: 400, message: "Something went wrong." };
// }

// const users = await getUsers();

// users[0].username;

// type OnlyOne = keyof typeof user

// let adsdadad: "id" | "username" = "id"

// type Only = Pick<typeof user, "id" | "username">

// type User = {
//   id: number;
//   username: string;
//   active: boolean;
// };

// type a = Pick<User, "username" | "active">;
// type b = Pick<User, "id">;

// type Select<T, K extends keyof T> = { [P in K]: T[P] }

// // function Select<T, K extends keyof T>(obj: T, keys: K) {
// //   const result = {};

// //   return result;
// // }

// type A = Select<User, "username">;
// // {
// //   username: string;
// // }

// type B = Select<User, "id" | "active">;
// // {
// //   id: number;
// //   active: boolean;
// // }

// type C = Select<User, "id" | "username" |"active">;
// // {
// //   id: number;
// //   username; string;
// //   active: boolean;
// // }

// type D = Select<User, "email" | "username" |"active">;
// // {
// //   id: number;
// //   username; string;
// //   active: boolean;
// // }

// type StringKeys<T> = { [P in keyof T]: T }[keyof T]
// type StringKeys<T> = { [P in keyof T]: T }
// type StringKeys<T> = { [P in keyof T]: T[P] extends string }[keyof T];
// type StringKeys<T> = {
//   [P in keyof T]: T[P] extends string ? P : never;
// }[keyof T];
// // type StringKeys<T> = keyof T
// // type StringKeys<T> = T;
// // type StringKeys<T> = {
// //   [P in keyof T]: T[P] extends string ? keyof P : never;
// // }[keyof T];

// // id | username | email | active
// // "username" | "email"
// // User["username"] extends string ? T[P] string => username

// type A = StringKeys<User>;
// // "username" | "email"

// type B = StringKeys<{
//   name: string; //
//   id: number;
//   age: number;
// }>;
// // "name"

// type PickByType<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

// type A = PickByType<User, number>;
// type B = PickByType<User, boolean>;
// type C = PickByType<User, string>;
// type D = PickByType<User, string[]>;

// type StringProperties<T> = { [K in keyof T]: T[K] extends string ? T[K] : never }[keyof T]
// type StringProperties<T> = {
//   [K in keyof T]: T[K] extends string ? K : never;
// };
// // type StringProperties<T> = {
// //   [K in keyof T as T[K] extends string ? K : never]: T[K];
// // };

// type A = StringProperties<User>;
// type B = StringProperties<{
//   id: number;
//   name: string;
//   active: boolean;
// }>;

// type User = {
//   id: number;
//   username: string; //
//   email: string; //
//   active: boolean;
// };

// type PickPropertiesByType<T, V> = {
//   [K in keyof T as T[K] extends V ? K : never]: T[K];
// };

// type A = PickPropertiesByType<User, string>;
// type B = PickPropertiesByType<User, boolean>;
// type C = PickPropertiesByType<User, number>;
// type D = PickPropertiesByType<User, number[]>;

// type PickByValue<T, V> = {
//   [K in keyof T as T[K] extends V ? K : never]: T[K] extends V ? T[K] : never;
// };

// type A = PickByValue<User, number>;
// // {
// //   id: number;
// //   age: number;
// // }

// type User = {
//   id: number;
//   username: string;
//   email: string;
//   active: boolean;
//   age: number;
// };

// type StringToOptional<T> = { [ K in keyof T as T[K] extends string ? K : never ] : T[K] }
// type StringToOptional<T> = { [K in keyof T]: T[K] extends string ? T[K] : T[K] };
// type StringToOptional<T> = {
//   [K in keyof T as T[K] extends string ? T[K] : K]: T[K];
// };
// type StringToOptional<T> = {
//   [K in keyof T as T[K] extends string ? K : never ]: T[K];
// };
// type StringToOptional<T> = {
//   [K in keyof T ]: T[K] extends string ? T[K] : never;
// };
// type StringToOptional<T> = {
//   [K in keyof T as T[K] extends string ? K : K]: T[K];
//   // [K in keyof T as T[K] extends string ? K+? : K-?]: T[K];
// };
// type StringToOptional<T> = {
//   [K in keyof T as T[K] extends string ? K? : K ]: T[K];
// };

// type NonStringKeys<T> = {
//   [K in keyof T as T[K] extends string ? never : K]: T[K];
// };

// type StringKeys<T> = {
//   [K in keyof T as T[K] extends string ? K : never]+?: T[K];
// };

// type StringToOptional<T> = NonStringKeys<T> & StringKeys<T>;

// type A = StringToOptional<User>;
// type B = StringToOptional<{
//   id: number;
//   email: string;
//   active: boolean;
//   age: number;
// }>;
// type C = StringToOptional<{
//   id: number;
//   active: boolean;
//   age: number;
// }>;

// type User = {
//   id: number;
//   username: string;
//   email: string;
//   active: boolean;
//   age: number;
// };

// type NumberKeysToString<T> = {
//   [K in keyof T as T[K] extends number ? K : never]: T[K] extends number
//     ? string
//     : never;
// };

// type StringKeysToOptional<T> = {
//   [K in keyof T as T[K] extends string ? K : never]+?: T[K];
// };

// type BooleanKeys<T> = {
//   [K in keyof T as T[K] extends boolean ? K : never]: T[K];
// };

// type TransformProperties<T> = NumberKeysToString<T> &
//   StringKeysToOptional<T> &
//   BooleanKeys<T>;

// type NumberKeysToString<T> = {
//   [K in keyof T as T[K] extends number ? K : never]: T[K] extends number
//     ? string
//     : never;
// };

// type StringKeysToOptional<T> = {
//   [K in keyof T as T[K] extends string ? K : never]+?: T[K];
// };

// type BooleanKeys<T> = {
//   [K in keyof T as T[K] extends boolean ? K : never]: T[K];
// };

// type TransformProperties<T> = {
//   [K in keyof T as T[K] extends string ? K : never]?: T[K];
// } & {
//   [K in keyof T as T[K] extends number ? K : never]: string;
// } & { [K in keyof T as T[K] extends boolean ? K : never]: T[K] };

// type Result = TransformProperties<User>;
// {
//   id: string;
//   username?: string;
//   email?: string;
//   active: boolean;
//   age: string;
// }

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   active: boolean;
// };

// type StringifyNumbers<T> = {
//   [K in keyof T]: T[K] extends number ? string : T[K];
// };

// type Result = StringifyNumbers<Product>;
/*
{
  id: string;
  name: string;
  price: string;
  active: boolean;
}
*/

// type FormFields<T> = Pick<T, "id">

// type Result = FormFields<User>;
// type Result = { [K in keyof Pick<User, "age" | "id">]: string } & Partial<
//   Pick<User, "username" | "email">
// > &
//   Pick<User, "active">;
/*
{
  id: string;
  username?: string;
  age: string;
  active: boolean;
  email?: string;
}
*/

// function onlyString<T>(value: unknown) {
//   if (typeof value === "number") {
//     return value;
//   }
// }

// onlyString<number>(18);

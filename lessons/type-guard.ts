type Product = {
  id: number;
  name: string;
  price: number;
};

function isProduct(value: unknown): value is Product {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value &&
    "price" in value &&
    typeof value.id === "number" &&
    typeof value.name === "string" &&
    typeof value.price === "number"
  );
}

// const products: Product[] = [
//   {
//     id: 123,
//     name: "apple",
//     price: 49,
//   },
//   {
//     id: 124,
//     name: "orange",
//     price: 25,
//   },
//   {
//     id: 125,
//     name: "pineapple",
//     price: 180,
//   },
// ];
const singleProduct: unknown = {
  id: 123,
  name: "yadayada",
  price: 49,
};

type Admin = {
  id: number;
  username: string;
  permissions: string[];
};

function isAdmin(value: unknown): value is Admin {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "username" in value &&
    "permissions" in value &&
    typeof value.id === "number" &&
    typeof value.username === "string" &&
    typeof value.permissions === "object" &&
    value.permissions !== null &&
    Array.isArray(value.permissions) &&
    value.permissions.every((item) => typeof item === "string")
  );
}

const admin1: unknown = [
  {
    id: 123,
    username: "Pepper",
    permissions: ["read", "write"],
  },
  {
    id: 124,
    username: "Nougat",
    permissions: ["read", "write", "execute"],
  },
];

const admin2: unknown = {
  id: 123,
  username: "Pepper",
  permissions: ["read", 12],
};

// function isType<T>(
//   value: unknown,
//   validator: (value: unknown) => value is T,
// ): value is T {
//   return validator(value);
// }

// if (isType(products, isProduct)) {
//   console.log("Product ako, pre");
//   products.name;
// } else {
//   console.log("Nu product uh");
// }

// if (isType(admin1, isAdmin)) {
//   console.log("Admin ako, pre");
//   admin1.username;
// } else {
//   console.log("Nu admin uh");
// }

function isArrayOf<T>(
  value: unknown,
  validator: (value: unknown) => value is T,
): value is T[] {
  return Array.isArray(value) && value.every(validator);
}

// if (isArrayOf(products, isProduct)) {
//   console.log("Product ako, pre");
//   console.log(products[0]?.name);
// } else {
//   console.log("Nu product uh");
// }

if (isArrayOf(admin1, isAdmin)) {
  console.log("Admin ako, pre");
  console.log(admin1[0]?.permissions);
} else {
  console.log("Nu admin uh");
}

function assertProduct(value: unknown): asserts value is Product {
  if (!isProduct(value)) {
    throw new Error("Not a product");
  }
}

assertProduct(singleProduct);
assertProduct(admin2);

console.log(admin2.name);

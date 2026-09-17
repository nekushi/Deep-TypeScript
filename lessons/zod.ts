import { z } from "zod";
// import type { z } from "zod";

// console.log(z);

const ProductSchema = z.object({
  name: z.string(),
  price: z.number(),
  tags: z.array(z.string()),
  category: z.string().nullable(),
  description: z.string().optional(),
});

type Product = z.infer<typeof ProductSchema>;

// const product: Product = {
// const product: unknown = {
//   name: "apple",
//   price: 49,
//   tags: ["juicy", "crunchy"],
//   category: null,
// };
const product: unknown = {
  name: "apple",
  price: 49,
  tags: ["juicy", 123, true, "crunchy", 345],
  category: null,
  description: null,
};

const result = ProductSchema.safeParse(product);

// if (!result.success) {
//   console.log(result.error.issues);
// }

type ValidationResult = SuccessValidation | ErrorValidation;

type SuccessValidation = {
  success: true;
  data: Product;
};
type ErrorValidation = {
  success: false;
  data: Record<string, string>;
};

function validateProduct(obj: unknown): ValidationResult {
  const result = ProductSchema.safeParse(obj);

  if (!result.success) {
    const err: ErrorValidation = {
      success: result.success,
      data: {},
    };

    for (const issue of result.error.issues) {
      // err.data[`[${issue.path}]`] = issue.message;

      const errDetail =
        issue.path.length > 1
          ? String(issue.path[0])
          : String(`[${issue.path}]`);
      const errIndex =
        issue.path.length > 1 ? `[${String(issue.path[1])}]` : "";
      console.log(errDetail);
      console.log(errIndex);
      // console.log(issue.path);

      // err.data[`[${issue.path}]`] = issue.message;
      // err.data[`${errDetail}${errIndex  `[${errIndex}]`}`] = issue.message;
      err.data[`${errDetail}${`${errIndex}`}`] = issue.message;
    }

    return err;
  } else {
    return result;
  }
}

console.log(validateProduct(product));
// validateProduct(product);

// const product1 = ProductSchema.parse(validProduct);
// const product2 = ProductSchema.parse(invalidProduct);

// ts/
// ├── package.json
// ├── tsconfig.json
// ├── index.ts
// ├── lessons
//     └── zod.ts
//         └── import z ...
//     ├── ...

// [ZodError: [
//   {
//     "expected": "string",
//     "code": "invalid_type",
//     "path": [
//       "description"
//     ],
//     "message": "Invalid input: expected string, received null"
//   },
//   {
//     "expected": "string",
//     "code": "invalid_type",
//     "path": [
//       "tags",
//       1
//     ],
//     "message": "Invalid input: expected string, received number"
//   }
// ]]

// [ZodError: [
//   {
//     "expected": "string",
//     "code": "invalid_type",
//     "path": [
//       "tags",
//       1
//     ],
//     "message": "Invalid input: expected string, received number"
//   },
//   {
//     "expected": "string",
//     "code": "invalid_type",
//     "path": [
//       "description"
//     ],
//     "message": "Invalid input: expected string, received null"
//   }
// ]]

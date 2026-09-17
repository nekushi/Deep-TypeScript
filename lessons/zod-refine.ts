import { z } from "zod";

// const NumberSchema = z.number().refine((value) => value > 0);

// // type num = z.infer<typeof NumberSchema>;

// // const num1: num = -18;

// const result = NumberSchema.safeParse(18);

// if (!result.success) {
//   console.log(result.error);
// } else {
//   console.log(result.data);
// }

// const ProductSchema = z.object({
//   name: z.string(),
//   price: z.number().refine((price) => price > 0),
//   description: z.string().optional(),
//   category: z.string().nullable(),
//   tags: z.array(z.string()),
// });

// const RegisterSchema = z
//   .object({
//     username: z.string().refine((uName) => uName.length > 3),
//     password: z
//       .string()
//       .min(8, "Password must contain more than 8 characters."),
//     confirmPassword: z.string(),
//     age: z.number().refine((age) => age >= 18),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     path: ["confirmPassword"],
//   });

const RegisterSchema = z
  .object({
    username: z.string().refine((uName) => uName.length > 3),
    password: z
      .string()
      .min(8, "Password must contain more than 8 characters."),
    confirmPassword: z.string(),
    age: z.number().refine((age) => age >= 18),
  })
  // .refine((data) => data.password === data.confirmPassword, {
  //   path: ["confirmPassword"],
  // })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Password and confirmPassword must match",
      });
    }

    if (!data.password.match(/\d+/g)) {
      ctx.addIssue({
        code: "invalid_format",
        format: "regex",
        path: ["password"],
        message: "Password must contain at least one number",
      });
    }

    if (data.password.length < 8) {
      ctx.addIssue({
        code: "invalid_format",
        format: "regex",
        path: ["password"],
        message: "Password must contain at least 8 characters",
      });
    }
  });

// .superRefine((data, ctx) => data.password.length < 8)
// .superRefine((data, ctx) => ctx.value.password === ctx.value.confirmPassword)

type RegisterUser = z.infer<typeof RegisterSchema>;

const user: RegisterUser = {
  username: "pepper",
  password: "nougat",
  confirmPassword: "nougatsu",
  age: 18,
};

// console.log(user);

const result = RegisterSchema.safeParse(user);

if (!result.success) {
  console.log(result.error);
} else {
  console.log(result.data);
}

import { regex, unknown, z } from "zod";

function displayResult<T>(result: z.ZodSafeParseResult<T>) {
  if (!result.success) {
    console.log(result.error.issues);
  } else {
    console.log(result.data);
  }
}

// START: .extend()
// const UserSchema = z.object({
//   username: z.string(),
//   email: z.string(),
// });

// const UserAccountSchema = UserSchema.extend({
//   password: z.string(),
//   confirmPassword: z.string(),
// });

// type UserAccount = z.infer<typeof UserAccountSchema>;

// const user: UserAccount = {
//   username: "dasda",
//   email: "dasda",
//   password: "dasda",
//   confirmPassword: "dasda",
// };
// END: .extend()

// const UserSchema = z.object({
//   id: z.number(),
//   username: z.string(),
//   email: z.string(),
//   password: z.string(),
//   role: z.string(),
//   age: z.number(),
// });

// START: .pick()
// const LoginSchema = UserSchema.pick({
//   email: true,
//   password: true,
// });

// type Login = z.infer<typeof LoginSchema>;
// END: .pick()

// START: .omit()
// const PublicUserSchema = UserSchema.omit({
//   password: true,
// });

// type PublicUser = z.infer<typeof PublicUserSchema>;
// END: .omit()

// START: .partial()
// const UpdateUserSchema = UserSchema.partial();

// type UpdateUser = z.infer<typeof UpdateUserSchema>;
// END: .partial()

// START: .required()
// const RequiredUpdateUserSchema = UpdateUserSchema.required();

// type RequiredUpdateUser = z.infer<typeof RequiredUpdateUserSchema>;
// END: .required()

// START: .merge() [deprecated]
// const UserSchema2 = z.object({
//   username: z.string(),
//   email: z.string(),
// });

// const RoleSchema2 = z.object({
//   role: z.string(),
//   permissions: z.array(z.string()),
// });

// const UserWithRoleSchema1 = UserSchema2.extend(RoleSchema2.shape);
// const UserWithRoleSchema2 = UserSchema2.merge(RoleSchema2);

// type UserWithRole = z.infer<typeof UserWithRoleSchema1>;
// END: .merge()

// START: .and()
// const UserSchema3 = z.object({
//   username: z.string(),
//   email: z.string(),
// });

// const RoleSchema3 = z.object({
//   email: z.number(),
//   role: z.string(),
//   permissions: z.array(z.string()),
// });

// const UserWithRoleSchema3 = UserSchema2.and(RoleSchema3);
// const UserWithRoleSchema4 = UserSchema2.extend(RoleSchema3.shape);

// type UserWithRole2 = z.infer<typeof UserWithRoleSchema1>;
// type UserWithRole4 = z.infer<typeof UserWithRoleSchema4>;
// END: .and()

// START: Reusable Schemas
// const UsernameSchema = z
//   .string()
//   .min(3, "Username must contain at least 3 characters");
// const EmailSchema = z
//   .string()
//   .regex(
//     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//     "Email must follow the correct pattern",
//   );
// const PasswordSchema = z
//   .string()
//   .min(8, "Password must contain at least 8 characters");

// const RegisterSchema = z.object({
//   username: UsernameSchema,
//   email: EmailSchema,
//   password: PasswordSchema,
// });

// type RegisterUser = z.infer<typeof RegisterSchema>;

// const registerUser: RegisterUser = {
//   username: "Kriztel",
//   email: "kriztel@gmail.com",
//   password: "just_kriztel",
// };

// const result = RegisterSchema.safeParse(registerUser);

// if (!result.success) {
//   console.log(result.error.issues);
// } else {
//   console.log(result);
// }
// END: Reusable Schemas

// START: .transform()
// const ProductSchema = z
//   .object({
//     name: z.string().transform((name) => name.trim().toLowerCase()),
//     price: z.string().transform((price) => {
//       if (/[a-zA-Z]/g.test(price)) {
//         return price;
//       }
//       return parseFloat(price);
//     }),
//   })
//   .superRefine((data, ctx) => {
//     if (typeof data.price === "string" && /[a-zA-Z]/g.test(data.price)) {
//       ctx.addIssue({
//         code: "custom",
//         path: ["price"],
//         message: "Input not convertable to type number",
//       });
//     }
//   });

// const result1 = ProductSchema.safeParse({
//   name: "   Keyboard   ",
//   price: "hello149.99",
//   // price: "149.99hello",
//   // price: "hello",
//   // price: "149",
//   // price: "149.99",
// });

// if (!result1.success) {
//   console.log(result1.error.issues);
// } else {
//   console.log(result1);
// }

// END: .transform()

// START: .coerce()

// const ParseNumberSchema = z.coerce.number();

// const ProductSchema = z.object({
//   name: z.string(),
//   price: ParseNumberSchema,
//   quantity: ParseNumberSchema,
// });

// type Product = z.infer<typeof ProductSchema>;

// const result = ProductSchema.safeParse({
//   name: "Apple",
//   price: "149.99",
//   quantity: "5",
// });

// displayResult(result);
// END: .coerce()

// START: .catch(), .default(), .prefault()
// const UsernameSchema = z.string().trim().toUpperCase().default("Guest");

// const result1 = UsernameSchema.safeParse("Ivan");
// const result2 = UsernameSchema.safeParse(undefined);

// displayResult(result1);
// displayResult(result2);

// const AgeSchema = z.number().catch(18);

// const result3 = AgeSchema.safeParse(8);
// const result4 = AgeSchema.safeParse("15");

// displayResult(result3);
// displayResult(result4);

// const NameSchema = z.string().trim().toUpperCase().prefault(" guest ");

// const result5 = NameSchema.safeParse("Ivan");
// const result6 = NameSchema.safeParse(undefined);
// const result7 = NameSchema.safeParse(unknown);

// displayResult(result5);
// displayResult(result6);
// displayResult(result7);
// END: .catch(), .default(), .prefault()

// START: Discriminated Unions
// const CardSchema = z.object({
//   method: z.literal("card"),
//   cardNumber: z.string(),
// });
// const GcashSchema = z.object({
//   method: z.literal("gcash"),
//   phone: z.string(),
// });

// const PaymentSchema = z.discriminatedUnion("Payment Method", [
//   CardSchema,
//   GcashSchema,
// ]);
/////////////////////////////
// const PaymentSchema = z.discriminatedUnion(["CardSchema" | "GcashSchema"], );
// const PaymentSchema = z.discriminatedUnion("PaymentSchema", [
//   CardSchema | GcashSchema,
// ]);
// const PaymentSchema = z.object({
//   method: z.literal("card"),
//   cardNumber: z.string()
// } | {
//   method: z.literal("gcash"),
//   phone: z.string()
// })
/////////////////////////////

// type Payment = z.infer<typeof PaymentSchema>;
// END: Discriminated Unions

// START:
const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  role: z.union([z.literal("ADMIN"), z.literal("USER")]),
});
const PublicUserSchema = UserSchema.omit({ id: true });

type User = z.infer<typeof UserSchema>;
type PublicUser = z.infer<typeof PublicUserSchema>;
// END:

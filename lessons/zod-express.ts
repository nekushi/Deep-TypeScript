// import { z } from "zod";

// const CreateUserSchema = z.object({
//   username: z.string().min(3, "Username must contain at least 3 characters."),
//   // email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
//   email: z.email(),
//   age: z.number().min(18),
// });

// type CreateUser = z.infer<typeof CreateUserSchema>;

// const result = CreateUserSchema.safeParse({
//   username: "Kriztel",
//   email: "kriztel@gmail.com",
//   age: 18,
// });

// // if (!result.success) {
// //   console.log(result.error.issues);
// // } else {
// //   console.log(result.data);
// // }

// const validateCreateUserBody = (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   // const validateCreatedUser = CreateUserSchema.safeParse(req.body)

//   // if (!validateCreatedUser.success) {
//   //   return res.status(400).json(validateCreatedUser.error.issues)
//   // }

//   // return res.status(201).json(validateCreatedUser.data)

//   const result = validateBody(CreateUserSchema, req.body);

//   if (result.status === 400) {
//     return result.error.issues;
//   }

//   return result.data;
// };

// // function validateBody<T>(Schema: z.ZodObject<T>, body: unknown) {
// //   const result = Schema.safeParse(body)

// //   if (!result.success) {
// //     return res.status(400).json(result.error)
// //   }

// //   return res.status(201).json(result)
// // }

// // function validateBody<T>(Schema: z.ZodObject<T>) {
// //   return (req: Request, res: Response, next: NextFunction) => {
// //     Promise.resolve(Schema.safeParse(req.body)).catch((err) =>
// //       console.log(err),
// //     );
// //   };
// // }
// // function validateBody<T>(Schema: z.ZodObject<T>) {
// //   return (req: Request, res: Response, next: NextFunction) =>
// //     Schema.safeParse(req.body);
// // }
// // function validateBody<T>(Schema: z.ZodObject<T>) {
// // function validateBody<T extends Readonly<{ [k: string]: $ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>; }>>(Schema: z.ZodObject<T>) {
// function validateBody<T extends z.ZodRawShape>(Schema: z.ZodObject<T>) {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const result = Schema.safeParse(req.body);

//     if (!result.success) {

//       const errs = result.error.issues.reduce<Record<string, string>>((errors, issue) => {
//         const key = issue.path.join(".")
//         errors[key] = issue.message
//         return errors
//       }, {})

//       // const data = {} as Record<string, string>;

//       // for (const issue of result.error.issues) {
//       //   const errDetail =
//       //     issue.path.length > 1
//       //       ? String(issue.path[0])
//       //       : String(`[${issue.path}]`);
//       //   const errIndex =
//       //     issue.path.length > 1 ? `[${String(issue.path[1])}]` : "";
//       //   console.log(errDetail);
//       //   console.log(errIndex);
//       //   data[`${errDetail}${`${errIndex}`}`] = issue.message;
//       // }
//       // throw new Error(JSON.stringify(data));
//       return res.status(400).json(errs);
//     }

//     next();
//     // return res.status(201).json(result.data); // next()
//   };
// }

// // const validateBody(fn => Promise<any>) => return (req: Request, res: Response, next: NextFunction) => {
// //   Promise.resolve(fn).catch(next)
// // } )

import { z } from "zod";

const CreateUserSchema = z.object({
  username: z.string().min(3, "Username must contain at least 3 characters."),
  email: z.email(),
  age: z.number().min(18),
});

type CreateUser = z.infer<typeof CreateUserSchema>;

const result = CreateUserSchema.safeParse({
  username: "Ivan",
  email: "ivan@gmail.com",
  age: 18,
});

const validateCreateUserBody = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result = validateBody(CreateUserSchema);
};

function validateBody<T extends z.ZodRawShape>(Schema: z.ZodObject<T>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = Schema.safeParse(req.body);

    if (!result.success) {
      const errs = result.error.issues.reduce<Record<string, string>>(
        (errors, issue) => {
          const key = issue.path.join(".");
          errors[key] = issue.message;
          return errors;
        },
        {},
      );

      return res.status(400).json(errs);
    }

    next();
  };
}

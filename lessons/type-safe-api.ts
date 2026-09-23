import { z} from "zod"

type HTTPStatusCode = 400 | 401 | 403 | 500 | 404
type HTTPErrorCode = "BAD_REQUEST" | "UNAUTHORIZED" | "FORBIDDEN" | "SERVER_ERROR" | "NOT_FOUND"

const errorCodes = {
  400: "BAD_REQUEST",
  401: "UNAUTHORIZED",
  403: "FORBIDDEN",
  500: "SERVER_ERROR",
  404: "NOT_FOUND"
} satisfies Record<HTTPStatusCode, HTTPErrorCode>

function isValidHTTPStatusCode(value: number): asserts value is HTTPStatusCode {
  // if (typeof errorCodes === "object" && errorCodes !== null && value in errorCodes && errorCodes[value] === undefined) { 
  if (!(value in errorCodes)) { 
    throw new Error(...)
  }
}

const getApiFunction = async <T extends z.ZodType>(url: string, Schema: T): Promise<z.infer<T>> => { 
  const res = await fetch(url) 
  if (!res.ok) { 
    isValidHTTPStatusCode(res.status) 
    throw new AppError(res.status, res.statusText, errorCodes[res.status])
  } 
  const data: unknown = await res.json() 
  return Schema.parse(data) 
}
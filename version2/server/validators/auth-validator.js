import { z } from "zod";

const loginSchema = z.object({
    email: z
    .string({required_error: "Email is required"})
    .trim()
    .min(3, {message: "Email must be of atleast 3 characters"})
    .max(255, {message: "Email must be of atmost 255 characters"}),
    password: z
    .string({required_error: "Password is required"})
    .trim()
    .min(8, {message: "Password must be of atleast 8 characters"})
    .max(100, {message: "Password must be of atmost 100 characters"}),
});

const signupSchema = loginSchema.extend({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(6, {message: "Name must be of atleast 6 characters"})
    .max(20, {message: "Name must be of atmost 20 characters"}),
    phone: z
    .string({required_error: "Phone is required"})
    .trim()
    .min(10, {message: "Phone must be of atleast 10 characters"})
    .max(20, {message: "Phone must be of atmost 20 characters"}),
    
});

export default signupSchema;

export { loginSchema };
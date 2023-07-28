import * as z from 'zod'

const formSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name",
      invalid_type_error: "Please enter a valid name",
    })
    .nonempty({ message: "Please enter a valid name" }),
  email: z
    .string({
      required_error: "Please enter your email",
      invalid_type_error: "Please enter a valid email",
    })
    .email({ message: "Please enter a valid email" })
    .regex(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    ),
  message: z
    .string({
      required_error: "Please enter a message",
    })
    .min(5, { message: "Message must be at least 5 characters long" })
    .max(1000, { message: "Message must be less than 1000 characters long" }),
});

export default formSchema;

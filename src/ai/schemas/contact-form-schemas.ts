
import { z } from 'zod'; // Use global Zod for schema definitions

export const ContactFormInputSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).describe('The sender\'s name.'),
  email: z.string().email({ message: "Invalid email address." }).describe('The sender\'s email address.'),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, {message: "Message must be at most 500 characters."}).describe('The content of the message.'),
});

export const ContactFormOutputSchema = z.object({
  success: z.boolean().describe('Whether the form submission was processed successfully.'),
  message: z.string().describe('A message to display to the user after submission.'),
});

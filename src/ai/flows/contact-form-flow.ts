'use server';
/**
 * @fileOverview Handles submissions from the portfolio contact form.
 *
 * - processContactForm - A function that processes the contact form data.
 * - ContactFormInput - The input type for the processContactForm function.
 * - ContactFormOutput - The return type for the processContactForm function.
 */

// import {ai} from '@/ai/genkit'; // Removed unused ai import
import type { z as genkitZod } from 'genkit'; // Use aliased genkitZod for Genkit definitions, though not strictly needed if no Genkit schema methods are used.
import { ContactFormInputSchema, ContactFormOutputSchema } from '@/ai/schemas/contact-form-schemas';


// TypeScript types derived from the Zod schemas
export type ContactFormInput = genkitZod.infer<typeof ContactFormInputSchema>;
export type ContactFormOutput = genkitZod.infer<typeof ContactFormOutputSchema>;


export async function processContactForm(input: ContactFormInput): Promise<ContactFormOutput> {
  // Validate input using the Zod schema.
  // This step is good practice for server actions, even if client-side validation exists.
  try {
    ContactFormInputSchema.parse(input);
  } catch (error) {
    console.error('Invalid contact form input:', error);
    return {
      success: false,
      message: 'Invalid data provided. Please check your input and try again.',
    };
  }

  console.log('Contact form submission received:', input);

  // In a real application, you would add logic here to:
  // 1. Send an email
  // 2. Save the submission to a database
  // 3. Notify via a messaging service

  // For this example, we'll just simulate a successful processing.
  // Simulating an asynchronous operation
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: 'Thank you for your message! I will get back to you soon.',
  };
}

// The ai.defineFlow block has been removed to make this a direct server action.
// const contactFormFlow = ai.defineFlow(
//   {
//     name: 'contactFormFlow',
//     inputSchema: ContactFormInputSchema,
//     outputSchema: ContactFormOutputSchema,
//   },
//   async (input: ContactFormInput): Promise<ContactFormOutput> => {
//     console.log('Contact form submission received:', input);
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return {
//       success: true,
//       message: 'Thank you for your message! I will get back to you soon.',
//     };
//   }
// );

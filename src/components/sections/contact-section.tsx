
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormInputSchema } from '@/ai/schemas/contact-form-schemas'; // Updated import path
import type { ContactFormInput } from '@/ai/flows/contact-form-flow'; // Type import remains same
import { processContactForm } from '@/ai/flows/contact-form-flow'; // Function import remains same
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormInput>({
    resolver: zodResolver(ContactFormInputSchema), // Use the imported schema
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormInput> = async (data) => {
    setIsSubmitting(true);
    try {
      const result = await processContactForm(data);
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          title: 'Error',
          description: result.message || 'Failed to send message. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-10 md:mb-12 max-w-xl mx-auto">
          Have a project in mind, a question, or just want to say hi? Fill out the form below, and I&apos;ll get back to you as soon as possible.
        </p>

        <div className="max-w-xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto transition-all duration-300 hover:shadow-md">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

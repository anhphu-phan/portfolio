"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

import submit from "./action";
import formSchema from "./validator";

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { toast } = useToast();

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await submit(data);
    } catch (error) {
      console.log(error);
      toast({
        title: "Opps!",
        description: "Something went wrong.",
        duration: 3000,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent!",
      description: "I'll get back to you as soon as possible.",
      duration: 3000,
      variant: "success",
    });
    form.reset();
  });

  return (
    <Form {...form}>
      <form className="flex flex-col space-y-8" onSubmit={handleSubmit}>
        {/** Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl placeholder="Name" className="rounded-none">
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/** Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl placeholder="Email" className="rounded-none">
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/** Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl placeholder="Your message" className="rounded-none">
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting} className="self-stretch rounded-none">
          Submit
        </Button>
      </form>
    </Form>
  );
}

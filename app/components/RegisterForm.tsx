"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import Successful from "./Successful";
const FormSchema = z.object({
  team_name: z.string().min(2, {
    message: "Team's name must be at least 2 characters.",
  }),
  phone_number: z.string().max(11, {
    message: "Phone number must be 11 characters.",
  }),
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .email("Invalid Email"),
  project_topic: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  category: z.string({
    required_error: "Please select a category to display.",
  }),
  group_size: z.string({
    required_error: "Please select group size.",
  }),
  privacy_poclicy_accepted: z.boolean().default(false).optional(),
});

export function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      team_name: "",
      phone_number: "",
      group_size: "",
      project_topic: "",
      category: "",
      privacy_poclicy_accepted: true,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    try {
      const res = await axios.post('https://backend.getlinked.ai/hackathon/registration', data);
  
      if (res.status === 201) {
        console.log('Data sent successfully');
        console.log('API Response:', res.data);
      } 
      else if (res.status === 200) {
        console.log('Data sent successfully');
        console.log('API Response:', res.data);
      } else {
        console.error('Unexpected status code:', res.status);
      }
    } catch (error) {
      console.error('API Error:', error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="team_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team's Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the name of your group" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  {...field}
                />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="project_topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Topic</FormLabel>
              <FormControl>
                <Input
                  placeholder="What is your group project topic?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="group_size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Group Size</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="privacy_poclicy_accepted"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className=" leading-none">
                <FormLabel>
                  I agree with the event terms and conditions and privacy policy
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button className="button" type="submit">
          Register Now
        </Button>
      </form>
    </Form>
  );
}

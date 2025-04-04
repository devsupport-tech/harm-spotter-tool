
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  claimNumber: z.string().min(1, { message: "Claim number is required" }),
  deductible: z.string().optional(),
  dateOfLoss: z.string().min(1, { message: "Date of loss is required" }),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ClientInfoSectionProps {
  form: UseFormReturn<FormData>;
}

const ClientInfoSection: React.FC<ClientInfoSectionProps> = ({ form }) => {
  return (
    <Card className="shadow-sm slide-in">
      <CardHeader>
        <CardTitle>Client Information</CardTitle>
        <CardDescription>
          Enter the basic information about the client and claim.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="123 Main St, City, State, ZIP" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="claimNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Claim #</FormLabel>
                <FormControl>
                  <Input placeholder="ABC123456" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deductible"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deductible</FormLabel>
                <FormControl>
                  <Input placeholder="$1,000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfLoss"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Loss</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Enter any additional information about the claim or damage..." 
                  className="resize-none min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default ClientInfoSection;
export { formSchema };
export type { FormData };

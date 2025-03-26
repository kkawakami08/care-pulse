"use client";

//1. Import your shit
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import CustomFormField from "../custom-form-field";
import SubmitButton from "../submit-button";
import { useState } from "react";
import { UserFormValidationSchema } from "@/lib/validation";
import { useRouter } from "next/navigation";

export enum FormFieldType {
  INPUT = "input",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  SELECT = "select",
  SKELETON = "skeleton",
  PHONE_INPUT = "phoneinput",
  DATE_PICKER = "datepicker",
}

//2. create your form schema

const PatientForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  //3. Define your form
  const form = useForm<z.infer<typeof UserFormValidationSchema>>({
    resolver: zodResolver(UserFormValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  //4. Define your submit handler
  const onSubmit = async ({
    //destrucutred from values
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidationSchema>) => {
    setIsLoading(true);

    try {
      //   const userData = {
      //     name,
      //     email,
      //     phone,
      //   };
      //   const user = await createUser(userData);
      //   if (user) router.push(`/patients/$user.$id}/register`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Schedule Your First Appointment</p>
        </section>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Full Name"
          placeholder="John Doe"
          iconSrc="/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
          name="phone"
          label="Phone Number"
          placeholder="555-555-5555"
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;

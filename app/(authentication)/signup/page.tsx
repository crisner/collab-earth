"use client";

import Link from "next/link";
import { useFormik } from "formik";
import { ROLES } from "@/constants/users";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignUp() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    selectedRole: Yup.string().required("Please select a role"),
  });
  const validate = (values: any) => {
    const errors = {} as any;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Please enter password";
    } else if (values.password.length < 8) {
      errors.password = "Password should be atleast 8 characters long";
    }

    if (!values.selectedRole) {
      errors.selectedRole = "Please select a role";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      selectedRole: "",
      general: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Implement your signup logic here, sending data to your backend
      // This example just redirects after a simulated delay
      console.log("Submitting signup form:", values);
      try {
        const res = await fetch("api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            selectedRole: values.selectedRole,
          }),
        });
        console.log("sumbmitted values", res);
        if (res.ok) {
          console.log("Sign up successful");
          formik.resetForm();
          signIn();
        } else {
          const error = res;
          console.error("Error signing up!", error);
          formik.setErrors({ general: "Error signing up!" });
        }
      } catch (error) {
        console.error("Something went wrong!", error);
      }
    },
    validate,
  });
  return (
    <Card className="mx-auto max-w-2xl border-0 mt-10">
      <CardHeader className="mb-10">
        <CardTitle className="text-xl text-center">
          Welcome to the Collab-Earth!
        </CardTitle>
        <CardDescription className="text-center">
          Sign up to contribute to elephant conservation efforts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address:</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                className={
                  formik.touched.email && formik.errors.email
                    ? "border-destructive"
                    : ""
                }
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-[0.8rem] font-medium text-destructive">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password:</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                className={
                  formik.touched.password && formik.errors.password
                    ? "border-destructive"
                    : ""
                }
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-[0.8rem] font-medium text-destructive">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="selectedRole">Role:</Label>
              <Select
                name="selectedRole"
                defaultValue={formik.values.selectedRole}
                value={formik.values.selectedRole}
                onValueChange={(value) => {
                  formik.setFieldValue("selectedRole", value);
                }}
                onOpenChange={(value) => {
                  if (!value) {
                    formik.setFieldTouched("selectedRole", true);
                  }
                }}
                required
              >
                <SelectTrigger
                  className={
                    formik.touched.selectedRole && formik.errors.selectedRole
                      ? "border-destructive"
                      : ""
                  }
                >
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  {ROLES.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      {role.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formik.touched.selectedRole && formik.errors.selectedRole ? (
                <div className="text-[0.8rem] font-medium text-destructive">
                  {formik.errors.selectedRole}
                </div>
              ) : null}
              {formik.errors.general ? (
                <div className="text-[0.8rem] font-medium text-destructive">
                  {formik.errors.general}
                </div>
              ) : null}
            </div>
            {/* <div className="grid gap-2">
              <Label htmlFor="name">Name (Optional):</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="affiliation">Affiliation (Optional):</Label>
              <Input
                type="text"
                id="affiliation"
                name="affiliation"
                value={formik.values.affiliation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Location (Country) (Optional):</Label>
              <Input
                type="text"
                id="location"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div> */}
            <Button
              disabled={formik.isSubmitting}
              type="submit"
              className="w-full mt-4"
            >
              Create an account
            </Button>
          </div>
        </form>
        <Button
          disabled={formik.isSubmitting}
          onClick={() => signIn("google")}
          variant="outline"
          className="w-full mt-4"
        >
          <Image
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google signin"
            width={18}
            height={18}
            className="mr-2"
          />{" "}
          Continue with Google
        </Button>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

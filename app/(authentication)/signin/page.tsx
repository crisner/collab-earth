"use client";

import Link from "next/link";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignIn() {
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const validate = (values: any) => {
    const errors = {} as any;

    if (!values.email) {
      errors.email = "Please enter your email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Please enter a valid email";
    }

    if (!values.password) {
      errors.password = "Please enter your password";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const response = await signIn("credentials", {
        ...values,
        redirect: false,
      });
      if (response?.error) {
        let error = response?.error;
        if (response?.status === 401) {
          error = 'Please check your email and password';
        }
        if (response?.status === 500) {
          error = 'Something went wrong! Please try again after some time.';
        }
        formik.setErrors({ email: error, password: error });
      }
      if (response?.ok) {
        formik.resetForm();
        router.push("/dashboard");
      }
    },
    validate,
  });
  return (
    <Card className="mx-auto max-w-2xl border-0 mt-10">
      <CardHeader className="mb-10">
        <CardTitle className="text-xl text-center">Welcome Back!</CardTitle>
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
              {formik.touched.email &&
              formik.errors.email &&
              formik.errors.email !== formik.errors.password ? (
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
            <Button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full mt-4"
            >
              Login
            </Button>
          </div>
        </form>
        <Button
          variant="outline"
          onClick={() => {
            signIn("google");
          }}
          className="w-full mt-4"
          disabled={formik.isSubmitting}
        >
          <Image src='https://authjs.dev/img/providers/google.svg' alt='Google signin' width={18} height={18} className="mr-2" /> Signin with Google
        </Button>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

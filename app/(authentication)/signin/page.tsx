"use client";

import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignIn() {
    const router = useRouter();
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        // Implement your signup logic here, sending data to your backend
        // This example just redirects after a simulated delay
        console.log("Submitting signup form:", values);
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        // router.push("/success"); // Redirect to success page after signup
      },
      validate: values => {
        console.log('values',values);
      }
    });
    return (
      <Card className="mx-auto max-w-2xl border-0 mt-10">
        <CardHeader className="mb-10">
          <CardTitle className="text-xl text-center">
          Welcome Back!
          </CardTitle>
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
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password:</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full mt-4">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Log in with GitHub
              </Button>
            </div>
          </form>
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
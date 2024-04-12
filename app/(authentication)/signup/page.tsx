"use client";

import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styles from "./page.module.css";

export default function SignUp() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "",
      // name: "",
      // affiliation: "",
      // location: "",
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
            <div className="grid gap-2">
              <Label htmlFor="role">Role:</Label>
              <Select
                name="role"
                defaultValue={formik.values.role}
                value={formik.values.role}
                onValueChange={(value) => {
                  formik.setFieldValue('role', value);
                }}
                required
              >
                <SelectTrigger>
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
            </div>
            {/* <div className="grid gap-2">
              <Label htmlFor="name">Name (Optional):</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
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
              />
            </div> */}
            <Button type="submit" className="w-full mt-4">
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </div>
        </form>
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

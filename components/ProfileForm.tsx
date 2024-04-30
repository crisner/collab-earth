"use client";

import React from "react";
import { TextMuted } from "./ui/Typography/TextMuted";
import { useFormik } from "formik";
import { ROLES } from "@/constants/users";
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

const ProfileForm = () => {
  const validationSchema = Yup.object().shape({
    first_name: Yup.string(),
    last_name: Yup.string(),
    selectedRole: Yup.string().required("Please select a role"),
    location: Yup.string(),
  });
  const validate = (values: any) => {
    const errors = {} as any;

    if (!values.selectedRole) {
      errors.selectedRole = "Please select a role";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      selectedRole: "",
      location: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Implement your signup logic here, sending data to your backend
      // This example just redirects after a simulated delay
      console.log("Submitting signup form:", values);
      try {
        const res = await fetch("api/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: values.first_name,
            last_name: values.last_name,
            selectedRole: values.selectedRole,
          }),
        });
        console.log("sumbmitted values", res);
        if (res.ok) {
          console.log("successful");
          formik.resetForm();
        } else {
          const error = res;
          console.error("Error updating profile!", error);
        }
      } catch (error) {
        console.error("Something went wrong!", error);
      }
    },
    validate,
  });
  return (
    <form onSubmit={formik.handleSubmit} className="col-start-2 col-end-6 grid gap-x-2 gap-y-6">
        <TextMuted className="col-start-0">First name</TextMuted>
      <div className="col-start-2 col-end-12">
        <Input
          type="text"
          id="first_name"
          name="first_name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          />
          </div>
        <TextMuted className="col-start-0">Last name</TextMuted>
      <div className="col-start-2 col-end-12">
        <Input
          type="text"
          id="last_name"
          name="last_name"
          value={formik.values.last_name}
          onChange={formik.handleChange}
        />
      </div>
        <TextMuted className="col-start-0">Role</TextMuted>
        <div className="col-start-2 col-end-12">
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
      </div>
      <TextMuted className="col-start-0"><Label htmlFor="location">Location (Country)</Label></TextMuted>
      <div className="col-start-2 col-end-12">
      <Input
        type="text"
        id="location"
        name="location"
        value={formik.values.location}
        onChange={formik.handleChange}
      />
      </div>
    </form>
  );
};

export default ProfileForm;

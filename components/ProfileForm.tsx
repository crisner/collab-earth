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
import { Button } from "@/components/ui/button";
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
      console.log("Submitting profile form:", values);
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
    <form
      onSubmit={formik.handleSubmit}
      className="col-start-2 col-end-12"
    >
      <div className="col-start-2 col-end-12 grid gap-x-2 gap-y-6">
      <TextMuted className="w-32 col-start-1 flex items-center">
        First name
      </TextMuted>
      <div className="col-start-2 col-end-12">
        <Input
          type="text"
          id="first_name"
          name="first_name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          className="w-1/2"
        />
      </div>
      <TextMuted className="w-32 col-start-1 flex items-center">
        Last name
      </TextMuted>
      <div className="col-start-2 col-end-12">
        <Input
          type="text"
          id="last_name"
          name="last_name"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          className="w-1/2"
        />
      </div>
      <TextMuted className="w-32 col-start-1 flex items-center">Role</TextMuted>
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
                ? "border-destructive w-1/2"
                : "w-1/2"
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
      <TextMuted className="w-32 col-start-1 flex items-center">
        <Label htmlFor="location">Location (Country)</Label>
      </TextMuted>
      <div className="col-start-2 col-end-12">
        <Input
          type="text"
          id="location"
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
          className="w-1/2"
        />
      </div>
      </div>
      {(formik.touched.first_name ||
        formik.touched.last_name ||
        formik.touched.selectedRole ||
        formik.touched.location) && (
          <div className="gap-2 flex mt-8">
        <Button
          disabled={formik.isSubmitting}
          className="w-24"
          variant="outline"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-24"
        >
          Update
        </Button>
        </div>
      )}
    </form>
  );
};

export default ProfileForm;

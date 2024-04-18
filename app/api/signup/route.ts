import User from "@/models/user";
import connectMongoDB from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request: any) => {
  try {
    const {email, password, selectedRole} = await request.json();
    await connectMongoDB();
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      username: email.split("@")[0],
      email,
      password: hashedPassword,
      role: "user",
      selectedRole
    });
    console.log({
      username: email.split("@")[0],
      email,
      password: hashedPassword,
      role: "user",
      selectedRole
    });
    await newUser.save();
    return new NextResponse('User signed up successfully', {status: 200});
  } catch (error: any) {
    return new NextResponse(error, {status: 500});
  }
};

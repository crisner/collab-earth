import User from "@/models/user";
import connectMongoDB from "@/lib/mongodb";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const { id, ...payload } = await request.json();
    console.log("payload", payload);
    await connectMongoDB();

    const profile = User.findByIdAndUpdate(id, payload);

    console.log("profile", profile);
    if (!profile) {
      return new NextResponse("Profile failed to update", { status: 400 });
    }
    return new NextResponse("Profile updated", { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};

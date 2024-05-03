import User from "@/models/user";
import connectMongoDB from "@/lib/mongodb";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const { id, ...payload } = await request.json();
    await connectMongoDB();

    const profile = await User.findByIdAndUpdate(id, payload, { new: true });

    if (!profile) {
      return new NextResponse("Profile failed to update", { status: 400 });
    }

    return new NextResponse("Profile updated", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};

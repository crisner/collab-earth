import User from "@/models/user";
import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from 'next-auth/next'
import { options } from "../auth/[...nextauth]/options";

export const POST = async (request: Request) => {
  try {
    const session = await getServerSession(options);
    if(!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized!' }, { status: 401 });
    }

    const { id, ...payload } = await request.json();
    await connectMongoDB();

    const profile = await User.findByIdAndUpdate(id, payload, { new: true, select: '-password -_id -__v' });

    if (!profile) {
      return NextResponse.json({errorMessage: "Profile failed to update"}, { status: 400 });
    }
    return NextResponse.json({profile}, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error, { status: 500 });
  }
};

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  try {
    const session = await getServerSession(options);
    if(!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized!' }, { status: 401 });
    }
    await connectMongoDB();

    const user = await User.findById(id, ['-password', '-_id', '-__v']);

    if (!user) {
      return NextResponse.json({ error: 'Could not find profile information!' }, { status: 400 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error, { status: 500 });
  }
};

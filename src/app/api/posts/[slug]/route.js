import prisma from "@/utils/connect";
import { Whisper } from "next/font/google";
import { NextResponse } from "next/server";

export const GET = async ({params}) => {
const {slug}=params

    try{
        const post=await prisma.post.findUnique({
            where:{slug},
            include:{user:true},
        })
    return new NextResponse(JSON.stringify(post, { status: 200 }));
    }catch (err) {
    console.log(err.message);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
}; 
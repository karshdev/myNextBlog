
import prisma from "@/utils/connect";

import { NextResponse } from "next/server";

//GET ALL COMMENTS
export const GET = async (req) => {
const {searchParams}=new URL(req.url)
const popular=searchParams.get("popular")
const POST_SHOWN=5;
const query={
  take:POST_SHOWN,
  where:{
    ...(popular && {views})
},
include:{user:true},
}
    try{
        const menuposts=await prisma.post.findMany(query)
        console.log("Menuposts",menuposts);
    return new NextResponse(JSON.stringify(menuposts, { status: 200 }));
    }catch (err) {
    console.log(err.message);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
}; 
//Create a comment

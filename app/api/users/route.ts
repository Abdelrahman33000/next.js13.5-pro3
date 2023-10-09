import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
//CRUD 
export function GET(request:NextRequest){
 return NextResponse.json([{
    id:1,
    name:'Ali'
    },{
    id:2,
    name:'Amr'
    }
])
}

export async function POST(request:NextRequest){
    //status
    //200 success
    //201 resource created
    //400 bad request
    //404 not found
    //500 internal server error
   const body = await request.json();
   const validation = schema.safeParse(body)
   if(!validation.success)
    return NextResponse.json({error:' Name is Required'},{status:400})
 
 return NextResponse.json({id:1,name:body.name}, {status:201}) 
}
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";


export function GET(request:NextRequest,
    {params}:{params:{id:number}}){
        //fetch data
        //if not found => 404 error
        //else return data
    if(params.id>10)
        return NextResponse.json({error:'user not found'},
        {status:404})
    return NextResponse.json({id:1, name:'Amr'})
}

export async function PUT(request:NextRequest,
    {params}:{params:{id:number}}){
        //validate request body
        //if invalid return 400
        const body = await request.json();
        if(!body.name){
            return NextResponse.json({error:'Name is required'},{status:400})
        }
        // fetch user depending on user id
        // id doesn't exist, return 404
        if(params.id>10)
            return NextResponse.json({error:'Not Found'},{status:404});
        //update the user
        return NextResponse.json({id:1, name:body.name})        
}

export function DELETE(request:NextRequest,
    {params}:{params:{id:number}}){
        //Fetch User from DB
        //if not found return 404
        if(params.id>10){
            return NextResponse.json({error:'User Not Found'},{status:404})
        }
        //Delete user
        //return 200
        return NextResponse.json({},{status:200})
    }

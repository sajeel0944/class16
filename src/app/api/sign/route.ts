import { NextRequest, NextResponse } from "next/server";

interface EmailData {
    email: string;
    password: string;
  }
//  is main sara bata araha hai or is ko export is liye karwa ya hai q ky is ka data login page main jaye ga 
   export const emailData : EmailData[]=[
        {
            email:"",
            password:"",
        }
    ]


    // is main sary emailData bata save ho raha hai or GET ky zaye ha show kar raha hai
   export function GET(){
        return NextResponse.json(emailData)
    };


export async function POST(request:NextRequest){
    // jo hum signup ky page ky bata send kar raha hai wo request main save ho raha hai
    const body= await request.json();

    // jo body ky andar bata araha hai us sy emailData ky andar push kar raha hai
    emailData.push(body);

    // console.log(body)

    return NextResponse.json({});
};

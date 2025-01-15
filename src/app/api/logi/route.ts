import { NextRequest, NextResponse } from "next/server";



// is main nichy post main jo data araha hai wo is main save ho raha hai 
const saveDataLogi=[
	{
		email:"",
		password:"",
	}
];


export  function GET(){
	return NextResponse.json(saveDataLogi)

};

export async function POST(request:NextRequest){

	const body=await request.json() ;
	// console.log(body)
	saveDataLogi.push(body)
	// console.log(walify)



// is ky andar sign ky andar ka data fetch kar raha hai 
const signSave=await fetch("http://localhost:3000/api/sign");

// is ky andar sign ky andar ko json main convert kar rahy hai
const saveDataSign=await signSave.json()


// is main saveDataSign array ki lenght count ho rahe hai is ko nichy "try" ky "if" ky andar dy rahy hai 
const signArryLeng=saveDataSign.length;
const signMinus = signArryLeng - 1; // Correct index for the last element


// is main logiArratLeng array ki lenght count ho rahe hai is ko nichy "try" ky "if" ky andar dy rahy hai 
const logiArrayLength = saveDataLogi.length;
const logiMinus = logiArrayLength - 1; // Correct index for the last element


// console.log(signArryLeng,logiArratLeng)
	
try{
	if(saveDataLogi[logiMinus]?.email == saveDataSign[signMinus]?.email && saveDataLogi[logiMinus]?.password == saveDataSign[signMinus]?.password){
		return NextResponse.json({
			message:"validation",
			valitaUser: "/admin"
		})
	}else{
		return NextResponse.json({
			message:"validation",
			valitaUser:"/student"
		})
	}
}catch (eoore:any){
		return NextResponse.json({
			message:"invalidation"
		})
}

return NextResponse.json({}) 


}




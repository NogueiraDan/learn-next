/* Os manipuladores de rota são avaliados estaticamente por padrão ao usar
 o GET método com o Response objeto. */


import { NextResponse } from "next/server";

export async function GET(request: Request){
    const {searchParams} = new URL(request.url);
    const name = searchParams.get('name');
    const email = searchParams.get('email');

    return NextResponse.json({name, email})
}
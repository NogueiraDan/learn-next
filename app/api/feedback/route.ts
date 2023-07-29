/**Route handlers are evaluated dynamically when:

Using the Request object with the GET method.
Using any of the other HTTP methods.
Using Dynamic Functions like cookies and headers.
The Segment Config Options manually specifies dynamic mode.

*/

import { NextResponse } from "next/server"

type Feedback = {
    name?: string,
    email?: string,
    message?: string,
}

export async function POST(request: Request) {
    const data: Feedback = await request.json()
    console.log('data: ', data)

    const { name, email, message } = data

    return NextResponse.json({ name, email, message })
}
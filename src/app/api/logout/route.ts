import { NextResponse } from "next/server";
const supabase = require('../../../../supabase')

export async function GET() {
    return NextResponse.redirect('https://done-nu.vercel.app/')
}
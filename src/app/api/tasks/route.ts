import { NextResponse } from "next/server";

const supabase = require('../../../../supabase');
export async function GET() {
    try {
        let { data: Tasks, error } = await supabase
            .from('Tasks')
            .select('*')
            .eq('id', '')
        return NextResponse.json(Tasks)
    } catch (error) {
        return NextResponse.json(error)
    }
}
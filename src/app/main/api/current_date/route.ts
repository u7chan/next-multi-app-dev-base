import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({ currentDate: new Date().toISOString() })
}

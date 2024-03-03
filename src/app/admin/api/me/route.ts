import { NextResponse } from 'next/server'

export async function GET() {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000)) // Loading 確認用
  return NextResponse.json({ name: `john doe_${new Date().getMilliseconds()}` })
}

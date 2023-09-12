import { NextResponse } from 'next/server'
 
export async function POST(request: Request) {
  const formData = await request.formData()
  const password = formData.get('password')
  const email = formData.get('email')
  return NextResponse.json({ password, email })
}
 
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { User } from '@/models';
import { db } from '@/database';
import { jwt } from '@/utils'

export async function POST(request: Request) {

  const formData = await request.formData();
  const passwordReceived = formData.get('password')?.toString() || '';
  const emailReceived = formData.get('email')?.toString() || '';

  await db.connect();
  const user = await User.findOne({ email: emailReceived });
  await db.disconnect();

  if ( !user ) {
    return NextResponse.json({ message: 'Email or password incorrect --EMAIL' }, { status: 400 });
  }

  if ( !bcrypt.compareSync( passwordReceived, user.password! ) ) {
    return NextResponse.json({ message: 'Email or password incorrect --PASSWORD' }, { status: 400 });
  }

  const { _id, firstName, lastName, email, workspaces, groups } = user;

  const token = jwt.signToken( _id, email )

  return NextResponse.json({ 
    token,
    user: {
      firstName,
      lastName,
      email: email.toLowerCase(),
      workspaces,
      groups
    }
   });
}
 
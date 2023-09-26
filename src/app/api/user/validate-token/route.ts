import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { User } from '@/models'
import { db } from '@/database'
import { cookies } from 'next/dist/client/components/headers'
import { jwt } from '@/utils'

export async function GET(request: Request) {

    const cookiesStore = cookies()
    const token = cookiesStore.get('token')?.value || ''
    let userId = ''
    
    try {
        userId = await jwt.isValidToken( token )
    } catch (error) {
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }

    console.log(userId)

    await db.connect();
    const user = await User.findById( userId ).lean();
    await db.disconnect();

    if ( !user ) {
        return NextResponse.json({ message: 'Invalid token --NOTUSER' }, { status: 400 });
    }

    const { _id, firstName, lastName, email, workspaces, groups } = user;

    return NextResponse.json({ 
        token: jwt.signToken( _id, email ),
        user: {
        firstName,
        lastName,
        email: email.toLowerCase(),
        workspaces,
        groups
        }
    });
}
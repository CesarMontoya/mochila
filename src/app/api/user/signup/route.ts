import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
import { db } from "@/database"
import { User } from "@/models"
import { jwt, validations } from "@/utils"

export async function POST( request: Request ) {

    const { 
        firstName: firstNameReceived, 
        lastName: lastNameReceived, 
        password: passwordReceived,
        email: emailReceived
     } = await request.json()

    await db.connect()

    const user = await User.findOne({ email: emailReceived })

    if ( user ) {
        await db.disconnect()
        return NextResponse.json({ message: 'This email is already registered, please log in.' }, { status: 400 })
    }

    if ( !validations.isValidPassword( passwordReceived )) {
        await db.disconnect()
        return NextResponse.json(
            { message: 'The password must have a minimum of 6 characters, one lowercase letter, and one uppercase letter.' }, 
            { status: 400 }
        )
    }    

    if ( !validations.isValidName( firstNameReceived ) || !validations.isValidName( lastNameReceived ) ) {
        await db.disconnect();
        return NextResponse.json(
            { message: 'The name must be between 2 and 25 characters and cannot contain special characters, but accents are allowed' }, 
            { status: 400 }
        )
    }

    if ( !validations.isValidEmail( emailReceived )) {
        await db.disconnect();
        return NextResponse.json(
            { message: 'The email is not valid.' }, 
            { status: 400 }
        )
    }
    
    // TODO: crear el workspace.
    const newUser = new User({
        firstName: firstNameReceived.charAt(0).toUpperCase() + firstNameReceived.slice(1),
        lastName: lastNameReceived.charAt(0).toUpperCase() + lastNameReceived.slice(1),
        password: bcrypt.hashSync( passwordReceived ),
        email: emailReceived,
    })

    try {

        await newUser.save({ validateBeforeSave: true })
        
    } catch (error) {

        console.log(error)
        return NextResponse.json(
            { message: 'Review server logs' },
            { status: 500 }
        )
    }

    const { _id, firstName, lastName, email, workspaces, groups } = newUser

    const token = jwt.signToken( _id, email )

    return NextResponse.json(
        {
            token,
            user: { 
                firstName,
                lastName,
                email: email,
                workspaces,
                groups
            }
        },
        { status: 200 }
    )
}
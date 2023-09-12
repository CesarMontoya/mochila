'use client'
import Link from "next/link";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { loginFormStyles, emailInputStyales } from "../login/login.styles";

export default function SignUp() { 
    return (
        <>
            <form className={ loginFormStyles }>
                <span className={`p-float-label p-input-icon-left ${emailInputStyales}`} >
                    <i className="pi pi-envelope" />
                    <InputText id="email" keyfilter="email" className='w_100%' />
                    <label htmlFor="email">Email</label>
                </span>
                <span className={`p-float-label p-input-icon-left ${emailInputStyales}`}>
                    <i className="pi pi-lock" />
                    <Password inputId="password" value={''} toggleMask inputClassName='w_100%' className='w_100%' />
                    <label htmlFor="password">Password</label>
                </span>
                <span className={`p-float-label p-input-icon-left ${emailInputStyales}`}>
                    <i className="pi pi-lock" />
                    <Password inputId="rpassword" value={''} toggleMask inputClassName='w_100%' className='w_100%' />
                    <label htmlFor="rpassword">Repeat password</label>
                </span>
                <Button label="Submit" />
            </form>

            <Link href="/auth/signup"> You have a mochila account? Sign In. </Link>
        </>
    )
 }
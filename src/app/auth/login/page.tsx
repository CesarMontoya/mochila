'use client'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { emailInputStyales, loginFormStyles } from './login.styles';
import Link from 'next/link';
        
export default function Login() {
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
                <Button label="Submit" />
            </form>

            <Link href="/auth/signup"> Don't have a mochila account yet? </Link>
        </>
    )
}
'use client'
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";

import { loginFormStyles } from "../login/login.styles";

type FormData = {
    email   : string
    password: string
    repeatPassword: string
    errors: [name: string]
  }

export default function SignUp() { 

    const defaultValues = { email: '', password: '', repeatPassword: '' };

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({ defaultValues })
      
    return (
        <>
            <form className={ loginFormStyles }>
            <Controller
                    name='email'
                    control={ control }
                    rules={{ required: 'Email is required' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={ field.name } className={classNames({ 'p-error': errors.email })}></label>
                            <span className={`p-float-label p-input-icon-left`} >
                                <i className="pi pi-envelope" />
                                <InputText 
                                    type="email"
                                    id={ field.name }
                                    value={field.value} 
                                    keyfilter="email" 
                                    className={`w_100% ${classNames({ 'p-invalid': fieldState.error })}`}
                                    { ...register('email') } 
                                />
                                <label htmlFor={field.name}>Email</label>
                            </span>
                            { errors.email ? <small className="p-error">{errors.email.message}</small> : <small className="p-error">&nbsp;</small> }
                        </>
                    )}
                />

                <Controller
                    name='password'
                    control={ control }
                    rules={{ required: 'Password is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={ field.value } className={classNames({ 'p-error': errors.password })}></label>
                            <span className="p-float-label p-input-icon-left" >
                                <i className="pi pi-envelope" />
                                <Password 
                                    inputId={ field.name }
                                    id={ field.name } 
                                    { ...field }
                                    inputRef={ field.ref }
                                    toggleMask 
                                    className={ `w_100% ${ classNames({ 'p-invalid': fieldState.error }) }` }
                                    inputClassName='w_100%'  
                                    feedback={ false }
                                    // { ...register('password') } 
                                />

                                <label htmlFor={field.name}>Password</label>
                            </span>

                            { 
                                errors.password ? 
                                <small className="p-error">{ errors.password.message }</small> : 
                                <small className="p-error">&nbsp;</small> 
                            }
                        </>
                    )}

                />

                <Controller
                    name='repeatPassword'
                    control={ control }
                    rules={{ required: 'Password is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={ field.value } className={classNames({ 'p-error': errors.repeatPassword })}></label>
                            <span className="p-float-label p-input-icon-left" >
                                <i className="pi pi-envelope" />
                                <Password 
                                    inputId={ field.name }
                                    id={ field.name } 
                                    { ...field }
                                    inputRef={ field.ref }
                                    toggleMask 
                                    className={ `w_100% ${ classNames({ 'p-invalid': fieldState.error }) }` }
                                    inputClassName='w_100%'  
                                    feedback={ false }
                                    // { ...register('password') } 
                                />

                                <label htmlFor={field.name}>Repeat password</label>
                            </span>

                            { 
                                errors.repeatPassword ? 
                                <small className="p-error">{ errors.repeatPassword.message }</small> : 
                                <small className="p-error">&nbsp;</small> 
                            }
                        </>
                    )}

                />
                
                <Button label="Submit" />
            </form>

            <Link href="/auth/signup"> You have a mochila account? Sign In. </Link>
        </>
    )
 }
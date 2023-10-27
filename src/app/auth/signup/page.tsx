'use client'
import { useState } from "react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";

import { loginFormStyles } from "../login/login.styles";
import { mochilaApi } from "@/api";
import { Message } from "primereact/message";
import { validations } from "@/utils";

type DataType = {
    firstName : string
    lastName  : string
    email     : string
    password  : string
    repeatPassword: string
    // errors: [name: string]
  }

export default function SignUp() { 

    const defaultValues = { firstName: '', lastName: '', email: '', password: '', repeatPassword: '' };

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<DataType>({ defaultValues })

      const [showError, setShowError] = useState(false)
      
      const onRegisterUser = async({ firstName, lastName, email, password, repeatPassword }: DataType) => {

        setShowError(false)

        try {

            const { data } = await mochilaApi.post('/user/signup', { firstName, lastName, email, password, repeatPassword })
            const { token, user } = data
            console.log({ token, user })

        } catch (error) {

            console.error({ error })
            setShowError(true)

        }
      }

    return (
        <>
            <form className={ loginFormStyles } onSubmit={ handleSubmit(onRegisterUser) }>
            
            {
                showError && <Message severity="error" text="Invalid data." style={{ marginBottom: '15px' }} />  
            }
            
            <Controller
                        name='firstName'
                        control={ control }
                        rules={{ required: 'First name is required', min: 3 }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={ field.name } className={classNames({ 'p-error': errors.firstName })}></label>
                                <span className={`p-float-label`} >
                                    <InputText 
                                        type="text"
                                        id={ field.name }
                                        value={field.value} 
                                        keyfilter="alpha" 
                                        className={`w_100% ${classNames({ 'p-invalid': fieldState.error })}`}
                                        { ...register('firstName', {
                                            validate: validations.isValidName
                                        }) } 
                                    />
                                    <label htmlFor={field.name}>First Name</label>
                                </span>
                                { errors.firstName 
                                    ? <small className="p-error">{errors.firstName.message}</small> 
                                    : <small className="p-error">&nbsp;</small> 
                                }
                            </>
                        )}
            />

            <Controller
                        name='lastName'
                        control={ control }
                        rules={{ required: 'Last name is required', min: 3 }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={ field.name } className={classNames({ 'p-error': errors.lastName })}></label>
                                <span className={`p-float-label`} >
                                    <InputText 
                                        type="text"
                                        id={ field.name }
                                        value={field.value} 
                                        keyfilter="alpha" 
                                        className={`w_100% ${classNames({ 'p-invalid': fieldState.error })}`}
                                        { ...register('lastName', {
                                            validate: validations.isValidName
                                        }) } 
                                    />
                                    <label htmlFor={field.name}>Last Name</label>
                                </span>
                                { errors.lastName 
                                    ? <small className="p-error">{errors.lastName.message}</small> 
                                    : <small className="p-error">&nbsp;</small> 
                                }
                            </>
                        )}
                />

                <Controller
                        name='email'
                        control={ control }
                        rules={{ required: 'Email is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={ field.name } className={classNames({ 'p-error': errors.email })}></label>
                                <span className={`p-float-label`} >
                                    <InputText 
                                        type="email"
                                        id={ field.name }
                                        value={field.value} 
                                        keyfilter="email" 
                                        className={`w_100% ${classNames({ 'p-invalid': fieldState.error })}`}
                                        { ...register('email', {
                                            validate: validations.isValidEmail
                                        }) } 
                                    />
                                    <label htmlFor={field.name}>Email</label>
                                </span>
                                { errors.email 
                                    ? <small className="p-error">{errors.email.message}</small> 
                                    : <small className="p-error">&nbsp;</small> 
                                }
                            </>
                        )}
                />

                <Controller
                    name='password'
                    control={ control }
                    rules={{ 
                        required: 'Password is required.',
                        minLength: { value: 6, message: 'Password must be at least 6 characters' }
                     }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={ field.value } className={classNames({ 'p-error': errors.password })}></label>
                            <span className="p-float-label" >
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
                                errors.password 
                                ? <small className="p-error">{ errors.password.message }</small> 
                                : <small className="p-error">&nbsp;</small> 
                            }
                        </>
                    )}

                />

                <Controller
                    name='repeatPassword'
                    control={ control }
                    rules={{ 
                        required: 'Password is required.',
                        minLength: { value: 6, message: 'Password must be at least 6 characters' } 
                    }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={ field.value } className={classNames({ 'p-error': errors.repeatPassword })}></label>
                            <span className="p-float-label" >
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
                                errors.repeatPassword 
                                ? <small className="p-error">{ errors.repeatPassword.message }</small> 
                                : <small className="p-error">&nbsp;</small> 
                            }
                        </>
                    )}

                />
                
                <Button type='submit' label="Submit" />
            </form>

            <Link href="/auth/login"> You have a mochila account? Sign In. </Link>
        </>
    )
 }
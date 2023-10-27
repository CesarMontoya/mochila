'use client'
import { useContext, useState } from 'react';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';

import { loginFormStyles } from './login.styles';
import { validations } from '@/utils';
import { AuthContext } from '@/context';
import { redirect } from 'next/navigation';
    
type DataType = {
    email   : string
    password: string
  }

export default async function Login() {   

    const defaultValues = { email: '', password: '' }

    const { loginUser } = useContext( AuthContext )

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<DataType>({ defaultValues })

    const [showError, setShowError] = useState(false)

    const onLoginUser = async({ email, password }: DataType ) => {

        setShowError(false)

        // const isValidLogin = await loginUser( email, password )

        // if ( !isValidLogin ) {            
        //     setShowError(true)
        //     setTimeout( () => setShowError(false), 3000 )
        //     return
        // }

        // redirect('/')
        console.log('onLoginUser')

    }
      
    return (
        <>
            <form className={ loginFormStyles } onSubmit={ handleSubmit(onLoginUser) }>

                {
                    showError && <Message severity="error" text="Invalid email or password." style={{ marginBottom: '15px' }} />  
                }
                
                <Controller
                    name='email'
                    control={ control }
                    rules={{ required: 'Email is required' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={ field.name } className={classNames({ 'p-error': errors.email })}></label>
                            <span className="p-float-label" >
                                <InputText 
                                    type="email"
                                    id={ field.name }
                                    value={field.value} 
                                    keyfilter="email" 
                                    className={`w_100% ${classNames({ 'p-invalid': fieldState.error })}`}
                                    { ...register('email', {
                                        validate: validations.isEmail
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

                <Button label="Submit" type='submit' />

            </form>

            <Link href="/auth/signup"> Don't have a mochila account yet? </Link>
        </>
    )
}
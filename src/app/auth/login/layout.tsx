import Image from 'next/image'
import logo from '@/public/logo-mochila-corto.svg';
import { loginStyles, loginHedearStyles, loginTitleStyles, loginBodyStyles } from "./login.styles";

export default function loginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={loginStyles}>
            <div className={ loginHedearStyles }>

                <Image 
                        alt="Logo de mochila" 
                        src={ logo } 
                        style={{ width: 'auto', height: '100px' }}
                />
                <h1 className={ loginTitleStyles }>Welcome to mochila</h1>                

            </div>
            <div className={ loginBodyStyles }>
                { children }
            </div>
        </div>
    )
}
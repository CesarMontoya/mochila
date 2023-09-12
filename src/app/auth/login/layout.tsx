import Image from "next/image";
import { loginBodyStyles, loginHedearStyles, loginStyles, loginTitleStyles } from "./login.styles";
import logo from '@/public/logo-mochila-corto.svg';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={ loginStyles }>
            <div className={ loginHedearStyles }>
                <Image 
                    alt="Logo de mochila" 
                    src={ logo } 
                    style={{ width: 'auto', height: '150px' }}
                />
                <h1 className={ loginTitleStyles }>Welcome Back</h1>
            </div>
            <div className={ loginBodyStyles }>{ children }</div>
        </div>
    )
}
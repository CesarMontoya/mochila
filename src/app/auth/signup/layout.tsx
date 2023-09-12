import Image from "next/image";
import logo from '@/public/logo-mochila-corto.svg';
import { signupStyles, signupHedearStyles, signupTitleStyles, signupBodyStyles } from "./signup.styles";

export default function SignUpLayout({ children }: { children: React.ReactNode }) { 
    return (
        <div className={ signupStyles }>
            <div className={ signupHedearStyles }>
                <Image 
                    alt="Logo de mochila" 
                    src={ logo } 
                    style={{ width: 'auto', height: '100px' }}
                />
                <h1 className={ signupTitleStyles }>Welcome to mochila</h1>
            </div>
            <div className={ signupBodyStyles }>{ children }</div>
        </div>
    )
 }
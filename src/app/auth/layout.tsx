import Image from 'next/image';

import authImg from '@/public/auth-image.svg'
import { authStyles, fullImageStyles, loginPanelStyles } from './auth.styles';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className={ authStyles }>
            <div className={ fullImageStyles } >
                <Image 
                    src={ authImg } 
                    alt='mochila cree en el trabajo en equipo'
                    style={{ width: 'auto', height: '100%' }}
                    priority
                />
            </div>
            <div className={ loginPanelStyles }>{ children }</div>
        </main>
    )
}
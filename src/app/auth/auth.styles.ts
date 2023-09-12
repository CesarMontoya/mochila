import { css } from "@/styled-system/css";

export const authStyles = css({
    w: '100vw',
    h: '100vh',
    bgImage: 'url(/auth-bg.svg)',
    bgPosition: '100% 100%',
    bgSize: 'cover',
    bgColor: 'transparent',
    display: 'flex',
    flexWrap: 'wrap',
    flexDir: 'column',
    md: { flexDir: 'column-reverse' },
    lg: { flexDir: 'row' }
});

export const fullImageStyles = css({
    h: '35vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    md: { h: '31vh' },
    lg: { 
        w: '40vw',
        h: 'screen'
     }
});

export const loginPanelStyles = css({
    h: '65vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    md: { h: '69vh' },
    lg: { w: '60vw', h: '100%' }
});
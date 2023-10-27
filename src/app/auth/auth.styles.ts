import { css } from "@/styled-system/css";

export const authStyles = css({
    w: '100vw',
    h: '100vh',
    bgImage: 'url(/auth-bg.svg)',
    bgPosition: '100% 100%',
    bgSize: 'cover',
    bgColor: 'transparent',
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
    flexDir: 'column',

    md: { flexDir: 'column-reverse' },
    lg: { flexDir: 'row' }
});

export const fullImageStyles = css({
    h: '0px',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    lg: { 
        display: 'flex',
        w: '40vw',
        h: 'screen'
     }
});

export const loginPanelStyles = css({
    h: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    lg: { w: '60vw' }
});


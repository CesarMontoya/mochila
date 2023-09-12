import { css } from "@/styled-system/css";


/* ---------------------------
    Layout styles
--------------------------- */

export const loginStyles = css({
    w: '2/3',
    h: 'fit-content',
    p: '15px 5px',
    // bgColor: 'iron.50',
    borderWidth: '1px',
    borderRadius: 'xl',
    borderColor: 'ebony.300',
    boxShadow: '0 24px 64px #26214a1a',

    display: 'flex',
    flexDir: 'row',
    flexWrap: 'wrap',
});

export const loginHedearStyles = css({
    w: '100%',
    h: '2/5',
    minH: 'fit-content',
    p: '5', 
    fontFamily: 'nunito',
    fontWeight: '400',

    display: 'flex',
    flexDir: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
});

export const loginTitleStyles = css({
    textStyle: '2xl',
    lineHeight: '2rem',

    md: {
        textStyle: '3xl',
        lineHeight: '2.5rem',
    },
    lg: {
        textStyle: '4xl',
        lineHeight: '4rem',
    }
});

export const loginBodyStyles = css({
    w: '100%',
    h: '3/5',
    p: '5',

    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
});

/* ---------------------------
    Page styles
--------------------------- */

export const loginFormStyles = css({
    w: '100%',
    p: '5px 40px',
    mb: '20px',
    
    display: 'flex',
    flexDir: 'column',    
});

export const emailInputStyales = css({
    w: '100%',
    mb: '3rem',
    
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'stretch',
});
import { css } from "@/styled-system/css";


/* ---------------------------
    Layout styles
--------------------------- */

export const signupStyles = css({
    w: '2/3',
    h: 'fit-content',
    p: '15px 5px',
    borderWidth: '1px',
    borderRadius: 'xl',
    borderColor: 'ebony.300',
    boxShadow: '0 24px 64px #26214a1a',

    display: 'flex',
    flexDir: 'row',
    flexWrap: 'wrap',
});

export const signupHedearStyles = css({
    w: '100%',
    h: '1/3',
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

export const signupTitleStyles = css({
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

export const signupBodyStyles = css({
    w: '100%',
    h: '2/3',
    p: '5',

    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
});

/* ---------------------------
    Page styles
--------------------------- */

export const signupFormStyles = css({
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
import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";


/* ---------------------------
    Layout styles
--------------------------- */

export const loginStyles = css({
    maxW: '30rem',
    minH: 'fit-content',
    p: '15px 5px',
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
    h: '1/3',
    maxH: '10rem',
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
        textStyle: '2xl',
        lineHeight: '2.5rem',
    },
    lg: {
        textStyle: '3xl',
        lineHeight: '3rem',
    }
});

export const loginBodyStyles = css({
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

export const loginFormStyles = css({
    w: '100%',
    p: '5px 40px',
    mb: '20px',
    
    display: 'flex',
    flexDir: 'column',
    gap: 2,
});

export const invalidMessage = css({
    mb: '30px !important',
})
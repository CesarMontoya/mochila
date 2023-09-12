import { css } from '@/styled-system/css';

export const grades_name = css({
    gridColumn: '1/2',
    gridRow: '1/2',

    color: 'white',
    fontFamily: 'title',
    fontSize: '3xl',
    fontWeight: '700',

    display: 'flex',
    alignItems: 'center',
});

export const grades_students = css({
    gridColumn: '1/2',
    gridRow: '2/3',

    color: 'white',
    fontFamily: 'p',
    fontSize: '2xl',
    fontWeight: '500',

    // display: 'flex',
    // flexDirection: 'column',
    // flexWrap: 'nowrap',
    // alignItems: 'stretch',
    // alignContent: 'center',
});

export const grades_activities = css({
    gridColumn: '2/3',
    gridRow: '1/2',
    alignSelf: 'center',

    color: 'white',
    fontFamily: 'p',
    fontSize: '2xl',
    fontWeight: '500',
})
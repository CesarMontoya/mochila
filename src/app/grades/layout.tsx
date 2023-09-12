import { css } from "@/styled-system/css";

const styles = css({
    display: 'grid',
    gridTemplateColumns: 'minmax(min-content, 300px) auto',
    gridTemplateRows: '100px min-content',
    w: '100%',
    minH: '100vh',
    bgColor: 'ebony.950',
});

export default function GradesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles}>
            { children }
        </div>
    )
} 
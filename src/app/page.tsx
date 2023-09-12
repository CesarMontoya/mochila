import Link from 'next/link';
import { css } from '../../styled-system/css';

export default function Home() {
  return (
    <div className={css({ bgColor: 'ivory.500'})}>
      <h2 className={css({ fontSize: '4xl', color: 'main'})}>Home page for mochila.ai</h2>
      <p className={css({ fontSize: 'large', color: 'ivory.500'})}>
        Por el momento navega a <Link href='/grades' className={css({ textDecoration: 'underline' })}>Grades</Link>
        </p>
    </div>
  )
}

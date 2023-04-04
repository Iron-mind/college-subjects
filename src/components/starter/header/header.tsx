import { component$ } from '@builder.io/qwik';
import { CareerLogo } from '../icons/career-logo';
import styles from './header.module.css';

 const Header = component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <a href="/" title="Carreras">
          <CareerLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="/" target="_blank">
          Carreras universitarias
          </a>
        </li>
        <li>
          <a href="/tutorials" target="_blank">
            Tutoriales
          </a>
        </li>
        <li>
          <a href="/about" target="_blank">
            Creador
          </a>
        </li>
      </ul>
    </header>
  );
});

export default Header;
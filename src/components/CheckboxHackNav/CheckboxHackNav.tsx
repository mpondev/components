import styles from './CheckboxHackNav.module.css';

function CheckboxHackNav() {
  return (
    <div className={styles.navigation}>
      <input type="checkbox" className={styles.checkbox} id="navi-toggle" />

      <label htmlFor="navi-toggle" className={styles.button}>
        <span className={styles.icon}>&nbsp;</span>
      </label>

      <div className={styles.background}>&nbsp;</div>

      <nav className={styles.nav}>
        <ul className={styles['nav__list']}>
          <li className={styles['nav__item']}>
            <a href="#" className={styles['nav__link']}>
              Link 01
            </a>
          </li>
          <li className={styles['nav__item']}>
            <a href="#" className={styles['nav__link']}>
              Link 02
            </a>
          </li>
          <li className={styles['nav__item']}>
            <a href="#" className={styles['nav__link']}>
              Link 03
            </a>
          </li>
          <li className={styles['nav__item']}>
            <a href="#" className={styles['nav__link']}>
              Link 04
            </a>
          </li>
          <li className={styles['nav__item']}>
            <a href="#" className={styles['nav__link']}>
              Link 05
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CheckboxHackNav;

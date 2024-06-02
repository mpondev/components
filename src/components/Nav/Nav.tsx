import { useEffect, useRef, useState } from 'react';

import styles from './Nav.module.css';

function Nav(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const handleClickOutside = (evt: MouseEvent): void => {
    if (
      buttonRef.current &&
      evt.target instanceof Node &&
      !buttonRef.current.contains(evt.target)
    )
      setIsOpen(false);
  };

  const handleToggle = (): void => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={styles.navigation}>
      <button
        ref={buttonRef}
        className={`${styles.button} ${isOpen ? styles.open : ''}`}
        onClick={handleToggle}
      >
        <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>
          &nbsp;
        </span>
      </button>

      <div className={`${styles.background} ${isOpen ? styles.open : ''}`}>
        &nbsp;
      </div>

      {isOpen && (
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
      )}
    </div>
  );
}

export default Nav;

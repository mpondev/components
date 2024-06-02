import CheckboxHackNav from '../../components/CheckboxHackNav/CheckboxHackNav';
import Nav from '../../components/Nav/Nav';
import styles from './Navs.module.css';

function Navs(): JSX.Element {
  return (
    <div className={styles.navs}>
      <header>
        <CheckboxHackNav />
        <Nav />
      </header>
      <div className={styles.content}>
        <div className={styles['content__left']}>
          <h1>Dropdown nav with JavaScript</h1>
          <p>
            With JavaScript you avoid content inaccessible by screen readers.
          </p>
          <p>Here we manage dropdown menu state with useState hook.</p>
        </div>
        <div className={styles['content__right']}>
          <h1>Checkbox hack Nav</h1>
          <p>
            The "checkbox hack" is where you use a connected <code>label</code>{' '}
            and a <code>input type="checkbox"</code> and usually some other
            element you are trying to control. There are three main steps:
          </p>
          <ul>
            <li>· Add a checkbox that will be hidden later</li>
            <li>
              · Have a label connected to that checkbox, the place where we'll
              click
            </li>
            <li>
              · Reveal the entire navigation as soon as the checkbox becomes
              checked, and we can use the `check` pseudoclass in CSS to style
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navs;

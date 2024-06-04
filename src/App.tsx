import { Link } from 'react-router-dom';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Link to="/navs">Navs</Link>
      <Link to="/selects">Selects</Link>
    </div>
  );
}

export default App;

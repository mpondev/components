import { useState } from 'react';

import { Select, SelectOption } from '../../components/Select/Select';

import styles from './Selects.module.css';

const options = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
];

function Selects() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <div className={styles.selects}>
      <div className={styles.single}>
        <h1>Single Select</h1>
        <Select
          options={options}
          value={value2}
          onChange={option => setValue2(option)}
        />
      </div>
      <div className={styles.multiple}>
        <h1>Multiple Select</h1>
        <Select
          multiple
          options={options}
          value={value1}
          onChange={option => setValue1(option)}
        />
      </div>
    </div>
  );
}

export default Selects;

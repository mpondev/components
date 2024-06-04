import { useEffect, useRef, useState } from 'react';

import styles from './Select.module.css';

export type SelectOption = {
  label: string;
  value: string | number;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

export function Select({
  multiple,
  value,
  onChange,
  options,
}: SelectProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentRef: HTMLDivElement | null = containerRef.current;

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (evt: KeyboardEvent) => {
      if (evt.target !== currentRef) return;
      switch (evt.code) {
        case 'Enter':
        case 'Space':
          setIsOpen(prev => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case 'ArrowUp':
        case 'ArrowDown': {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }
          const newValue =
            highlightedIndex + (evt.code === 'ArrowDown' ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener('keydown', handler);

    return () => {
      currentRef?.removeEventListener('keydown', handler);
    };
  }, [currentRef, highlightedIndex, isOpen, options]);

  function clearOptions(): void {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOption): void {
    if (multiple) {
      if (value?.includes(option)) {
        onChange(value.filter(o => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption): boolean {
    return multiple ? value?.includes(option) : option === value;
  }

  return (
    <div
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(isOpen => !isOpen)}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>
        {multiple
          ? value.map(v => (
              <button
                key={v.value}
                onClick={evt => {
                  evt.stopPropagation();
                  selectOption(v);
                  setIsOpen(false);
                }}
                className={styles['option-badge']}
              >
                {v.label}
                <span className={styles['remove-btn']}>&times;</span>
              </button>
            ))
          : value?.label}
      </span>
      <button
        onClick={evt => {
          evt.stopPropagation();
          clearOptions();
        }}
        className={styles['clear-btn']}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
        {options.map((option, index) => (
          <li
            onClick={evt => {
              evt.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={`${styles.option} ${
              isOptionSelected(option) ? styles.selected : ''
            } ${index === highlightedIndex ? styles.highlighted : ''}`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

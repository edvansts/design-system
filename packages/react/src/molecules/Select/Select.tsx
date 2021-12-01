import React, {
  createRef,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Text from "../../atoms/Text";

const KEY_CODES = {
  ENTER: "Enter",
  SPACE: " ",
  ARROW_DOWN: "ArrowDown",
  ARROW_UP: "ArrowUp",
  ESC: "Escape",
};

function getNextOptionIndex(
  currentIndex: number | null,
  options: SelectOption[],
  key: string
) {
  if (currentIndex == null) {
    return 0;
  }

  if (key === KEY_CODES.ARROW_DOWN) {
    if (currentIndex == options.length - 1) {
      return 0;
    }

    return currentIndex + 1;
  }

  if (key === KEY_CODES.ARROW_UP) {
    if (currentIndex === 0) {
      return options.length - 1;
    }

    return currentIndex - 1;
  }

  return 0;
}

export interface SelectOption {
  label: string;
  value: string;
  key: string;
}

export interface RenderOptionProps {
  isSelected: boolean;
  option: SelectOption;
  getOptionRecommendedProps: (overrideProps?: Object) => Object;
}

export interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  placeholder?: string;
  renderOption?: (props: RenderOptionProps) => ReactNode;
}

function Select({
  options = [],
  placeholder = "Please select a option...",
  onOptionSelected: handler,
  renderOption,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );
  const [hightlightedIndex, setHightlightedIndex] = useState<number | null>(
    null
  );

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [optionRefs, setOptionRefs] = useState<React.RefObject<HTMLElement>[]>(
    []
  );

  const overlayTop = useMemo(() => {
    return (buttonRef.current?.offsetHeight ?? 0) + 10;
  }, [buttonRef.current?.offsetHeight]);

  const placeholderText = selectedOption?.label ?? placeholder;

  useEffect(() => {
    setOptionRefs(options.map(() => createRef<HTMLElement>()));
  }, [options.length]);

  useEffect(() => {
    if (hightlightedIndex !== null && isOpen) {
      const ref = optionRefs[hightlightedIndex];

      if (ref && ref.current) {
        ref.current.focus();
      }
    }
  }, [isOpen, hightlightedIndex]);

  function onOptionSelected(option: SelectOption, index: number) {
    if (handler) {
      handler(option, index);
    }

    setSelectedOption(option);
    setIsOpen(false);
  }

  function toggleSelectOpened() {
    setIsOpen((value) => !value);
  }

  function onButtonKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (
      [KEY_CODES.ARROW_DOWN, KEY_CODES.ENTER, KEY_CODES.SPACE].includes(
        event.key
      )
    ) {
      setIsOpen(true);

      hightlightOption(0);
    }
  }

  function onOptionKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key == KEY_CODES.ESC) {
      setIsOpen(false);
      return;
    }

    if ([KEY_CODES.ARROW_DOWN, KEY_CODES.ARROW_UP].includes(event.key)) {
      hightlightOption(
        getNextOptionIndex(hightlightedIndex, options, event.key)
      );
    }

    if (KEY_CODES.ENTER == event.key && hightlightedIndex !== null) {
      onOptionSelected(options[hightlightedIndex], hightlightedIndex);
    }
  }

  function hightlightOption(optionIndex: number | null) {
    setHightlightedIndex(optionIndex);
  }

  return (
    <div className="dse-select">
      <button
        onKeyDown={onButtonKeyDown}
        className="dse-select__label"
        onClick={toggleSelectOpened}
        ref={buttonRef}
        aria-haspopup={true}
        aria-expanded={isOpen ?? undefined}
        aria-controls="dse-select-list"
      >
        <Text>{placeholderText}</Text>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`dse-select__caret ${
            isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="1rem"
          height="1rem"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen ? (
        <ul
          role="menu"
          id="dse-select-list"
          className="dse-select__overlay"
          style={{ top: overlayTop }}
        >
          {options.map((option, index) => {
            const isSelected = selectedOption?.key == option.key;
            const isHightlighted = index === hightlightedIndex;

            const ref = optionRefs[index];

            const className = `dse-select__option ${
              isSelected ? "dse-select__option--select" : ""
            }
            ${isHightlighted ? "dse-select__option--hightlighted" : ""}
            }`;
            const onClick = () => onOptionSelected(option, index);
            const key = option.key;

            const renderOptionsProps: RenderOptionProps = {
              option,
              isSelected,
              getOptionRecommendedProps: (overrideProps = {}) => ({
                role: "menuitemradio",
                "aria-label": option.label,
                "aria-checked": isSelected ? true : undefined,
                tabIndex: isHightlighted ? -1 : 0,
                onKeyDown: onOptionKeyDown,
                onMouseEnter: () => hightlightOption(index),
                onMouseLeave: () => hightlightOption(null),
                ref,
                className,
                onClick,
                key,
                ...overrideProps,
              }),
            };

            if (renderOption) {
              return renderOption(renderOptionsProps);
            }

            return (
              <li {...renderOptionsProps.getOptionRecommendedProps()}>
                <Text>{option.label}</Text>

                {isSelected ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="1rem"
                    height="1rem"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default Select;

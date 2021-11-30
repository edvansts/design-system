import React, { ReactNode, useMemo, useRef, useState } from "react";

import Text from "../../atoms/Text";

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
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );

  const overlayTop = useMemo(() => {
    return (buttonRef.current?.offsetHeight ?? 0) + 10;
  }, [buttonRef.current?.offsetHeight]);

  const placeholderText = selectedOption?.label ?? placeholder;

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

  return (
    <div className="dse-select">
      <button
        className="dse-select__label"
        onClick={toggleSelectOpened}
        ref={buttonRef}
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

        {/* <svg
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
              d="M5 15l7-7 7 7"
            />
          </svg> */}
      </button>

      {isOpen ? (
        <ul className="dse-select__overlay" style={{ top: overlayTop }}>
          {options.map((option, index) => {
            const isSelected = selectedOption?.key == option.key;

            const className = `dse-select__option ${
              isSelected ? "dse-select__option--select" : ""
            }`;
            const onClick = () => onOptionSelected(option, index);
            const key = option.key;

            const renderOptionsProps: RenderOptionProps = {
              option,
              isSelected,
              getOptionRecommendedProps: (overrideProps = {}) => ({
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
              <li className={className} key={key} onClick={onClick}>
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

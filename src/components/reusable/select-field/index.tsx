import React from "react";

import ArrowSvg from "../../../assets/svgs/arrow";

import { parseClassName } from "../../../utils";

import styles from "./index.module.scss";

interface IDropdown {
  options: string[];
  name: string;
  value: string;
  onChange: any;
  classes?: string;
  placeholder?: string;
  label: string;
}

const SelectField = ({
  options,
  onChange,
  name,
  value,
  classes,
  placeholder,
  label,
}: IDropdown) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(value);
  const [filteredOptions, setFilteredOptions] = React.useState(options);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectOption = (option: string) => {
    setIsOpen(false);
    onChange({ [name]: option });
    setSelectedOption(option);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
    onChange({ [name]: inputValue });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const index = filteredOptions.indexOf(selectedOption);
      const nextIndex = (index + 1) % filteredOptions.length;
      setSelectedOption(filteredOptions[nextIndex]);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const index = filteredOptions.indexOf(selectedOption);
      const nextIndex =
        (index - 1 + filteredOptions.length) % filteredOptions.length;
      setSelectedOption(filteredOptions[nextIndex]);
    } else if (e.key === "Enter") {
      setIsOpen(false);
      onChange({ [name]: selectedOption });
    }
  };

  return (
    <>
      <div
        className={parseClassName([
          styles.wrapper,
          "position-relative",
          classes ? classes : "",
        ])}
      >
        <div
          className={parseClassName([
            styles.innerWrapper,
            "d-flex align-items-center",
            "px-3",
          ])}
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-activedescendant={selectedOption}
        >
          <input
            type="text"
            name={name}
            value={value}
            aria-label={label}
            id={name}
            onChange={handleInputChange}
            ref={inputRef}
            className="w-100 py-2"
            placeholder={placeholder}
            autoCorrect="false"
            autoComplete="off"
            spellCheck="false"
          />
          <span
            role="img"
            className={parseClassName([
              styles.arrow,
              isOpen ? styles.down : styles.up,
            ])}
          >
            <ArrowSvg />
          </span>
        </div>
        {isOpen && (
          <div
            className={parseClassName([
              styles.listBox,
              "position-absolute w-100",
              "text-start",
            ])}
            role="listbox"
          >
            {filteredOptions.map((option) => (
              <div
                key={option}
                className={parseClassName([
                  styles.dropDownOption,
                  selectedOption === option ? styles.selected : "",
                  "px-3 py-1 mt-1",
                ])}
                onClick={() => handleSelectOption(option)}
                role="option"
                aria-selected={selectedOption === option}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SelectField;

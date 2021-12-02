import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Select from ".";

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
    key: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
    key: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "sweet-pink",
    key: "sweet-pink",
  },
];

describe("Select component", () => {
  it("renders all options passed to it", () => {
    render(<Select options={options} />);

    userEvent.click(screen.getByTestId("DseSelectButton"));

    expect(screen.getAllByRole("menuitemradio")).toHaveLength(options.length);
  });

  it("renders options using custom renderOption method if passed as prop", () => {
    render(
      <Select
        options={options}
        renderOption={({ option, getOptionRecommendedProps }) => {
          return (
            <li
              data-testid="CustomRenderOption"
              {...getOptionRecommendedProps()}
            >
              {option.label}
            </li>
          );
        }}
      />
    );

    userEvent.click(screen.getByTestId("DseSelectButton"));

    expect(screen.getAllByRole("menuitemradio")).toHaveLength(options.length);
  });

  it("calls the onOptionSelected prop with the selected option and its index if passed", () => {
    const onOptionSelected = jest.fn();

    render(
      <Select
        options={options}
        onOptionSelected={onOptionSelected}
        renderOption={({ option, getOptionRecommendedProps }) => {
          return (
            <li data-testid={option.key} {...getOptionRecommendedProps()}>
              {option.label}
            </li>
          );
        }}
      />
    );

    userEvent.click(screen.getByTestId("DseSelectButton"));
    userEvent.click(screen.getByTestId(options[1].key));

    expect(onOptionSelected).toBeCalledWith(options[1], 1);
  });

  it("the button label changes to the selected option label", () => {
    render(<Select options={options} />);

    const button = screen.getByTestId("DseSelectButton");

    userEvent.click(button);
    userEvent.click(screen.getAllByRole("menuitemradio")[1]);

    expect(button).toHaveTextContent(options[1].label);
  });

  it("snapshot of the selected option state", () => {
    const { asFragment } = render(<Select options={options} />);

    const button = screen.getByTestId("DseSelectButton");

    userEvent.click(button);
    userEvent.click(screen.getAllByRole("menuitemradio")[1]);

    expect(asFragment()).toMatchSnapshot();
  });

  it("snapshot of the base state", () => {
    const { asFragment } = render(<Select options={options} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("snapshot of the options menu open state", () => {});

  it("can customize select label", () => {});
});

test("snapshot of the options menu open state", () => {
  const { asFragment } = render(<Select options={options} />);

  userEvent.click(screen.getByTestId("DseSelectButton"));

  expect(asFragment()).toMatchSnapshot();
});

test("can customize select label", () => {
  const customLabel = "THIS IS A CUSTOM LABEL";
  render(<Select options={options} placeholder={customLabel} />);

  expect(screen.getByText(/THIS IS A CUSTOM LABEL/)).toBeInTheDocument();
});

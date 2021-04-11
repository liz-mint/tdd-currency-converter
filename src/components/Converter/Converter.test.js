import { render, screen  } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Converter } from "./Converter";

describe('when rendered', () => {
  it('rub input should have a value with a rub amount', () =>{
    render(<Converter/>);
    expect(screen.getByLabelText(/Сумма в рублях/)).toHaveValue(100);
  });
  it('usd input should have a value with a usd amount', () =>{
    render(<Converter/>);
    expect(screen.getByLabelText(/Сумма в долларах/)).toHaveValue(20);
  });
});

describe('when typed in the rub input', () => {
  it('should update a value', () => {
    render(<Converter/>);
    const input = screen.getByLabelText(/Сумма в рублях/);

    userEvent.clear(input);
    userEvent.type(input, '42');
    expect(input).toHaveValue(42);
  });
});

describe('when typed in the usd input', () => {
  it('should update a value', () => {
    render(<Converter/>);
    const input = screen.getByLabelText(/Сумма в долларах/);

    userEvent.clear(input);
    userEvent.type(input, '100');
    expect(input).toHaveValue(100);
  });
})
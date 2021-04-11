import { render, screen  } from "@testing-library/react"
import { Quote } from "./Quote"

describe('when rendered', () => {
  it('should contain an expedted text', () => {
    render(<Quote/>);
    const result = screen.getByText(/Test Quote/);
    expect(result).toBeInTheDocument();
  })
})
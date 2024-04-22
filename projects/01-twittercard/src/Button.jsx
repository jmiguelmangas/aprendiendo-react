
import styled from 'styled-components';

// Styled button with gradient border and transparent background
const GradientBorderButton = styled.button`
  background-color: transparent;
  color: #fff; // White text color
  border: 3px solid transparent;
  border-radius: 10px; // Rounded corners
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  transition: color 0.4s;

  &:hover {
    color: #000; // Change text color on hover
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, blue, green);
    z-index: -1;
    border-radius: 8px; // Slightly smaller radius for the gradient to be visible
    transition: opacity 0.4s;
  }

  &:hover::before {
    opacity: 0.7;
  }
`;

export function Button_graded() {
  return (
    <div>
      <GradientBorderButton>Click Me</GradientBorderButton>
    </div>
  );
}


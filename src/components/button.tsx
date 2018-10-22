import * as React from 'react';
import styled, { cx } from 'react-emotion';

interface IButtonProps {
  className?: string;
  disabled?: boolean;
}

export class Button extends React.PureComponent<IButtonProps> {
  public render() {
    const { children, className, ...otherProps } = this.props;

    return (
      <StyledButton
        className={cx('wishlist-button', className)}
        {...otherProps}
      >
        {children}
      </StyledButton>
    );
  }
}

export interface IStyledButtonProps {
  // override?: ButtonThemeProps;
  color?: string;
  roundCorners?: boolean;
  backgroundFocus?: string;
}

const StyledButton = styled('button')<IStyledButtonProps>`
  border-radius: 4px;
  margin: 0.5rem;
  border-color: transparent;
  background-color: ${(props) => props.theme.Button.background};
  padding: 0.38rem 1.15rem;
  color: ${(props) => props.theme.Button.color};
  outline: 0;
  font-size: 1.13rem;
  font-weight: 500;
  line-height: 1.83rem;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  cursor: pointer;
  display: inline-block;
  text-align: center;
  transition: all 150ms ease;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  :focus,
  :hover {
    text-decoration: none;
    background-color: ${(props) => props.theme.Button.backgroundFocus};
  }

  :active {
    background-color: ${(props) => props.theme.Button.backgroundActive};
    box-shadow: none;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
    pointer-events: none;
  }
`;

StyledButton.defaultProps = {};

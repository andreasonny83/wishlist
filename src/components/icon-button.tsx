import * as React from 'react';
import styled, { CreateStyled, cx } from 'react-emotion';
import { CSSObject } from 'create-emotion';

type CSSProps = CSSObject & {
  lightHover?: boolean;
};

interface ButtonThemeProps extends Partial<CSSProps> {
  disabledColor?: string;
  lightHover?: boolean;
}

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: (e?: React.SyntheticEvent<any>) => void;
  onBlur?: React.FocusEventHandler<any>;
  themeOverride?: ButtonThemeProps;
  innerRef?: any;
  roundCorners?: boolean;
  title?: string;
}

export class Button extends React.PureComponent<ButtonProps, undefined> {
  public static displayName = 'Button';
  public render() {
    const {
      className,
      disabled,
      roundCorners,
      themeOverride,
      children,
      ...otherProps
    } = this.props;

    return (
      <StyledButton
        className={cx('Twilio-Button', className)}
        disabled={disabled || false}
        override={themeOverride}
        roundCorners={roundCorners}
        {...otherProps}
      >
        {children}
      </StyledButton>
    );
  }

  public static defaultProps: Partial<ButtonProps> = {
    className: '',
    disabled: false,
    roundCorners: true,
    themeOverride: {},
  };
}

export interface StyledButtonProps {
  override?: ButtonThemeProps;
  roundCorners?: boolean;
  disabled?: boolean;
}

const StyledButton = styled('button')<StyledButtonProps>`
  padding: 0;
  border: none;
  background: none;
  outline: none;
  align-self: center;
  padding-left: 16px;
  padding-right: 16px;
  height: 28px;
  color: inherit;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 2px;
  white-space: nowrap;
  border-radius: ${(props) => (props.roundCorners ? '100px' : '0px')};
  background: ${(props) => props.override.disabledColor || '#ddd'};

  &:disabled {
    opacity: 0.5;
  }
  color: ${(props) => props.override.color};
`;
StyledButton.defaultProps = {
  roundCorners: true,
};

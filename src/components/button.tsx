import * as React from 'react';
import { WishlistProvider } from '../app';

interface ButtonProps {
  onClick(e: React.MouseEvent<HTMLElement>): void;
  color?: React.CSSProperties;
}

interface ButtonComponentProps {
  name: string;
}

class CustomButton extends React.PureComponent<
  ButtonProps & ButtonComponentProps
> {
  render() {
    const { color, onClick: handleClick, name } = this.props;

    return (
      <button style={color} onClick={handleClick}>
        {this.props.children} - {name}
      </button>
    );
  }
}
export class Button extends React.PureComponent<ButtonProps> {
  render() {
    const { color, onClick: handleClick, children } = this.props;

    return (
      <WishlistProvider.Consumer>
        {({ app }) => (
          <CustomButton color={color} onClick={handleClick} name={app.name}>
            {children}
          </CustomButton>
        )}
      </WishlistProvider.Consumer>
    );
  }
}

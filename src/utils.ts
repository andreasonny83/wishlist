import { withInfo, Options } from '@storybook/addon-info';

const wInfoStyle = {};

const withInfoOptions: Options = {
  inline: true,
  source: true,
  header: true,
  styles: wInfoStyle,
};

export const wInfo = (text: string) =>
  withInfo({
    ...withInfoOptions,
    text,
  });

import { withInfo } from '@storybook/addon-info';

const wInfoStyle = {
  header: {
    h1: {
      display: 'inline',
      fontSize: '25px',
      marginRight: '20px',
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    h2: {
      display: 'inline',
      color: '#999',
    },
  },
  infoBody: {
    backgroundColor: '#eee',
    padding: '0px 5px',
    lineHeight: '2',
  },
};
export const wInfo = (text) =>
  withInfo({ inline: true, source: true, styles: wInfoStyle, text });

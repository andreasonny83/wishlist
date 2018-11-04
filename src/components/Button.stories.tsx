import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

import { wInfo } from '../utils';
import { getTheme } from '../theme';
import { Button } from './button';

const stories = storiesOf('Components', module);
const themeOptions = { Teal: 'teal', Red: 'red' };

stories.add(
  'Button',
  wInfo(`
    ### Wishlist Button

    Default wishlist button
    `)(() => (
    <Button
      theme={getTheme(select('theme', themeOptions, 'teal'))}
      disabled={boolean('disabled', false)}
      onClick={action('onClick')}
    >
      I'm a Button!
    </Button>
  ))
);

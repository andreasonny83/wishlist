import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withViewport } from '@storybook/addon-viewport';
import { withOptions, setOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/);

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(checkA11y);
addDecorator(withViewport);
addDecorator(
  withBackgrounds([
    { name: 'white', value: '#ffffff', default: true },
    { name: 'anthracite', value: '#333' },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ])
);
addDecorator(
  withOptions({
    name: 'Wishlist',
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
  })
);

setOptions({
  theme: themes.normal,
});

function loadStories() {
  require('./welcomeStory');
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

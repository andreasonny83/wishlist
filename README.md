# Wishlist

> This is pretty much a WIP project

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![netlify](https://www.netlify.com/img/global/badges/netlify-color-accent.svg)](https://www.netlify.com)

## Prerequisites

This project requires NodeJS (at least version 6) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.
[Yarn](https://yarnpkg.com/lang/en/) is optional but preferred over npm.

```sh
$ node --version
v10.11.0

$ npm --version
6.4.1

$ yarn --version
1.10.1
```

## Table of contents

- [Wishlist](#wishlist)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
  - [Usage](#usage)
    - [Serving the app](#serving-the-app)
    - [Unit teststing](#unit-teststing)
    - [Building a distribution version](#building-a-distribution-version)
    - [Serving the distribution version](#serving-the-distribution-version)
  - [Contributing](#contributing)
  - [Built With](#built-with)
  - [Contributors](#contributors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/andreasonny83/wishlist.git
$ cd wishlist
```

Then install all the Node dependencies usin npm or Yarn

```sh
$ yarn
```

Or using npm

```sh
$ npm install
```

## Usage

### Serving the app

```sh
$ yarn start
$ npm start // with npm
```

### Unit teststing

```sh
$ yarn test
$ npm test // with npm
```

### Building a distribution version

```sh
$ yarn build
$ npm run build // with npm
```

This task will create a distribution version of the project
inside your local `dist/` folder

### Serving the distribution version

```sh
$ yarn serve:dist
$ npm run serve:dist // with npm
```

This uses [serve](https://github.com/zeit/serve#readme) for servign your already
generated distribution version of the project.

_Note_ this requires
[Building a distribution version](#building-a-distribution-version) first.

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Built With

- Typescript
- Yarn
- Prettier
- React
- Love

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/8806300?v=4" width="100px;"/><br /><sub><b>Andrea SonnY</b></sub>](https://andreasonny83.github.io)<br />[💻](https://github.com/andreasonny83/wishlist/commits?author=andreasonny83 "Code") [🎨](#design-andreasonny83 "Design") [📖](https://github.com/andreasonny83/wishlist/commits?author=andreasonny83 "Documentation") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

[MIT License](https://andreasonny.mit-license.org/2018) © Andrea SonnY

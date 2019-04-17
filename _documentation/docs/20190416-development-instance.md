---
date: 2019-04-16
title: How to set up a development instance of Discord Apps Marketplace
description: Learn how to set up a development instance of Discord Apps Marketplace for testing, developing and improving the free and open source bot list website.
by: 7coil
---

It is now easier than ever to run a personal instance of Discord Apps Marketplace to run for development on your computer.

## Installing Applications
Download and install Node.js from [here](https://nodejs.org/en/download/).

If you are using Microsoft Windows, you will also need to install [git](https://git-scm.com/).
Get a download [here](https://git-scm.com/download).
Git may already be installed if you are on a Linux machine.

After installing, install "yarn".
```bash
npm i -g yarn
```

## Downloading Discord Apps Marketplace
Clone the repository to your workspace, and install the required dependencies

```bash
git clone https://github.com/terminal/discordapps.dev --recurse-submodules
yarn
```

Afterwards, just start the development server.

```bash
yarn dev
```

## Development Tools
You can install the following extensions to help debug the website.

- Google Chrome, and Chromium compatibles (Microsoft Edge)
  - [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - [Redux DevTools](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)
- Mozilla Firefox, and compatibles
  - [React Developer Tools](https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/)
  - [Redux DevTools](https://addons.mozilla.org/en-GB/firefox/addon/reduxdevtools/)

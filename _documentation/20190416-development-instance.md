---
date: 2019-04-16
title: How to set up a development instance of Discord Apps Marketplace
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
git clone https://github.com/terminal/discordapps.dev
yarn
```

Afterwards, just start the development server.

```bash
yarn dev
```
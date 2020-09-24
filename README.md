# Restyle UI

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

<img alt="expo examples" src="https://i.imgur.com/j253BeR.png">

React Native component library built with Shopify's Restyle library to allow for **theming** and **utility style props**.

```
<Box backgroundColor="primary" mt={2} p={3}>
  <Text color="textInverted" fontFamily="Roboto, sans-serif">
    Branded box with white text inside
  </Text>
</Box>
```

> This is setup as Storybook with Expo, instead of Expo with Storybook.

## Getting Started

1. `yarn` - Install dependencies
1. `yarn web` - Run Storybook

### Running on Native Devices

1. `yarn start` - Start Expo in browser (should open a new tab)
1. Wait for app to bundle. This may take 30+ seconds.
1. Use QR code from Expo to open app on testing device (or press `i` to open simulator if available)

### 📁 File Structure

```
Storybook with Expo CLI
├── stories
│   ├── index.js ➡️ Native story imports
│   └── Example.stories.js ➡️ A Storybook page to render
├── assets ➡️ All static assets for your project
├── App.tsx ➡️ Entry Point for universal Expo apps
├── app.config.js ➡️ Expo config file
└── babel.config.js ➡️ Babel config (should be using `babel-preset-expo`)
```

### Adding Storybook Stories

1. Create a file alongside your component named `ComponentName.stories.tsx`.
2. We use CSF story format (lets us export stories to test in other context):

```js
import React from "react";
import { storiesOf } from "@storybook/react-native";
// Import your component
import Text from "./Text";

// Define your component and it's name
export default {
  title: "Text",
  component: Text,
};

// Stories
export const Basic = () => <Text>What's up</Text>;
export const Colored = () => <Text color="red">What's up</Text>;

// This is necessary to make it show in Expo
// Add all stories to RN/Expo storybook
storiesOf("Text", module).add("Basic", Basic).add("Colored", Colored);
```

3. You should be able to see it in Storybook web if you spin it up `expo web`. But to see it native, you need to import the story directly in `stories/index.js`.

Done! You should see your new component stories in Storybook web and native.

### Semantic Release

This project is setup with semantic-release to automatically handle versioning based on git commits and branching. It also is setup with Commitzen's CLI (`yarn commit`), which walks you through crafting a "conventional commit".

1. Create a branch for your work: `git checkout -b name-here`
1. Do some cool code jutsu.
1. `git add` your changed files.
1. `yarn commit` to run the CLI

You'll be able to pick from things like a feature, bug fix, or CI update. And add your commit message, as well as a longer detailed message.

After creating this branch, create a pull request (PR) on Github. Once approved, it will be moved to a release branch (like `next`), and eventually merged into master.

When merged into master, the CI (CircleCI in our case) will run semantic-release, which checks commits since last release.

## 📝 Notes

- [Storybook React Native](https://storybook.js.org/docs/guides/guide-react-native/)

import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "@shopify/restyle";
import theme from "../themes/default";

// Wrap all stories in Theme Provider
addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

// automatically import all files ending in *.stories.js
configure(require.context("../components", true, /\.stories\.[tj]sx$/), module);

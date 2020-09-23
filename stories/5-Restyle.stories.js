import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import Box from "../components/Box";
import Text from "../components/Text";

export default {
  title: "Restyle",
};

export const BasicBox = () => (
  <Box width="300px" height="300px" backgroundColor="cardPrimaryBackground" />
);
export const BasicText = () => (
  <Text color="cardPrimaryBackground">Text here</Text>
);

// On-Device Register
storiesOf("Button", module).add("Box", BasicBox).add("Text", BasicText);

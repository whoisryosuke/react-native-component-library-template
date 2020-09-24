import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import Text from "./Text";

export default {
  title: "Text",
  component: Text,
};

// Stories
export const Basic = () => <Text>What's up</Text>;

// Add all stories to RN/Expo storybook
storiesOf("Text", module).add("Basic", Basic);

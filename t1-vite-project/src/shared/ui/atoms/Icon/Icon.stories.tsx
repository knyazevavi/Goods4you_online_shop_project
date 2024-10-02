import { Meta, StoryFn } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as Meta;

const Template: StoryFn = () => <Icon />;

export const Default = Template.bind({});

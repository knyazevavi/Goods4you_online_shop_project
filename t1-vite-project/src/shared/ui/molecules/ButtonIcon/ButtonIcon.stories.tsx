import { Meta, StoryFn } from "@storybook/react";
import ButtonIcon from "./ButtonIcon";

export default {
  title: "Molecules/ButtonIcon",
  component: ButtonIcon,
} as Meta;

const Template: StoryFn = () => <ButtonIcon />;

export const Default = Template.bind({});

import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;

interface ButtonArgs {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Template: StoryFn<ButtonArgs> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) =>
    console.log(event.currentTarget),
};

import { Meta, StoryFn } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
} as Meta;

interface InputArgs {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Template: StoryFn<InputArgs> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "",
  onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
    console.log(event.target.value),
};

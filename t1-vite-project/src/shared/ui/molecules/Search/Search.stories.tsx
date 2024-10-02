import { Meta, StoryFn } from "@storybook/react";
import Search from "./Search";

export default {
  title: "Molecules/Search",
  component: Search,
} as Meta;

const Template: StoryFn = () => <Search />;

export const Default = Template.bind({});

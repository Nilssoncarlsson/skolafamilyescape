import { SearchButton } from ".";

export default {
  title: "Components/SearchButton",
  component: SearchButton,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    divClassName: {},
    vectorClassName: {},
    vector:
      "https://cdn.animaapp.com/projects/653017b8aa739b8ec7227123/releases/65301872f8aeb1bee1f92f1f/img/vector-5.svg",
  },
};

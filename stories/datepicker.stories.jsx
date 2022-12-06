import React from "react";
import { storiesOf } from "@storybook/react";
import MyDatePicker from "./datepicker";

const stories =storiesOf('datepicker test',module);

stories.add('datepicker',()=>{

    return(<MyDatePicker />);
});



export default {
  title: 'Datepicker',
  component: Datepicker,
  parameters: {
    docs: {
      description: {
        component: 'Datepicker',
      },
    },
  },
};

const Template = (args) => <MyDatePicker {...args} />;


export const WithStoryDescription = Template.bind({});
WithStoryDescription.args = {
  docs: {
    description: {
      story: 'datepicker',
      minDate:'01/01/2022',
      maxDate:'31/12/2023'
    },
  },
};



import type { Meta } from '@storybook/react';
import { useState } from 'react';

import { FormBox } from '../components/FormBox';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'FormBox',
  component: FormBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof FormBox>;

export default meta;
// type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const FormBoxExample: Story = {
//   args: {
//     primary: true,
//     label: 'FormBox',
//   },
// };

export const FormBoxExample = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [email, setEmail] = useState<string>(""); 

  return (
    <FormBox 
      fields={[
        {
          header: "First name", 
          type: "text",
          currState: firstName, 
          required: true, 
          setCurrState: (e) => setFirstName(e.target.value),
        }, 
        {
          header: "Last name",
          type: "text", 
          currState: secondName, 
          required: true, 
          setCurrState: (e) => setSecondName(e.target.value)
        }, 
        {
          header: "Email", 
          type: "email", 
          currState: email, 
          required: true, 
          setCurrState: (e) => setEmail(e.target.value)
        }
      ]}
    />
  )
}


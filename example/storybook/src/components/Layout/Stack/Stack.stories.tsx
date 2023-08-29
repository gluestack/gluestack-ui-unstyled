import type { ComponentMeta } from '@storybook/react-native';
import Stack from './Stack';

const StackMeta: ComponentMeta<typeof Stack> = {
  title: 'stories/LAYOUT/Stack',
  component: Stack,
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    space: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    reversed: {
      control: 'boolean',
    },
  },
  args: {
    direction: 'row',
    reversed: false,
    space: 'lg',
  },
};

export default StackMeta;

export { Stack };

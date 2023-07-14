import type { Meta, StoryObj } from '@storybook/react';

import { Dot } from './Dot';

const meta: Meta<typeof Dot> = {
  component: Dot,
  title: 'Dot',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: 'red',
  },
};

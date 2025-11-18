import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const Closed: Story = {
	args: {
		openState: false,
		toggleOpenFn: () => console.log('Toggle clicked'),
	},
};

export const Open: Story = {
	args: {
		openState: true,
		toggleOpenFn: () => console.log('Toggle clicked'),
	},
};

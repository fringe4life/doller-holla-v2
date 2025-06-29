import button, { type ButtonProps } from './button.svelte';

import { action } from 'storybook/actions';

export const actionsData = {
	onPinTask: action('onPinTask'),
	onArchiveTask: action('onArchiveTask')
};

export default {
	component: button,
	title: 'Task',
	tags: ['autodocs'],
	//👇 Our exports that end in "Data" are not stories.
	excludeStories: /.*Data$/,
	render: (args: ButtonProps) => ({
		Component: button,
		props: args,
		on: {
			...actionsData
		}
	})
};

export const Default = {
	args: {
		task: {
			id: '1',
			title: 'Test Task',
			state: 'TASK_INBOX'
		}
	}
};

export const Pinned = {
	args: {
		task: {
			...Default.args.task,
			state: 'TASK_PINNED'
		}
	}
};

export const Archived = {
	args: {
		task: {
			...Default.args.task,
			state: 'TASK_ARCHIVED'
		}
	}
};

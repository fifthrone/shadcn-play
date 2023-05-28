// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import "../../app/globals.css"
import { Button } from "./button";

const meta: Meta<typeof Button> = {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Button",
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const all: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-full h-full items-start justify-start">
			<Button variant="default">test</Button>
			<Button variant="destructive">test</Button>
			<Button variant="link">test</Button>
			<Button variant="secondary">test</Button>
			<Button variant="outline">test</Button>
			<Button variant="ghost">test</Button>
		</div>
	),
};

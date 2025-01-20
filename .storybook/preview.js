import '../src/app.css';
import { themes} from "@storybook/theming"
/** @type { import('@storybook/svelte').Preview } */
const preview = {
	parameters: {
		docs: {
			theme: themes.dark
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;

import { type Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
			  'poppins': ['Poppins'],
			},
		}
	},
	plugins: [],
};

export default config;

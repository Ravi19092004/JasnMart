/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"; // <-- This is the correct way for Vite

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		daisyui, // <-- Use the imported variable
	],
	daisyui: {
		themes: [
			"pastel",
			"retro",
			"coffee",
			"forest",
			"cyberpunk",
			"synthwave",
			"luxury",
			"autumn",
			"valentine",
			"aqua",
			"business",
			"night",
			"dracula",
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			// Define custom themes for the -2 variants using your colors
			{
				"synthwave-2": {
					"primary": "#FF00FF", // colors[0] from constants
					"secondary": "#00FFFF", // colors[1]
					"accent": "#FFD700", // colors[2]
					"neutral": "#2E004B", // colors[3]
					"base-100": "#1A1A1A", // Dark base, assuming from neutral/cyberpunk-2
					"base-200": "#2B2B2B",
					"base-300": "#3C3C3C",
					"base-content": "#FFFFFF", // Light text on dark base
					"info": "#00FFFF", // Using accent for info
					"success": "#00FF00", // Bright green
					"warning": "#FFD700", // Gold
					"error": "#FF0000", // Red
				},
			},
			{
				"retro-2": {
					"primary": "#A52A2A", // colors[0]
					"secondary": "#FFDAB9", // colors[1]
					"accent": "#8B4513", // colors[2]
					"neutral": "#F0E68C", // colors[3]
					"base-100": "#FFF8DC", // Light base, a bit warm
					"base-200": "#F5DEB3",
					"base-300": "#FFEBCD",
					"base-content": "#333333", // Dark text
					"info": "#1a75ff",
					"success": "#4CAF50",
					"warning": "#FFC107",
					"error": "#D32F2F",
				},
			},
			{
				"cyberpunk-2": {
					"primary": "#FF0000", // colors[0]
					"secondary": "#00FF00", // colors[1]
					"accent": "#00FFFF", // colors[2]
					"neutral": "#0D0D0D", // colors[3]
					"base-100": "#1A1A1A", // Very dark base
					"base-200": "#2B2B2B",
					"base-300": "#3C3C3C",
					"base-content": "#00FFFF", // Cyan text for cyberpunk feel
					"info": "#00FFFF",
					"success": "#00FF00",
					"warning": "#FFD700",
					"error": "#FF0000",
				},
			},
			{
				"valentine-2": {
					"primary": "#FF69B4", // colors[0]
					"secondary": "#FF0000", // colors[1]
					"accent": "#FFFFFF", // colors[2]
					"neutral": "#FFE0F0", // Light pink neutral
					"base-100": "#FFFFFF",
					"base-200": "#FEEBF2",
					"base-300": "#FFDBE7",
					"base-content": "#333333",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
			// Halloween, Garden - if these are new custom themes, you'd add them here
			// But based on your original list, they are not '-2' variants.
			// So assuming these were already working correctly, no explicit definition needed unless you want to override DaisyUI's built-in 'halloween' and 'garden' themes.
			// If 'halloween' and 'garden' are NOT built-in DaisyUI themes, they also need to be defined as objects here.
			// I'll add them as custom themes to be safe, using the colors from your constants.
			{
				"halloween": {
					"primary": "#FF4500", // Spooky orange
					"secondary": "#000000", // Black
					"accent": "#8B008B", // Dark Magenta
					"neutral": "#333333",
					"base-100": "#1A1A1A",
					"base-200": "#2B2B2B",
					"base-300": "#3C3C3C",
					"base-content": "#FF4500", // Orange text
					"info": "#00FFFF",
					"success": "#36d399",
					"warning": "#FFD700",
					"error": "#FF0000",
				},
			},
			{
				"garden": {
					"primary": "#6B8E23", // colors[0]
					"secondary": "#8B4513", // colors[1]
					"accent": "#A0522D", // colors[2]
					"neutral": "#DDA0DD", // colors[3]
					"base-100": "#F5F5DC", // Earthy beige
					"base-200": "#E6E6A8",
					"base-300": "#D9D995",
					"base-content": "#333333",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
			{
				"forest-2": {
					"primary": "#228B22", // colors[0]
					"secondary": "#4CAF50", // colors[1]
					"accent": "#6B8E23", // colors[2]
					"neutral": "#8B4513", // colors[3]
					"base-100": "#F5F5F5",
					"base-200": "#E0E0E0",
					"base-300": "#C0C0C0",
					"base-content": "#171212", // Dark text
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
			{
				"aqua-2": {
					"primary": "#00BCD4", // colors[0]
					"secondary": "#00ACC1", // colors[1]
					"accent": "#80DEEA", // colors[2]
					"neutral": "#B2EBF2", // a lighter blue
					"base-100": "#FFFFFF",
					"base-200": "#F0F8FF",
					"base-300": "#E0FFFF",
					"base-content": "#1C4E80", // Dark blue text
					"info": "#00BCD4",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
			{
				"lofi": {
					"primary": "#787B81", // colors[0]
					"secondary": "#A2A4A8", // colors[1]
					"accent": "#D4D4D4", // colors[2]
					"neutral": "#5C5E62", // colors[3]
					"base-100": "#E0E0E0",
					"base-200": "#D4D4D4",
					"base-300": "#C8C8C8",
					"base-content": "#3C3C3C",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
			{
				"pastel-2": {
					"primary": "#FFD1DC", // colors[0]
					"secondary": "#B2EBF2", // colors[1]
					"accent": "#C8E6C9", // colors[2]
					"neutral": "#FFFACD", // colors[3]
					"base-100": "#FFFFFF",
					"base-200": "#F8F8F8",
					"base-300": "#F0F0F0",
					"base-content": "#333333",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
			{
				"fantasy": {
					"primary": "#8A2BE2", // colors[0]
					"secondary": "#FFD700", // colors[1]
					"accent": "#ADFF2F", // colors[2]
					"neutral": "#E0BBE4", // colors[3]
					"base-100": "#F3F3F3",
					"base-200": "#EBEBEB",
					"base-300": "#DCDCDC",
					"base-content": "#333333",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
			{
				"wireframe": {
					"primary": "#CCCCCC", // colors[0]
					"secondary": "#000000", // colors[1]
					"accent": "#FFFFFF", // colors[2]
					"neutral": "#3366FF", // colors[3]
					"base-100": "#FFFFFF",
					"base-200": "#F0F0F0",
					"base-300": "#E0E0E0",
					"base-content": "#000000",
					"info": "#3366FF",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
			{
				"black": {
					"primary": "#000000", // colors[0]
					"secondary": "#FFFFFF", // colors[1]
					"accent": "#333333", // colors[2]
					"neutral": "#1A1A1A",
					"base-100": "#000000",
					"base-200": "#1A1A1A",
					"base-300": "#2B2B2B",
					"base-content": "#FFFFFF",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
			{
				"luxury-2": {
					"primary": "#4A4A4A", // colors[0]
					"secondary": "#B8860B", // colors[1]
					"accent": "#E0E0E0", // colors[2]
					"neutral": "#000000", // colors[3]
					"base-100": "#171618", // Dark base from original luxury
					"base-200": "#2B2B2B",
					"base-300": "#3C3C3C",
					"base-content": "#E2C697", // Gold-ish text
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
			{
				"dracula-2": {
					"primary": "#282A36", // colors[0]
					"secondary": "#BD93F9", // colors[1]
					"accent": "#50FA7B", // colors[2]
					"neutral": "#FF79C6", // colors[3]
					"base-100": "#282A36",
					"base-200": "#383A4A",
					"base-300": "#484A5A",
					"base-content": "#F8F8F2", // Light text
					"info": "#8BE9FD",
					"success": "#50FA7B",
					"warning": "#F1FA8C",
					"error": "#FF5555",
				},
			},
			{
				"cmyk": {
					"primary": "#00FFFF", // Cyan
					"secondary": "#FF00FF", // Magenta
					"accent": "#FFFF00", // Yellow
					"neutral": "#000000", // Black
					"base-100": "#FFFFFF",
					"base-200": "#F0F0F0",
					"base-300": "#E0E0E0",
					"base-content": "#000000",
					"info": "#00FFFF",
					"success": "#00FF00",
					"warning": "#FFFF00",
					"error": "#FF0000",
				},
			},
			{
				"autumn-2": {
					"primary": "#D2691E", // colors[0]
					"secondary": "#FFA500", // colors[1]
					"accent": "#8B0000", // colors[2]
					"neutral": "#FFD700", // colors[3]
					"base-100": "#F5DEB3", // Creamy base
					"base-200": "#E0BBE4",
					"base-300": "#D2B48C",
					"base-content": "#6F4E37", // Coffee text
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
			{
				"business-2": {
					"primary": "#424242", // colors[0]
					"secondary": "#2196F3", // colors[1]
					"accent": "#B0C4DE", // colors[2]
					"neutral": "#607D8B", // Slate
					"base-100": "#FFFFFF",
					"base-200": "#F0F0F0",
					"base-300": "#E0E0E0",
					"base-content": "#333333",
					"info": "#2196F3",
					"success": "#4CAF50",
					"warning": "#FFC107",
					"error": "#D32F2F",
				},
			},
			{
				"acid": {
					"primary": "#CCFF00", // colors[0]
					"secondary": "#00FFFF", // colors[1]
					"accent": "#FF00FF", // colors[2]
					"neutral": "#FF0000", // colors[3]
					"base-100": "#0D0D0D",
					"base-200": "#1A1A1A",
					"base-300": "#2B2B2B",
					"base-content": "#CCFF00",
					"info": "#00FFFF",
					"success": "#CCFF00",
					"warning": "#FFFF00",
					"error": "#FF0000",
				},
			},
			{
				"lemonade": {
					"primary": "#FFD700", // colors[0]
					"secondary": "#FFC0CB", // colors[1]
					"accent": "#FFFFFF", // colors[2]
					"neutral": "#FFFACD",
					"base-100": "#FFFFFF",
					"base-200": "#FFFDE0",
					"base-300": "#FFFACD",
					"base-content": "#333333",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
			{
				"night-2": {
					"primary": "#0A0A2A", // colors[0]
					"secondary": "#2C3E50", // colors[1]
					"accent": "#A9A9A9", // colors[2]
					"neutral": "#ADD8E6", // colors[3]
					"base-100": "#0A0A2A",
					"base-200": "#1C2E40",
					"base-300": "#2C3E50",
					"base-content": "#E0E0E0",
					"info": "#80DEEA",
					"success": "#A8D8B9",
					"warning": "#FFC107",
					"error": "#FF5555",
				},
			},
			{
				"coffee-2": {
					"primary": "#6F4E37", // colors[0]
					"secondary": "#A0522D", // colors[1]
					"accent": "#D2B48C", // colors[2]
					"neutral": "#F5DEB3", // colors[3]
					"base-100": "#FFF8DC",
					"base-200": "#F5DEB3",
					"base-300": "#E0C8A0",
					"base-content": "#331D00",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
			{
				"winter": {
					"primary": "#ADD8E6", // colors[0]
					"secondary": "#E0FFFF", // colors[1]
					"accent": "#F0F8FF", // colors[2]
					"neutral": "#4682B4", // colors[3]
					"base-100": "#FFFFFF",
					"base-200": "#F8F8FF",
					"base-300": "#F0F0FF",
					"base-content": "#2F4F4F", // Dark Slate Gray
					"info": "#ADD8E6",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
			{
				"dim": {
					"primary": "#3C3C3C", // colors[0]
					"secondary": "#606060", // colors[1]
					"accent": "#999999", // colors[2]
					"neutral": "#1A1A1A", // colors[3]
					"base-100": "#3C3C3C",
					"base-200": "#4D4D4D",
					"base-300": "#5C5C5C",
					"base-content": "#E0E0E0",
					"info": "#999999",
					"success": "#B0C4DE",
					"warning": "#FFD700",
					"error": "#FF5555",
				},
			},
			{
				"nord": {
					"primary": "#3B4252", // colors[0]
					"secondary": "#4C566A", // colors[1]
					"accent": "#88C0D0", // colors[2]
					"neutral": "#E5E9F0", // colors[3]
					"base-100": "#2E3440", // Nord's darkest blue
					"base-200": "#3B4252",
					"base-300": "#4C566A",
					"base-content": "#D8DEE9", // Nord's lightest white
					"info": "#88C0D0",
					"success": "#A3BE8C",
					"warning": "#EBCB8B",
					"error": "#BF616A",
				},
			},
			{
				"sunset": {
					"primary": "#FF7F50", // colors[0]
					"secondary": "#FFA07A", // colors[1]
					"accent": "#FFD700", // colors[2]
					"neutral": "#8B0000", // colors[3]
					"base-100": "#FFF5EE", // Light background for sunset
					"base-200": "#FFEBCD",
					"base-300": "#FFDEAD",
					"base-content": "#4A4A4A", // Dark text
					"info": "#6495ED",
					"success": "#9ACD32",
					"warning": "#FF8C00",
					"error": "#DC143C",
				},
			},
		],
		base: true,
		styled: true,
		utils: true,
		logs: true,
	},
};

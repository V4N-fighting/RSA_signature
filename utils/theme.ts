import { PaletteMode } from '@mui/material'
import { amber, blue, deepOrange, green, grey, pink } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

declare module '@mui/material/Chip' {
	interface ChipPropsVariantOverrides {
		basic: true
	}
}

declare module '@mui/material/styles' {
	interface PaletteColor {
		lighter?: string
	}
	interface SimplePaletteColorOptions {
		lighter?: string
	}
}

// mode
export const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					// palette values for light mode
					primary: amber,
					divider: grey[200],
					background: {
						default: '#fff',
						paper: '#EDF7FA',
						green: '#C6F6D5',
					},
					text: {
						primary: grey[900],
						light: '#f3f6f9',
						secondary: '#FF6464',
						green: green[900],
					},
			  }
			: {
					// palette values for dark mode
					primary: deepOrange,
					secondary: pink,
					divider: '#f3f6f9',
					background: {
						default: '#0a1929',
						paper: '#0a1929',
						green: '#9ae6b429',
					},
					text: {
						primary: '#f3f6f9',
						secondary: blue[700],
						green: green[200],
					},
			  }),
	},
})

// Create a theme instance.
export let overrideTheme = createTheme({
	typography: {
		fontFamily: 'Heebo, sans-serif',
	},
	components: {
		MuiContainer: {
			defaultProps: {
				maxWidth: 'md',
			},
			styleOverrides: {
				maxWidthSm: {
					maxWidth: '680px',
					'@media (min-width: 600px)': {
						maxWidth: '680px',
					},
				},
				maxWidthMd: {
					maxWidth: '860px',
					'@media (min-width: 900px)': {
						maxWidth: '860px',
					},
				},
			},
		},
		MuiLink: {
			defaultProps: {
				underline: 'none',
			},
		},
		MuiButton: {
			styleOverrides: {
				contained: {
					fontFamily: 'sans-serif',
					textTransform: 'none',
					color: grey[900],
				},
			},
		},
		MuiChip: {
			variants: [
				{
					props: { variant: 'basic' },
					style: {
						fontWeight: 500,
						backgroundColor: 'white',
					},
				},
				{
					props: { variant: 'filled' },
					style: {
						fontWeight: 500,
						textTransform: 'uppercase',
					},
				},
			],
		},
	},
})

overrideTheme = responsiveFontSizes(overrideTheme)

export interface Palette {
	PRIMARY: string // text color
	SECONDARY: string // background color
	GRAY: string // ex) for selectbox
	PLACE_HOLDER: string // placeholder for input
	MAIN: string // app main color
	DANGER: string // error, red
	SUCCESS: string // success, blue
	TRANSPARENT: string // transparent
}

export const PALETTE: Palette = {
	PRIMARY: '#2c3642',
	SECONDARY: '#ffffff',
	GRAY: '#ebeaeb',
	PLACE_HOLDER: 'rgba(69, 69, 69, 0.5)',
	MAIN: '#f1b24a',
	DANGER: '#af3e4d',
	SUCCESS: '#2176ae',
	TRANSPARENT: 'transparent',
}

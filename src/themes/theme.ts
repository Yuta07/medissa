import { FontSize, FONT_SIZE } from './font'
import { Device, DEVICE } from './media'
import { Palette, PALETTE } from './palette'

export interface Theme {
	palette: Palette
	fontSize: FontSize
	device: Device
}

export const theme = () => {
	const theme: Theme = {
		palette: PALETTE,
		fontSize: FONT_SIZE,
		device: DEVICE,
	}
	return theme
}

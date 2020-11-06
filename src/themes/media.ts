export interface Media {
	MOBILE: number
	TABLET: number
	LAPTOP: number
}

export interface Device {
	MOBILE: string
	TABLET: string
	LAPTOP: string
}

export const MEDIA: Media = { MOBILE: 575.98, TABLET: 1024, LAPTOP: 1025 }
export const DEVICE: Device = {
	MOBILE: `(max-width: ${MEDIA.MOBILE}px)`,
	TABLET: `(max-width: ${MEDIA.TABLET}px)`,
	LAPTOP: `(min-width: ${MEDIA.LAPTOP}px)`,
}

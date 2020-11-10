import styled, { css } from 'styled-components'
import { Theme } from '../../themes/theme'
import { useTheme } from '../../hooks/useTheme'

export type Props = {
	type?: 'button' | 'submit' | 'reset'
	name?: string
	children?: React.ReactNode
	color?: string
	background?: string
	width?: string
	height?: string
	textSize?: string
	disabled?: boolean
	handleClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const Button = ({
	type = 'button',
	name,
	children,
	color = 'SECONDARY',
	background = 'MAIN',
	width = 'auto',
	height = 'auto',
	textSize = 'MEDIUM',
	disabled = false,
	handleClick,
}: Props) => {
	const theme = useTheme()

	return (
		<Base
			type={type}
			name={name}
			background={background}
			color={color}
			width={width}
			height={height}
			textSize={textSize}
			disabled={disabled}
			themes={theme}
			onClick={handleClick}
		>
			{children}
		</Base>
	)
}

export const Base = styled.button<{
	color?: Props['color']
	background?: Props['background']
	width?: Props['width']
	height?: Props['height']
	textSize?: Props['textSize']
	themes: Theme
}>`
	${({ color, background, width, height, textSize, themes }) => {
		const { device, fontSize, palette } = themes

		return css`
			width: ${width};
			height: ${height};
			font-size: ${fontSize[textSize]}px;
			color: ${palette[color]};
			background: ${palette[background]};
			border: ${background === 'SECONDARY' ? `1px solid ${palette.GRAY}` : `none`};
			border-radius: 8px;
			padding: 6px 10px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			white-space: nowrap;
			cursor: pointer;

			&:hover {
				opacity: 0.7;
				transition: 0.3s;
			}

			&:focus {
				outline: rgba(241, 178, 74, 0.5);
			}

			&:disabled {
				background: ${palette.GRAY};
			}

			@media screen and ${device.MOBILE} {
				font-size: ${fontSize.X_SMALL}px;
			}
		`
	}}
`

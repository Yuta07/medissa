import * as React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../../themes/theme'
import { useTheme } from '../../hooks/useTheme'

export type Props = {
	type: 'hidden' | 'text' | 'number' | 'url' | 'email' | 'password'
	name: string
	value: string
	placeholder?: string
	autoComplete?: 'on' | 'off'
	error?: boolean
	touch?: boolean
	border?: boolean
	color?: string
	width?: string
	height?: string
	direction?: 'left' | 'right'
	handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	handleInputBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
	handleSearchFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
	type,
	name,
	value,
	placeholder = '',
	autoComplete = 'off',
	error = false,
	touch = false,
	width,
	height,
	border = true,
	color = 'MAIN',
	direction = 'left',
	handleInputChange,
	handleInputBlur,
	handleSearchFocus,
}: Props) => {
	const theme = useTheme()

	let borderColor = theme.palette.GRAY
	if (error && touch) {
		borderColor = theme.palette.DANGER
	}

	return (
		<InputForm
			type={type}
			name={name}
			value={value}
			placeholder={placeholder}
			autoComplete={autoComplete}
			color={color}
			borderColor={borderColor}
			border={border}
			width={width}
			height={height}
			direction={direction}
			themes={theme}
			onChange={handleInputChange}
			onBlur={handleInputBlur}
			onFocus={handleSearchFocus}
		/>
	)
}

export const InputForm = styled.input<{
	color: Props['color']
	borderColor: string
	border: Props['border']
	width: Props['width']
	height: Props['height']
	direction: Props['direction']
	themes: Theme
}>`
	${({ color, borderColor, border, width, height, direction, themes }) => {
		const { fontSize, palette } = themes

		return css`
			width: ${width ? width : 'auto'};
			height: ${height ? height : 'auto'};
			font-size: ${fontSize.MEDIUM};
			color: ${palette.PRIMARY};
			background: #ffffff;
			padding: 6px 10px;
			border: ${border ? `1px solid ${borderColor}` : `none`};
			border-radius: 8px;
			box-shadow: none;
			text-align: ${direction};
			transition: 0.3s border;

			&:hover {
				border: 1px solid ${palette.TEXT_GRAY};
			}

			&:focus {
				padding: ${border ? '6px 10px' : '5px 10px'};
				outline: none;
				border: 1px solid ${palette[color]};
			}

			::placeholder,
			::-webkit-input-placeholder {
				color: ${palette.PLACE_HOLDER};
			}

			:-ms-input-placeholder {
				color: ${palette.PLACE_HOLDER};
			}
		`
	}}
`

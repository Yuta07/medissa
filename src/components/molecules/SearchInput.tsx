import * as React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { Input, Props } from '../atoms/Input'
import { PALETTE } from '../../themes/palette'

type Custom = {
	detect?: boolean
	handleClick?: () => void
}

type CustomProps = Props & Custom

export const SearchInput = ({ detect = false, color = 'MAIN', handleClick, ...props }: CustomProps) => {
	return (
		<Form>
			<Input color={color} {...props} />
			<SearchButton>
				<FaSearch color={PALETTE.TEXT_GRAY} size="16px" className="fa-search" />
			</SearchButton>
		</Form>
	)
}

const Form = styled.div`
	position: relative;
`

const SearchButton = styled.div`
	position: absolute;
	top: 50%;
	right: 12px;
	z-index: 3000;
	display: inline-flex;
	transform: translateY(-50%);
	cursor: pointer;

	.fa-search {
		transition: all 0.3s;
	}

	&:hover {
		.fa-search {
			fill: ${PALETTE.MAIN};
		}
	}
`

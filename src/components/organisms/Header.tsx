import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { SearchInput } from '../molecules/SearchInput'
import { PALETTE } from '../../themes/palette'

export const Header = () => {
	const [searchState, setSearchState] = useState<string>('')

	const handleSearchInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchState(event.currentTarget.value)
	}, [])

	return (
		<Wrapper>
			<Container>
				<Flex>
					<Logo>
						<Link href="/">
							<Anchor>
								<Image src="/brand.svg" alt="medissa brand logo" width={140} height={32}></Image>
							</Anchor>
						</Link>
					</Logo>
					<Nav>
						<SearchInput
							type="text"
							name="search"
							value={searchState}
							width="200px"
							handleInputChange={handleSearchInput}
						/>
						<Link href="/signin">
							<Anchor>Sign in</Anchor>
						</Link>
					</Nav>
				</Flex>
			</Container>
		</Wrapper>
	)
}

const Wrapper = styled.header`
	width: 100%;
	height: 60px;
`

const Container = styled.div`
	max-width: 1200px;
	height: inherit;
	padding: 0 40px;
`

const Flex = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const Logo = styled.div``

const Anchor = styled.a``

const Nav = styled.nav`
	display: flex;

	a {
		cursor: pointer;
		font-size: 16px;
		color: ${PALETTE.SECONDARY};
		background: ${PALETTE.MAIN};
		border: none;
		border-radius: 8px;
		padding: 5px 15px;
		margin-left: 30px;
		transition: background 0.3s;

		&:hover {
			background: #e29c28;
		}
	}
`

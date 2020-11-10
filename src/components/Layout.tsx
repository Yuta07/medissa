import React, { FC } from 'react'
import styled from 'styled-components'
import { Footer } from './organisms/Footer'
import { Header } from './organisms/Header'

export const Layout: FC = ({ children }) => {
	return (
		<Wrapper>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Wrapper>
	)
}

const Wrapper = styled.div``

const Main = styled.div``

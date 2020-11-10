import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { PALETTE } from '../../themes/palette'

const SITE_MAP = [
	{ name: 'medissaについて', link: '/about' },
	{ name: 'medissaの使い方', link: '/usage' },
	{ name: 'よくある質問', link: '/faq' },
]

export const Footer = () => {
	return (
		<Wrapper>
			<Sitemap>
				<Flex>
					<Link href="/">
						<Anchor>
							<Image src="/brand.svg" alt="medissa brand logo" width={140} height={32}></Image>
						</Anchor>
					</Link>
					<Nav>
						{SITE_MAP.map((site) => {
							return (
								<MapName key={site.name}>
									<Link href={site.link}>
										<Anchor>{site.name}</Anchor>
									</Link>
								</MapName>
							)
						})}
					</Nav>
				</Flex>
				<Copyright>
					<CopyrightTxt>© {new Date().getFullYear()}, medissa.</CopyrightTxt>
				</Copyright>
			</Sitemap>
		</Wrapper>
	)
}

const Wrapper = styled.footer`
	width: 100%;
	padding: 30px 0;
	background: ${PALETTE.GRAY};
`

const Sitemap = styled.div`
	max-width: 1200px;
	padding: 0 40px;
	display: flex;
	flex-direction: column;
`

const Flex = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const Nav = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
`

const MapName = styled.li`
	padding: 5px 0;
`

const Anchor = styled.a`
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`

const Copyright = styled.div``

const CopyrightTxt = styled.small`
	color: ${PALETTE.TEXT_GRAY};
`

import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export default function Custom404() {
	return (
		<Wrapper>
			<Hero className="not_found-heading">404</Hero>
			<Txt>アクセスしようとしたページは削除されたかURLが存在しないため、見つけることができません。</Txt>
			<Txt>The page you're looking for can't be found.</Txt>
			<Image src="/404.svg" alt="picture of the not_found" width={340} height={340} />
			<Txt>
				<Link href="/">
					<Anchor>トップに戻る</Anchor>
				</Link>
			</Txt>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Hero = styled.h1`
	font-size: 80px;
`

const Txt = styled.p`
	margin-top: 20px;
	color: #7f8c8d;
	text-align: center;
`

const Anchor = styled.a`
	cursor: pointer;
	border: 1px solid #ebeaeb;
	border-radius: 8px;
	padding: 10px 20px;

	&:hover {
		background: #f0f9ff;
	}
`

import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp

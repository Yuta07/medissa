import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import { useTheme } from '../hooks/useTheme'
import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from '../themes/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
	const { palette, fontSize, device } = useTheme()

	return (
		<ThemeProvider theme={{ palette: palette, fontSize: fontSize, device: device }}>
			<GlobalStyle />
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp

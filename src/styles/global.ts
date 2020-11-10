import { createGlobalStyle } from 'styled-components'
import { FONT_FAMILY, FONT_SIZE } from '../themes/font'
import { PALETTE } from '../themes/palette'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    min-height: 100vh;
		font-size: ${FONT_SIZE.MEDIUM};
		font-weight: 400;
		font-family: ${FONT_FAMILY};
		line-height: 1.5;
    letter-spacing: 0.5px;
    word-wrap: break-word;
    font-kerning: normal;
		color: ${PALETTE.PRIMARY};
		background: ${PALETTE.SECONDARY}
	}

	h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  h4, h5, p {
    font-size: 16px;
  }

  span, a {
    font-size: 14px;
  }

  a {
		color: ${PALETTE.PRIMARY};
		text-decoration: none;
	}

	small {
    font-size: 12px;
  }
`

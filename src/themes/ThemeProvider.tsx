import React, { createContext, FC } from 'react'
import { theme, Theme } from './theme'

export const ThemeContext = createContext<Theme>(theme())

type Props = {
	theme: Theme
}

export const ThemeProvider: FC<Props> = ({ theme, children }) => {
	return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

import React, { useState } from 'react'

const ThemeContext = React.createContext('light')

const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState('light')
  const [themes] = useState({
    light: {
      background: '#fff'
    },
    dark: {
      background: '#333'
    }
  })

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      themes,
      handleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

const ThemeContextConsumer = ThemeContext.Consumer

export { ThemeContextProvider, ThemeContextConsumer }
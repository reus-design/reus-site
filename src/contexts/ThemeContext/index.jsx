import React, { useState, useEffect } from 'react'
import cookies from 'js-cookie'

const ThemeContext = React.createContext('light')

const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState('light')
  const [themes] = useState({
    light: {
      background: '#fff',
      colorLine: '#1890ff',
      colorHeadline: '#333',
      colorBorder: '#e8e8e8',
      codeBgColor: '#eaeaea',
      compViewBgColor: '#fff',
      formBg: '#f7f7f7',
      codeStringColor: '#2e383c',
      color: '#444444',
      colorBody: '#444444'
    },
    dark: {
      background: '#131313',
      colorLine: '#fff',
      colorBorder: '#2d2d2d',
      colorHeadline: '#fff',
      codeBgColor: '#292929',
      compViewBgColor: '#212121',
      formBg: '#292929',
      codeStringColor: '#fff',
      color: '#fff',
      colorBody: '#c5c5c5'
    }
  })

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      cookies.set('theme', 'dark')
    } else {
      setTheme('light')
      cookies.set('theme', 'light')
    }
  }

  useEffect(() => {
    const _theme = cookies.get('theme')
    if (theme) setTheme(_theme)
  }, [])

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
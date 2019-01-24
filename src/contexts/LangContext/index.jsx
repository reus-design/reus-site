import React, { useState } from 'react'

const LangContext = React.createContext('en')

const LangContextProvider = ({children}) => {
  const [lang, setLang] = useState('en')

  const handleLang = () => {
    if (lang === 'en') {
      setLang('id')
    } else {
      setLang('en')
    }
  }
  
  return (
    <LangContext.Provider value={{
      lang,
      handleLang
    }}>
      {children}
    </LangContext.Provider>
  )
  
}

const LangContextConsumer = LangContext.Consumer

export { LangContextProvider, LangContextConsumer }
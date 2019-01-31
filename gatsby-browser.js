import React from 'react';
import { LangContextProvider, LangContextConsumer } from 'Contexts/LangContext'
import { ThemeContextProvider, ThemeContextConsumer } from 'Contexts/ThemeContext'
import id from 'react-intl/locale-data/id'
import en from 'react-intl/locale-data/en'
import { addLocaleData, IntlProvider } from 'react-intl'
import messagesEn from './src/locales/en/messages.json'
import messagesIn from './src/locales/id/messages.json'
import { ThemeProvider } from 'emotion-theming'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/neo.css'
require('codemirror/mode/markdown/markdown')
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/jsx/jsx')
require('codemirror/mode/css/css')
require('codemirror/addon/edit/matchbrackets')
require('codemirror/addon/edit/closetag')
require('codemirror/addon/fold/xml-fold')

addLocaleData(id, en)

export const wrapRootElement = ({ element }) => {
  return (
    <LangContextProvider>
      <LangContextConsumer>
        {
          ({lang}) => (
            <IntlProvider locale={lang} messages={lang === 'en' ? messagesEn : messagesIn}>
              <ThemeContextProvider>
                <ThemeContextConsumer>
                  {
                    ({theme, themes}) => (
                      <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
                        {element}
                      </ThemeProvider>
                    )
                  }
                </ThemeContextConsumer>
              </ThemeContextProvider>
            </IntlProvider>
          )
        }
      </LangContextConsumer>
    </LangContextProvider>  
  )
}
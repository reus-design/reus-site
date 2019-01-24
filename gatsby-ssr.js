import React from 'react';
import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server';
import Helmet from "react-helmet"
import { LangContextProvider, LangContextConsumer } from 'Contexts/LangContext'
import { ThemeContextProvider, ThemeContextConsumer } from 'Contexts/ThemeContext'
import id from 'react-intl/locale-data/id'
import en from 'react-intl/locale-data/en'
import { addLocaleData, IntlProvider } from 'react-intl'
import messagesEn from './src/locales/en/messages.json'
import messagesIn from './src/locales/id/messages.json'
import { ThemeProvider } from 'emotion-theming'

addLocaleData(id, en)

export const replaceRenderer = ({ 
  setHeadComponents, 
  bodyComponent, 
  replaceBodyHTMLString}) => {
  const ConnectedBody = () => (
    <LangContextProvider>
      <LangContextConsumer>
        {
          ({lang}) => (
            <IntlProvider locale={lang} messages={lang === 'en' ? messagesEn : messagesIn}>
              <ThemeContextProvider>
                <ThemeContextConsumer>
                  {
                    ({theme}) => (
                      <ThemeProvider theme={theme}>
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

  const { html, ids, css } = extractCritical(renderToString(<ConnectedBody/>))

  const criticalStyle = <style dangerouslySetInnerHTML={{ __html: css }} />
  const criticalIds = (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__EMOTION_CRITICAL_CSS_IDS__ = ${JSON.stringify(ids)};`,
      }}
    />
    )
  setHeadComponents([
    criticalIds, criticalStyle
  ])
  replaceBodyHTMLString(html)
}
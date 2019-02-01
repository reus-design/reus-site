import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'
import styled from '@emotion/styled'

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  background-color: transparent !important;
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
    .token {
      &.plain {
        color: ${({theme}) => theme.color} !important;
      }
      &.tag {
        &.attr-name {
          color: #a08f99 !important;
        }
        &.attr-value {
          color: #8fa281 !important;
        }
        &.punctuation {
          color: #8985ff !important;
        }
      }
    }
  }
`

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
  color: #333;
`


const HighlightWrap = ({code}) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
      
              {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}

export default HighlightWrap
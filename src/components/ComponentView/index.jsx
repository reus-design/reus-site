
import React, { useState } from 'react'
import styled from '@emotion/styled'
// import Highlight from 'Components/Highlight'
import { Transition } from 'react-transition-group'
import { TweenLite } from 'gsap'
import { Flex } from 'reus'

const CSWrapper = styled.div`
  margin-bottom: 20px;
`
const CSWIn = styled.div`
  border: 1px solid ${({theme}) => theme.colorBorder};
  border-radius: 6px;
  background: ${({theme}) => theme.compViewBgColor};
`
const CSComp = styled.div`
  padding: 20px;
  transition: all .3s ease;
`
const CSCode = styled.div`
  border-top: 1px solid ${({theme}) => theme.colorBorder};
  overflow: hidden;
  height: 0;
`
const CSCodeIn = styled.div`
  padding: 20px;
`

const ActionWrapper = styled.div`
  border-bottom: ${({theme, showCode}) => showCode ? `1px solid ${theme.colorBorder}` : 'none'};
  button {
    outline: none;
  }
  padding: 0 10px;
`
const FlexWithModif = styled(Flex)`
  & > div:not(:first-of-type) {
    border-left: ${({theme, showCode}) => showCode ? `1px solid ${theme.colorBorder}` : 'none'};
  }
`
const ActionButton = styled.button`
  font-size: 13px;
  color: #a0a0a0;
  font-weight: bold;
  text-transform: uppercase;
`

const Action = ({handleShowCode, showCode}) => (
  <ActionWrapper showCode={showCode}>
    <FlexWithModif showCode={showCode} justify="space-between" gutter={10}>
      <div>
        
      </div>
      <div>
        <FlexWithModif showCode={showCode} gutter={10}>
          {
            showCode ? (
              <div>
                <ActionButton>Copy</ActionButton>
              </div>
            ) : null
          }
          <div>
            <ActionButton onClick={handleShowCode}>{showCode ? 'hide' : 'show'} code</ActionButton>
          </div>
        </FlexWithModif>
      </div>
    </FlexWithModif>
  </ActionWrapper>
)

const ComponentView = ({component, code}) => {
  const [showCode, setShowCode] = useState(false)

  const handleShowCode = () => {
    setShowCode(!showCode)
  }

  return (
    <CSWrapper>
      <CSWIn>
        <CSComp>
          {component()}
        </CSComp>
        <Transition
          in={showCode}
          timeout={1000}
          mountOnEnter={true}
          unmountOnExit={true}
          appear={true}
          onEnter={node => {
            TweenLite.set(node, {
              height: 0,
              opacity: 0
            })
          }}
          addEndListener={(node, done) => {
            TweenLite.to(node, .2, {
              height: showCode ? node.scrollHeight : 0,
              opacity: showCode ? 1 : 0,
              onComplete: done
            })
          }}
        >
          <CSCode showCode={showCode}>
            <Action showCode={showCode} handleShowCode={handleShowCode}/>
            <CSCodeIn>
              {/* <Highlight code={code}/> */}
            </CSCodeIn>
          </CSCode>
        </Transition>
      </CSWIn>
      { showCode ? null : <Action showCode={showCode} handleShowCode={handleShowCode}/>}
    </CSWrapper>
  )
}

export default ComponentView
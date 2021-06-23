import styled from 'styled-components'

const FieldContainer = styled.div`
  width: 100%;
  height: 38px;
  background-image: ${p => p.theme.horizontalBarBG};
  border-radius: 8px;
  margin-bottom: 8px;
  position: relative;
  padding: 2px;

  @media screen and (min-width: 360px) {
    height: 44px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`
const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 6px;
  background-color: ${p => p.theme.divBackground};
  transition: background-color 0.25s;
  border-radius: 6px;
  display: flex;
  align-items: center;
  font-family: 'Mandali', sans-serif;
`
const ButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 6px;
  opacity: 0.7;
  user-select: none;
`
interface SVGContainerProps {
  customPadding?:number
}

const SVGContainer = styled.div<SVGContainerProps>`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 6px;
  -webkit-tap-highlight-color: transparent;
  padding: ${p => p.customPadding === undefined ? '0' : `${p.customPadding.toString()}px`};
  user-select: none;
  &:last-child {
    margin-right: 0;
  }
  @media screen and (min-width: 360px){
    width: 32px;
    height: 32px;
  };
  @media screen and (min-width: 768px){
    width: 36px;
    height: 36px;
  };
`

const PencilContainer = styled(SVGContainer)`
  svg {
    fill: ${p => p.theme.fontContrastFive};
  }
`
const CrossContainer = styled(PencilContainer)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  };
`

const TextContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
  padding-right: 12px;
  font-size: 12px;
  @media screen and (min-width: 420px) {
    font-size: 14px;
  };
  @media screen and (min-width: 768px) {
    display: flex;
    padding-right: 24px;
    font-size: 16px;
  };
`
const Text = styled.span`
  text-align: center;
  &:first-child {
    font-weight: 600;
  }
  &:last-child {
    min-width: 78px;
  }
  @media screen and (min-width: 420px) {
    &:first-child {
      margin-right: 36px;
    }
    &:last-child {
      margin-left: auto;
      margin-right: 24px;
    };
  }
  @media screen and (min-width: 940px) {
    &:first-child {
      margin-right: 48px;
    };
    &:last-child {
      margin-left: auto;
      margin-right: 48px;
    };
  };
`


export {FieldContainer, InnerContainer, SVGContainer, CrossContainer, PencilContainer, ButtonsContainer, TextContainer, Text}

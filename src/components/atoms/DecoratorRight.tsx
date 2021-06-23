import styled from 'styled-components'

import DesktopTextSvg from './DesktopTextSvg'
import { decoRightUpVariants } from '../../Animations/variants'

export interface DecoratorRightProps {
  KeyID: string
}

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  width: 30%;
  height: 100%;
  max-height: 100%;
  clip-path: url(#right);
  @media screen and (min-width: 1366px) {
    display: block;
    right: 0;
  }

  svg {
    fill: ${p => p.theme.divDarkerBackground};
    transition: fill 0.25s;
  }

  clipPath {
    transform: scale(0.0017,0.00111);
    -moz-transform: scale(0.0017,0.00048);
  }

`

const DecoratorRight: React.FC<DecoratorRightProps> = ({KeyID}) => {
  return (
    <Container>
      <svg width="100%" height="100%" viewBox="0 0 606 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <g filter={`url(#filter0_i${KeyID})`}>
        <path fillRule="evenodd" clipRule="evenodd" d="M606 0V900H25.0789C-52.5824 771.068 73.9638 552.575 84.3658 405.755C99.3444 194.341 2.3133 126.142 116.385 0H606Z"/>
        </g>
        <clipPath id="right" clipPathUnits="objectBoundingBox" preserveAspectRatio="none">
            <path d="M606 0V900H25.0789C-52.5824 771.068 73.9638 552.575 84.3658 405.755C99.3444 194.341 2.3133 126.142 116.385 0H606Z"  />          
        </clipPath>
        <defs>
        <filter id={`filter0_i${KeyID}`} x="0" y="0" width="620" height="904" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="14" dy="4"/>
        <feGaussianBlur stdDeviation="8"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
      </svg>
      <DesktopTextSvg KeyID={`${KeyID}first`} variants={decoRightUpVariants} initial="hidden" animate="visible" custom={0} />
      <DesktopTextSvg KeyID={`${KeyID}second`} variants={decoRightUpVariants} initial="hidden" animate="visible" custom={1} />
    </Container>
  );
}
 
export default DecoratorRight;

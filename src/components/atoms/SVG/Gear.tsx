import styled from 'styled-components'
import { motion } from 'framer-motion'

const GearContainer = styled('div')`
  position: absolute;
  right: 12px;
  top: 6px;
  cursor: pointer;
  svg {
    stroke: #686868;
    opacity: 0.6;
  }
`
 
const GearSVG: React.FC = () => {
  return (
    <GearContainer>
    <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" whileHover={{ rotate: 45, scale: 1.05 }}>
      <g filter="url(#filter0_d-773375)">
      <path d="M13.8 2.1421C13.8 1.5112 13.2888 1 12.6579 1H11.343C10.7112 1 10.2 1.5112 10.2 2.1421C10.2 2.6623 9.8436 3.1087 9.3585 3.2995C9.282 3.3301 9.2055 3.3625 9.1308 3.3949C8.6529 3.6019 8.085 3.5389 7.716 3.1708C7.50184 2.95679 7.21146 2.83657 6.9087 2.83657C6.60594 2.83657 6.31556 2.95679 6.1014 3.1708L5.1708 4.1014C4.95679 4.31556 4.83657 4.60594 4.83657 4.9087C4.83657 5.21146 4.95679 5.50184 5.1708 5.716V5.716C5.5398 6.085 5.6028 6.652 5.394 7.1308C5.36119 7.20615 5.32969 7.28206 5.2995 7.3585C5.1087 7.8436 4.6623 8.2 4.1421 8.2C3.5112 8.2 3 8.7112 3 9.3421V10.6579C3 11.2888 3.5112 11.8 4.1421 11.8C4.6623 11.8 5.1087 12.1564 5.2995 12.6415C5.3301 12.718 5.3625 12.7945 5.394 12.8692C5.6019 13.3471 5.5389 13.915 5.1708 14.284C4.95679 14.4982 4.83657 14.7885 4.83657 15.0913C4.83657 15.3941 4.95679 15.6844 5.1708 15.8986L6.1014 16.8292C6.31556 17.0432 6.60594 17.1634 6.9087 17.1634C7.21146 17.1634 7.50184 17.0432 7.716 16.8292C8.085 16.4602 8.652 16.3972 9.1308 16.6051C9.2055 16.6384 9.282 16.6699 9.3585 16.7005C9.8436 16.8913 10.2 17.3377 10.2 17.8579C10.2 18.4888 10.7112 19 11.3421 19H12.6579C13.2888 19 13.8 18.4888 13.8 17.8579C13.8 17.3377 14.1564 16.8913 14.6415 16.6996C14.718 16.6699 14.7945 16.6384 14.8692 16.606C15.3471 16.3972 15.915 16.4611 16.2831 16.8292C16.3892 16.9353 16.5151 17.0195 16.6537 17.0769C16.7923 17.1343 16.9408 17.1639 17.0908 17.1639C17.2409 17.1639 17.3894 17.1343 17.528 17.0769C17.6666 17.0195 17.7925 16.9353 17.8986 16.8292L18.8292 15.8986C19.0432 15.6844 19.1634 15.3941 19.1634 15.0913C19.1634 14.7885 19.0432 14.4982 18.8292 14.284V14.284C18.4602 13.915 18.3972 13.348 18.6051 12.8692C18.6384 12.7945 18.6699 12.718 18.7005 12.6415C18.8913 12.1564 19.3377 11.8 19.8579 11.8C20.4888 11.8 21 11.2888 21 10.6579V9.343C21 8.7121 20.4888 8.2009 19.8579 8.2009C19.3377 8.2009 18.8913 7.8445 18.6996 7.3594C18.6694 7.28295 18.6379 7.20704 18.6051 7.1317C18.3981 6.6538 18.4611 6.0859 18.8292 5.7169C19.0432 5.50274 19.1634 5.21236 19.1634 4.9096C19.1634 4.60684 19.0432 4.31646 18.8292 4.1023L17.8986 3.1717C17.6844 2.95769 17.3941 2.83747 17.0913 2.83747C16.7885 2.83747 16.4982 2.95769 16.284 3.1717V3.1717C15.915 3.5407 15.348 3.6037 14.8692 3.3958C14.7939 3.36269 14.7179 3.33088 14.6415 3.3004C14.1564 3.1087 13.8 2.6623 13.8 2.143V2.1421Z" strokeWidth="1.5" />
      <path d="M15.5994 10C15.5994 10.9548 15.2201 11.8705 14.545 12.5456C13.8699 13.2207 12.9542 13.6 11.9994 13.6C11.0446 13.6 10.129 13.2207 9.45383 12.5456C8.7787 11.8705 8.39941 10.9548 8.39941 10C8.39941 9.04523 8.7787 8.12956 9.45383 7.45442C10.129 6.77929 11.0446 6.40001 11.9994 6.40001C12.9542 6.40001 13.8699 6.77929 14.545 7.45442C15.2201 8.12956 15.5994 9.04523 15.5994 10V10Z" strokeWidth="1.5"/>
      </g>
    <defs>
    <filter id="filter0_d-773375" x="0.5" y="0.5" width="23" height="23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset dy="2"/>
    <feGaussianBlur stdDeviation="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    </defs>
    </motion.svg>
    </GearContainer>
  );
}
 
export default GearSVG;




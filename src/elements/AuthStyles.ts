import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Field } from 'formik'
import { ThemeColorPicker } from '../Utils/Utils'

interface InputContainerProps {
  border: {
    dark: string,
    light: string
  }
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 26px;
`
const Label = styled.h3`
  margin-bottom: 6px;
`
const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  display: grid;
  grid-template-columns: 42px 1fr;
  width: 100%;
  height: 42px;
  border-radius: 6px;
  background-color: ${p => p.theme.divDarkerBackground};
  transition: background-color 0.25s;
  box-shadow: ${p => p.theme.theme === 'dark' ? p.border.dark : p.border.light};
`
const MessageContainer = styled(InputContainer)`
  grid-template-columns: 1fr;
  height: 210px;
  textarea {
    resize: none;
    padding: 8px;
    min-width: 190px;
    font-family: 'Montserrat';
    color: ${p => p.theme.fontContrastFive};
    font-size: 16px;
    letter-spacing: 0.035em;
    grid-column: span 1;
    background-color: transparent;
    height: 100%;
    outline: none;
    border: none;
    margin-right: 4px;
    &:-webkit-autofill {
      border-radius: 0 1px 1px 0;
      box-shadow: 0 0 0 50px ${p => p.theme.divDarkerBackground} inset;
      -webkit-box-shadow:0 0 0 50px ${p => p.theme.divDarkerBackground} inset; /* Change the color to your own background color */
      -webkit-text-fill-color: ${p => p.theme.fontContrastFive};
      font-size: 16px;
      transition: -webkit-box-shadow 0.25s;
    }
    &:-webkit-autofill:focus {
      box-shadow: 0 0 0 50px ${p => p.theme.divDarkerBackground} inset;
      -webkit-box-shadow:0 0 0 50px ${p => p.theme.divDarkerBackground} inset; /* Change the color to your own background color */
      -webkit-text-fill-color: ${p => p.theme.fontContrastFive};
      font-size: 16px;
    }  
    &::placeholder {
      color: ${p => p.theme.fontContrastFive};
      font-family: 'Montserrat';
      opacity: 0.7;
    }
    @media screen and (max-width: 359px) {
      font-size: 12px;
    }
  }
`


const NameField = styled(InputContainer)` 
  grid-template-columns: 1fr;
  padding-left: 16px;
`

const Password = styled(InputContainer)`  
  grid-template-columns: 42px 1fr 42px;
`
const SvgContainer = styled.div`
  height: 100%;
  width: 55%;
  margin: auto;
  svg {
    display: block;
    margin: auto;
    width: 100%;
    fill: ${p => p.theme.fontContrastFive};
  }
`
const Input = styled(Field)`
  min-width: 190px;
  font-family: 'Montserrat';
  color: ${p => p.theme.fontContrastFive};
  font-size: 16px;
  letter-spacing: 0.035em;
  grid-column: span 1;
  background-color: transparent;
  height: 100%;
  outline: none;
  border: none;
  margin-right: 4px;
  &:-webkit-autofill {
    border-radius: 0 1px 1px 0;
    box-shadow: 0 0 0 50px ${p => p.theme.divDarkerBackground} inset;
    -webkit-box-shadow:0 0 0 50px ${p => p.theme.divDarkerBackground} inset; /* Change the color to your own background color */
    -webkit-text-fill-color: ${p => p.theme.fontContrastFive};
    font-size: 16px;
    transition: -webkit-box-shadow 0.25s;
  }
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 50px ${p => p.theme.divDarkerBackground} inset;
    -webkit-box-shadow:0 0 0 50px ${p => p.theme.divDarkerBackground} inset; /* Change the color to your own background color */
    -webkit-text-fill-color: ${p => p.theme.fontContrastFive};
    font-size: 16px;
  }  
  &::placeholder {
    color: ${p => p.theme.fontContrastFive};
    font-family: 'Montserrat';
    opacity: 0.7;
  }
  @media screen and (max-width: 359px) {
    font-size: 12px;
  }
`

const Error = styled.div`
  user-select: none;
  font-size: 15px;
  position: absolute;
  bottom: -24px;
  right: 0;
  color: ${p => ThemeColorPicker(p, '#a56161', '#cc6161')};
`
interface SubtitleProps {
  farbottom?: string
}
const Subtitle = styled(Link)<SubtitleProps>`
display: block;
text-align: right;
color: ${p => ThemeColorPicker(p, '#096635', '#1269B4')};
margin-left: auto;
margin-top: ${p => p.farbottom ? '28px' : '-16px'};
margin-bottom: 20px;
text-decoration: none;

@media screen and (max-width: 359px) {
  margin-top: 8px;
  margin-right: unset;
  margin-left: auto;
}
`

const Ingresar = styled.button`
  background: ${p => p.theme.colorBackground};
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  border: none;

  width: 100%;
  height: 42px;
  border-radius: 0.5em;

  text-decoration: none;
  text-align: center;
  color: #f0f0f0;
  font-family: 'Montserrat';
  font-size: 14px;
  @media screen and (min-width: 1025px) {
    font-size: 1em;
  }
`

const IngresarMT = styled(Ingresar)`
  margin-top: 4px;
`

const ButtonSubmit = styled.button`
  background: ${p => p.theme.colorBackground};
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  user-select: none;
  width: 100%;
  height: 42px;
  border-radius: 0.5em;
  border: none;
  cursor: pointer;

  text-decoration: none;
  text-align: center;
  color: #f0f0f0;
  font-family: 'Montserrat';
  font-size: 14px;
  @media screen and (min-width: 1025px) {
    font-size: 1em;
  }
`

const CheckboxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -10px;
  margin-bottom: 16px;
`
const CheckboxInputContainer = styled.div`
position: relative;
width: 28px;
height: 42px;
display: flex;
align-items: center;
justify-content: flex-end;
  margin-right: 12px;
`
const CheckboxText = styled.span`
-webkit-tap-highlight-color: rgba(0,0,0,0);
user-select: none;
width: auto;
display:block;
text-align: right;
cursor: pointer;
@media screen and (max-width: 359px) {
  font-size: 14px;
  min-width: 242px;
};
`

const TyC = styled(Link)`
-webkit-tap-highlight-color: rgba(0,0,0,0);
color: ${p => ThemeColorPicker(p, '#096635', '#1269B4')};
text-decoration: none;
&:visited {
  color: ${p => ThemeColorPicker(p, '#096635', '#1269B4')};
}
`

const Checkbox = styled(Field)`
  position: relative;
  border-radius: 4px;
  appearance: none;
  cursor: pointer;
  height: 28px;
  width: 28px;
  min-width: 24px;
  background-color: ${p => p.theme.divDarkerBackground};
  transition: background-color .25s;
`
const ErrorCheckbox = styled(Error)`
  bottom: -12px;
  text-align: right;
  min-width: 350px;
  @media screen and (max-width: 380px) {
    font-size: 14px;
  };
  @media screen and (max-width: 360px) {
    font-size: 12px;
  };
`

const SentStatusResolved = styled.div`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #096635;
  color: #096635;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SentStatusRejected = styled(SentStatusResolved)`
  border: 1px solid #1C4B73;
  color: #1C4B73;
`

export { 
  Container,
  Label,
  InputContainer,
  NameField,
  Password,
  SvgContainer,
  Input,
  Error,
  Subtitle,
  Ingresar,
  IngresarMT,
  ButtonSubmit,
  CheckboxContainer,
  CheckboxInputContainer,
  Checkbox,
  CheckboxText,
  ErrorCheckbox,
  MessageContainer,
  SentStatusResolved,
  SentStatusRejected,
  TyC}

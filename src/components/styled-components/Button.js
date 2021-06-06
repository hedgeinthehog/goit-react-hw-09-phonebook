import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${props => {
    switch (props.size) {
      case 'small':
        return 'height: 14px; min-width: 40px; font-size: 12px;';
      case 'large':
        return 'height: 30px; min-width: 140px; font-size: 20px;';
      default:
        return 'height: 24px; min-width: 100px; font-size: 16px;';
    }
  }}

  ${props => {
    if (props.bg === 'light') {
      return `color: ${props.theme.primaryTextColor}; background-color: ${props.theme.primaryBgColor};`;
    }
    if (props.bg === 'dark') {
      return `color: ${props.theme.invertedTextColor}; background-color: ${props.theme.invertedBgColor};`;
    }
  }}

  ${props => {
    switch (props.position) {
      case 'bottom':
        return 'margin-top: 5px;';
      case 'right':
        return 'margin-left: 10px;';
      case 'left':
        return 'margin-rigth: 10px;';
      default:
        return 'margin: 0;';
    }
  }}
  
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.accentColor};
  }

  &:active {
    outline: none;
    box-shadow: 0px 0px 8px 2px
      ${props => {
        if (props.bg === 'light') {
          return ` ${props.theme.primaryBgColor};`;
        }
        if (props.bg === 'dark') {
          return ` ${props.theme.invertedBgColor};`;
        }
      }};
  }
`;

export default Button;

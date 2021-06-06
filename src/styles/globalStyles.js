import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
body {
  padding: 10px;
  color: ${props => props.theme.primaryTextColor};
  background-color:  ${props => props.theme.primaryBgColor};
}

li {
  line-height: 1.8;
}`;

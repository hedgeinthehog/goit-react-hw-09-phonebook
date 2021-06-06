import styled from 'styled-components';

const ContentBox = styled.div`
  width: 300px;
  padding: 15px;
  background-color: ${props => props.theme.invertedBgColor};
  border-radius: 5px;
  box-shadow: 0px 0px 12px -2px ${props => props.theme.invertedBgColor};
`;

export default ContentBox;

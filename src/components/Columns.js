import styled from 'styled-components';

const Columns = styled.div`
  display: grid;
  grid-gap: ${props => (props.gap ? `${props.gap}px` : '25px')};
  grid-template-columns: ${props => `repeat(${props.span || 1}, 1fr)`};

  ${props => props.fit && `grid-template-columns: repeat(${props.span || 1}, auto)`};
  ${props => props.center && `justify-content: center`};
  ${props => props.middle && `align-items: center`};
  ${props => props.spaceAround && `justify-content: space-around`};
  ${props => props.spaceBetween && `justify-content: space-between`};
`;

export default Columns;

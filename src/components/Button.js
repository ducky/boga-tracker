import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import noop from 'lodash/noop';

const StyledButton = styled.button`
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 3px;
  font-weight: 500;
  padding: 10px 15px;
  cursor: pointer;
  opacity: 0.9;
  border: none;
  outline: none;
  box-shadow: none;
  background: #981046;
  color: #dcdcdc;
  transition: background 300ms, opacity 300ms;

  ${props => props.default && `background: #ccc`};
  ${props => props.default && `color: #212121`};

  ${props => props.square && `padding: 15px`};

  ${props => props.transparent && `background: transparent`};

  ${props => props.iconOnly && `padding: 8px`};
  ${props => props.iconOnly && `font-size: 16px`};

  &:not([disabled]):hover {
    opacity: 1;
  }

  &[disabled] {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .Button__icon {
    margin-right: 8px;

    &:last-child {
      margin: 0;
    }
  }
`;

const Button = ({ children, icon, iconOnly, disabled, onClick, ...rest }) => (
  <StyledButton iconOnly={iconOnly} disabled={disabled} onClick={disabled ? noop : onClick} {...rest}>
    {icon && <FontAwesomeIcon className="Button__icon" icon={icon} />}
    {children}
  </StyledButton>
);

export default Button;

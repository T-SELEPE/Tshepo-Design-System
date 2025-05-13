import styled, { css } from 'styled-components';

export const ButtonGroupContainer = styled.div`
  display: inline-flex;
  
  /* Horizontal button group */
  ${({ vertical }) => !vertical && css`
    flex-direction: row;
    
    & > button:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      ${props => props.attached && 'margin-left: -1px;'}
    }
    
    & > button:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `}
  
  /* Vertical button group */
  ${({ vertical }) => vertical && css`
    flex-direction: column;
    
    & > button:not(:first-child) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      ${props => props.attached && 'margin-top: -1px;'}
    }
    
    & > button:not(:last-child) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  `}
`; 
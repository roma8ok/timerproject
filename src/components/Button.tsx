import React, { FC } from 'react';
import styled from 'styled-components';

import { FontFamilies } from '../styles/fonts';

export interface ButtonProps {
  title: string;
  onClick: Function;
}

export const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <StyledButton onClick={() => onClick()}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-family: ${FontFamilies.main}
`;

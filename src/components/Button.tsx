import React, { FC } from 'react';
import styled from 'styled-components';

import { FontFamilies } from '../styles/fonts';

export interface ButtonProps {
  title: string;
  fullWidth?: boolean;
  onClick: Function;
}

export const Button: FC<ButtonProps> = ({ title, fullWidth = false, onClick }) => {
  return (
    <StyledButton onClick={() => onClick()} fullWidth={fullWidth}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ fullWidth: boolean }>`
  font-family: ${FontFamilies.main};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`;

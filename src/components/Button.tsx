import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../styles/colors';
import { FontFamilies } from '../styles/fonts';

export enum ButtonStyles {
  faded = 'faded',
  bright = 'bright',
}

const STYLES = {
  faded: {
    backgroundColor: Colors.grey,
    color: Colors.black,
  },
  bright: {
    backgroundColor: Colors.green,
    color: Colors.white,
  },
};

export interface ButtonProps {
  title: string;
  style?: ButtonStyles,
  fullWidth?: boolean;
  onClick: Function;
}

export const Button: FC<ButtonProps> = (
  { title, style = ButtonStyles.faded, fullWidth = false, onClick },
) => {
  return (
    <StyledButton
      fullWidth={fullWidth}
      backgroundColor={STYLES[style].backgroundColor}
      color={STYLES[style].color}
      onClick={() => onClick()}
    >
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  fullWidth: boolean,
  backgroundColor: string,
  color: string,
}>`
  font-family: ${FontFamilies.main};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  outline: none;
`;

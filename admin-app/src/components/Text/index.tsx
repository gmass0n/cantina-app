import React from 'react';
import { TextProperties } from 'react-native';

import { StyledText } from './styles';

interface IProps extends TextProperties {
  fontStyle?: 'bold' | 'regular' | 'medium' | 'semiBold';
}

const Text: React.FC<IProps> = ({
  fontStyle = 'regular',
  children,
  ...props
}) => {
  return (
    <StyledText fontStyle={fontStyle} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;

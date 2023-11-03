import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,

  {
    _dark: {
      color: '$textDark200',
    },
    _light: {
      color: '$textLight900',
    },
  },

  { ancestorStyle: ['_text', '_contentText'] }
);

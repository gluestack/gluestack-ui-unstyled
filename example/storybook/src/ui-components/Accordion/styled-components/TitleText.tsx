import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    maxWidth: 548,
    _light: {
      color: '$textLight900',
    },
    _dark: {
      color: '$textDark50',
    },
  },
  { ancestorStyle: ['_text', '_titleText'] }
);

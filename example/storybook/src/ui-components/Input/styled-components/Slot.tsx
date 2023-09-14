import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    bg: '$amber400',
    justifyContent: 'center',
    alignItems: 'center',
    _web: {
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  { descendantStyle: ['_icon'] }
);

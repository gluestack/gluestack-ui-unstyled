import { Pressable } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Pressable,
  {
    'flexDirection': 'row',
    'justifyContent': 'space-between',
    ':disabled': {
      opacity: 0.4,
      _web: {
        // @ts-ignore
        cursor: 'not-allowed',
      },
    },
  },
  {
    descendantStyle: ['_text', '_spinner', '_icon'],
    ancestorStyle: ['_button'],
  }
);

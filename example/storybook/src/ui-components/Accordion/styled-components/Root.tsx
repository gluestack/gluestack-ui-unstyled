import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    py: '$4',
    variants: {
      orientation: {
        vertical: {
          width: '65%',
          flexDirection: 'column',
        },
        horizontal: {
          w: '80%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      },
    },
    defaultProps: {
      orientation: 'vertical',
    },
  },
  {
    descendantStyle: [],
    ancestorStyle: [],
  }
);

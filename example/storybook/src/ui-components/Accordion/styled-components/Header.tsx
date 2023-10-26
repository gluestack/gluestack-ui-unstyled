import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    minWidth: 500,
    py: '$2',
    borderBottomWidth: 0.5,
    borderBottomColor: '$gray500',
  },
  {
    descendantStyle: [],
    ancestorStyle: [],
  }
);

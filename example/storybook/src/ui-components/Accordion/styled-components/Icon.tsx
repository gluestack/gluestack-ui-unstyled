import { styled } from '../../styled';
import { AsForwarder } from '@gluestack-style/react';

const Icon = styled(AsForwarder, {}, {});

export default styled(
  Icon,
  {
    ml: '$3',
    _dark: {
      color: '$textDark200',
    },
    _light: {
      color: '$textLight900',
    },
  },
  {
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);
